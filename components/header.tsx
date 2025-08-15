"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Home, Building2, Users, Truck, MessageCircle, X } from "lucide-react"

const PHONE_E164 = "+2349168295957"
const WHATSAPP_URL =
  "https://wa.me/2349168295957?text=Hello%20Thomas%20IKueromitan%20and%20Sons%20Nigeria%20Limited%20(LTD)%20%E2%80%94%20I%27d%20like%20to%20send%20an%20inquiry."

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Sectors", href: "/sectors", icon: Building2 },
    { name: "About", href: "/about", icon: Users },
    { name: "Logistics", href: "/logistics", icon: Truck },
    { name: "Contact", href: "/contact", icon: MessageCircle },
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
                <Button variant="ghost" size="sm" aria-label="Open menu" className="h-10 w-10 p-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[380px] p-0">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">TIS</span>
                    </div>
                    <div>
                      <div className="font-manrope font-bold text-lg text-foreground">Thomas Ikueromitan & Sons</div>
                      <div className="text-xs text-muted-foreground tracking-wider">NIGERIA LTD</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 p-6">
                  <nav className="space-y-2">
                    {navigation.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted/50 hover:text-primary transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="h-5 w-5 text-muted-foreground" />
                          <span>{item.name}</span>
                        </Link>
                      )
                    })}
                  </nav>

                  {/* Divider */}
                  <div className="my-6 border-t" />

                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Quick Actions
                    </h3>
                    
                    {/* Send Inquiry (WhatsApp) */}
                    <Button className="w-full justify-start" asChild onClick={() => setIsOpen(false)}>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Send inquiry on WhatsApp"
                        title="Send inquiry on WhatsApp"
                      >
                        <MessageCircle className="h-4 w-4 mr-3" />
                        Send Inquiry
                      </a>
                    </Button>

                    {/* Call Us */}
                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild onClick={() => setIsOpen(false)}>
                      <a href={`tel:${PHONE_E164}`} aria-label="Call us">
                        <Phone className="h-4 w-4 mr-3" />
                        Call Us
                      </a>
                    </Button>
                  </div>

                  {/* Company Info */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="px-4 space-y-2">
                      <div className="text-sm text-muted-foreground">
                        <strong>Phone:</strong> +234 916 829 5957
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Coverage:</strong> Nationwide (36 States + FCT)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Experience:</strong> 8+ Years
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
