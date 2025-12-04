
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllPosts } from "@/lib/blog"

export default function Blog() {

  const posts = getAllPosts();


  return (
    <section id="blog" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">Blog</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Insights on web development, digital marketing, and building better online experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 hover:border-accent-blue/50 transition-colors group"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3" />
                  <time>{post.date}</time>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-balance">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="ghost" size="sm" className="text-accent-blue hover:text-accent-blue/80 group">
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
