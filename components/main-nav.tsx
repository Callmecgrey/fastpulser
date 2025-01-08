"use client"

import Link from "next/link"
import { BriefcaseIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BriefcaseIcon className="h-6 w-6" />
              <span className="text-xl font-bold">FastPulser</span>
            </Link>
            <nav className="ml-8 hidden space-x-4 md:flex">
              <Link href="/job-seekers" className="text-sm font-medium hover:text-primary">
                Job Seekers
              </Link>
              <Link href="/employer" className="text-sm font-medium hover:text-primary">
                Employer
              </Link>
              <Link href="/companies" className="text-sm font-medium hover:text-primary">
                Companies
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm font-medium hover:text-primary">
                  Resources
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/blog">Blog</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/resume-builder">Resume Builder</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}