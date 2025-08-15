import { Badge } from "@/components/ui/badge"
import { Award, Globe, Users } from "lucide-react"
import Image from "next/image"

export function CredibilityStrip() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-manrope font-bold text-2xl text-foreground mb-4">Trusted & Certified</h2>
          <p className="text-muted-foreground">Registered with the Corporate Affairs Commission (CAC), Nigeria</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="text-center">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Image 
                src="/cac_logo.svg" 
                alt="CAC — Corporate Affairs Commission (Nigeria)" 
                width={64} 
                height={64} 
                className="object-contain"
              />
            </div>
            <Badge variant="secondary" className="text-xs">
              CAC Registered
            </Badge>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <Badge variant="secondary" className="text-xs">
              ISO Compliant
            </Badge>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <Badge variant="secondary" className="text-xs">
              ECOWAS Trade
            </Badge>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <Badge variant="secondary" className="text-xs">
              500+ Clients
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
