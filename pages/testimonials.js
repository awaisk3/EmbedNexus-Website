import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Trusted by startups, hotels, and tech leaders — here’s what they say about working with EmbedNexus.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              "EmbedNexus revolutionized our hotel operations. The AI-powered system detected unauthorized activity, saving us thousands in revenue leakage."
            </p>
            <h4 className="text-sm font-semibold text-indigo-600">— Faisal A., Hotel Owner</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              "Their embedded solutions for our IoT devices were incredibly efficient and scalable. We deployed faster than ever!"
            </p>
            <h4 className="text-sm font-semibold text-indigo-600">— Sarah M., IoT Product Manager</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              "Working with EmbedNexus felt like having an in-house expert team. Their hardware knowledge is top-notch."
            </p>
            <h4 className="text-sm font-semibold text-indigo-600">— Bilal H., Tech Startup Founder</h4>
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
}
