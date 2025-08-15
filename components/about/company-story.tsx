import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Globe, Award, TrendingUp } from "lucide-react"

export function CompanyStory() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted partner in procurement and trading across West Africa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-manrope font-bold text-2xl text-foreground mb-4">
                A Legacy of Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2009, Thomas Ikueromitan & Sons Nigeria Limited began as a small family business 
                with a vision to bridge the gap between quality suppliers and businesses in need of reliable 
                procurement services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a local trading operation has grown into a comprehensive procurement and 
                logistics company serving clients across Nigeria and the broader West African region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to have facilitated over 500 successful projects, built relationships 
                with 50+ trusted suppliers, and established ourselves as a reliable partner for businesses 
                seeking quality materials and services.
              </p>
            </div>

            {/* Key Milestones */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">2009</div>
                <div className="text-sm text-muted-foreground">Company Founded</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">2015</div>
                <div className="text-sm text-muted-foreground">First Major Contract</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">2019</div>
                <div className="text-sm text-muted-foreground">Regional Expansion</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">500+ Projects</div>
              </div>
            </div>
          </div>

          {/* Stats & Achievements */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-manrope text-xl text-foreground flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Growth Journey
                </CardTitle>
                <CardDescription>
                  Our key achievements over the years
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    500+
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Trusted Suppliers</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    50+
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Years Experience</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    15+
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Countries Served</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    8+
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* What We Do */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="font-manrope text-xl text-foreground">
                  What We Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Building Materials Procurement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Supplier Network Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">International Trade Facilitation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Quality Assurance & Compliance</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
