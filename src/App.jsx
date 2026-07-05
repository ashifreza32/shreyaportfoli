// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import EducationLanguages from './components/EducationLanguages';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] font-sans relative overflow-x-hidden selection:bg-[#6C63FF]/30">
      {/* Premium Dynamic Mouse Glow Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(108, 99, 255, 0.04), transparent 80%)`
        }}
      />

      {/* Luxury Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-[#6C63FF]/8 to-[#A78BFA]/4 rounded-full filter blur-[120px] animate-blob" />
        <div className="absolute top-[25%] right-[-5%] w-[40vw] h-[40vw] bg-gradient-to-br from-[#4ECDC4]/8 to-[#6C63FF]/4 rounded-full filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[15%] left-[-5%] w-[45vw] h-[45vw] bg-gradient-to-tr from-[#A78BFA]/8 to-[#4ECDC4]/4 rounded-full filter blur-[110px] animate-blob animation-delay-4000" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <EducationLanguages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}