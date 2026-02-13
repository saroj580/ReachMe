"use client"

import { useInView } from "@/hooks/use-in-view"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const blogs = [
  {
    slug: "bot-detection-ml",
    title: "Building an Intelligent Bot Detection System with Machine Learning",
    description: "An exploration into identifying and mitigating bot traffic using advanced ML algorithms and real-time pattern analysis.",
    date: "Feb 12, 2026",
    readTime: "10 min read",
    tags: ["Machine Learning", "Security"],
  },
  {
    slug: "voice-ai-interview-agents",
    title: "The Future of Voice AI: Building Interactive Interview Agents",
    description: "How to leverage modern AI models to create seamless, low-latency voice interactions for automated interview systems.",
    date: "Feb 05, 2026",
    readTime: "7 min read",
    tags: ["Voice AI", "Next.js"],
  },
  {
    slug: "scalable-mern-2026",
    title: "Architecting Scalable MERN Stack Applications in 2026",
    description: "Best practices for structuring large-scale full-stack projects using MongoDB, Express, React, and Node.js for maximum performance.",
    date: "Jan 28, 2026",
    readTime: "12 min read",
    tags: ["MERN", "Architecture"],
  }
]

export function BlogSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="blog" className="py-20 sm:py-32 bg-secondary/10" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              Latest Blog Posts
              <span className="flex-1 h-px bg-border ml-4 hidden sm:block" />
            </h2>
            <p className="text-muted-foreground text-lg mb-12">Sharing my thoughts and discoveries in tech</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={blog.title}
                className={cn(
                  "group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex gap-2 mb-4">
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {blog.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 group/btn" asChild>
                    <a href={`/blog/${blog.slug}`} aria-label="Read more">
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div 
            className={`mt-12 text-center transition-all duration-700 delay-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button variant="outline" size="lg" disabled>
              View All Posts (Coming Soon)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
