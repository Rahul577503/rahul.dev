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

interface CustomComponents {
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost({ slug });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description || "",
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.description || "",
      images: post.frontMatter.image ? [{ url: post.frontMatter.image }] : [],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost({ slug });

  if (!post) {
    notFound();
  }

  const { frontMatter, content } = post;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32">
        {/* Header */}
        <header className="mb-10 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight flex-1">
              {frontMatter.title}
            </h1>
            <GoBack />
          </div>
          
          {frontMatter.date && (
            <time className="block text-sm text-zinc-500 dark:text-zinc-500 font-mono">
              {new Date(frontMatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}

          {frontMatter.description && (
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {frontMatter.description}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {frontMatter.image && (
          <div className="relative w-full aspect-video mb-12 rounded-xl overflow-hidden border border-zinc-800/50 dark:border-zinc-200">
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
        <div className="prose prose-base sm:prose-lg prose-zinc dark:prose-invert max-w-none overflow-hidden
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-900 dark:prose-headings:text-white prose-headings:scroll-mt-24
          prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:mb-4
          prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 sm:prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-p:leading-relaxed
          prose-a:text-amber-600 dark:prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:break-words
          prose-strong:text-zinc-900 dark:prose-strong:text-white prose-strong:font-semibold
          prose-code:text-amber-600 dark:prose-code:text-amber-400 prose-code:bg-amber-50 dark:prose-code:bg-zinc-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-code:break-words
          prose-pre:!bg-zinc-900 dark:prose-pre:!bg-zinc-950 prose-pre:!border prose-pre:!border-zinc-800 dark:prose-pre:!border-zinc-800 prose-pre:!rounded-xl prose-pre:!shadow-lg prose-pre:!my-6 prose-pre:!p-0 prose-pre:!overflow-x-auto prose-pre:!max-w-full
          prose-ul:text-zinc-700 dark:prose-ul:text-zinc-300
          prose-ol:text-zinc-700 dark:prose-ol:text-zinc-300
          prose-li:text-zinc-700 dark:prose-li:text-zinc-300 prose-li:my-1
          prose-blockquote:border-l-amber-600 dark:prose-blockquote:border-l-amber-400 prose-blockquote:text-zinc-600 dark:prose-blockquote:text-zinc-400 prose-blockquote:italic
          prose-img:rounded-xl prose-img:shadow-lg
          [&_pre]:!p-0 [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!overflow-x-auto
          [&_pre_code]:!block [&_pre_code]:!p-3 [&_pre_code]:sm:[&_pre_code]:!p-4 [&_pre_code]:!overflow-x-auto [&_pre_code]:!text-xs [&_pre_code]:sm:[&_pre_code]:!text-sm [&_pre_code]:!leading-relaxed [&_pre_code]:!whitespace-pre [&_pre_code]:!break-normal
        ">
          <MDXRemote source={content} components={components} />
        </div>
      </article>
    </div>
  );
}
