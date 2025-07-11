import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="flex items-center space-x-2">
  <img src="/EN-Logo.png" alt="EmbedNexus Logo" className="h-8 w-8 rounded-full" />
  <span className="text-xl font-bold text-red-400">EmbedNexus</span>
</div>

        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-red-400">Home</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-red-400">Services</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-400">About</Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-red-400">Testimonials</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-red-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
