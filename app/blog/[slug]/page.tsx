import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) return notFound();
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
      <p className="text-gray-500 mb-10">{post.metadata.date}</p>

      <MDXRemote source={post.content} />
    </div>
  )
}
