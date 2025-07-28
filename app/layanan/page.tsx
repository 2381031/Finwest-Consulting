import type { Metadata } from "next"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { BarChart3, TrendingUp, Calculator, PieChart, Target, Users, Briefcase, LineChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Layanan - Finwest Consulting",
  description: "Layanan konsultasi keuangan dan bisnis profesional untuk UMKM, perusahaan menengah, dan startup.",
}

export default function LayananPage() {
  const financialServices = [
    {
      icon: <Calculator size={32} />,
      title: "Perencanaan Keuangan Strategis",
      description: "Menyusun rencana keuangan jangka pendek dan panjang yang selaras dengan tujuan bisnis Anda.",
    },
    {
      icon: <PieChart size={32} />,
      title: "Pengelolaan Arus Kas",
      description: "Optimalisasi cash flow untuk memastikan likuiditas dan stabilitas keuangan perusahaan.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Optimalisasi Profitabilitas",
      description: "Analisis mendalam untuk meningkatkan margin keuntungan dan efisiensi biaya operasional.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Analisis Kinerja Keuangan",
      description: "Evaluasi komprehensif terhadap kesehatan finansial dan rekomendasi perbaikan.",
    },
  ]

  const businessServices = [
    {
      icon: <Target size={32} />,
      title: "Strategi Manajemen Bisnis",
      description: "Pengembangan strategi manajemen yang efektif untuk meningkatkan produktivitas dan kinerja.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Perencanaan Ekspansi Usaha",
      description: "Strategi pertumbuhan bisnis yang terukur dan berkelanjutan untuk pasar baru.",
    },
    {
      icon: <Users size={32} />,
      title: "Efisiensi Operasional",
      description: "Optimalisasi proses bisnis untuk meningkatkan efisiensi dan mengurangi pemborosan.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Pengambilan Keputusan Berbasis Data",
      description: "Implementasi sistem analitik untuk mendukung keputusan strategis yang tepat.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Kami</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan keuangan dan bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Financial Consulting */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center">
                <BarChart3 className="text-white" size={40} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Konsultasi Keuangan</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Perencanaan keuangan strategis, pengelolaan arus kas yang efektif, dan optimalisasi profitabilitas untuk
              pertumbuhan bisnis yang berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Consulting */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center">
                <TrendingUp className="text-white" size={40} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Konsultasi Bisnis</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Solusi strategis untuk manajemen yang efektif, ekspansi usaha yang terencana, efisiensi operasional, dan
              pengambilan keputusan berbasis data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Mengembangkan Bisnis Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan keuangan dan bisnis Anda dengan tim ahli kami. Mari wujudkan pertumbuhan
            berkelanjutan untuk perusahaan Anda.
          </p>
          <a
            href="/kontak"
            className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
