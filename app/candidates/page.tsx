import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function Candidates() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Candidates</h1>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Candidates</SelectItem>
              <SelectItem value="screening">Screening</SelectItem>
              <SelectItem value="interview">Interview</SelectItem>
              <SelectItem value="hired">Hired</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export</Button>
        </div>
      </div>

      <div className="grid gap-6">
        <CandidateCard
          name="Alex Johnson"
          role="Senior React Developer"
          experience="8 years"
          status="interview"
          match={95}
          skills={["React", "TypeScript", "Node.js"]}
        />
        <CandidateCard
          name="Sarah Williams"
          role="Product Manager"
          experience="6 years"
          status="screening"
          match={85}
          skills={["Product Strategy", "Agile", "User Research"]}
        />
        <CandidateCard
          name="Michael Brown"
          role="UX Designer"
          experience="4 years"
          status="hired"
          match={90}
          skills={["Figma", "User Research", "Prototyping"]}
        />
      </div>
    </div>
  )
}

function CandidateCard({
  name,
  role,
  experience,
  status,
  match,
  skills,
}: {
  name: string
  role: string
  experience: string
  status: string
  match: number
  skills: string[]
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-6 p-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-500">{role}</p>
          <div className="flex gap-2 mt-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="text-right">
          <Badge variant={status === "hired" ? "default" : status === "interview" ? "secondary" : "outline"}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
          <p className="mt-2 text-sm text-gray-500">{experience} experience</p>
          <p className="font-medium text-primary">{match}% match</p>
        </div>
        <Button variant="outline">View Profile</Button>
      </CardContent>
    </Card>
  )
}

