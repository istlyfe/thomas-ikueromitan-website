import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Car } from "lucide-react"

export function MapSection() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">
          Find Our Office
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Visit us at our office in Ikorodu, Lagos. We're conveniently located and easily accessible from major areas in Lagos.
        </p>
      </div>

      {/* Map and Location Info */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-muted/30">
              <CardTitle className="font-manrope text-xl text-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Office Location
              </CardTitle>
              <CardDescription>
                22 Trinity Avenue, Gbaga, Off Ijede Road, Ikorodu, Lagos, Nigeria
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.5!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thomas Ikueromitan & Sons Office Location"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details */}
        <div className="space-y-6">
          {/* Address Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-manrope text-lg text-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Office Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                22 Trinity Avenue, Gbaga<br />
                Off Ijede Road<br />
                Ikorodu, Lagos<br />
                Nigeria
              </p>
            </CardContent>
          </Card>

          {/* Directions Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-manrope text-lg text-foreground flex items-center gap-2">
                <Navigation className="h-5 w-5 text-primary" />
                How to Get Here
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  From Lagos Island: Take Ikorodu Road towards Ikorodu
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  From Ikeja: Take Obafemi Awolowo Way to Ikorodu
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Turn right onto Ijede Road at Ikorodu Roundabout
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Look for Trinity Avenue on your left
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Transportation Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-manrope text-lg text-foreground flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                Transportation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground text-sm">Public Transport</h4>
                <p className="text-sm text-muted-foreground">
                  Buses and minibuses from Lagos Island and Ikeja to Ikorodu
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Parking</h4>
                <p className="text-sm text-muted-foreground">
                  Free parking available at our office premises
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Accessibility</h4>
                <p className="text-sm text-muted-foreground">
                  Wheelchair accessible entrance and facilities
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Information */}
      <div className="text-center">
        <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
          <CardContent className="py-8">
            <h3 className="font-manrope font-semibold text-xl text-foreground mb-3">
              Planning a Visit?
            </h3>
            <p className="text-muted-foreground mb-4">
              We recommend scheduling an appointment to ensure we can give you our full attention. 
              However, walk-ins are also welcome during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Schedule Appointment
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Download Directions
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
