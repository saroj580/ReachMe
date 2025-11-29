import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saroj | Software Developer",
  description:
    "Full Stack Software Developer specializing in building modern, scalable, and user-focused web applications using React, Next.js, Node.js, and MongoDB.",
  keywords: ["Software Developer", "Full Stack", "React", "Next.js", "MERN Stack", "Web Developer"],
  authors: [{ name: "Saroj Chaudhary" }],
  openGraph: {
    title: "Saroj | Software Developer",
    description: "Full Stack Software Developer building modern web applications",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
