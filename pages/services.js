import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Services() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            At EmbedNexus, we offer complete technology solutions in hardware and intelligence — from the circuit board to the cloud.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Embedded Systems</h3>
            <p className="text-gray-700">
              Custom firmware and system-level development on microcontrollers, SoCs, and edge devices with real-time performance.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Internet of Things (IoT)</h3>
            <p className="text-gray-700">
              Scalable, secure, and intelligent IoT networks with sensor integration, cloud sync, and mobile app connectivity.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Artificial Intelligence</h3>
            <p className="text-gray-700">
              Edge AI model integration, deep learning pipelines, and smart decision-making systems on low-power hardware.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">PCB Designing</h3>
            <p className="text-gray-700">
              Professional PCB layout and schematic design for single-layer to multi-layer boards with manufacturing-ready output.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Hardware Prototyping</h3>
            <p className="text-gray-700">
              Rapid prototyping, BOM optimization, and component selection for efficient hardware testing and iterations.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Hotel Transparency Systems</h3>
            <p className="text-gray-700">
              Our flagship solution for hotels: Detect guests, monitor check-in/out, and reduce fraud via smart door and occupancy systems.
            </p>
          </div>
        </div>
      <Footer />
      </section>
    </>
  );
}
