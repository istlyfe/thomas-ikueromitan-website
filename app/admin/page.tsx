import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSubmissions } from "@/components/admin/contact-submissions"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="font-manrope font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Admin Dashboard
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Manage contact form submissions and send professional replies
              </p>
            </div>

            {/* Contact Submissions */}
            <ContactSubmissions />
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
