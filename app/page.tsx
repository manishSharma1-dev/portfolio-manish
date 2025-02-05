"use client"

import React,{useState} from "react";
import Navbar from "@/components/Navbar"
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [checkNavMenuSelect,setCheckNavMenuSelect] = useState(false)

  return (
    <main className="bg-black text-white min-h-screen sm:py-4">
      {
          checkNavMenuSelect ? 
            <Navigation setCheckNavMenuSelect={setCheckNavMenuSelect} checkNavMenuSelect={checkNavMenuSelect} /> 
            : 
            <>
              <Navbar setCheckNavMenuSelect={setCheckNavMenuSelect} checkNavMenuSelect={checkNavMenuSelect} />
              <About />
              <Project />
              <Footer />
            </>
      }
    </main>
  );
}
