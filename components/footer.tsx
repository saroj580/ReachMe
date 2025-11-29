"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-primary fill-primary " />
              <span>by Saroj</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/saroj580"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="www.linkedin.com/in/saroj-chaudhary-33a657296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:chaudharysaroj819@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © <span suppressHydrationWarning>{currentYear}</span> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
