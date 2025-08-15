import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap, Award, Heart, Globe } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our dealings.",
      details: [
        "Honest communication with clients and partners",
        "Transparent pricing and terms",
        "Ethical business practices",
        "Compliance with all regulations"
      ]
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building long-term relationships based on mutual trust and shared success.",
      details: [
        "Collaborative approach to problem-solving",
        "Long-term relationship building",
        "Mutual benefit focus",
        "Trust-based partnerships"
      ]
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for the highest quality standards in every service we provide and every project we undertake.",
      details: [
        "Quality assurance in all processes",
        "Continuous improvement",
        "Attention to detail",
        "Professional standards"
      ]
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Our clients can count on us to deliver on our promises, on time and within budget.",
      details: [
        "On-time delivery commitment",
        "Budget adherence",
        "Quality guarantee",
        "24/7 support availability"
      ]
    },
    {
      icon: Heart,
      title: "Community",
      description: "We're committed to contributing to the economic development and well-being of our communities.",
      details: [
        "Local business support",
        "Job creation",
        "Economic development",
        "Community engagement"
      ]
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We continuously seek new and better ways to serve our clients and improve our processes.",
      details: [
        "Technology adoption",
        "Process optimization",
        "Creative solutions",
        "Future-focused approach"
      ]
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The fundamental principles that guide our business decisions and shape our company culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-manrope text-xl text-foreground">{value.title}</CardTitle>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {value.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values Statement */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <h3 className="font-manrope font-semibold text-xl text-foreground mb-4">
                Living Our Values
              </h3>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                These values aren't just words on paper—they're the foundation of everything we do. 
                From the way we interact with clients and partners to how we make business decisions, 
                our core values guide us in building a company that not only succeeds financially but 
                also makes a positive impact on the communities we serve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
