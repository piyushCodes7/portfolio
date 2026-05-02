"use client";
import { useEffect, useRef } from "react";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Profiles from "@/components/sections/Profiles";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Create static binary grid
    const spacing = 40;
    const cols = Math.ceil(window.innerWidth / spacing);
    const rows = Math.ceil(window.innerHeight / spacing);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const binary = document.createElement("div");
        binary.className = "static-binary";
        binary.textContent = Math.random() > 0.5 ? "1" : "0";
        binary.style.left = (i * spacing) + "px";
        binary.style.top = (j * spacing) + "px";
        binary.style.color = Math.random() > 0.5 ? "#00f5c4" : "#7c3aed";
        grid.appendChild(binary);
      }
    }
  }, []);

  return (
    <>
      <div ref={gridRef} className="static-binary-grid" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}