import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-manrope font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Reliable sourcing in <span className="text-primary">building materials</span>,{" "}
            <span className="text-primary">automobiles</span>, and <span className="text-primary">agriculture</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We connect businesses to vetted suppliers and deliver end-to-end logistics from quote to off-loading across
            Nigeria and West Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Trusted Suppliers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
