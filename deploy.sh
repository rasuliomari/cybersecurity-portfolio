#!/usr/bin/env bash

# ============================================================
# RASULI OMARI CYBERSECURITY PORTFOLIO
# Ubuntu Deployment Script
#
# Stack:
#   React + Vite
#   Node.js
#   Nginx
#
# Usage:
#   sudo ./deploy.sh
# ============================================================

set -e

# ------------------------------------------------------------
# CONFIGURATION
# ------------------------------------------------------------

APP_NAME="cybersecurity-portfolio"
WEB_ROOT="/var/www/$APP_NAME"
NGINX_SITE="/etc/nginx/sites-available/$APP_NAME"
NGINX_ENABLED="/etc/nginx/sites-enabled/$APP_NAME"

# ------------------------------------------------------------
# COLORS
# ------------------------------------------------------------

GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# ------------------------------------------------------------
# FUNCTIONS
# ------------------------------------------------------------

print_step() {
    echo
    echo -e "${CYAN}============================================================${NC}"
    echo -e "${CYAN}$1${NC}"
    echo -e "${CYAN}============================================================${NC}"
}

success() {
    echo -e "${GREEN}[OK] $1${NC}"
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

# ------------------------------------------------------------
# CHECK ROOT
# ------------------------------------------------------------

if [ "$EUID" -ne 0 ]; then
    error "This script must be run with sudo."
    echo
    echo "Run:"
    echo "  sudo ./deploy.sh"
    exit 1
fi

# ------------------------------------------------------------
# DETERMINE PROJECT DIRECTORY
# ------------------------------------------------------------

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$SCRIPT_DIR"

echo
echo "Project directory:"
echo "$SCRIPT_DIR"

# ------------------------------------------------------------
# CHECK PROJECT
# ------------------------------------------------------------

print_step "Checking React/Vite project"

if [ ! -f "package.json" ]; then
    error "package.json was not found."
    error "Make sure deploy.sh is inside the React project directory."
    exit 1
fi

if [ ! -f "package-lock.json" ]; then
    warning "package-lock.json was not found."
    warning "npm install will be used instead of npm ci."
fi

success "React project detected."

# ------------------------------------------------------------
# UPDATE PACKAGE LIST
# ------------------------------------------------------------

print_step "Updating Ubuntu package list"

apt-get update

success "Package list updated."

# ------------------------------------------------------------
# INSTALL GIT
# ------------------------------------------------------------

print_step "Checking Git"

if ! command -v git >/dev/null 2>&1; then
    echo "Installing Git..."
    apt-get install -y git
else
    success "Git is already installed."
fi

# ------------------------------------------------------------
# INSTALL CURL
# ------------------------------------------------------------

print_step "Checking curl"

if ! command -v curl >/dev/null 2>&1; then
    echo "Installing curl..."
    apt-get install -y curl
else
    success "curl is already installed."
fi

# ------------------------------------------------------------
# INSTALL NODE.JS
# ------------------------------------------------------------

print_step "Checking Node.js"

NODE_REQUIRED_MAJOR=22

INSTALL_NODE=false

if command -v node >/dev/null 2>&1; then

    NODE_VERSION="$(node -v | sed 's/v//' | cut -d. -f1)"

    echo "Installed Node.js major version: $NODE_VERSION"

    if [ "$NODE_VERSION" -lt "$NODE_REQUIRED_MAJOR" ]; then
        warning "Node.js version is older than Node.js $NODE_REQUIRED_MAJOR."
        INSTALL_NODE=true
    else
        success "Node.js version is suitable."
    fi

else
    INSTALL_NODE=true
fi

if [ "$INSTALL_NODE" = true ]; then

    echo "Installing Node.js $NODE_REQUIRED_MAJOR..."

    curl -fsSL https://deb.nodesource.com/setup_22.x | bash -

    apt-get install -y nodejs

    success "Node.js installed."

fi

echo
node --version
npm --version

# ------------------------------------------------------------
# INSTALL NGINX
# ------------------------------------------------------------

print_step "Checking Nginx"

if ! command -v nginx >/dev/null 2>&1; then

    echo "Installing Nginx..."

    apt-get install -y nginx

    success "Nginx installed."

else

    success "Nginx is already installed."

fi

# ------------------------------------------------------------
# INSTALL PROJECT DEPENDENCIES
# ------------------------------------------------------------

print_step "Installing project dependencies"

cd "$SCRIPT_DIR"

if [ -f "package-lock.json" ]; then

    echo "Running npm ci..."

    npm ci

else

    warning "package-lock.json does not exist."
    echo "Running npm install..."

    npm install

fi

success "Project dependencies installed."

# ------------------------------------------------------------
# BUILD PROJECT
# ------------------------------------------------------------

print_step "Building React/Vite application"

echo "Running:"
echo "npm run build"
echo

npm run build

if [ ! -d "dist" ]; then
    error "Build failed because dist/ was not created."
    exit 1
fi

success "React/Vite production build completed."

# ------------------------------------------------------------
# CREATE WEB ROOT
# ------------------------------------------------------------

print_step "Preparing web directory"

mkdir -p "$WEB_ROOT"

# Remove previous deployment
rm -rf "$WEB_ROOT"/*

# Copy new build
cp -r dist/* "$WEB_ROOT/"

success "Production files copied to:"
echo "$WEB_ROOT"

# ------------------------------------------------------------
# SET PERMISSIONS
# ------------------------------------------------------------

print_step "Setting web permissions"

chown -R www-data:www-data "$WEB_ROOT"

find "$WEB_ROOT" -type d -exec chmod 755 {} \;
find "$WEB_ROOT" -type f -exec chmod 644 {} \;

success "Permissions configured."

# ------------------------------------------------------------
# CREATE NGINX CONFIGURATION
# ------------------------------------------------------------

print_step "Configuring Nginx"

cat > "$NGINX_SITE" <<EOF
server {

    listen 80;
    listen [::]:80;

    server_name _;

    root $WEB_ROOT;
    index index.html;

    # React/Vite SPA support
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files \$uri =404;
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

}
EOF

success "Nginx configuration created."

# ------------------------------------------------------------
# ENABLE WEBSITE
# ------------------------------------------------------------

print_step "Enabling portfolio website"

ln -sf "$NGINX_SITE" "$NGINX_ENABLED"

# Remove default Nginx site
rm -f /etc/nginx/sites-enabled/default

success "Portfolio site enabled."

# ------------------------------------------------------------
# TEST NGINX
# ------------------------------------------------------------

print_step "Testing Nginx configuration"

nginx -t

success "Nginx configuration is valid."

# ------------------------------------------------------------
# ENABLE NGINX SERVICE
# ------------------------------------------------------------

print_step "Starting Nginx"

systemctl enable nginx
systemctl restart nginx

success "Nginx is running."

# ------------------------------------------------------------
# LOCAL TEST
# ------------------------------------------------------------

print_step "Testing deployed website"

sleep 2

if curl -I http://127.0.0.1/ >/dev/null 2>&1; then

    success "Website responded successfully."

else

    warning "The website did not respond to the local HTTP test."

fi

# ------------------------------------------------------------
# GET SERVER IP
# ------------------------------------------------------------

SERVER_IP="$(hostname -I | awk '{print $1}')"

# ------------------------------------------------------------
# FINAL INFORMATION
# ------------------------------------------------------------

echo
echo -e "${GREEN}============================================================${NC}"
echo -e "${GREEN}       DEPLOYMENT COMPLETED SUCCESSFULLY${NC}"
echo -e "${GREEN}============================================================${NC}"

echo
echo "Application:"
echo "  $APP_NAME"

echo
echo "Web root:"
echo "  $WEB_ROOT"

echo
echo "Nginx configuration:"
echo "  $NGINX_SITE"

echo
echo "Server IP:"
echo "  $SERVER_IP"

echo
echo "Open the portfolio from another computer:"
echo
echo "  http://$SERVER_IP/"
echo

echo "Local test:"
echo
echo "  curl http://127.0.0.1/"
echo

echo "Nginx status:"
echo
echo "  systemctl status nginx"
echo

echo -e "${GREEN}Your cybersecurity portfolio is now LIVE on this Ubuntu server.${NC}"
echo
