import type { Metadata } from "next"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Kontak - Finwest Consulting",
  description:
    "Hubungi Finwest Consulting untuk konsultasi keuangan dan bisnis. Kami siap membantu mengembangkan bisnis Anda.",
}

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mari diskusikan bagaimana kami dapat membantu mengembangkan bisnis Anda
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
