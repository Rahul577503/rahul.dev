import BlogPage, { fetchBlogs, FrontMatter } from "@/home-components/Blog";
import { Suspense } from "react";
import { FiCode, FiServer, FiZap, FiShield, FiTrendingUp, FiCheck, FiArrowRight } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiPostgresql, SiDocker, SiAmazon, SiTypescript } from "react-icons/si";

export const metadata = {
  title: "Rahul Maurya - Software Engineer",
  description:
    "Software Engineer (SDE-1) specializing in full-stack development, scalable systems, and modern web architecture. Available for consulting and opportunities.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahul.dev",
    title: "Rahul Maurya - Software Engineer",
    description: "Building scalable and performant digital experiences.",
  },
};

export default async function HomePage() {
  let blogs: { meta: FrontMatter; slug: string }[] = [];

  try {
    blogs = await fetchBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    blogs = [];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahul Maurya",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Store My Goods",
    },
    url: "https://rahul.dev",
    sameAs: [
      "https://github.com/Rahul577503",
      "https://www.linkedin.com/in/rahul-maurya-6abb491b8",
    ],
    description: "Software Engineer specializing in scalable web systems.",
  };

  const services = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "End-to-end application development with modern frameworks and best practices",
      skills: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: "System Architecture",
      description: "Scalable backend systems and microservices architecture design",
      skills: ["PostgreSQL", "Redis", "GraphQL", "REST APIs"]
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Application profiling, optimization, and performance tuning",
      skills: ["Caching", "CDN", "Database Optimization", "Code Splitting"]
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "DevOps & Infrastructure",
      description: "CI/CD pipelines, containerization, and cloud infrastructure",
      skills: ["Docker", "AWS", "GitHub Actions", "Nginx"]
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Technical Leadership",
      description: "Code reviews, mentoring, and architectural decision-making",
      skills: ["Agile", "Code Review", "Documentation", "Best Practices"]
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Legacy Modernization",
      description: "Refactoring and upgrading legacy systems to modern tech stacks",
      skills: ["Migration", "Refactoring", "Testing", "Documentation"]
    }
  ];

  const techStack = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiAmazon />, name: "AWS" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-600 dark:text-zinc-200 selection:bg-amber-500/30 overflow-hidden relative transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.03] dark:bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-indigo-500/[0.02] dark:bg-indigo-500/[0.02] rounded-full blur-[120px] pointer-events-none -translate-x-1/3" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20 relative z-10">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-24">
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Rahul Maurya
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                Software Engineer (SDE-1) at{" "}
                <span className="text-amber-600 dark:text-amber-400">Store My Goods</span>
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              Specialized in building scalable web applications, optimizing performance, 
              and implementing modern architecture patterns. Passionate about writing clean, 
              maintainable code and solving complex engineering challenges.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <div 
                  key={tech.name}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm"
                >
                  <span className="text-sm sm:text-base">{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 sm:mb-24">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">
              What I Can Help With
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              Services and expertise I can bring to your project
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 hover:border-amber-200 dark:hover:border-amber-900/50 transition-all duration-300"
              >
                <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white pt-0.5 sm:pt-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2.5 sm:mb-3 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hire Me CTA Section */}
        <section className="mb-16 sm:mb-24">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/5 dark:to-orange-500/5 p-6 sm:p-10">
            <div className="relative z-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">
                  Let's Work Together
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 mb-4 sm:mb-6 leading-relaxed">
                  I'm available for freelance projects, consulting, and full-time opportunities. 
                  Let's discuss how I can help bring your ideas to life with quality code and modern solutions.
                </p>
                
                <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-2.5 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                    <FiCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <span>Full-stack development with React, Next.js, and Node.js</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                    <FiCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <span>System architecture and database design</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                    <FiCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <span>Performance optimization and code reviews</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                  <a 
                    href="mailto:rahulmaurya577503@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-medium transition-all shadow-lg shadow-amber-600/20 dark:shadow-amber-500/20 hover:shadow-xl text-sm"
                  >
                    Get In Touch
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rahul-maurya-6abb491b8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 hover:border-amber-300 dark:hover:border-amber-700/50 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-all text-sm"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-amber-400/20 to-orange-400/20 dark:from-amber-400/10 dark:to-orange-400/10 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <div className="mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-1.5 sm:mb-2">
              Latest Articles
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Thoughts on software development and engineering
            </p>
          </div>
          
          <Suspense fallback={
            <div className="flex items-center justify-center py-12 sm:py-16">
              <div className="w-6 h-6 sm:w-7 sm:h-7 border-3 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            </div>
          }>
            <BlogPage blogs={blogs} limit={6} />
          </Suspense>
        </section>
      </main>
    </div>
  );
}

export const revalidate = 3600;
