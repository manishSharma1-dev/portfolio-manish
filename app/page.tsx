import Navbar from "@/components/Navbar"
import About from "@/components/About";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="bg-primary text-white min-h-screen">
      <Navbar />
      <About />
      <Project />
    </main>
  );
}
