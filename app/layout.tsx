
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ArticleJsonLd } from "next-seo"
import "./globals.css"
import SEO from "../seo.config"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shahin.R - Freelance Developer & Digital Marketer",
  description:
    "Freelance developer specializing in scalable web solutions, API development, and digital marketing. Building fast, modern applications with Go, PHP, Next.js, and helping businesses grow online.",
  keywords: [
    "freelance developer",
    "digital marketing",
    "web development",
    "API development",
    "Go developer",
    "PHP developer",
    "SEO",
    "Next.js",
  ],
  authors: [{ name: "Shahin Rahimi" }],
  creator: "Shahin Rahimi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cushydigit.xyz",
    title: "Shahin Rahimi - Freelance Developer & Digital Marketer",
    description: "Building fast, scalable web solutions and helping small businesses grow online.",
    siteName: "Shahin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahin Rahimi - Freelance Developer & Digital Marketer",
    description: "Building fast, scalable web solutions and helping small businesses grow online.",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ArticleJsonLd
          headline="Getting Started with Next SEO"
          datePublished="2024-01-01T08:00:00+00:00"
          author="John Doe"
          image="https://example.com/article-image.jpg"
          description="Learn how to improve your Next.js SEO"
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

