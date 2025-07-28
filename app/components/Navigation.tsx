"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-finwest.png"
                alt="Logo Finwest"
                width={32}
                height={32}
                priority
              />
              <span className="text-2xl font-bold text-blue-900">Finwest Consulting</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Beranda
            </Link>
            <Link href="/tentang" className="text-gray-700 hover:text-blue-900 transition-colors">
              Tentang Kami
            </Link>
            <Link href="/layanan" className="text-gray-700 hover:text-blue-900 transition-colors">
              Layanan
            </Link>
            <Link href="/kontak" className="text-gray-700 hover:text-blue-900 transition-colors">
              Kontak
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-900">
                Beranda
              </Link>
              <Link href="/tentang" className="block px-3 py-2 text-gray-700 hover:text-blue-900">
                Tentang Kami
              </Link>
              <Link href="/layanan" className="block px-3 py-2 text-gray-700 hover:text-blue-900">
                Layanan
              </Link>
              <Link href="/kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-900">
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
