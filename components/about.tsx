import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    "Go",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Next.js",
    "React",
    "Tailwind CSS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "SEO",
    "Analytics",
    "Email Marketing",
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
                About Me
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed text-pretty">
                <p>
                  I'm a freelance developer with a passion for building fast, scalable web applications. With expertise
                  in backend development, API design, and modern frontend frameworks, I help businesses create robust
                  digital solutions.
                </p>
                <p>
                  I'm also learning digital marketing to provide comprehensive online growth strategies. From SEO
                  optimization to landing page design and email campaigns, I combine technical skills with marketing
                  insights to help small businesses succeed online.
                </p>
                <p>
                  When I'm not coding or analyzing metrics, you can find me exploring new technologies, contributing to
                  open source, or sharing what I've learned through blog posts and tutorials.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-transparent rounded-2xl" />
                <div className="relative h-full rounded-2xl overflow-hidden border border-border/50">
                  <Image src="/professional-developer-portrait.png" alt="Profile" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
