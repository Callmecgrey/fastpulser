"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Mail, 
  Phone,
  Download,
  ThumbsUp,
  ThumbsDown
} from "lucide-react"

const MOCK_APPLICATIONS = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    candidate: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    appliedDate: "2024-03-15",
    status: "Under Review",
    resumeUrl: "#",
  },
  {
    id: 2,
    jobTitle: "Product Manager",
    candidate: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 (555) 987-6543",
    },
    appliedDate: "2024-03-14",
    status: "Shortlisted",
    resumeUrl: "#",
  },
]

export default function Applications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Applications</h1>
      </div>

      <div className="space-y-4">
        {MOCK_APPLICATIONS.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{application.candidate.name}</CardTitle>
                  <div className="text-sm text-muted-foreground mt-1">
                    Applied for {application.jobTitle}
                  </div>
                </div>
                <Badge 
                  variant={
                    application.status === "Shortlisted" 
                      ? "success" 
                      : "secondary"
                  }
                >
                  {application.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-4 text-sm">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    {application.candidate.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    {application.candidate.phone}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    View Application
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="success" size="icon">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}