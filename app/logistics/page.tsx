import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LogisticsHero } from "@/components/logistics/logistics-hero"
import { TransportServices } from "@/components/logistics/transport-services"
import { FleetManagement } from "@/components/logistics/fleet-management"
import { RouteOptimization } from "@/components/logistics/route-optimization"
import { WarehousingSolutions } from "@/components/logistics/warehousing-solutions"
import { TrackingTechnology } from "@/components/logistics/tracking-technology"
import { CoverageMap } from "@/components/logistics/coverage-map"

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <LogisticsHero />

        {/* Transport Services */}
        <TransportServices />

        {/* Fleet Management */}
        <FleetManagement />

        {/* Route Optimization */}
        <RouteOptimization />

        {/* Warehousing Solutions */}
        <WarehousingSolutions />

        {/* Tracking Technology */}
        <TrackingTechnology />

        {/* Coverage Map */}
        <CoverageMap />
      </main>
      <Footer />
    </div>
  )
}
