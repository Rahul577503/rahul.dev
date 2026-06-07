const experience = [
  {
    role: "SDE-1",
    company: "Store My Goods",
    period: "Dec 2024 – Present",
    current: true,
    description:
      "Leading full-stack engineering for storemygoods.in. Spearheaded a complete platform revamp — architecting a scalable backend, designing high-performance databases, and building responsive frontend interfaces. Responsible for system design and turning complex logistics requirements into seamless digital experiences.",
  },
  {
    role: "Associate Software Engineer",
    company: "Store My Goods",
    period: "Sep 2024 – Dec 2024",
    current: false,
    description:
      "Managed and optimized critical database structures and backend services. Collaborated with cross-functional teams to streamline logistics operations and improve system reliability.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Linux",
  "GraphQL",
  "System Design",
];

const socials = [
  { label: "Email", href: "mailto:rahulmaurya109626@gmail.com" },
  { label: "GitHub", href: "https://github.com/Rahul577503" },
  { label: "X", href: "https://twitter.com/RahulMa09588359" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-maurya-6abb491b8",
  },
];

export const metadata = {
  title: "About | Rahul Maurya",
  description:
    "About Rahul Maurya — Software Engineer (SDE-1) building scalable full-stack web applications.",
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground selection:bg-foreground/10">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 pb-20 pt-2 space-y-12">
        {/* Intro */}
        <section className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight">About me</h1>
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            Hey, I&apos;m Rahul — a Software Engineer who enjoys crafting
            exceptional digital solutions, whether that&apos;s designing
            intuitive interfaces, architecting robust backend systems, or
            optimizing workflows for scale. I&apos;m currently driving technical
            work at{" "}
            <a
              href="https://www.storemygoods.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-from-font underline-offset-4 hover:opacity-60 transition-opacity"
            >
              Store My Goods
            </a>
            .
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-5">
          <h2 className="text-base font-semibold tracking-tight">Experience</h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.role} className="space-y-1.5">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <h3 className="text-[0.95rem] font-medium text-foreground">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[0.7rem] font-medium text-primary-foreground">
                      Current
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {job.company} · {job.period}
                  </span>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h2 className="text-base font-semibold tracking-tight">Tech stack</h2>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="space-y-4">
          <h2 className="text-base font-semibold tracking-tight">Connect</h2>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-muted-foreground underline decoration-from-font underline-offset-4 hover:text-foreground transition-colors"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </section>
      </main>
    </div>
  );
}
