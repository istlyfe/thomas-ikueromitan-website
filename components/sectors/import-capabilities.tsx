import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Car, CheckCircle, Award, Users, Clock, Shield } from "lucide-react"

export function ImportCapabilities() {
  const importServices = [
    {
      icon: Globe,
      title: "International Sourcing",
      description: "Connect with global suppliers and manufacturers",
      details: [
        "Direct partnerships with international dealers",
        "Access to global vehicle markets",
        "Quality verification at source",
        "Competitive international pricing"
      ],
      iconColor: "text-blue-600"
    },
    {
      icon: Car,
      title: "Pre-Shipment Inspection",
      description: "Quality assurance before vehicles leave source country",
      details: [
        "Professional inspection services",
        "Detailed condition reports",
        "Photographic documentation",
        "Quality certification"
      ],
      iconColor: "text-green-600"
    },
    {
      icon: Shield,
      title: "Customs & Documentation",
      description: "Complete import facilitation and compliance",
      details: [
        "Customs clearance services",
        "Documentation preparation",
        "Import permit applications",
        "Tax and duty calculations"
      ],
      iconColor: "text-purple-600"
    },
    {
      icon: Users,
      title: "Nationwide Distribution",
      description: "Deliver imported vehicles across Nigeria",
      details: [
        "Secure transportation",
        "Real-time tracking",
        "After-sales support",
        "Warranty management"
      ],
      iconColor: "text-orange-600"
    }
  ]

  const importProcess = [
    {
      step: "01",
      title: "Client Consultation",
      description: "Understand requirements and budget",
      icon: Users
    },
    {
      step: "02",
      title: "International Sourcing",
      description: "Find and verify suitable vehicles",
      icon: Globe
    },
    {
      step: "03",
      title: "Pre-Shipment Inspection",
      description: "Quality verification and documentation",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Import Facilitation",
      description: "Customs clearance and logistics",
      icon: Award
    },
    {
      step: "05",
      title: "Nationwide Delivery",
      description: "Secure transportation to client",
      icon: Car
    },
    {
      step: "06",
      title: "After-Sales Support",
      description: "Ongoing assistance and warranty",
      icon: Shield
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            International Import Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While we operate nationwide across Nigeria, our automobile sector includes specialized 
            international import services, bringing global vehicles to Nigerian businesses and individuals.
          </p>
        </div>

        {/* Import Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {importServices.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`h-6 w-6 ${service.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="font-manrope text-lg text-foreground">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Import Process */}
        <div className="mb-16">
          <h3 className="font-manrope font-bold text-2xl text-foreground text-center mb-12">
            Our Import Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importProcess.map((process) => {
              const Icon = process.icon
              return (
                <Card key={process.step} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{process.step}</div>
                    <CardTitle className="font-manrope text-lg text-foreground">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Why Choose Our Import Services */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Why Choose Our Import Services?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Experience</div>
                  <div className="text-sm text-muted-foreground">8+ years in international trade</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Quality</div>
                  <div className="text-sm text-muted-foreground">Pre-shipment inspection guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Support</div>
                  <div className="text-sm text-muted-foreground">End-to-end assistance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
