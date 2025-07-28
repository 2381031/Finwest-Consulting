import type { Metadata } from "next"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Tentang Kami - Finwest Consulting",
  description:
    "Pelajari lebih lanjut tentang Finwest Consulting, visi, misi, dan komitmen kami dalam memberikan solusi keuangan dan bisnis terbaik.",
}

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Finwest Consulting</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mitra strategis terpercaya untuk pertumbuhan bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Siapa Kami</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Finwest Consulting adalah perusahaan konsultan keuangan dan bisnis yang berfokus pada pemberdayaan UMKM
                hingga perusahaan menengah ke atas. Kami memberikan kejelasan finansial strategis untuk mendukung
                pertumbuhan dan keberlanjutan bisnis di era kompetitif.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan pengalaman dan keahlian yang mendalam, kami memahami tantangan unik yang dihadapi oleh bisnis di
                Indonesia. Tim ahli kami berkomitmen untuk memberikan solusi yang tidak hanya efektif, tetapi juga
                berkelanjutan untuk jangka panjang.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Mengapa Memilih Kami?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="text-yellow-400 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Tim ahli berpengalaman dengan track record terbukti</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-yellow-400 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Pendekatan personal dan solusi yang disesuaikan</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-yellow-400 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Fokus pada hasil dan pertumbuhan berkelanjutan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision, Mission, Focus */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi mitra strategis terpercaya dalam membantu bisnis mencapai kejernihan finansial dan pertumbuhan
                berkelanjutan di seluruh Indonesia.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Misi</h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• Memberikan solusi finansial dan bisnis yang tepat sasaran</li>
                <li>• Mendampingi UMKM menuju level bisnis lebih tinggi</li>
                <li>• Menciptakan dampak nyata dalam pertumbuhan ekonomi lokal dan nasional</li>
              </ul>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Fokus Kami</h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• UMKM yang ingin naik kelas</li>
                <li>• Perusahaan menengah yang ingin tumbuh berkelanjutan</li>
                <li>• Startup yang butuh arah finansial dan strategi bisnis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
