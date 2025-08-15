import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Zap } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Mission & Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving growth and development across West Africa through reliable procurement and trading services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Mission */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-manrope text-2xl text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed mb-6">
                To be the leading procurement and trading partner in Nigeria, connecting businesses 
                with reliable suppliers while ensuring quality, efficiency, and cost-effectiveness in 
                every transaction. We currently serve nationwide operations and facilitate international 
                imports for specialized products.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Facilitate seamless procurement processes for businesses of all sizes
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Maintain the highest standards of quality and reliability
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Support economic growth and development in the region
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Build lasting partnerships based on trust and mutual success
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-manrope text-2xl text-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed mb-6">
                To become the most trusted and innovative procurement solutions provider in Nigeria, 
                with future expansion to ECOWAS member states. We aim to drive economic development 
                and create sustainable value for our clients, partners, and communities across West Africa.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Lead digital transformation in procurement across the region
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Expand operations to cover all ECOWAS member states
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Establish strategic partnerships with global suppliers
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Pioneer sustainable and ethical procurement practices
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Purpose */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg border-l-4 border-l-primary">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-manrope text-2xl text-foreground">Our Core Purpose</CardTitle>
              <CardDescription className="text-lg">
                Why we do what we do
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We believe that reliable procurement is the backbone of successful businesses and thriving economies. 
                By connecting quality suppliers with businesses in need, we're not just facilitating transactions—we're 
                building the foundation for growth, development, and prosperity across West Africa. Every project we 
                complete, every supplier we connect, and every client we serve contributes to the economic advancement 
                of our region.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
