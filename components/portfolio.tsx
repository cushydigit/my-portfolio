import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce API",
      description: "Scalable REST API for online marketplace",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Go", "PostgreSQL", "Redis"],
      link: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics platform for business insights",
      image: "/analytics-dashboard.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Microservices Architecture",
      description: "Distributed system for financial services",
      image: "/cloud-infrastructure-diagram.png",
      tags: ["Go", "Docker", "Kubernetes"],
      link: "#",
    },
    {
      title: "Marketing Landing Page",
      description: "High-converting page for SaaS product",
      image: "/modern-landing-page.png",
      tags: ["Next.js", "SEO", "Analytics"],
      link: "#",
    },
    {
      title: "Content Management System",
      description: "Custom CMS for blog and documentation",
      image: "/cms-interface-design.jpg",
      tags: ["PHP", "Laravel", "MySQL"],
      link: "#",
    },
    {
      title: "Email Automation Platform",
      description: "Marketing automation and campaigns",
      image: "/email-marketing-interface.jpg",
      tags: ["Node.js", "SendGrid", "React"],
      link: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">Portfolio</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A selection of recent projects showcasing development and digital marketing work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 hover:border-accent-blue/50 transition-colors group"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="ghost" size="sm" className="text-accent-blue hover:text-accent-blue/80">
                  <Link href={project.link}>
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
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
