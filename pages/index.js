import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <h1 className="text-4xl font-bold text-red-500 text-center mb-6">
          Welcome to EmbedNexus
        </h1>

        <img
          src="/EN-Header.png"  // replace with your file name if different
          alt="EmbedNexus Header"
          className="w-full max-w-4xl rounded-xl shadow-md"
        />
      </main>
    </>
  );
}
