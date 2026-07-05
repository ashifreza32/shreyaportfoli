// src/components/EducationLanguages.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationLanguages() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Education Timeline */}
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="text-[#6C63FF]" size={28} />
            <h2 className="text-3xl font-bold tracking-tight text-[#1E293B]">Education Background</h2>
          </div>
          <div className="space-y-6 border-l border-slate-200 pl-6 relative">
            
            <motion.div initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#6C63FF]" />
              <span className="text-xs font-bold text-[#6C63FF] bg-[#6C63FF]/10 px-2.5 py-0.5 rounded-full">2019 – 2022</span>
              <h3 className="text-lg font-bold text-[#1E293B]">BBA in Hospital Management</h3>
              <p className="text-sm font-medium text-[#64748B]">NSHM Knowledge Campus (CGPA: 8.3)</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }} className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-300" />
              <span className="text-xs font-bold text-[#64748B] bg-slate-100 px-2.5 py-0.5 rounded-full">Graduated 2018</span>
              <h3 className="text-lg font-bold text-[#1E293B]">Higher Secondary Education Degree</h3>
              <p className="text-sm font-medium text-[#64748B]">WBCHSE (Score: 65%)</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-300" />
              <span className="text-xs font-bold text-[#64748B] bg-slate-100 px-2.5 py-0.5 rounded-full">Graduated 2016</span>
              <h3 className="text-lg font-bold text-[#1E293B]">Secondary Education</h3>
              <p className="text-sm font-medium text-[#64748B]">WBBSE (Score: 74%)</p>
            </motion.div>

          </div>
        </div>

        {/* Certifications & Badges */}
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <Award className="text-[#A78BFA]" size={26} />
            <h2 className="text-3xl font-bold tracking-tight text-[#1E293B]">Certifications & Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Digital Marketing Fundamentals", issuer: "Google Verified Credential" },
              { title: "Advanced Data Systems Excel", issuer: "ICA EduSkills Certified" },
              { title: "AI Foundations For Everyone", issuer: "IBM Cognitive Class (In Progress)" },
              { title: "Generative AI Career Essentials", issuer: "Microsoft & LinkedIn (In Progress)" }
            ].map((cert, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -3 }}
                className="bg-white/60 p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between"
              >
                <h4 className="text-sm font-bold text-[#1E293B] leading-snug">{cert.title}</h4>
                <p className="text-[11px] font-semibold text-[#6C63FF] mt-3 tracking-wide uppercase">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}