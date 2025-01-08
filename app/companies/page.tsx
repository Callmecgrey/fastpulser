import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const companies = [
  { letter: 'A', companies: ['Apple', 'Amazon', 'Adobe', 'Airbnb'] },
  { letter: 'B', companies: ['Boeing', 'BMW', 'Booking.com'] },
  { letter: 'C', companies: ['Cisco', 'Coinbase', 'Canva'] },
  { letter: 'D', companies: ['Dell', 'Dropbox', 'Disney'] },
  { letter: 'E', companies: ['eBay', 'Epic Games', 'Etsy'] },
  // Add more companies as needed
]

export default function Companies() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Company Directory</h1>
              <p className="text-xl text-muted-foreground">
                Explore opportunities at top companies worldwide
              </p>
            </div>
            <div className="max-w-xl mx-auto mb-12 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search companies..."
                className="pl-10"
              />
            </div>
            <div className="space-y-8">
              {companies.map(({ letter, companies }) => (
                <Card key={letter}>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{letter}</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {companies.map((company) => (
                        <a
                          key={company}
                          href={`/companies/${company.toLowerCase()}`}
                          className="text-primary-foreground hover:text-primary transition-colors"
                        >
                          {company}
                        </a>
                      ))}
                    </div>
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