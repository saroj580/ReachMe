"use client"

import { useInView } from "@/hooks/use-in-view"
import { Github, Users, Star, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GithubSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="github" className="py-20 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
              <Github className="h-8 w-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Follow me on GitHub
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              I'm active on GitHub, contributing to open source and sharing my latest projects. 
              Check out my repositories, stars, and contributions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <Users className="h-6 w-6 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <Star className="h-6 w-6 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Stars Earned</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <GitBranch className="h-6 w-6 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Contributions</p>
              </div>
            </div>

            <Button size="lg" className="group" asChild>
              <a 
                href="https://github.com/saroj580" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Follow @saroj580
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
