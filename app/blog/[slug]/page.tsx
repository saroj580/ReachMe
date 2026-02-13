import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const blogPosts = {
  "bot-detection-ml": {
    title: "Building an Intelligent Bot Detection System with Machine Learning",
    date: "Feb 12, 2026",
    readTime: "10 min read",
    author: "Saroj Chaudhary",
    content: `
      <p>In the modern web landscape, bot traffic accounts for nearly 40% of all internet traffic. While some bots are beneficial (like search engine crawlers), malicious bots can lead to data scraping, credential stuffing, and DDoS attacks.</p>
      
      <h2>The Challenge</h2>
      <p>Traditional rule-based systems are no longer sufficient to stop sophisticated bots that can mimic human behavior, use rotating proxies, and solve CAPTCHAs.</p>
      
      <h2>The Solution: Machine Learning</h2>
      <p>By leveraging machine learning, we can analyze patterns rather than just individual requests. Key features include:</p>
      <ul>
        <li>Mouse movement analysis</li>
        <li>Keystroke dynamics</li>
        <li>Request frequency and intervals</li>
        <li>Browser fingerprinting</li>
      </ul>
      
      <h2>Implementation</h2>
      <p>We used a Random Forest classifier trained on millions of labeled requests. The model achieves a 99.2% accuracy in distinguishing between legitimate users and automated scripts.</p>
    `,
  },
  "voice-ai-interview-agents": {
    title: "The Future of Voice AI: Building Interactive Interview Agents",
    date: "Feb 05, 2026",
    readTime: "7 min read",
    author: "Saroj Chaudhary",
    content: `
      <p>Voice AI is transforming how companies handle initial candidate screenings. Imagine an interview agent that sounds human, understands context, and can evaluate technical responses in real-time.</p>
      
      <h2>Low Latency is Key</h2>
      <p>For a conversation to feel natural, the latency between a user speaking and the AI responding must be under 500ms.</p>
      
      <h2>The Tech Stack</h2>
      <p>Building this requires a combination of:</p>
      <ul>
        <li>WebSockets for real-time audio streaming</li>
        <li>Whisper for high-accuracy Speech-to-Text</li>
        <li>GPT-4o for conversational intelligence</li>
        <li>ElevenLabs for natural text-to-speech synthesis</li>
      </ul>
    `,
  },
  "scalable-mern-2026": {
    title: "Architecting Scalable MERN Stack Applications in 2026",
    date: "Jan 28, 2026",
    readTime: "12 min read",
    author: "Saroj Chaudhary",
    content: `
      <p>The MERN stack (MongoDB, Express, React, Node.js) remains a powerhouse for full-stack development, but the way we architect these applications has evolved significantly.</p>
      
      <h2>Microservices vs. Monoliths</h2>
      <p>In 2026, the trend is moving towards "Modular Monoliths" for better developer experience without the complexity of full microservices.</p>
      
      <h2>Performance Optimizations</h2>
      <ul>
        <li>Edge caching for database queries</li>
        <li>Server-side rendering with Next.js for better SEO</li>
        <li>Using Redis for session management and real-time features</li>
      </ul>
    `,
  },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link href="/#blog">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Button variant="ghost" className="mb-8 group" asChild>
          <Link href="/#blog">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </Button>

        <div className="space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div 
          className="prose prose-invert prose-primary max-w-none 
            prose-headings:text-foreground prose-p:text-muted-foreground 
            prose-li:text-muted-foreground prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Footer />
    </main>
  )
}
