// src/components/Contact.jsx
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-slate-50/80 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tight text-[#1E293B]">Start a Conversation</h2>
            <p className="text-[#64748B] font-light leading-relaxed">Available for corporate administrative deployments, vendor-coordination architecture roles, and operational framework consulting projects.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="p-3 bg-[#6C63FF]/10 text-[#6C63FF] rounded-xl"><Mail size={18} /></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Secure Mail</p><p className="text-sm font-medium text-[#1E293B]">shreyatewari19@gmail.com</p></div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="p-3 bg-[#4ECDC4]/10 text-[#4ECDC4] rounded-xl"><Phone size={18} /></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Direct Connection</p><p className="text-sm font-medium text-[#1E293B]">+91 82409 80167</p></div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}