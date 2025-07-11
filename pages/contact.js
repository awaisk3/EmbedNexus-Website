import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

import { Mail, Phone } from "lucide-react"; // Lucide icons

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Whether you are a hotel owner looking for transparency or a business needing smart embedded solutions. We would love to hear from you.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-6 text-center">
          <div className="flex items-center justify-center gap-4 bg-gray-50 p-4 rounded-lg shadow">
            <Mail className="text-indigo-600 w-6 h-6" />
            <a
              href="mailto:embednexus@gmail.com"
              className="text-lg text-gray-800 hover:text-indigo-600 transition"
            >
              embednexus@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 bg-gray-50 p-4 rounded-lg shadow">
            <Phone className="text-indigo-600 w-6 h-6" />
            <a
              href="https://wa.me/923366013018"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 hover:text-indigo-600 transition"
            >
              +92 336 6013018 (WhatsApp)
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
