import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SectorsGrid } from "@/components/sectors-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { CredibilityStrip } from "@/components/credibility-strip"
import { RFQTeaser } from "@/components/rfq-teaser"
import { Footer } from "@/components/footer"
import { WhatsAppFloating } from "@/components/whatsapp-floating"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SectorsGrid />
        <WhyChooseUs />
        <HowItWorks />
        <CredibilityStrip />
        <RFQTeaser />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}
