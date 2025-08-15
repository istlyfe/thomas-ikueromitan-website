import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Building2, Car, Wheat, Truck, CheckCircle } from "lucide-react"

export function CoverageMap() {
  const regions = [
    {
      name: "North Central",
      states: ["FCT", "Nasarawa", "Niger", "Plateau", "Benue", "Kogi", "Kwara"],
      sectors: ["Building Materials", "Agriculture", "Transport"],
      icon: Building2,
      color: "text-blue-600"
    },
    {
      name: "North East",
      states: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
      sectors: ["Building Materials", "Agriculture", "Transport"],
      icon: Wheat,
      color: "text-orange-600"
    },
    {
      name: "North West",
      states: ["Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara"],
      sectors: ["Building Materials", "Agriculture", "Transport"],
      icon: Truck,
      color: "text-purple-600"
    },
    {
      name: "South East",
      states: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
      sectors: ["Building Materials", "Agriculture", "Transport", "Automobiles"],
      icon: Car,
      color: "text-green-600"
    },
    {
      name: "South South",
      states: ["Akwa Ibom", "Bayelsa", "Cross River", "Delta", "Edo", "Rivers"],
      sectors: ["Building Materials", "Agriculture", "Transport", "Automobiles"],
      icon: Car,
      color: "text-green-600"
    },
    {
      name: "South West",
      states: ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"],
      sectors: ["Building Materials", "Agriculture", "Transport", "Automobiles"],
      icon: Car,
      color: "text-green-600"
    }
  ]

  const coverageStats = [
    {
      number: "36",
      label: "States + FCT",
      description: "Complete nationwide coverage"
    },
    {
      number: "6",
      label: "Geopolitical Zones",
      description: "All regions of Nigeria"
    },
    {
      number: "4",
      label: "Core Sectors",
      description: "Building, Automobiles, Agriculture, Transport"
    },
    {
      number: "500+",
      label: "Projects Completed",
      description: "Across all sectors nationwide"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Nationwide Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We operate across all 36 states of Nigeria and the Federal Capital Territory, 
            providing comprehensive procurement and trading services to businesses nationwide.
          </p>
        </div>

        {/* Coverage Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coverageStats.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
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
          ))}
        </div>

        {/* Regional Coverage */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Regional Coverage & Sector Availability
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => {
              const Icon = region.icon
              return (
                <Card key={region.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className={`h-6 w-6 ${region.color}`} />
                      </div>
                      <div>
                        <CardTitle className="font-manrope text-lg text-foreground">
                          {region.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {region.states.length} States
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">States Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {region.states.map((state) => (
                          <Badge key={state} variant="secondary" className="text-xs">
                            {state}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Sectors Available:</h4>
                      <div className="space-y-1">
                        {region.sectors.map((sector) => (
                          <div key={sector} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            <span className="text-xs text-muted-foreground">{sector}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Coverage Summary */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Complete Nationwide Presence
              </h3>
              <p className="text-muted-foreground max-w-4xl mx-auto mb-6">
                Our nationwide coverage ensures that businesses in every corner of Nigeria have access 
                to reliable procurement and trading services. From Lagos to Sokoto, from Calabar to 
                Maiduguri, we're there to support your business needs.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Nationwide</div>
                  <div className="text-sm text-muted-foreground">All 36 states + FCT</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">International</div>
                  <div className="text-sm text-muted-foreground">Import for automobiles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Future</div>
                  <div className="text-sm text-muted-foreground">ECOWAS expansion</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
