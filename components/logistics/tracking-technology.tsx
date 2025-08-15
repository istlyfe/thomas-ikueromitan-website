import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Smartphone, BarChart3, Bell, MapPin, CheckCircle } from "lucide-react"

export function TrackingTechnology() {
  const trackingFeatures = [
    {
      icon: Satellite,
      title: "GPS Tracking",
      description: "Real-time location monitoring for all vehicles",
      capabilities: [
        "Live GPS coordinates",
        "Route history tracking",
        "Speed monitoring",
        "Geofencing alerts",
        "Location sharing"
      ],
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Customer portal for real-time updates",
      capabilities: [
        "Live tracking interface",
        "Delivery notifications",
        "Status updates",
        "Contact driver",
        "Route visualization"
      ],
      iconColor: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive performance monitoring",
      capabilities: [
        "Real-time metrics",
        "Performance reports",
        "Cost analysis",
        "Efficiency tracking",
        "Trend analysis"
      ],
      iconColor: "text-orange-600"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Automated alerts and updates",
      capabilities: [
        "Delivery status alerts",
        "Route deviation warnings",
        "Maintenance reminders",
        "Performance notifications",
        "Custom alert settings"
      ],
      iconColor: "text-purple-600"
    }
  ]

  const technologySpecs = [
    {
      spec: "GPS Accuracy",
      value: "±3 meters",
      description: "High-precision location tracking"
    },
    {
      spec: "Update Frequency",
      value: "Every 30 seconds",
      description: "Real-time location updates"
    },
    {
      spec: "Coverage",
      value: "Nationwide",
      description: "All 36 states + FCT"
    },
    {
      spec: "Data Retention",
      value: "2 years",
      description: "Comprehensive history tracking"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Advanced Tracking Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art GPS tracking and real-time monitoring systems provide 
            complete visibility into your shipments with instant updates and notifications.
          </p>
        </div>

        {/* Tracking Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {trackingFeatures.map((feature) => {
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
                    <h4 className="font-semibold text-foreground mb-3">Capabilities:</h4>
                    <ul className="space-y-2">
                      {feature.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Technology Specifications */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Technology Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologySpecs.map((tech) => (
              <Card key={tech.spec} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-manrope text-lg text-foreground">
                    {tech.spec}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-2xl font-bold text-primary">{tech.value}</div>
                  <p className="text-muted-foreground text-sm">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Benefits */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Customer Benefits
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Real-Time</div>
                  <div className="text-sm text-muted-foreground">Live tracking updates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Transparency</div>
                  <div className="text-sm text-muted-foreground">Complete visibility</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Peace of Mind</div>
                  <div className="text-sm text-muted-foreground">Always know where your goods are</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
