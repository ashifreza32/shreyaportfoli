// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Shield, BarChart3, Radio } from 'lucide-react';

export default function Hero() {
  const strings = ["Administrative Executive", "Operations Professional", "Client Relations Specialist", "Sales Strategy Manager"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = strings[currentIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center justify-center relative px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6C63FF]/10 to-[#A78BFA]/10 border border-[#6C63FF]/20 text-[#6C63FF] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider self-center lg:self-start mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" /> Operations & Administration Portfolio
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-[#1E293B]"
          >
            SHREYA TEWARI
          </motion.h1>

          <div className="h-10 mb-6 flex items-center justify-center lg:justify-start">
            <span className="text-xl md:text-2xl font-medium text-[#64748B]">Expert in </span>
            <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] bg-clip-text text-transparent ml-2 border-r-2 border-[#6C63FF] pr-1">
              {currentText}
            </span>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#64748B] max-w-xl mb-10 leading-relaxed font-light"
          >
            Versatile professional with proven experience in government contracting, client lifecycle optimization, cross-functional stakeholder management, and scalable business administration.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <a href="#contact" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#A78BFA] text-white font-medium shadow-lg shadow-[#6C63FF]/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto text-center">
              Contact Me
            </a>
            <a href="#experience" className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-[#1E293B] font-medium shadow-sm hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto text-center">
              View Experience
            </a>
          </motion.div>
        </div>

        {/* Floating Glassmorphic Branding Element Container */}
        <div className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] bg-white border border-white/60 backdrop-blur-sm shadow-2xl relative flex flex-col items-center justify-center text-center group overflow-hidden"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl shadow-[#6C63FF]/20 mb-6 group">
  <img
    src="/ChatGPT Image Jul 6, 2026, 12_32_24 AM.png"
    alt="Profile"
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
  />
</div>
            <h3 className="text-2xl font-bold text-[#1E293B]">Shreya Tewari</h3>
            <p className="text-sm text-[#64748B] mt-1 font-medium">West Bengal, India</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] rounded-full mt-6" />
          </motion.div>

          {/* Micro-Interactions Accent Cards */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3">
            <div className="p-2 bg-[#6C63FF]/10 text-[#6C63FF] rounded-xl"><Shield size={18} /></div>
            <div className="text-left"><p className="text-xs text-[#64748B] font-medium">Govt Projects</p><p className="text-xs font-bold text-[#1E293B]">Compliant</p></div>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} className="absolute bottom-6 -right-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3">
            <div className="p-2 bg-[#4ECDC4]/10 text-[#4ECDC4] rounded-xl"><BarChart3 size={18} /></div>
            <div className="text-left"><p className="text-xs text-[#64748B] font-medium">Lead Gen</p><p className="text-xs font-bold text-[#1E293B]">+20% Growth</p></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}