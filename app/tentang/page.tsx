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

      {/* Siapa Kami + Mengapa Memilih Kami */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Siapa Kami (Kolom kiri) */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Siapa Kami</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Finwest Consulting adalah perusahaan konsultan keuangan dan bisnis yang berfokus pada pemberdayaan UMKM hingga perusahaan menengah ke atas. Kami memberikan kejelasan finansial strategis untuk mendukung pertumbuhan dan keberlanjutan bisnis di era kompetitif.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan pengalaman dan keahlian yang mendalam, kami memahami tantangan unik yang dihadapi oleh bisnis di Indonesia. Tim ahli kami berkomitmen untuk memberikan solusi yang tidak hanya efektif, tetapi juga berkelanjutan untuk jangka panjang.
              </p>
            </div>

            {/* Mengapa Memilih Kami (Kolom kanan, ditepung dengan styling agar tampak di tengah secara vertikal) */}
            <div className="bg-gray-50 p-6 rounded-lg self-center">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Mengapa Memilih Kami?</h3>
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

          {/* Pendiri Kami (Bagian bawah, ditata di tengah) */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg mb-20">
            <img
              src="/AndrewNababan.jpg"
              alt="Pendiri Finwest Consulting"
              className="rounded-xl shadow-lg w-48 h-auto mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Pendiri Kami</h3>
            <p className="text-gray-700 text-base max-w-2xl">
              Finwest Consulting didirikan pada tahun 2025 oleh Andrew Christmercy Nababan, S.Tr., Ak., CAIA., CIAS, seorang profesional di bidang akuntansi dan investasi yang telah mengantongi berbagai sertifikasi bergengsi seperti Bravet AB, Chartered Auditor Internal Awareness (CAIA), dan Chartered Internal Auditor Senior (CIAS). Andrew merupakan lulusan Program Studi Akuntansi IPB University, dengan latar belakang akademik yang solid serta pengalaman mendalam di bidang pelaporan keuangan dan manajemen investasi. Bersama beliau, Novika Frialestari Harianja, S.Ak., lulusan Akuntansi dari Universitas Advent Indonesia, turut mendirikan Finwest Consulting sebagai Co-Founder. Novika memiliki pemahaman yang kuat dalam akuntansi operasional dan pengelolaan sistem keuangan.
Finwest Consulting hadir dengan misi utama untuk memberikan layanan konsultasi yang komprehensif dalam hal penyusunan pelaporan keuangan dan perancangan alur proses bisnis yang optimal. Fokus utama perusahaan adalah membantu pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) serta startup dalam membangun sistem keuangan yang rapi, akurat, dan sesuai dengan standar akuntansi serta regulasi yang berlaku. Lebih dari sekadar penyusunan laporan, Finwest juga berperan sebagai mitra strategis dalam merancang proses bisnis yang efisien, mulai dari pencatatan transaksi harian hingga penyusunan laporan keuangan untuk keperluan internal, perpajakan, maupun pendanaan eksternal.
Dengan menggabungkan keahlian teknis, wawasan strategis, dan pendekatan konsultatif yang humanis, Finwest Consulting berkomitmen untuk menjadi bagian dari pertumbuhan dan keberhasilan klien. Finwest percaya bahwa setiap bisnis, sekecil apa pun, memiliki potensi besar untuk berkembang apabila didukung oleh fondasi keuangan yang kuat dan sistem kerja yang efisien. Melalui layanan yang terstruktur dan berbasis solusi, Finwest siap menjadi mitra terpercaya bagi para pelaku usaha dalam membangun bisnis yang berkelanjutan dan kompetitif di era ekonomi digital.
            </p>
          </div>

          {/* Visi, Misi, Fokus Kami */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi mitra strategis terpercaya dalam membantu bisnis mencapai kejernihan finansial dan pertumbuhan berkelanjutan di seluruh Indonesia.
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
