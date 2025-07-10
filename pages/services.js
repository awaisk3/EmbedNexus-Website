import Navbar from '../components/Navbar';

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Our Services</h1>
        <ul className="space-y-4 text-gray-800">
          <li>✅ Embedded Systems Development</li>
          <li>✅ Internet of Things (IoT) Solutions</li>
          <li>✅ Artificial Intelligence on Edge Devices</li>
          <li>✅ PCB Designing & Hardware Prototyping</li>
          <li>✅ Hotel Transparency System (Fraud Detection & Management)</li>
        </ul>
      </main>
    </>
  );
}
