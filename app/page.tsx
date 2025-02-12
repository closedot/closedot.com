import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Calendar, FileText, Users, Check, ArrowUpRight, MessageSquare, Mail,Slack,
  Video,
  Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm">Now in Beta • Early Access Available</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-up">
              AI-Powered Hiring & Onboarding Platform
            </h1>
            <p
              className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Transform your hiring process with our intelligent AI agents. From job posting to onboarding, we
              streamline every step of the way.
            </p>
            <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="button-glow bg-primary hover:bg-primary/90">
                Start Free Trial <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Watch Demo <ArrowUpRight className="ml-2" />
              </Button>
            </div>
            <div
              className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Stat number="Beta" label="Access Available" />
              <Stat number="14 Days" label="Free Trial" />
              <Stat number="24/7" label="Support" />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-600">
              Our AI-powered platform simplifies every step of the hiring process, making it faster and more efficient.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Bot className="w-8 h-8 text-primary" />}
              title="AI Job Posting"
              description="Post jobs across multiple platforms with AI-generated descriptions optimized for maximum reach"
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8 text-primary" />}
              title="Smart Resume Filtering"
              description="AI-powered resume screening and candidate ranking based on job requirements"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8 text-primary" />}
              title="Automated Scheduling"
              description="Seamless interview scheduling with calendar integration and reminders"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Streamlined Onboarding"
              description="Automated onboarding process with customizable workflows"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">Start free and scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Base</h3>
                <p className="text-gray-600">Perfect for growing teams</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$100</span>
                <span className="text-gray-600">/month</span>
                <p className="text-sm text-gray-500">billed annually</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Up to 10 active job postings",
                  "AI job description generation",
                  "Basic candidate filtering",
                  "Slack integration",
                  "Email support",
                  "Basic analytics",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="bg-white p-8 rounded-lg border relative hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-gray-600">For scaling organizations</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$150</span>
                <span className="text-gray-600">/month</span>
                <p className="text-sm text-gray-500">billed annually</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited job postings",
                  "Advanced AI job description generation",
                  "Advanced candidate filtering & ranking",
                  "Slack & MS Teams integration",
                  "Priority support",
                  "Advanced analytics & reporting",
                  "Custom workflows",
                  "API access",
                  "Multiple team members",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-600">
            <p>
              Need a custom plan?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Integration Section */}
     <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary mb-6">
                <Bot className="w-4 h-4" />
                <span className="text-sm font-medium">Slack Integration</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Meet @dot, Your AI Hiring Assistant</h2>
              <p className="text-lg text-gray-600 mb-8">
                Simply mention @dot in your Slack channel to start the hiring process. Our AI agents will handle
                everything from there, keeping you updated every step of the way.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Post jobs with natural language",
                  "Get instant updates on candidates",
                  "Schedule interviews directly from Slack",
                  "Automated follow-ups and reminders",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="rounded-full p-1 bg-green-100">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="button-glow">
                Connect Slack <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-500 rounded-lg blur-3xl opacity-20" />
                <div className="relative bg-white rounded-lg shadow-xl border p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">@dot</h4>
                      <p className="text-sm text-gray-500">AI Hiring Assistant</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Message sender="user" content="@dot we need to hire a senior react developer" />
                    <Message
                      sender="bot"
                      content="I'll help you create and post a job listing for a Senior React Developer. Would you like me to generate a job description based on industry standards and your company profile?"
                    />
                    <Message sender="user" content="Yes, please generate a job description" />
                    <div className="animate-pulse">
                      <span className="text-primary text-sm">@dot is typing...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Early Access Program</h2>
            <p className="text-lg text-gray-600 mb-8">
              Be among the first to experience the future of AI-powered hiring. Limited spots available.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="button-glow">
                Start Free Trial <ArrowRight className="ml-2" />
              </Button>
              <p className="text-sm text-gray-500">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative p-8 bg-white rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Message({ sender, content }: { sender: "user" | "bot"; content: string }) {
  return (
    <div className={`flex gap-3 ${sender === "bot" ? "flex-row" : "flex-row-reverse"}`}>
      <div
        className={`
        max-w-[80%] rounded-lg p-3 text-sm
        ${sender === "bot" ? "bg-gray-100 text-gray-800" : "bg-primary text-white"}
      `}
      >
        {content}
      </div>
    </div>
  )
}

