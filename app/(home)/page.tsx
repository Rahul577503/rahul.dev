import { fetchBlogs } from "@/home-components/Blog";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rahul Maurya - Software Engineer",
  description:
    "Software Engineer (SDE-1) specializing in full-stack development, scalable systems, and modern web architecture. Available for consulting and opportunities.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahulmaurya.vercel.app",
    title: "Rahul Maurya - Software Engineer",
    description: "Building scalable and performant digital experiences.",
    images: [
      {
        url: "https://rahulmaurya.vercel.app/img/me.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Maurya - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Maurya - Software Engineer",
    description: "Building scalable and performant digital experiences.",
    images: ["https://rahulmaurya.vercel.app/img/me.jpg"],
  },
  alternates: {
    canonical: "https://rahulmaurya.vercel.app",
  },
};

const work = [
  {
    title: "Store My Goods",
    href: "https://www.storemygoods.in",
    description:
      "Software Engineer (SDE-1). Building and maintaining scalable full-stack web applications — from frontend interfaces to backend services and APIs.",
  },
  {
    title: "Full-stack systems",
    href: "https://github.com/Rahul577503",
    description:
      "Designing and shipping production features with React, Next.js, Node.js and PostgreSQL, with a focus on performance and clean architecture.",
  },
  {
    title: "Performance & DX",
    href: "https://github.com/Rahul577503",
    description:
      "Profiling, caching, and optimizing applications, plus code reviews and tooling to keep the developer experience fast.",
  },
];

const personal = [
  {
    title: "This portfolio",
    href: "https://github.com/Rahul577503",
    description: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
  {
    title: "Technical writing",
    href: "/blog",
    description:
      "Notes and articles on software development, web performance and engineering.",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-maurya-6abb491b8",
  },
  { label: "GitHub", href: "https://github.com/Rahul577503" },
  { label: "X", href: "https://twitter.com/RahulMa09588359" },
  { label: "Email", href: "mailto:rahulmaurya109626@gmail.com" },
];

function LinkList({
  items,
}: {
  items: { title: string; href: string; description: string }[];
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => {
        const external = item.href.startsWith("http");
        return (
          <li
            key={item.title}
            className="flex gap-2.5 text-[0.95rem] leading-relaxed"
          >
            <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
            <p className="text-muted-foreground">
              <a
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="font-medium text-foreground underline decoration-from-font underline-offset-4 hover:opacity-60 transition-opacity"
              >
                {item.title}
              </a>{" "}
              — {item.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

function Socials() {
  return (
    <nav className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel={
            social.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="text-muted-foreground underline decoration-from-font underline-offset-4 hover:text-foreground transition-colors"
        >
          {social.label}
        </a>
      ))}
    </nav>
  );
}

export default async function HomePage() {
  const blogs = await fetchBlogs().catch((error) => {
    console.error("Error fetching blogs:", error);
    return [];
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahul Maurya",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Store My Goods",
    },
    url: "https://rahulmaurya.vercel.app",
    sameAs: [
      "https://github.com/Rahul577503",
      "https://www.linkedin.com/in/rahul-maurya-6abb491b8",
    ],
    description: "Software Engineer specializing in scalable web systems.",
  };

  return (
    <div className="bg-background text-foreground selection:bg-foreground/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-5 sm:px-6 pb-20 pt-2 space-y-12">
        {/* Header / intro */}
        <header className="space-y-5">
          <div className="flex items-center gap-4">
            <Image
              src="/img/rahul_maurya.jpg"
              alt="Rahul Maurya"
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 rounded-2xl object-cover"
              priority
            />
            <div className="space-y-0.5">
              <h1 className="text-2xl font-semibold tracking-tight">
                Rahul Maurya
              </h1>
              <p className="text-[0.95rem] text-muted-foreground">
                Software Engineer (SDE-1) at Store My Goods
              </p>
            </div>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            I build scalable, performant full-stack web applications — from
            polished frontends to reliable backend services. I care about clean
            code, performance, and shipping things that last. Currently open to
            new opportunities and freelance work.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-1">
            <a
              href="mailto:rahulmaurya109626@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Let&apos;s talk
            </a>
            <Socials />
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-base font-semibold tracking-tight">Work</h2>
          <LinkList items={work} />
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-semibold tracking-tight">Personal</h2>
          <LinkList items={personal} />
        </section>

        {blogs.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-base font-semibold tracking-tight">Writing</h2>
            <ul className="divide-y divide-border">
              {blogs.slice(0, 5).map((blog) => (
                <li key={blog.slug}>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-2.5"
                  >
                    <span className="text-[0.95rem] text-foreground group-hover:opacity-60 transition-opacity">
                      {blog.meta.title}
                    </span>
                    <time className="shrink-0 text-xs text-muted-foreground">
                      {new Date(blog.meta.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
            {blogs.length > 5 && (
              <Link
                href="/blog"
                className="inline-block text-sm text-muted-foreground underline decoration-from-font underline-offset-4 hover:text-foreground transition-colors"
              >
                All {blogs.length} articles →
              </Link>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export const revalidate = 3600;
