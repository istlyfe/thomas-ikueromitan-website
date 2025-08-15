import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Car, Wheat, Truck, Globe, Award, Users, CheckCircle } from "lucide-react"

export function SectorsOverview() {
  const sectors = [
    {
      icon: Building2,
      title: "Building Materials",
      description: "Comprehensive procurement of construction materials across Nigeria",
      coverage: "Nationwide",
      services: [
        "Cement & Concrete Products",
        "Steel & Reinforcement Bars", 
        "Tiles & Ceramics",
        "Roofing Materials",
        "Electrical & Plumbing Supplies"
      ],
      currentStatus: "Active nationwide operations",
      iconColor: "text-blue-600"
    },
    {
      icon: Car,
      title: "Automobile Purchases",
      description: "International import facilitation and nationwide distribution",
      coverage: "International Import + Nationwide Distribution",
      services: [
        "Sedans & SUVs",
        "Commercial Vehicles",
        "Fleet Management",
        "Import Facilitation",
        "Pre-shipment Inspection"
      ],
      currentStatus: "International import + nationwide distribution",
      iconColor: "text-green-600"
    },
    {
      icon: Wheat,
      title: "Agriculture",
      description: "Livestock trading and agricultural produce sourcing across Nigeria",
      coverage: "Nationwide",
      services: [
        "Livestock Trading",
        "Agricultural Produce",
        "Grain & Commodities",
        "Livestock Feed",
        "Future: Fertilizers & Equipment"
      ],
      currentStatus: "Active nationwide operations",
      iconColor: "text-orange-600"
    },
    {
      icon: Truck,
      title: "Transport & Haulage",
      description: "Comprehensive logistics solutions across Nigeria",
      coverage: "Nationwide",
      services: [
        "Freight Transportation",
        "Warehousing Solutions",
        "Route Optimization",
        "Fleet Management",
        "Last-Mile Delivery"
      ],
      currentStatus: "Active nationwide operations",
      iconColor: "text-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Our Core Business Sectors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We currently operate nationwide across Nigeria, serving businesses in all 36 states 
            and the Federal Capital Territory. Our automobile sector includes international import 
            capabilities for global sourcing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon
            const sectorId = sector.title.toLowerCase().replace(/\s+/g, '-')
            return (
              <Card key={sector.title} id={sectorId} className="border-0 shadow-lg hover:shadow-xl transition-shadow scroll-mt-20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${sector.iconColor}`} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {sector.coverage}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="font-manrope text-2xl text-foreground">
                    {sector.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Services Offered:</h4>
                    <ul className="space-y-2">
                      {sector.services.map((service) => (
                        <li key={service} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {sector.currentStatus}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Coverage Summary */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Current Coverage & Future Plans
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Current</div>
                  <div className="text-sm text-muted-foreground">Nationwide across Nigeria</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">International</div>
                  <div className="text-sm text-muted-foreground">Import facilitation for automobiles</div>
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
