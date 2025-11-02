'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Educent Pro
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">
              How It Works
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-3 ml-4">
              <Link 
                href="/student" 
                className="px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                Student
              </Link>
              <Link 
                href="/lecturer" 
                className="px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                Lecturer
              </Link>
              <Link 
                href="/principal" 
                className="px-4 py-2 text-sm font-medium text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors"
              >
                Principal
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="#features" className="block px-3 py-2 text-gray-700">Features</Link>
            <Link href="#how-it-works" className="block px-3 py-2 text-gray-700">How It Works</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700">Contact</Link>
            <Link href="/student" className="block px-3 py-2 text-primary-600">Student Portal</Link>
            <Link href="/lecturer" className="block px-3 py-2 text-green-600">Lecturer Portal</Link>
            <Link href="/principal" className="block px-3 py-2 text-secondary-600">Principal Portal</Link>
          </div>
        )}
      </nav>
    </header>
  )
}