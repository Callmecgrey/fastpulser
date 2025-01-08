"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Clock } from "lucide-react"

const MOCK_APPLICATIONS = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp",
    appliedDate: "2024-03-15",
    status: "Under Review",
    type: "Full-time",
  },
  {
    id: 2,
    jobTitle: "Product Manager",
    company: "InnovateLabs",
    appliedDate: "2024-03-14",
    status: "Interview Scheduled",
    type: "Full-time",
  },
  // Add more mock applications
]

export default function Applications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Applications</h1>
      </div>

      <div className="space-y-4">
        {MOCK_APPLICATIONS.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{application.jobTitle}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Building2 className="h-4 w-4" />
                    <span>{application.company}</span>
                    <span>•</span>
                    <Badge variant="outline">{application.type}</Badge>
                  </div>
                </div>
                <Badge 
                  variant={
                    application.status === "Under Review" 
                      ? "secondary" 
                      : "success"
                  }
                >
                  {application.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  Applied on {new Date(application.appliedDate).toLocaleDateString()}
                </div>
                <Button variant="outline">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}