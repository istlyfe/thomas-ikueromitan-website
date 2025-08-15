import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

export function RFQTeaser() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-manrope text-3xl text-foreground">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Submit your request for quotation and we'll respond within 1 business day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Company Name" />
                  <Input type="email" placeholder="Email Address" />
                </div>
                <div className="space-y-4">
                  <Input placeholder="Phone Number" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="building-materials">Building Materials</SelectItem>
                      <SelectItem value="automobiles">Automobiles</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="transport-haulage">Transport & Haulage</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Destination" />
                </div>
                <div className="md:col-span-2">
                  <Input placeholder="Describe what you need (items, quantity, specifications)" />
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    Submit RFQ
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                    Chat on WhatsApp Instead
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
