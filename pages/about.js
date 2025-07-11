import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-red-500 mb-6">About EmbedNexus</h1>
        <p className="text-gray-800 leading-7 mb-4">
          EmbedNexus is a cutting-edge technology startup specializing in Embedded Systems, IoT, and AI-based hardware solutions.
          We design and develop smart hardware for real-world automation, connectivity, and intelligence.
        </p>
        <p className="text-gray-800 leading-7 mb-4">
          One of our flagship services is our Hotel Transparency System, which uses sensor data and intelligent processing to help hotel owners prevent revenue loss, detect fraud, and ensure full management transparency.
        </p>
        <p className="text-gray-800 leading-7">
          Our mission is to bring reliability, innovation, and real-time intelligence to embedded hardware systems — making industries smarter and more transparent.
        </p>
      </main>
    </>
  );
}
// This is a test change for Git
