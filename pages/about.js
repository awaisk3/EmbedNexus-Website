import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            EmbedNexus is an innovative technology startup delivering advanced solutions in Embedded Systems, IoT, Artificial Intelligence, and Hardware Design. We specialize in bringing intelligence and automation to the edge — empowering businesses with smart, scalable, and secure systems.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mt-12">
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Transparent Hotel Systems</h3>
            <p className="text-gray-700">
              We help hotel owners eliminate revenue loss and fraud by integrating real-time human detection and intelligent access control — improving management transparency and customer trust.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Advanced Embedded Solutions</h3>
            <p className="text-gray-700">
              From PCB design to complete IoT and AI systems, our engineers deliver reliable, high-performance hardware tailored for modern industries and edge computing.
            </p>
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
}
