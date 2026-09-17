import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  FileSearch,
  Menu,
  Shield,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "APPLICATION SECURITY",
    title: "Secure Web Application",
    description:
      "A full-stack web application focused on secure authentication, API protection, input validation, data handling, and secure application architecture.",
    technologies: ["React", "Node.js", "REST API", "SQL"],
  },
  {
    number: "02",
    type: "DIGITAL FORENSICS",
    title: "Digital Forensics Investigation",
    description:
      "A controlled forensic investigation workflow covering evidence acquisition, examination, analysis, preservation, and technical documentation.",
    technologies: ["Linux", "Forensics", "Evidence", "Analysis"],
  },
  {
    number: "03",
    type: "PENETRATION TESTING",
    title: "Web Security Assessment Lab",
    description:
      "A controlled security laboratory for reconnaissance, vulnerability discovery, exploitation testing, reporting, and remediation analysis.",
    technologies: ["Kali Linux", "Nmap", "Burp Suite", "Metasploit"],
  },
];

const expertise = [
  {
    number: "01",
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security assessment, vulnerability analysis, network security, application security, defensive security, and ethical hacking.",
    tags: ["Security", "Networking", "Ethical Hacking"],
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Digital Forensics",
    description:
      "Digital evidence examination, incident investigation, evidence handling, forensic analysis, and technical reporting.",
    tags: ["Investigation", "Evidence", "Incident Response"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building practical frontend, backend, API, and database solutions with security considered throughout the development process.",
    tags: ["Frontend", "Backend", "APIs"],
  },
];

const tools = [
  "Linux",
  "Kali Linux",
  "Nmap",
  "Burp Suite",
  "Wireshark",
  "Metasploit",
  "Python",
  "Java",
  "React",
  "Node.js",
  "SQL",
  "Git",
  "GitHub",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#07090c] text-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#07090c]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-cyan-400/40 bg-cyan-400/[0.04] font-mono text-xs text-cyan-400">
              RO
            </div>

            <div>
              <div className="text-sm font-bold tracking-wide">
                RASULI OMARI
              </div>

              <div className="mt-0.5 font-mono text-[8px] tracking-[0.3em] text-zinc-500">
                CYBERSECURITY ENGINEER
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#expertise">Expertise</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
          </nav>

          <a
            href="#contact"
            className="hidden border border-cyan-400/40 px-5 py-2.5 text-xs font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black md:block"
          >
            CONTACT
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-300 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.08] bg-[#07090c] px-6 py-7 md:hidden">
            <div className="flex flex-col gap-6">
              <NavLink href="#about" onClick={closeMenu}>
                About
              </NavLink>
              <NavLink href="#expertise" onClick={closeMenu}>
                Expertise
              </NavLink>
              <NavLink href="#projects" onClick={closeMenu}>
                Projects
              </NavLink>
              <NavLink href="#experience" onClick={closeMenu}>
                Experience
              </NavLink>
              <NavLink href="#contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden border-b border-white/[0.08] pt-[74px]"
        >
          {/* GRID */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* GLOW */}
          <div className="pointer-events-none absolute left-[35%] top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[150px]" />

          <div className="relative mx-auto grid w-full max-w-[1320px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
            {/* HERO TEXT */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-12 bg-cyan-400" />

                <span className="font-mono text-[9px] font-semibold tracking-[0.3em] text-cyan-400">
                  CYBERSECURITY · FORENSICS · ENGINEERING
                </span>
              </div>

              <h1 className="max-w-4xl text-[clamp(3.2rem,7.5vw,7.4rem)] font-bold leading-[0.86] tracking-[-0.07em]">
                Securing
                <br />
                <span className="text-zinc-500">systems.</span>
                <br />
                <span className="text-cyan-400">Investigating</span>
                <br />
                <span className="text-zinc-100">evidence.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-[15px] leading-8 text-zinc-400 sm:text-lg">
                I’m{" "}
                <strong className="font-semibold text-white">
                  Eng. Rasuli Omari
                </strong>
                , a Cybersecurity & Digital Forensics Engineer, Penetration
                Tester, and Full-Stack Software Engineer building and
                analyzing secure digital systems.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 bg-cyan-400 px-6 py-3.5 text-xs font-bold text-black transition hover:bg-cyan-300"
                >
                  EXPLORE MY WORK
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center border border-white/15 px-6 py-3.5 text-xs font-semibold text-zinc-300 transition hover:border-white/40 hover:text-white"
                >
                  ABOUT ME
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5 text-xs">
                <a
                  href="https://github.com/rasuliomari"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 transition hover:text-cyan-400"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/rasuli-omari-2807bb264/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 transition hover:text-cyan-400"
                >
                  LinkedIn
                </a>

                <span className="h-px w-8 bg-white/15" />

                <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-600">
                  DODOMA · TANZANIA
                </span>
              </div>
            </div>

            {/* TECHNICAL VISUAL */}
            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-[500px]">
                <div className="absolute -inset-10 rounded-full bg-cyan-400/[0.035] blur-3xl" />

                <div className="relative border border-white/[0.1] bg-[#0b0f14] p-5 shadow-2xl">
                  {/* terminal header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-500">
                        SECURITY_CONSOLE
                      </span>
                    </div>

                    <span className="font-mono text-[8px] text-zinc-700">
                      RO-SEC-01
                    </span>
                  </div>

                  {/* terminal body */}
                  <div className="mt-5 space-y-5 font-mono text-[11px]">
                    <div>
                      <div className="text-zinc-600">
                        $ ./security_profile --status
                      </div>
                      <div className="mt-2 text-cyan-400">
                        SYSTEM STATUS: OPERATIONAL
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <StatusBox label="NETWORK" value="SECURE" />
                      <StatusBox label="FORENSICS" value="READY" />
                      <StatusBox label="APPLICATION" value="ASSESSED" />
                      <StatusBox label="THREAT" value="MONITORED" />
                    </div>

                    <div>
                      <div className="text-zinc-600">
                        $ ./skills --list
                      </div>

                      <div className="mt-3 space-y-2">
                        <SkillLine name="Cybersecurity" />
                        <SkillLine name="Digital Forensics" />
                        <SkillLine name="Penetration Testing" />
                        <SkillLine name="Full-Stack Engineering" />
                      </div>
                    </div>

                    <div className="border-t border-white/[0.08] pt-4 text-zinc-600">
                      <span className="text-cyan-400">●</span> ENGINEERED FOR
                      SECURITY
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-7 -left-7 border border-cyan-400/20 bg-[#07090c] px-5 py-4">
                  <div className="font-mono text-[8px] tracking-[0.2em] text-zinc-600">
                    LOCATION
                  </div>
                  <div className="mt-1 text-xs font-semibold">
                    DODOMA, TZ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[8px] tracking-[0.25em] text-zinc-600 transition hover:text-cyan-400 lg:flex"
          >
            SCROLL TO EXPLORE
            <ArrowDownRight size={13} />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/[0.08]">
          <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-28">
            <SectionTitle number="01" label="ABOUT ME" />

            <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-[0.25em] text-cyan-400">
                  WHO I AM
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
                  Engineering
                  <br />
                  <span className="text-zinc-500">with purpose.</span>
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-lg leading-9 text-zinc-300">
                  My work sits at the intersection of cybersecurity, digital
                  forensics, penetration testing, and software engineering.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-500">
                  I’m interested in how digital systems are built, how they
                  become vulnerable, how security incidents can be investigated,
                  and how thoughtful engineering can create safer and more
                  reliable technology.
                </p>

                <div className="mt-10 grid grid-cols-3 border-t border-white/[0.08] pt-7">
                  <Stat value="03" label="CORE DISCIPLINES" />
                  <Stat value="10+" label="TECHNICAL AREAS" />
                  <Stat value="∞" label="LEARNING" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="border-b border-white/[0.08] bg-[#090c10]">
          <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-28">
            <SectionTitle number="02" label="EXPERTISE" />

            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group relative overflow-hidden border border-white/[0.1] bg-[#07090c] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-9"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-cyan-400/[0.04] blur-2xl transition group-hover:bg-cyan-400/[0.1]" />

                    <div className="relative flex items-start justify-between">
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className="text-cyan-400"
                      />

                      <span className="font-mono text-[9px] text-zinc-700">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="relative mt-16 text-2xl font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="relative mt-5 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>

                    <div className="relative mt-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/[0.1] px-3 py-1.5 font-mono text-[8px] text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 h-px w-8 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-b border-white/[0.08]">
          <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-28">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <SectionTitle number="03" label="SELECTED WORK" />

                <h2 className="mt-8 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Projects & case studies.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-zinc-500">
                A selection of cybersecurity, digital forensics, penetration
                testing, and software engineering work.
              </p>
            </div>

            <div className="mt-14">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group border-t border-white/[0.1] py-9 transition hover:bg-white/[0.015] sm:py-11"
                >
                  <div className="grid gap-7 md:grid-cols-[70px_1fr_auto] md:items-start">
                    <div className="font-mono text-xs text-zinc-600">
                      {project.number}
                    </div>

                    <div>
                      <div className="font-mono text-[9px] font-semibold tracking-[0.25em] text-cyan-400">
                        {project.type}
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight transition group-hover:text-cyan-400 sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-white/[0.1] px-3 py-1.5 font-mono text-[9px] text-zinc-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-zinc-600">
                        CASE STUDY
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center border border-white/10 transition group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <div className="border-t border-white/[0.1]" />
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="border-b border-white/[0.08] bg-[#090c10]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="font-mono text-[9px] font-semibold tracking-[0.25em] text-cyan-400">
                  TECHNICAL STACK
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Tools I work with.
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
                  A growing toolkit across security, development, networking,
                  operating systems, and digital investigation.
                </p>
              </div>

              <div className="flex content-start flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-white/[0.1] bg-[#07090c] px-4 py-3 font-mono text-[10px] text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="border-b border-white/[0.08]">
          <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-28">
            <SectionTitle number="04" label="BACKGROUND" />

            <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-24">
              <Timeline
                title="Education"
                items={[
                  {
                    date: "2025 — PRESENT",
                    title:
                      "Bachelor of Science in Cybersecurity & Digital Forensics Engineering",
                    organization: "University of Dodoma",
                  },
                  {
                    date: "2021 — 2024",
                    title: "Ordinary Diploma in Computer Science",
                    organization: "University of Dar es Salaam",
                  },
                  {
                    date: "2013 — 2015",
                    title: "Certificate of Education",
                    organization: "Horten Secondary School / Teachers College",
                  },
                  {
                    date: "2009 — 2012",
                    title: "Certificate of Secondary Education",
                    organization: "Horten Secondary School",
                  },
                  {
                    date: "2002 — 2008",
                    title: "Certificate of Primary Education",
                    organization: "Majengo Primary School",
                  },
                ]}
              />

              <Timeline
                title="Experience"
                items={[
                  {
                    date: "2026",
                    title: "Ethical Hacking & Penetration Testing",
                    organization: "University of Dodoma",
                  },
                  {
                    date: "2026",
                    title: "Project Practicum — Java Programming",
                    organization: "University of Dodoma",
                  },
                  {
                    date: "2024",
                    title: "Project Practicum — Application Development",
                    organization: "University of Dar es Salaam",
                  },
                  {
                    date: "2023",
                    title: "Facilitator — Smart Girls in ICT",
                    organization: "Y4C Club, University of Dar es Salaam",
                  },
                  {
                    date: "2018 — PRESENT",
                    title: "Teaching",
                    organization: "Kimembe Primary School",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative overflow-hidden bg-[#090c10]">
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.04] blur-[120px]" />

          <div className="relative mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[9px] font-semibold tracking-[0.25em] text-cyan-400">
                  05 / CONTACT
                </p>

                <h2 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                  Let’s build
                  <br />
                  something
                  <br />
                  <span className="text-cyan-400">secure.</span>
                </h2>
              </div>

              <div className="lg:min-w-[330px]">
                <p className="mb-5 text-sm leading-7 text-zinc-500">
                  Interested in cybersecurity, digital forensics, software
                  engineering, or collaboration?
                </p>

                <a
                  href="mailto:rasuliomari4@gmail.com"
                  className="group flex items-center justify-between border-b border-white/20 pb-4 text-sm font-medium text-zinc-200 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  rasuliomari4@gmail.com
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <div className="mt-6 flex gap-6 text-xs">
                  <a
                    href="https://github.com/rasuliomari"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 transition hover:text-cyan-400"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rasuli-omari-2807bb264/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 transition hover:text-cyan-400"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-7 text-[9px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} RASULI OMARI</span>

          <span className="font-mono tracking-[0.18em]">
            CYBERSECURITY · DIGITAL FORENSICS · SOFTWARE ENGINEERING
          </span>
        </div>
      </footer>
    </div>
  );
}

/* NAV LINK */
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-xs font-medium text-zinc-500 transition hover:text-cyan-400"
    >
      {children}
    </a>
  );
}

/* SECTION TITLE */
function SectionTitle({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[9px] font-semibold text-cyan-400">
        {number}
      </span>

      <span className="h-px w-10 bg-white/15" />

      <span className="font-mono text-[9px] font-semibold tracking-[0.25em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}

/* STATUS BOX */
function StatusBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border border-white/[0.08] bg-white/[0.015] p-3">
      <div className="text-[8px] tracking-[0.15em] text-zinc-600">
        {label}
      </div>

      <div className="mt-2 text-[9px] text-cyan-400">
        ● {value}
      </div>
    </div>
  );
}

/* SKILL LINE */
function SkillLine({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 text-zinc-400">
      <span className="text-cyan-400">›</span>
      {name}
    </div>
  );
}

/* STAT */
function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight text-white">
        {value}
      </div>

      <div className="mt-1 font-mono text-[8px] tracking-[0.16em] text-zinc-600">
        {label}
      </div>
    </div>
  );
}

/* TIMELINE */
function Timeline({
  title,
  items,
}: {
  title: string;
  items: {
    date: string;
    title: string;
    organization: string;
  }[];
}) {
  return (
    <div>
      <h3 className="mb-8 text-xl font-semibold">{title}</h3>

      <div className="border-l border-white/[0.1]">
        {items.map((item) => (
          <div
            key={`${item.date}-${item.title}`}
            className="relative pb-9 pl-7 last:pb-0"
          >
            <span className="absolute -left-[4px] top-1.5 h-2 w-2 bg-cyan-400" />

            <div className="font-mono text-[9px] font-semibold tracking-[0.18em] text-cyan-400">
              {item.date}
            </div>

            <h4 className="mt-3 text-base font-medium leading-6 text-zinc-200">
              {item.title}
            </h4>

            <p className="mt-1 text-sm text-zinc-500">
              {item.organization}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;