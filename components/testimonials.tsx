import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Outstanding work on our API integration. The code quality and documentation were exceptional. Highly recommend!",
      author: "Sarah Johnson",
      role: "CTO, TechStart Inc",
    },
    {
      quote:
        "Helped us improve our SEO and doubled our organic traffic in just 3 months. Great communication throughout.",
      author: "Michael Chen",
      role: "Founder, GrowthLabs",
    },
    {
      quote:
        "Built our entire backend infrastructure with Go microservices. Scalable, reliable, and delivered on time.",
      author: "Emily Rodriguez",
      role: "Product Manager, CloudSync",
    },
    {
      quote:
        "The landing page design and SEO optimization led to a 40% increase in conversions. Exceeded expectations!",
      author: "David Kim",
      role: "Marketing Director, StartupHub",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">What clients say about working together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent-blue/20 mb-4" />
                <p className="text-base leading-relaxed mb-6 text-pretty">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
