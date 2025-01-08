import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, LineChart, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description: "Connect with millions of qualified candidates across all industries"
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "AI-powered candidate matching based on your specific requirements"
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard",
    description: "Track recruitment metrics and optimize your hiring process"
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description: "All candidates are pre-screened and verified"
  },
  {
    icon: Zap,
    title: "Quick Hiring",
    description: "Streamlined process to help you hire faster"
  }
]

export default function Employer() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                Hire Better, Faster
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your recruitment process with FastPulser's powerful hiring platform
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <benefit.icon className="h-8 w-8 mb-4 text-primary" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}