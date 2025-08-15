import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Building2, Users, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Company Overview */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="font-manrope text-2xl text-foreground flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            Company Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Thomas Ikueromitan & Sons Nigeria Limited is a leading procurement and trading company 
            with over 15 years of experience serving businesses across Nigeria and West Africa.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              CAC Registered
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              ISO Compliant
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              ECOWAS Trade
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Contact Details */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="font-manrope text-2xl text-foreground">Contact Details</CardTitle>
          <CardDescription>Get in touch with our team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Office Address</h4>
              <p className="text-muted-foreground">
                22 Trinity Avenue, Gbaga, Off Ijede Road,<br />
                Ikorodu, Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Phone</h4>
              <p className="text-muted-foreground">+234 916 829 5957</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Email</h4>
              <p className="text-muted-foreground">Thomasikueromitan@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Business Hours</h4>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services & Sectors */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="font-manrope text-2xl text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Our Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Building Materials</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Automobiles</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Agriculture</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Transport & Haulage</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Logistics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Import Facilitation</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="font-manrope text-2xl text-foreground flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Why Choose Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">500+ Projects Completed</h4>
                <p className="text-sm text-muted-foreground">Proven track record of successful deliveries</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">50+ Trusted Suppliers</h4>
                <p className="text-sm text-muted-foreground">Vetted network of reliable partners</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">15+ Years Experience</h4>
                <p className="text-sm text-muted-foreground">Deep industry knowledge and expertise</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-0 shadow-lg border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="font-manrope text-xl text-foreground">Need Immediate Assistance?</CardTitle>
          <CardDescription>For urgent procurement needs or emergency support</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Button size="lg" className="w-full mb-3">
              <Phone className="mr-2 h-4 w-4" />
              Call Emergency Line
            </Button>
            <p className="text-xs text-muted-foreground">
              24/7 support available for urgent requests
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
