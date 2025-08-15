import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Fuel, TrendingUp, Route, CheckCircle } from "lucide-react"

export function RouteOptimization() {
  const optimizationFeatures = [
    {
      icon: Route,
      title: "AI-Powered Routing",
      description: "Advanced algorithms for optimal route planning",
      benefits: [
        "Reduced travel time by 25%",
        "Fuel cost optimization",
        "Traffic pattern analysis",
        "Real-time route updates",
        "Multi-stop optimization"
      ],
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Efficient scheduling and delivery timing",
      benefits: [
        "Precise arrival estimates",
        "Buffer time planning",
        "Delivery window optimization",
        "Customer notification system",
        "Performance tracking"
      ],
      iconColor: "text-green-600"
    },
    {
      icon: Fuel,
      title: "Fuel Efficiency",
      description: "Smart routing to minimize fuel consumption",
      benefits: [
        "Fuel consumption tracking",
        "Eco-friendly routes",
        "Cost optimization",
        "Emission reduction",
        "Sustainability focus"
      ],
      iconColor: "text-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Data-driven insights for continuous improvement",
      benefits: [
        "Route efficiency metrics",
        "Driver performance data",
        "Cost analysis reports",
        "Trend identification",
        "Optimization recommendations"
      ],
      iconColor: "text-purple-600"
    }
  ]

  const routeTypes = [
    {
      type: "Local Routes",
      description: "Intra-city and metropolitan area transport",
      coverage: "Major cities nationwide",
      vehicles: "Passenger vehicles, small trucks"
    },
    {
      type: "Regional Routes",
      description: "Inter-city and state-to-state transport",
      coverage: "Adjacent states and regions",
      vehicles: "Medium trucks, passenger vehicles"
    },
    {
      type: "Long-Distance Routes",
      description: "Cross-country and nationwide transport",
      coverage: "All 36 states + FCT",
      vehicles: "Heavy-duty trucks, specialized vehicles"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Smart Route Optimization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered route optimization system ensures efficient, cost-effective, 
            and timely deliveries across Nigeria with real-time updates and performance tracking.
          </p>
        </div>

        {/* Optimization Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {optimizationFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="font-manrope text-xl text-foreground">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Route Types */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Route Types & Coverage
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {routeTypes.map((route) => (
              <Card key={route.type} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-manrope text-lg text-foreground">
                    {route.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    {route.description}
                  </p>
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Coverage</div>
                    <div className="text-xs text-muted-foreground">{route.coverage}</div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Vehicles</div>
                    <div className="text-xs text-muted-foreground">{route.vehicles}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Optimization Results */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Route Optimization Results
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Time Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20%</div>
                  <div className="text-sm text-muted-foreground">Fuel Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Route Monitoring</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
