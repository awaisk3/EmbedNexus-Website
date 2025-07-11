import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src="/EN-Logo.png" alt="EmbedNexus Logo" className="h-8 w-8 rounded-full" />
          <span className="text-xl font-bold text-indigo-600">EmbedNexus</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-indigo-600">Home</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-indigo-600">Services</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-600">About</Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-indigo-600">Testimonials</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
