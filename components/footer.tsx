import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TIS</span>
              </div>
              <div>
                <div className="font-manrope font-bold text-lg">Thomas Ikueromitan & Sons</div>
                <div className="text-xs text-muted tracking-wider">NIGERIA LTD</div>
              </div>
            </div>
            <p className="text-muted text-sm mb-4">
              Reliable procurement and trading services across Nigeria and West Africa.
            </p>
          </div>

          <div>
            <h3 className="font-manrope font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/sectors#building-materials" className="hover:text-background transition-colors">
                  Building Materials
                </Link>
              </li>
              <li>
                <Link href="/sectors#automobile-purchases" className="hover:text-background transition-colors">
                  Automobile Purchases
                </Link>
              </li>
              <li>
                <Link href="/sectors#agriculture" className="hover:text-background transition-colors">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="/sectors#transport-and-haulage" className="hover:text-background transition-colors">
                  Transport & Haulage
                </Link>
              </li>
              <li>
                <Link href="/logistics" className="hover:text-background transition-colors">
                  Logistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-manrope font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-background transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-manrope font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>22 Trinity Avenue, Gbaga, Off Ijede Road, Ikorodu, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+234 916 829 5957</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>support@thomasikueromitan.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mon–Fri: 9:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 text-center text-sm text-muted">
          <p>&copy; 2024 Thomas Ikueromitan and sons Nigeria Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
