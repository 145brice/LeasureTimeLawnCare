'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            🌿 Leasure Time Lawn Care
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/book" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/book"
              className="block py-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

