import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Warehouse, Package, Shield, Clock, MapPin, CheckCircle } from "lucide-react"

export function WarehousingSolutions() {
  const warehousingServices = [
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description: "Secure warehousing facilities across Nigeria",
      features: [
        "Climate-controlled storage",
        "Heavy-duty racking systems",
        "24/7 security monitoring",
        "Fire suppression systems",
        "Insurance coverage"
      ],
      coverage: "Major cities nationwide",
      iconColor: "text-blue-600"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Comprehensive stock control and tracking",
      features: [
        "Real-time inventory tracking",
        "Automated reorder systems",
        "Stock level monitoring",
        "Quality control checks",
        "Reporting and analytics"
      ],
      coverage: "All warehouse locations",
      iconColor: "text-green-600"
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "Advanced security measures and protocols",
      features: [
        "CCTV surveillance",
        "Access control systems",
        "Security personnel",
        "Alarm systems",
        "Regular security audits"
      ],
      coverage: "All facilities",
      iconColor: "text-orange-600"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock warehouse operations",
      features: [
        "Extended operating hours",
        "Emergency access",
        "Night shift operations",
        "Weekend availability",
        "Holiday operations"
      ],
      coverage: "Select locations",
      iconColor: "text-purple-600"
    }
  ]

  const facilityTypes = [
    {
      type: "General Warehousing",
      capacity: "1,000 - 10,000 sq ft",
      suitable: "General goods, electronics, textiles",
      locations: "Lagos, Abuja, Kano, Port Harcourt"
    },
    {
      type: "Cold Storage",
      capacity: "500 - 5,000 sq ft",
      suitable: "Perishables, pharmaceuticals, food items",
      locations: "Lagos, Abuja, Kano"
    },
    {
      type: "Heavy Equipment Storage",
      capacity: "5,000 - 20,000 sq ft",
      suitable: "Construction equipment, machinery, vehicles",
      locations: "Lagos, Abuja, Port Harcourt"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Warehousing & Storage Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure, well-equipped warehousing facilities across Nigeria with advanced 
            inventory management systems and 24/7 security monitoring.
          </p>
        </div>

        {/* Warehousing Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {warehousingServices.map((service) => {
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
                        {service.coverage}
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
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Facility Types */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Facility Types & Capacities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {facilityTypes.map((facility) => (
              <Card key={facility.type} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Warehouse className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-manrope text-lg text-foreground">
                    {facility.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Capacity</div>
                    <div className="text-xs text-muted-foreground">{facility.capacity}</div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Suitable For</div>
                    <div className="text-xs text-muted-foreground">{facility.suitable}</div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Locations</div>
                    <div className="text-xs text-muted-foreground">{facility.locations}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Warehousing Statistics */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Warehousing Capabilities
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Warehouse Locations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100,000+</div>
                  <div className="text-sm text-muted-foreground">Total Sq Ft</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Security Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
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
