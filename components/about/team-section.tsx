import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Building2, Globe, Phone, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Damilola Egbukuyomi",
      position: "Founder & Chief Executive Officer",
      experience: "20+ years",
      expertise: ["Procurement", "International Trade", "Business Development"],
      description: "Visionary leader with over two decades of experience in procurement and international trade. Founded the company with a mission to bridge the gap between quality suppliers and businesses in West Africa.",
      achievements: ["CAC Registered", "ISO Compliant", "ECOWAS Trade Partner"]
    },
    {
      name: "Management Team",
      position: "Senior Leadership",
      experience: "8+ years",
      expertise: ["Operations", "Logistics", "Quality Assurance"],
      description: "Our experienced management team brings together expertise from various industries, ensuring comprehensive solutions for our clients' procurement needs.",
      achievements: ["500+ Projects", "50+ Suppliers", "Regional Expansion"]
    },
    {
      name: "Operations Team",
      position: "Field Specialists",
      experience: "10+ years",
      expertise: ["Supply Chain", "Quality Control", "Client Relations"],
      description: "Dedicated professionals who work on the ground to ensure quality, timely delivery, and exceptional service for every project.",
      achievements: ["24/7 Support", "Quality Guarantee", "Client Satisfaction"]
    }
  ]

  const departments = [
    {
      name: "Procurement",
      icon: Building2,
      description: "Specialized sourcing across all sectors",
      teamSize: "8+ specialists"
    },
    {
      name: "Logistics",
      icon: Globe,
      description: "End-to-end supply chain management",
      teamSize: "12+ coordinators"
    },
    {
      name: "Quality Assurance",
      icon: Award,
      description: "Standards compliance and verification",
      teamSize: "8+ inspectors"
    },
    {
      name: "Client Relations",
      icon: Users,
      description: "Dedicated account management",
      teamSize: "10+ managers"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated professionals who make Thomas Ikueromitan & Sons the trusted partner 
            for procurement and trading services across West Africa.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-manrope text-xl text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {member.position}
                </CardDescription>
                <div className="text-sm text-muted-foreground">
                  {member.experience} experience
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {member.description}
                </p>
                
                {/* Expertise */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Key Achievements</h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement) => (
                      <div key={achievement} className="text-xs text-muted-foreground">
                        ✓ {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Our Departments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon
              return (
                <Card key={dept.name} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-manrope text-lg text-foreground">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      {dept.description}
                    </p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {dept.teamSize}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team Culture */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Our Team Culture
              </h3>
              <p className="text-muted-foreground max-w-4xl mx-auto mb-6">
                We foster a culture of collaboration, continuous learning, and excellence. Our team members 
                are passionate about delivering exceptional service and building lasting relationships with 
                our clients and partners.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Collaborative</div>
                  <div className="text-sm text-muted-foreground">Team-based approach to problem-solving</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Innovative</div>
                  <div className="text-sm text-muted-foreground">Always seeking better solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Dedicated</div>
                  <div className="text-sm text-muted-foreground">Committed to client success</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
