"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Building2 } from "lucide-react"

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2 days ago",
    description: "We are looking for an experienced Frontend Developer...",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $180k",
    posted: "1 day ago",
    description: "Join our product team to lead innovative solutions...",
  },
  // Add more mock jobs
]

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Find Jobs</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button>Search</Button>
      </div>

      <div className="space-y-4">
        {MOCK_JOBS.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Building2 className="h-4 w-4" />
                    <span>{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Badge>{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">{job.salary}</div>
                <div className="space-x-2">
                  <Button variant="outline">Save</Button>
                  <Button>Apply Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}