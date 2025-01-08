import { MainNav } from "@/components/main-nav"
import { JobSearch } from "@/components/job-search"
import { RecentJobs } from "@/components/recent-jobs"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                Find Your Dream Job Today
              </h1>
              <p className="text-xl text-muted-foreground">
                Search through millions of jobs and find the right fit for you.
              </p>
            </div>
            <JobSearch />
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Job Openings</h2>
            <RecentJobs />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}