import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Briefcase, Award, Clock, Shield } from "lucide-react"

const benefits = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description: "Our AI-powered system matches you with jobs that fit your skills and experience"
  },
  {
    icon: Briefcase,
    title: "One-Click Apply",
    description: "Apply to multiple jobs with your saved profile and resume"
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Access exclusive job listings from top companies worldwide"
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get instant notifications for job matches and application status"
  },
  {
    icon: Shield,
    title: "Profile Privacy",
    description: "Control who sees your profile and manage your visibility"
  }
]

export default function JobSeekers() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                Find Your Next Career Move
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of professionals who trust FastPulser to advance their careers
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