import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Contact Us</h1>
        <p className="text-gray-800 mb-4">
          We would love to hear from you! Whether you are a hotel owner looking for transparency or a tech company needing embedded expertise, we are here to help.
        </p>
        <div className="space-y-4 text-gray-700">
          <p>📧 Email: <a href="mailto:embednexus@gmail.com" className="text-red-500 underline">embednexus@gmail.com</a></p>
          <p>📱 WhatsApp: <a href="https://wa.me/923366013018" className="text-red-500 underline" target="_blank">+92 336 6013018</a></p>
        </div>
      </main>
    </>
  );
}
