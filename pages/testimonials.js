import Navbar from '../components/Navbar';

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-red-500 mb-6">What Our Clients Say</h1>
        <div className="space-y-8">
          <blockquote className="border-l-4 border-red-500 pl-4 text-gray-800">
            “EmbedNexus helped us track and manage hotel rooms with real-time accuracy. Revenue leaks have reduced significantly.”
            <footer className="text-sm text-gray-500 mt-2">— Hotel Manager, Islamabad</footer>
          </blockquote>

          <blockquote className="border-l-4 border-red-500 pl-4 text-gray-800">
            “Their PCB and embedded design service is world-class. We were up and running with a new prototype in a week.”
            <footer className="text-sm text-gray-500 mt-2">— IoT Product Owner, Lahore</footer>
          </blockquote>

          <blockquote className="border-l-4 border-red-500 pl-4 text-gray-800">
            “I highly recommend EmbedNexus for any embedded or AI-on-edge project. Professional, fast, and transparent.”
            <footer className="text-sm text-gray-500 mt-2">— CTO, Local Startup</footer>
          </blockquote>
        </div>
      </main>
    </>
  );
}
