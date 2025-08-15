import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Truck, Warehouse, Users, CheckCircle } from "lucide-react"

export function CoverageMap() {
  const logisticsHubs = [
    {
      region: "South West",
      hub: "Lagos",
      services: ["Main Distribution Center", "International Port Access", "Corporate Shuttles"],
      coverage: "Lagos, Ogun, Oyo, Osun, Ondo, Ekiti",
      icon: Truck,
      color: "text-blue-600"
    },
    {
      region: "North Central",
      hub: "Abuja",
      services: ["Federal Capital Operations", "Government Logistics", "Regional Distribution"],
      coverage: "FCT, Niger, Kogi, Kwara, Nasarawa, Plateau, Benue",
      icon: Warehouse,
      color: "text-green-600"
    },
    {
      region: "North West",
      hub: "Kano",
      services: ["Northern Distribution", "Agricultural Logistics", "Cross-border Operations"],
      coverage: "Kano, Kaduna, Katsina, Jigawa, Kebbi, Sokoto, Zamfara",
      icon: MapPin,
      color: "text-orange-600"
    },
    {
      region: "South South",
      hub: "Port Harcourt",
      services: ["Oil & Gas Logistics", "Port Operations", "Heavy Equipment Transport"],
      coverage: "Rivers, Delta, Bayelsa, Akwa Ibom, Cross River, Edo",
      icon: Truck,
      color: "text-purple-600"
    }
  ]

  const logisticsStats = [
    {
      number: "36+",
      label: "States Covered",
      description: "Complete nationwide presence"
    },
    {
      number: "15+",
      label: "Warehouse Locations",
      description: "Strategic storage facilities"
    },
    {
      number: "40+",
      label: "Fleet Vehicles",
      description: "Modern transport fleet"
    },
    {
      number: "24/7",
      label: "Operations",
      description: "Round-the-clock service"
    }
  ]

  const serviceAreas = [
    {
      type: "Local Transport",
      coverage: "Intra-city operations",
      vehicles: "Passenger vehicles, small trucks",
      cities: "All major cities"
    },
    {
      type: "Regional Transport",
      coverage: "Inter-city operations",
      vehicles: "Medium trucks, passenger vehicles",
      cities: "Adjacent states and regions"
    },
    {
      type: "Long-Distance Transport",
      coverage: "Cross-country operations",
      vehicles: "Heavy-duty trucks, specialized vehicles",
      cities: "All 36 states + FCT"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Nationwide Logistics Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategic logistics hubs across Nigeria ensure efficient, reliable, 
            and cost-effective transport and warehousing services nationwide.
          </p>
        </div>

        {/* Logistics Hubs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {logisticsHubs.map((hub) => {
            const Icon = hub.icon
            return (
              <Card key={hub.region} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${hub.color}`} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {hub.hub}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="font-manrope text-xl text-foreground">
                    {hub.region}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {hub.hub} Hub
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Services:</h4>
                    <ul className="space-y-2">
                      {hub.services.map((service) => (
                        <li key={service} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Coverage Area:</div>
                    <div className="text-xs text-muted-foreground">{hub.coverage}</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Service Coverage Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Card key={area.type} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-manrope text-lg text-foreground">
                    {area.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Coverage</div>
                    <div className="text-xs text-muted-foreground">{area.coverage}</div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Vehicles</div>
                    <div className="text-xs text-muted-foreground">{area.vehicles}</div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Cities</div>
                    <div className="text-xs text-muted-foreground">{area.cities}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Logistics Statistics */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Logistics Network Statistics
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                {logisticsStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
