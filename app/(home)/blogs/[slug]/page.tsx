import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Title from "@/home-components/Title";
import GoBack from "@/home-components/GoBack";
import CodeBlock from "@/home-components/Code";
import BoopButton from "@/home-components/BoopButton";
import Pre from "@/home-components/Pre";

import Share from "@/home-components/Share";

interface CustomComponents {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>;
}

const components: CustomComponents = {
  Title,
  CodeBlock,
  BoopButton,
  pre: Pre,
};

export async function generateStaticParams() {
  try {
    const files = fs.readdirSync(path.join("blogs"));
    return files
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => ({
        slug: filename.replace(".mdx", ""),
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

function getPost({ slug }: { slug: string }) {
  try {
    const filePath = path.join("blogs", `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const markdownFile = fs.readFileSync(filePath, "utf-8");
    const { data: frontMatter, content } = matter(markdownFile);

    return {
      frontMatter,
      slug,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost({ slug });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const url = `https://rahulmaurya.vercel.app/blogs/${slug}`;

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description || "",
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.description || "",
      url,
      type: "article",
      authors: ["Rahul Maurya"],
      publishedTime: post.frontMatter.date,
      images: post.frontMatter.image ? [{ url: post.frontMatter.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontMatter.title,
      description: post.frontMatter.description || "",
      images: post.frontMatter.image ? [post.frontMatter.image] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost({ slug });

  if (!post) {
    notFound();
  }

  const { frontMatter, content } = post;

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 sm:px-8 pt-4 pb-20">
        {/* Header */}
        <header className="mb-8 space-y-3">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight leading-tight flex-1">
              {frontMatter.title}
            </h1>
            <GoBack />
          </div>

          {frontMatter.date && (
            <time className="block text-sm text-muted-foreground">
              {new Date(frontMatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}

          {frontMatter.description && (
            <p className="text-[0.95rem] sm:text-base text-muted-foreground leading-relaxed">
              {frontMatter.description}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {frontMatter.image && (
          <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden border border-border">
            <Image
              src={frontMatter.image}
              alt={frontMatter.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        {/* MDX Content */}
        <div
          className="prose prose-zinc max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-headings:scroll-mt-24
          prose-h1:text-2xl sm:prose-h1:text-3xl prose-h1:mb-4
          prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:font-medium prose-a:break-words
          prose-strong:text-foreground prose-strong:font-semibold
          prose-code:text-foreground prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.85em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-code:break-words
          prose-ul:text-muted-foreground prose-ol:text-muted-foreground
          prose-li:text-muted-foreground prose-li:my-1
          prose-blockquote:border-l-foreground/30 prose-blockquote:text-muted-foreground prose-blockquote:italic prose-blockquote:font-normal
          prose-img:rounded-xl prose-img:border prose-img:border-border
          prose-hr:border-border
        "
        >
          <MDXRemote source={content} components={components} />
        </div>

        <Share title={frontMatter.title} slug={slug} />
      </article>
    </div>
  );
}
