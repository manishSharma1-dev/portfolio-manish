import Navbar from "@/components/Navbar"
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-primary text-white min-h-screen">
      <Navbar />
      <About />
    </main>
  );
}
