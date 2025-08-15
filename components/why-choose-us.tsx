import { Shield, Clock, DollarSign, CheckCircle, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Vetted Supplier Network",
    description: "All our suppliers are thoroughly vetted for quality, reliability, and compliance standards.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear, competitive pricing with no hidden fees. You know exactly what you're paying for.",
  },
  {
    icon: CheckCircle,
    title: "Compliance & Documentation",
    description: "Full regulatory compliance with proper documentation for all transactions and shipments.",
  },
  {
    icon: Clock,
    title: "On-time Delivery",
    description: "Reliable delivery schedules with real-time tracking and proactive communication.",
  },
  {
    icon: Headphones,
    title: "After-sales Support",
    description: "24/7 customer support and after-sales service to ensure your complete satisfaction.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Why Choose Thomas Ikueromitan & Sons?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Over 8 years of experience delivering reliable procurement and trading services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-manrope font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
