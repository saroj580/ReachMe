import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { TechStackSection } from "@/components/techstack-section"
import { ProjectsSection } from "@/components/projects-section"
import { GithubSection } from "@/components/github-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechStackSection />
      <ProjectsSection />
      <GithubSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
