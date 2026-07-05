// src/components/Footer.jsx
import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[#64748B] font-light">
          © {new Date().getFullYear()} Shreya Tewari. Built with structural precision via React & Tailwind.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-slate-50 border border-slate-200 text-[#64748B] rounded-full hover:bg-slate-100 transition-colors"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}