import { Code, Server, Zap, Globe, TrendingUp, BarChart3, Mail, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const developmentServices = [
    {
      icon: Server,
      title: "API Development",
      description: "RESTful and GraphQL APIs built with modern best practices and scalable architecture.",
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust server-side applications using Go, PHP, and Node.js for optimal performance.",
    },
    {
      icon: Zap,
      title: "Microservices",
      description: "Distributed systems architecture for scalable and maintainable applications.",
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications with modern frameworks like Next.js and React.",
    },
  ]

  const marketingServices = [
    {
      icon: TrendingUp,
      title: "SEO Basics",
      description: "On-page optimization, meta tags, and content structure to improve search rankings.",
    },
    {
      icon: FileText,
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive conversions.",
    },
    {
      icon: BarChart3,
      title: "Analytics Setup",
      description: "Google Analytics, conversion tracking, and performance monitoring setup.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Campaign setup, automation workflows, and newsletter management.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">Services</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From backend systems to digital marketing strategies, I help businesses build and grow their online
            presence.
          </p>
        </div>

        {/* Development Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentServices.map((service, index) => (
              <Card key={index} className="border-border/50 hover:border-accent-blue/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent-blue" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Marketing Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Digital Marketing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingServices.map((service, index) => (
              <Card key={index} className="border-border/50 hover:border-accent-blue/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent-blue" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
