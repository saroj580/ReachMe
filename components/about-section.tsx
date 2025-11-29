"use client"

import { useInView } from "@/hooks/use-in-view"
import { User, Code, Rocket } from "lucide-react"

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-20 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              About Me
              <span className="flex-1 h-px bg-border ml-4 hidden sm:block" />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div
              className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <User className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                {`I'm a passionate software developer with a love for creating
                elegant solutions to complex problems. I enjoy turning ideas
                into reality through code.`}
              </p>
            </div>

            <div
              className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building full-stack applications using React, Next.js, Node.js, and MongoDB. I create
                intuitive UIs, scalable APIs, and clean code.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Rocket className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">My Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                {`I'm passionate about building software that makes a difference.
                I constantly learn new technologies and strive to write better
                code every day.`}
              </p>
            </div>
          </div>

          <div
            className={`mt-12 p-8 rounded-xl bg-secondary/50 border border-border transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {`I'm a software developer passionate about building full-stack
              applications using modern technologies like React, Next.js,
              Node.js, and MongoDB. I create intuitive UIs, scalable APIs, and
              clean, maintainable code. When I'm not coding, you can find me
              exploring new technologies, contributing to open source, or
              sharing knowledge with the developer community.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
