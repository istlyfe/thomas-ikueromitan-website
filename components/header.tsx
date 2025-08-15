"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

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
                <div className="text-xs text-muted-foreground tracking-wider">
                  NIGERIA LTD
                </div>
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

          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden sm:inline-flex">
              Request a Quote
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
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
                    <div className="text-xs text-muted-foreground tracking-wider">
                      NIGERIA LTD
                    </div>
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
                  <div className="pt-4 space-y-2">
                    <Button className="w-full">Request a Quote</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
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
