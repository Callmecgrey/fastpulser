"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Linkedin, Chrome, Building2, User } from "lucide-react"

export default function Signup() {
  const [userType, setUserType] = useState("jobseeker")
  
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-muted py-16">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs value={userType} onValueChange={setUserType}>
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="jobseeker" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Job Seeker
                </TabsTrigger>
                <TabsTrigger value="employer" className="flex items-center">
                  <Building2 className="mr-2 h-4 w-4" />
                  Employer
                </TabsTrigger>
              </TabsList>

              <TabsContent value="jobseeker" className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="password" placeholder="Password" />
                  <Button className="w-full" size="lg">
                    Create Account
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="employer" className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Company Name" />
                  <Input placeholder="Company Website" />
                  <Input type="email" placeholder="Company Email" />
                  <Input type="password" placeholder="Password" />
                  <Button className="w-full" size="lg">
                    Create Account
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <Button variant="outline" className="w-full">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="outline" className="w-full">
                <Chrome className="mr-2 h-5 w-5" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <Chrome className="mr-2 h-5 w-5" />
                Microsoft
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <a href="/login" className="text-primary hover:underline">
                Sign in
              </a>
            </p>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}