"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Instagram as Telegram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Telegram, href: "https://t.me", label: "Telegram" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Have a project in mind or want to discuss how I can help grow your business? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Find me on these platforms or send an email directly. I'm always open to discussing new projects and
                opportunities.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border/50 hover:border-accent-blue/50 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                      <social.icon className="h-5 w-5 text-accent-blue" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <Card className="border-border/50 bg-accent-blue/5">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond to all inquiries within 24 hours during business days. For urgent matters, feel
                  free to reach out via Telegram.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
