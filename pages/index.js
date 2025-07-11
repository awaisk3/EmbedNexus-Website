import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center leading-tight mb-4">
          Powering Intelligent IoT & Embedded Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center mb-6">
          From hotel transparency to smart hardware and AI systems — we bring cutting-edge tech to your doorstep.
        </p>

        {/* ✅ Replaced <a> with <Link> */}
        <Link href="/services">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transition">
            Explore Services
          </button>
        </Link>

        <Footer />
      </main>
    </>
  );
}
