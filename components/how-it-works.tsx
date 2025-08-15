import { MessageSquare, Search, FileCheck, Truck } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Tell us what you need",
    description: "Share your specifications, quantity, and destination requirements with our team.",
  },
  {
    icon: Search,
    title: "We source & quote",
    description: "We find vetted suppliers and provide you with competitive quotes and clear terms.",
  },
  {
    icon: FileCheck,
    title: "You approve & pay",
    description: "Review and approve the quote, then proceed with secure payment through documented channels.",
  },
  {
    icon: Truck,
    title: "We deliver",
    description: "Track your order in real-time and receive your goods on schedule with full documentation.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent process from inquiry to delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="text-center relative">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 relative">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">{index + 1}</span>
                  </div>
                </div>
                <h3 className="font-manrope font-semibold text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
