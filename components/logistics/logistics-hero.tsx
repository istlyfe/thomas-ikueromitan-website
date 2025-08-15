import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, MapPin, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function LogisticsHero() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-manrope font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Complete <span className="text-primary">Logistics Solutions</span> Across Nigeria
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From corporate shuttles to nationwide goods haulage, we provide comprehensive 
            transport and logistics services with real-time tracking and route optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Logistics Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/sectors#transport-haulage">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Transport Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Nationwide Coverage</h3>
              <p className="text-sm text-muted-foreground">All 36 states + FCT</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock monitoring</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure Transport</h3>
              <p className="text-sm text-muted-foreground">Insurance & safety protocols</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
