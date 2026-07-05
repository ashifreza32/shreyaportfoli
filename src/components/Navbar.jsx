// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm py-4 border-b border-slate-200/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <ShieldCheck className="w-6 h-6 text-[#6C63FF] transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-bold tracking-tight text-xl bg-gradient-to-r from-[#1E293B] to-[#64748B] bg-clip-text text-transparent">
            Shreya Tewari
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-[#64748B] hover:text-[#6C63FF] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#6C63FF] after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden text-[#1E293B]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl md:hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-base font-medium text-[#1E293B]">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}