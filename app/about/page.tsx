import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompanyStory } from "@/components/about/company-story"
import { MissionVision } from "@/components/about/mission-vision"
import { TeamSection } from "@/components/about/team-section"
import { Achievements } from "@/components/about/achievements"
import { ValuesSection } from "@/components/about/values-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-manrope font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                About <span className="text-primary">Thomas Ikueromitan & Sons</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Over 8 years of excellence in procurement and trading services, connecting businesses 
                to reliable suppliers across Nigeria and West Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <CompanyStory />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Core Values */}
        <ValuesSection />

        {/* Team Section */}
        <TeamSection />

        {/* Achievements & Milestones */}
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
