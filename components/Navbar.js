import Link from 'next/link';
import { useState } from 'react';
import Footer from "@/components/Footer";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/EN-Logo.png" alt="EmbedNexus Logo" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-semibold text-gray-800">EmbedNexus</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
          <li><Link href="/services" className="hover:text-indigo-600">Services</Link></li>
          <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
          <li><Link href="/testimonials" className="hover:text-indigo-600">Testimonials</Link></li>
          <li><Link href="/contact" className="hover:text-indigo-600">Contact</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 text-sm font-medium text-gray-700 space-y-2">
          <li><Link href="/" className="block hover:text-indigo-600">Home</Link></li>
          <li><Link href="/services" className="block hover:text-indigo-600">Services</Link></li>
          <li><Link href="/about" className="block hover:text-indigo-600">About</Link></li>
          <li><Link href="/testimonials" className="block hover:text-indigo-600">Testimonials</Link></li>
          <li><Link href="/contact" className="block hover:text-indigo-600">Contact</Link></li>
        </ul>
      )}
    <Footer />
    </nav>
  );
}
