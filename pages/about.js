import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">About Us</h1>
        <p className="text-gray-700 mb-4">
          <strong>EmbedNexus</strong> is a modern embedded technology startup offering smart, secure, and scalable IoT and AI-powered solutions.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to bring <span className="text-indigo-600 font-semibold">transparency and automation</span> to industries like hospitality, making operations efficient and fraud-free.
        </p>
        <p className="text-gray-700 mb-4">
          We specialize in Embedded Systems, PCB Design, Hardware Prototyping, Internet of Things, and Edge AI. Our solutions enable hotel owners to gain control and real-time visibility into their assets and guest flow.
        </p>
        <p className="text-gray-700">
          Founded by <strong>Awais Khan</strong>, EmbedNexus is committed to combining deep tech with real-world needs.
        </p>
      </main>
    </>
  );
}
