"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Eye } from "lucide-react"

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2024-03-15",
    applicants: 12,
    views: 145,
    status: "Active",
  },
  {
    id: 2,
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $180k",
    posted: "2024-03-14",
    applicants: 8,
    views: 98,
    status: "Active",
  },
]

export default function Jobs() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Posted Jobs</h1>
        <Button>Post New Job</Button>
      </div>

      <div className="space-y-4">
        {MOCK_JOBS.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.salary}</span>
                  </div>
                </div>
                <Badge>{job.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Posted {new Date(job.posted).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {job.applicants} Applicants
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {job.views} Views
                  </div>
                </div>
                <div className="space-x-2">
                  <Button variant="outline">Edit</Button>
                  <Button variant="outline">View Applicants</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}