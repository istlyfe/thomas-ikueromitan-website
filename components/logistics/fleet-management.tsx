import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Car, Users, Wrench, Fuel, BarChart3, CheckCircle } from "lucide-react"

export function FleetManagement() {
  const fleetServices = [
    {
      icon: Truck,
      title: "Heavy-Duty Trucks",
      description: "Large capacity vehicles for heavy goods transport",
      specs: [
        "Load capacity: 10-30 tons",
        "Container compatibility",
        "Flatbed and box options",
        "All-terrain capability",
        "GPS tracking installed"
      ],
      count: "25+ vehicles",
      iconColor: "text-blue-600"
    },
    {
      icon: Car,
      title: "Passenger Vehicles",
      description: "Comfortable transport for staff and corporate clients",
      specs: [
        "Air-conditioned cabins",
        "Seating: 12-25 passengers",
        "Luxury and standard options",
        "Regular maintenance",
        "Professional drivers"
      ],
      count: "15+ vehicles",
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "Driver Management",
      description: "Professional driver training and supervision",
      specs: [
        "Licensed and certified drivers",
        "Regular training programs",
        "Safety protocols",
        "Performance monitoring",
        "24/7 support"
      ],
      count: "40+ drivers",
      iconColor: "text-orange-600"
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive vehicle maintenance and repair",
      specs: [
        "Scheduled maintenance",
        "Emergency repairs",
        "Parts replacement",
        "Quality assurance",
        "Service history tracking"
      ],
      count: "In-house team",
      iconColor: "text-purple-600"
    }
  ]

  const managementFeatures = [
    {
      icon: Fuel,
      title: "Fuel Management",
      description: "Efficient fuel consumption monitoring and optimization"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time fleet performance data and reporting"
    },
    {
      icon: Truck,
      title: "Route Optimization",
      description: "AI-powered route planning for maximum efficiency"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "24/7 customer service and tracking updates"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Professional Fleet Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our modern fleet of 40+ vehicles is managed with cutting-edge technology, 
            ensuring reliability, safety, and efficiency for all your transport needs.
          </p>
        </div>

        {/* Fleet Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {fleetServices.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${service.iconColor}`} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {service.count}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="font-manrope text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Specifications:</h4>
                    <ul className="space-y-2">
                      {service.specs.map((spec) => (
                        <li key={spec} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Management Features */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Advanced Management Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-manrope text-lg text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Fleet Statistics */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Fleet Statistics
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Total Vehicles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Heavy Trucks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Passenger Vehicles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Uptime Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
