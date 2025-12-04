import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogMetadata } from '@/types/blog';

const blogDir = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  description: string;
  date: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir)
  console.log(files)

  return files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8")

    const { data } = matter(fileContent);

    const metadata = data as BlogMetadata;
    return {
      slug: filename.replace(".md", ""),
      title: metadata.title,
      image: "",
      description: metadata.description,
      date: metadata.date,
    };
  });
}

export interface FullBlogPost {
  slug: string;
  metadata: BlogMetadata;
  content: string;
}

export function getPostBySlug(slug: string): FullBlogPost {
  const fullPath = path.join(blogDir, `${slug}.md`);
  const postContent = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(postContent);

  return {
    slug,
    metadata: data as BlogMetadata,
    content,
  }
}
