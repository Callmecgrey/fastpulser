"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $180k",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
  },
]

export function RecentJobs() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {MOCK_JOBS.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <div className="text-sm text-muted-foreground">{job.company}</div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge>{job.type}</Badge>
                <Badge variant="outline">{job.location}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">{job.salary}</div>
              <Button className="w-full">View Job</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}