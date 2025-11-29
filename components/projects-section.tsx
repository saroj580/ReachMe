"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A comprehensive finance tracking application built with the MERN stack. Track income and expenses with interactive charts, financial analytics, and personalized suggestions.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Recharts", "JWT"],
    features: [
      "Income/expense tracking",
      "Interactive charts",
      "Financial analytics",
      "JWT authentication",
      "Responsive dashboard",
    ],
    github: "https://github.com/saroj580/Expense-Tracker.git",
    featured: true,
  },
  {
    title: "E-Shop Platform",
    description:
      "Full-featured e-commerce platform with product listing, user authentication, shopping cart, and secure checkout. Built with PHP and MySQL.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    features: ["Product catalog", "User authentication", "Image upload", "Cart management", "Session handling"],
    github: "https://github.com/saroj580/e-commerce-project-WT-.git",
    featured: true,
  },
  {
    title: "BotBarrier - Intelligent Bot Detection System",
    description:
      "BotBarrier is an intelligent web-security system designed to accurately distinguish human users from automated bots. It analyzes behavioral patterns such as mouse movements, typing rhythms, click intervals, and request frequency to identify anomalies.",
    tech: ["Typescript", "Expressjs", "MongoDB", "Machine Learning", "Python"],
    features: ["bot vs human classification", "Real-time user interaction tracking", "mouse movement analysis", "rate-limiting defense", "instant threat flagging"],
    github: "https://github.com/saroj580/BotBarrier.git",
    featured: true,
  },
  {
    title: "Online Trading System",
    description:
      "Secure trading platform with dashboard-based interface for managing portfolios, executing trades, and monitoring market trends.",
    tech: ["Typescript", "Expressjs", "Express", "MongoDB", "Socket.io", "Chart.js"],
    features: [
      "Portfolio management",
      "Real-time updates",
      "Secure transactions",
      "Market analytics",
      "User dashboard",
    ],
    github: "https://github.com/saroj580/Online-Trading-Platform.git",
    featured: true,
  },
  {
    title: "VoiceAgent",
    description:
      "Voice-enabled AI interview agent that conducts interactive interviews, listens to responses, generates follow-up questions, and provides a realistic interview simulation experience.",
    tech: ["Next.js", "Typescript", "Firebase", "zod", "vapi.sdk"],
    features: [
      "Real-time voice input capture",
      "AI-driven response analysis",
      "intuitive mock interview interface",
      "browser-based real-time performance",
      "User dashboard",
    ],
    github: "https://github.com/saroj580/VoiceAgent.git",
    live: "voice-agent-azure.vercel.app",
    featured: true,
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="py-20 sm:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              Featured Projects
              <span className="flex-1 h-px bg-border ml-4 hidden sm:block" />
            </h2>
            <p className="text-muted-foreground text-lg mb-12">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/saroj580" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
