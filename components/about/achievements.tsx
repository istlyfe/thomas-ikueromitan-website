import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, TrendingUp, Users, Globe, Building2, CheckCircle } from "lucide-react"

export function Achievements() {
  const milestones = [
    {
      year: "2017",
      title: "Company Founded",
      description: "Started as a small family business in Lagos",
      icon: Building2
    },
    {
      year: "2012",
      title: "First Major Contract",
      description: "Secured first large-scale procurement project",
      icon: CheckCircle
    },
    {
      year: "2015",
      title: "Regional Expansion",
      description: "Extended operations to neighboring states",
      icon: Globe
    },
    {
      year: "2018",
      title: "100 Projects Milestone",
      description: "Celebrated 100 successful project completions",
      icon: Trophy
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented modern procurement systems",
      icon: TrendingUp
    },
    {
      year: "2024",
      title: "500+ Projects",
      description: "Reached major milestone of 500+ completed projects",
      icon: Star
    }
  ]

  const certifications = [
    {
      name: "CAC Registration",
      description: "Corporate Affairs Commission of Nigeria",
      year: "2009",
      icon: CheckCircle,
      status: "Active"
    },
    {
      name: "ISO Compliance",
      description: "International Organization for Standardization",
      year: "2015",
      icon: Award,
      status: "Maintained"
    },
    {
      name: "ECOWAS Trade Partner",
      description: "Economic Community of West African States",
      year: "2018",
      icon: Globe,
      status: "Certified"
    }
  ]

  const statistics = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successful procurement and trading projects",
      icon: CheckCircle
    },
    {
      number: "50+",
      label: "Trusted Suppliers",
      description: "Vetted and reliable supplier network",
      icon: Users
    },
    {
      number: "8+",
      label: "Years Experience",
      description: "Industry expertise and knowledge",
      icon: Award
    },
    {
      number: "8+",
      label: "Countries Served",
      description: "Regional presence across West Africa",
      icon: Globe
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our journey of growth, success, and commitment to excellence in procurement and trading services
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-manrope text-3xl text-foreground">{stat.number}</CardTitle>
                  <CardDescription className="text-base font-medium">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                const isLeft = index % 2 === 0
                return (
                  <div key={milestone.year} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {milestone.year}
                            </Badge>
                          </div>
                          <CardTitle className="font-manrope text-lg text-foreground">
                            {milestone.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Certifications & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <Card key={cert.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-manrope text-lg text-foreground">{cert.name}</CardTitle>
                    <CardDescription className="text-base">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">Year</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {cert.year}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {cert.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Future Goals */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Looking Forward
              </h3>
              <p className="text-muted-foreground max-w-4xl mx-auto mb-6">
                As we celebrate our achievements, we remain focused on our future goals: expanding our 
                operations across all ECOWAS member states, implementing cutting-edge technology solutions, 
                and continuing to be the most trusted procurement partner in West Africa.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Regional Expansion</div>
                  <div className="text-sm text-muted-foreground">Cover all ECOWAS countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Digital Innovation</div>
                  <div className="text-sm text-muted-foreground">AI-powered procurement solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Sustainability</div>
                  <div className="text-sm text-muted-foreground">Green procurement practices</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
