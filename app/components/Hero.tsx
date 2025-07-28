import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Shaping Tomorrow's Business
            <span className="block text-yellow-400">Through Financial Clarity</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Finwest Consulting memberikan solusi keuangan dan bisnis strategis untuk UMKM, perusahaan menengah, dan
            startup yang ingin tumbuh berkelanjutan.
          </p>
        </div>
      </div>
    </section>
  )
}
