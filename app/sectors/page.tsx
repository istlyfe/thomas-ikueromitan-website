import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectorsOverview } from "@/components/sectors/sectors-overview"
import { SectorHighlights } from "@/components/sectors/sector-highlights"
import { ImportCapabilities } from "@/components/sectors/import-capabilities"
import { CoverageMap } from "@/components/sectors/coverage-map"
import { HashScrollHandler } from "@/components/sectors/hash-scroll-handler"
import { Suspense } from "react"

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={null}>
        <HashScrollHandler />
      </Suspense>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-manrope font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Our <span className="text-primary">Business Sectors</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive procurement and trading services across Nigeria, with specialized 
                international import capabilities for select products.
              </p>
            </div>
          </div>
        </section>

        {/* Sectors Overview */}
        <SectorsOverview />

        {/* Sector Highlights */}
        <SectorHighlights />

        {/* Import Capabilities */}
        <ImportCapabilities />

        {/* Coverage Map */}
        <CoverageMap />
      </main>
      <Footer />
    </div>
  )
}
