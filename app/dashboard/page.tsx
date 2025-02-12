import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Briefcase, Users, Calendar, CheckCircle } from "lucide-react"
import type React from "react" // Import React
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome to CloseDot</h1>
          <p className="text-gray-600">Here's what's happening with your hiring process</p>
        </div>
        <Button className="button-glow">
          Post New Job <ArrowRight className="ml-2" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Briefcase className="w-8 h-8" />} title="Active Jobs" value="2" change="Beta Period" />
        <StatCard icon={<Users className="w-8 h-8" />} title="Total Candidates" value="8" change="This week" />
        <StatCard icon={<Calendar className="w-8 h-8" />} title="Interviews" value="3" change="Scheduled" />
        <StatCard icon={<CheckCircle className="w-8 h-8" />} title="Trial Period" value="12" change="Days remaining" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Job Postings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <JobItem title="Senior React Developer" applications={24} progress={80} />
              <JobItem title="Product Manager" applications={18} progress={60} />
              <JobItem title="UX Designer" applications={12} progress={40} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <InterviewItem candidate="Alex Johnson" position="Senior React Developer" time="Today, 2:00 PM" />
              <InterviewItem candidate="Sarah Williams" position="Product Manager" time="Tomorrow, 11:00 AM" />
              <InterviewItem candidate="Michael Brown" position="UX Designer" time="Feb 12, 3:30 PM" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  title,
  value,
  change,
}: {
  icon: React.ReactNode
  title: string
  value: string
  change: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">{icon}</div>
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-sm text-gray-500">{change}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function JobItem({
  title,
  applications,
  progress,
}: {
  title: string
  applications: number
  progress: number
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{title}</h4>
        <span className="text-sm text-gray-500">{applications} applications</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

function InterviewItem({
  candidate,
  position,
  time,
}: {
  candidate: string
  position: string
  time: string
}) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h4 className="font-medium">{candidate}</h4>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
      <div className="text-sm text-gray-500">{time}</div>
    </div>
  )
}

