"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

const PHONE_E164 = "+2349168295957"
const WHATSAPP_URL =
  "https://wa.me/2349168295957?text=Hello%20Thomas%20IKueromitan%20and%20Sons%20Nigeria%20Limited%20(LTD)%20%E2%80%94%20I%27d%20like%20to%20send%20an%20inquiry."

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sectors", href: "/sectors" },
    { name: "About", href: "/about" },
    { name: "Logistics", href: "/logistics" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TIS</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-manrope font-bold text-lg text-foreground">Thomas Ikueromitan & Sons</div>
                <div className="text-xs text-muted-foreground tracking-wider">NIGERIA LTD</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop actions: ONLY WhatsApp + Call */}
          <div className="hidden sm:flex items-center space-x-2">
            {/* Send Inquiry (opens WhatsApp) */}
            <Button size="sm" asChild>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send inquiry on WhatsApp"
                title="Send inquiry on WhatsApp"
              >
                Send Inquiry
              </a>
            </Button>

            {/* Call Us */}
            <Button variant="outline" size="sm" asChild className="bg-transparent">
              <a href={`tel:${PHONE_E164}`} aria-label="Call us">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">TIS</span>
                  </div>
                  <div>
                    <div className="font-manrope font-bold text-lg text-foreground">Thomas Ikueromitan & Sons</div>
                    <div className="text-xs text-muted-foreground tracking-wider">NIGERIA LTD</div>
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                {/* Mobile actions: ONLY WhatsApp + Call */}
                  <div className="pt-4 space-y-2">
                    {/* Send Inquiry (WhatsApp) */}
                    <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Send inquiry on WhatsApp"
                        title="Send inquiry on WhatsApp"
                      >
                        Send Inquiry
                      </a>
                    </Button>

                    {/* Call Us */}
                    <Button variant="outline" className="w-full bg-transparent" asChild onClick={() => setIsOpen(false)}>
                      <a href={`tel:${PHONE_E164}`} aria-label="Call us">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
