import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/legacy/image";

import { MDXRemote } from "next-mdx-remote/rsc";
import Title from "../../components/Title";
import GoBack from "../../components/GoBack";
import CodeBlock from "../../components/Code";
import BoopButton from "../../components/BoopButton";

interface CustomComponents {
  [key: string]: React.ComponentType<any>;
}

const components: CustomComponents = {
  Title,CodeBlock,BoopButton
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const { frontMatter, content } = getPost(params);

  return (
    <article className="prose px-2 lg:px-0 py-[200px] prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto max-w-[1280px]">
      <div className="flex justify-between item-center">
        <h1>{frontMatter.title}</h1>
        <div>
          <GoBack />
        </div>
      </div>
      <Image
        src={frontMatter.image}
        alt={frontMatter.title}
        height={800}
        width={1280}
        className="rounded-md"
        priority={true}
      />

      <MDXRemote source={content} components={components}></MDXRemote>
    </article>
  );
}
