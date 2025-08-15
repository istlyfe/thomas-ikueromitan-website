import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-manrope font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your procurement journey? Contact us today for reliable sourcing solutions across Nigeria and West Africa.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <MapSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
