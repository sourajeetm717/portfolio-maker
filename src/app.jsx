import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight, Sun, Moon } from "lucide-react";

// =====================
// Content object (edit)
// =====================
const CONTENT = {
  email: "sourajeetmohanty456@gmail.com",
  name: "Sourajeet Mohanty",
  role: "DevOPs Engineer",
  heroTagline:
    "DevOps Engineer specializing in AWS, Kubernetes, and Terraform — I build resilient, scalable infrastructure and love solving problems around automation, cost optimization, and high availability.",
  socials: {
    github: "https://github.com/sourajeetm717",
    linkedin: "https://linkedin.com/in/sourajeet-mohanty-1223a2185",
    cv: "/cv.html",
  },
  skills: ["Shell", "Python", "AWS", "Kubernetes", "Terraform", "AI & ML"],
  about: `I’m a DevOps Engineer with experience building secure, scalable, and cost-efficient cloud platforms. My expertise spans AWS, Kubernetes (EKS), Terraform, CI/CD (GitLab/GitHub), and Python, with a strong focus on automation, high availability, and security-driven design. Over the years, I’ve delivered projects such as multi-region disaster recovery systems, production-ready Kubernetes clusters, and microservices platforms integrated with modern CI/CD pipelines.

I enjoy tackling complex infrastructure challenges—whether it’s streamlining deployments, optimizing costs, or improving resilience with strong security practices like IAM, KMS, and secrets management. Alongside DevOps, I leverage Python for automation, cloud tooling, and building integrations. Recently, I’ve also been exploring AI + DevOps, creating Retrieval-Augmented Generation (RAG) platforms that blend cloud engineering with machine learning.`,
  projects: [
    {
      title: "Multi-Region Disaster Recovery with RDS & DynamoDB",
      blurb:
        "Ensured business continuity and disaster recovery readiness with minimal downtime and secure data replication.",
      image: "/project1.png",
    },
    {
      title: "Scalable EKS Cluster with Gitlab CICD",
      blurb:
        "Delivered a resilient, secure, and compliant Kubernetes platform for microservices deployment.",
      image: "/project2.png",
    },
    {
      title: "Production-grade RAG platform on AWS EKS",
      blurb:
        "Customisable AI models and cost management. Designed and operated a production RAG platform on AWS EKS with Terraform and GitLab CI/CD.",
      image: "/project3.png",
    },
  ],
  experience: [
    {
      role: "DevOps Engineer",
      when: "Oct 2022 – Present · Bengaluru",
      bullets: [
        "Working on AWS and CI/CD of a fintech application",
        "Responsible for scalability, observability and availability of multiple services and applications",
      ],
    },
    {
      role: "Python Automation Intern",
      when: "Jan 2022 – Sept 2022 · Bengaluru",
      bullets: [
        "Product Verification and Automation",
        "Worked on simulation of LTE testing scenarios using Python and on-premise Cloud",
      ],
    },
  ],
  portrait: "/sourajeet2.jpg",
};

// =====================
// Theme hook
// =====================
function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
  );
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
}

// =====================
// Animation helper
// =====================
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// =====================
// Small UI helpers
// =====================
function NavLink({ href, children }) {
  return (
    <a href={href} className="hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
      {children}
    </a>
  );
}

function TechBadge({ label }) {
  return (
    <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm">
      {label}
    </span>
  );
}

// =====================
// Header
// =====================
function Header({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-900/70 border-b border-slate-200/70 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="font-semibold tracking-tight hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            {CONTENT.email}
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href={CONTENT.socials.cv}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-1.5 hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              <FileText size={16} /> CV
            </a>
            <button
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-1.5 hover:border-indigo-500"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-300 dark:border-slate-700"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href={CONTENT.socials.cv}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-1.5 w-max hover:border-indigo-500"
            >
              <FileText size={16} /> CV
            </a>
            <button
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-1.5 w-max hover:border-indigo-500"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} Toggle theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// =====================
// Hero
// =====================
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-16 w-[32rem] h-[32rem] rounded-full bg-indigo-200 dark:bg-indigo-900 blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-16 w-[28rem] h-[28rem] rounded-full bg-indigo-100 dark:bg-indigo-800 blur-3xl opacity-60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <FadeIn delay={0.05} className="lg:col-span-7">
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I'm <span className="text-indigo-700 dark:text-indigo-300">{CONTENT.name}</span> —
              <span className="text-slate-900 dark:text-slate-100"> {CONTENT.role}</span>
            </h1>
            <p className="mt-5 text-slate-700 dark:text-slate-300 text-lg md:text-xl max-w-3xl">
              {CONTENT.heroTagline}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-xl bg-indigo-600 text-white px-5 py-3 shadow-lg hover:bg-indigo-700 transition"
              >
                See my work <ArrowUpRight className="ml-2" size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-3 hover:border-indigo-500"
              >
                Contact me
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="lg:col-span-5 flex lg:justify-end justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-slate-200 dark:ring-slate-700">
              <img src={CONTENT.portrait} alt={CONTENT.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-full ring-1 ring-white/40" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// =====================
// Sidebar (left column)
// =====================
function Sidebar() {
  return (
    <div className="sticky top-24 space-y-4">
      {/* Profile card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        <div className="flex items-center gap-3">
          <img
            src={CONTENT.portrait}
            alt={CONTENT.name}
            className="w-14 h-14 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
          />
          <div>
            <div className="font-semibold">{CONTENT.name}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{CONTENT.role}</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href={`mailto:${CONTENT.email}?subject=Hi%20${encodeURIComponent(CONTENT.name)}`}
            className="text-center text-sm rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 hover:border-indigo-500"
          >
            Email
          </a>
          <a
            href={CONTENT.socials.cv}
            className="text-center text-sm rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 hover:border-indigo-500"
          >
            CV
          </a>
          <a
            href={CONTENT.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-center text-sm rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 hover:border-indigo-500"
          >
            GitHub
          </a>
          <a
            href={CONTENT.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-center text-sm rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 hover:border-indigo-500"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Highlights */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Highlights</div>
        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>• 2+ yrs in DevOps</li>
          <li>• AWS, EKS, Terraform, CI/CD</li>
          <li>• DR, HA, Cost optimization</li>
          <li>• RAG + platform engineering</li>
        </ul>
      </div>

      {/* Tech stack */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Tech Stack</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {CONTENT.skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// =====================
// About
// =====================
function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold">About</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-8 items-start">
          <p className="md:col-span-2 text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            {CONTENT.about}
          </p>
          <div>
            <div className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-2">Skills</div>
            <div className="flex flex-wrap gap-2">
              {CONTENT.skills.map((s) => (
                <TechBadge key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================
// Project Card & Projects
// =====================
function ProjectCard({ project, idx }) {
  return (
    <FadeIn delay={0.05 * idx}>
      <article className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition shadow-sm">
        <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg leading-snug">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.blurb}</p>
        </div>
      </article>
    </FadeIn>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
        <a
          href="https://github.com/YOUR_GH_USERNAME"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-indigo-700 dark:text-indigo-300 hover:underline"
        >
          More on GitHub →
        </a>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CONTENT.projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} idx={i + 1} />
        ))}
      </div>
    </section>
  );
}

// =====================
// Experience
// =====================
function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
      <ol className="mt-8 relative border-s border-slate-200 dark:border-slate-800">
        {CONTENT.experience.map((e, i) => (
          <li key={i} className="ms-4 pb-10">
            <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 mt-1.5" />
            <h3 className="font-semibold">{e.role}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{e.when}</p>
            <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc ps-5">
              {e.bullets.map((b, bi) => (
                <li key={bi}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

// =====================
// Contact
// =====================
function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Get in touch</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Prefer email? Click the button to open your mail client with a prefilled subject.
            </p>
            <a
              href={`mailto:${CONTENT.email}?subject=Hi%20YOUR%20NAME%2C%20I%20saw%20your%20portfolio`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2.5 hover:bg-indigo-700"
            >
              <Mail size={18} /> Email me ({CONTENT.email})
            </a>
            <div className="mt-6 flex gap-4 text-slate-600 dark:text-slate-300">
              <a
                href={CONTENT.socials.linkedin}
                className="hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href={CONTENT.socials.github}
                className="hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-6 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900/50">
            <p className="font-semibold">Tip</p>
            <p className="mt-2">
              Want a contact form later? Use a no-backend service like Formspree/Formspark and drop their endpoint here without changing your layout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================
// Footer
// =====================
function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} {CONTENT.name}. All rights reserved.</p>
        <a href="#home" className="hover:text-indigo-700 dark:hover:text-indigo-300">Back to top ↑</a>
      </div>
    </footer>
  );
}

// =====================
// Shell layout using Sidebar
// =====================
function ShellLayout({ children }) {
  return (
    <main className="relative">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10">
        <aside className="hidden lg:block lg:col-span-3">
          <Sidebar />
        </aside>
        <div className="lg:col-span-9 space-y-16">{children}</div>
      </div>
    </main>
  );
}

// =====================
// App
// =====================
export default function PortfolioApp() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen">
      {/* Top Accent */}
      <div className="h-1 bg-gradient-to-r from-indigo-400 via-indigo-600 to-fuchsia-500" />

      <Header onToggleTheme={toggleTheme} theme={theme} />
      <Hero />

      <ShellLayout>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </ShellLayout>

      <Footer />
    </div>
  );
}
