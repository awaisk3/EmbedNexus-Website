import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6f9fc] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
          Welcome to EmbedNexus
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          We bring transparency, intelligence, and innovation to hotel systems and embedded IoT solutions.
        </p>
        <a href="/about">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm hover:bg-indigo-700 transition">
            Learn More
          </button>
        </a>
      </main>
    </>
  );
}
