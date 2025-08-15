import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Package, Building2, Car, Clock, MapPin, CheckCircle } from "lucide-react"

export function TransportServices() {
  const services = [
    {
      icon: Users,
      title: "Corporate Shuttles",
      description: "Reliable staff transportation for businesses",
      features: [
        "Scheduled pick-up and drop-off",
        "Air-conditioned vehicles",
        "Professional drivers",
        "Flexible timing options",
        "Route optimization"
      ],
      coverage: "Major cities nationwide",
      iconColor: "text-blue-600"
    },
    {
      icon: Package,
      title: "Goods Haulage",
      description: "Secure transportation of goods and materials",
      features: [
        "Heavy-duty trucks",
        "Container transport",
        "Fragile goods handling",
        "Loading and unloading",
        "Insurance coverage"
      ],
      coverage: "Nationwide delivery",
      iconColor: "text-green-600"
    },
    {
      icon: Building2,
      title: "Construction Logistics",
      description: "Specialized transport for building materials",
      features: [
        "Cement and steel transport",
        "Equipment haulage",
        "Site delivery coordination",
        "Heavy machinery transport",
        "Timeline management"
      ],
      coverage: "Construction sites nationwide",
      iconColor: "text-orange-600"
    },
    {
      icon: Car,
      title: "Fleet Management",
      description: "Complete fleet operations and maintenance",
      features: [
        "Vehicle procurement",
        "Maintenance scheduling",
        "Driver training",
        "Fuel management",
        "Performance monitoring"
      ],
      coverage: "Custom fleet solutions",
      iconColor: "text-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Comprehensive Transport Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From corporate shuttles to heavy goods haulage, we provide reliable, 
            secure, and efficient transportation solutions across Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => {
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
                  <CardTitle className="font-manrope text-2xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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

        {/* Service Highlights */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Why Choose Our Transport Services?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Experience</div>
                  <div className="text-sm text-muted-foreground">8+ years in logistics</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Coverage</div>
                  <div className="text-sm text-muted-foreground">All 36 states + FCT</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Reliability</div>
                  <div className="text-sm text-muted-foreground">99% on-time delivery</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
