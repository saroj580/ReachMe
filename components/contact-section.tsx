"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              Get In Touch
              <span className="flex-1 h-px bg-border ml-4 hidden sm:block" />
            </h2>
            <p className="text-muted-foreground text-lg mb-12">{`Have a project in mind? Let's work together!`}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={cn(
                "space-y-8 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "100ms" }}
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{`Let's Connect`}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {`I'm currently open to new opportunities and collaborations.
                  Whether you have a question, want to discuss a project, or
                  just want to say hi, feel free to reach out!`}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:johndoe@email.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">chaudharysaroj819@email.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-lg bg-secondary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={cn(
                "transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "200ms" }}
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-xl bg-card border border-border">
                  <CheckCircle className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">{`Thank you for reaching out. I'll get back to you soon!`}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl bg-card border border-border">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message..."
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full hover:scale-[1.02] transition-transform" disabled={isLoading}>
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
