"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Car, Wheat, Truck, ArrowRight } from "lucide-react"
import Link from "next/link"

const sectors = [
  {
    icon: Building2,
    title: "Building Materials",
    description:
      "Cement, rebar, structural steel, tiles, and roofing with clear specifications and competitive pricing.",
    items: ["Cement (42.5R)", "Rebar (B500B)", "Structural Steel", "Tiles & Ceramics", "Roofing Sheets"],
  },
  {
    icon: Car,
    title: "Automobile Purchases",
    description: "From inspected sedans to fleet pickups, we handle sourcing, import, and clearance.",
    items: ["Sedans & SUVs", "Toyota Hilux", "Fleet Vehicles", "Import Facilitation", "Pre-shipment Inspection"],
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Livestock trading and agricultural produce sourcing across Nigeria.",
    items: ["Livestock Trading", "Agricultural Produce", "Grain & Commodities", "Livestock Feed"],
  },
  {
    icon: Truck,
    title: "Transport & Haulage",
    description: "Passenger transport, staff shuttles, and goods haulage with route planning and dispatch.",
    items: ["Corporate Shuttles", "Staff Transport", "Goods Haulage", "Route Planning", "Fleet Management"],
  },
]

export function SectorsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-foreground mb-4">Our Core Sectors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized procurement and trading services across four key industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <Card key={sector.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-manrope text-xl">{sector.title}</CardTitle>
                  <CardDescription>{sector.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {sector.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/sectors#${sector.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
