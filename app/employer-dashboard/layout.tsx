"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  BriefcaseIcon, 
  FileText, 
  Settings, 
  LogOut, 
  Building2, 
  CreditCard 
} from "lucide-react"

export default function EmployerDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Posted Jobs", href: "/employer-dashboard/jobs", icon: BriefcaseIcon },
    { name: "Applications", href: "/employer-dashboard/applications", icon: FileText },
    { name: "Company Profile", href: "/employer-dashboard/company", icon: Building2 },
    { name: "Billing", href: "/employer-dashboard/billing", icon: CreditCard },
    { name: "Settings", href: "/employer-dashboard/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-16 items-center justify-between border-b px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <BriefcaseIcon className="h-6 w-6" />
          <span className="text-xl font-bold">FastPulser</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Building2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex">
        <aside className="w-64 border-r bg-muted/40 hidden md:block">
          <nav className="flex flex-col gap-2 p-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button variant="ghost" className="w-full justify-start text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}