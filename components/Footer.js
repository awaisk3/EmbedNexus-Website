import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/EN-Logo.png" alt="EmbedNexus Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-semibold text-indigo-600">EmbedNexus</span>
          </div>
          <p className="text-sm text-gray-600">
            Innovating at the edge with Embedded Systems, IoT, AI, and Smart Hotel Tech.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-500">Home</Link></li>
            <li><Link href="/services" className="hover:text-indigo-500">Services</Link></li>
            <li><Link href="/about" className="hover:text-indigo-500">About</Link></li>
            <li><Link href="/testimonials" className="hover:text-indigo-500">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-500" />
              <a href="mailto:embednexus@gmail.com" className="hover:text-indigo-500">embednexus@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-500" />
              <a href="https://wa.me/923366013018" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">+92 336 6013018</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t">
        © {new Date().getFullYear()} EmbedNexus. All rights reserved.
      </div>
    </footer>
  );
}
