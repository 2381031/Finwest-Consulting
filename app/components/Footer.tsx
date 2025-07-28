import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Finwest Consulting</h3>
            <p className="text-blue-100 mb-4">Shaping Tomorrow's Business Through Financial Clarity</p>
            <div className="flex items-center">
              <Instagram size={20} className="mr-2" />
              <a
                href="https://www.instagram.com/finwest.id?igsh=ODk1OHg4M3VkcWIw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
              >
                @finwest.id
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Konsultasi Keuangan</li>
              <li>Konsultasi Bisnis</li>
              <li>Perencanaan Strategis</li>
              <li>Analisis Kinerja</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-blue-100">
              <p>Email: info@finwestconsulting.com</p>
              <p>Telepon: +62 21 1234 5678</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">© 2025 Finwest Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
