import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Award, Users, Globe, CheckCircle, Star } from "lucide-react"

export function SectorHighlights() {
  const highlights = [
    {
      sector: "Building Materials",
      achievements: [
        "Supplied materials for 200+ construction projects",
        "Partnerships with leading cement manufacturers",
        "Quality assurance certification for all materials",
        "Same-day delivery in major cities"
      ],
      capabilities: "Nationwide supply chain with regional warehouses",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      sector: "Automobile Purchases",
      achievements: [
        "Imported 500+ vehicles from international markets",
        "Pre-shipment inspection in source countries",
        "Customs clearance and documentation",
        "Nationwide delivery and after-sales support"
      ],
      capabilities: "International sourcing + nationwide distribution",
      icon: Globe,
      color: "text-green-600"
    },
    {
      sector: "Agriculture",
      achievements: [
        "Traded livestock across 300+ farms in Nigeria",
        "Established supply chain for agricultural produce",
        "Partnerships with livestock farmers and markets",
        "Quality assurance for livestock and produce"
      ],
      capabilities: "Nationwide livestock trading and agricultural produce",
      icon: Award,
      color: "text-orange-600"
    },
    {
      sector: "Transport & Haulage",
      achievements: [
        "Operate in all 36 states + FCT",
        "Fleet of 50+ vehicles for nationwide delivery",
        "Real-time tracking and route optimization",
        "24/7 customer support and monitoring"
      ],
      capabilities: "Complete nationwide logistics coverage",
      icon: Users,
      color: "text-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Sector Highlights & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each sector demonstrates our commitment to excellence and nationwide coverage, 
            with specialized international capabilities where needed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {highlights.map((highlight) => {
            const Icon = highlight.icon
            // Create ID from sector name for hash navigation
            const sectorId = highlight.sector.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
            return (
              <Card key={highlight.sector} id={sectorId} className="border-0 shadow-lg hover:shadow-xl transition-shadow scroll-mt-20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`h-6 w-6 ${highlight.color}`} />
                    </div>
                    <div>
                      <CardTitle className="font-manrope text-xl text-foreground">
                        {highlight.sector}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {highlight.capabilities}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Star className="h-4 w-4 text-primary mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {highlight.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Overall Statistics */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="font-manrope text-2xl text-foreground">
                Nationwide Impact
              </CardTitle>
              <CardDescription>
                Our reach across Nigeria's business landscape
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">36+</div>
                  <div className="text-sm text-muted-foreground">States Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Trusted Suppliers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
