// src/components/About.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const metrics = [
    { value: "20%", label: "Lead Conversions Increase" },
    { value: "5+", label: "Functional Areas" },
    { value: "End-End", label: "Project Coordination" },
    { value: "Govt", label: "Contracting Experience" }
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="h-1 w-12 bg-[#6C63FF]" />
          <h2 className="text-4xl font-bold tracking-tight text-[#1E293B]">Professional Profile</h2>
          <p className="text-lg text-[#64748B] leading-relaxed font-light">
            Administrative and operations professional with deep experience across government contracting, corporate stakeholder management, complex customer operations, sales systems, and modern digital marketing pipelines. 
          </p>
          <p className="text-lg text-[#64748B] leading-relaxed font-light">
            Highly skilled in executing rigorous vendor coordination, lead generation analysis, precise quotation verification, client relationship management strategies, and cross-functional communication arrays under tight deadlines.
          </p>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-md text-center hover:border-[#6C63FF]/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#6C63FF] to-[#A78BFA] bg-clip-text text-transparent mb-1">
                {metric.value}
              </h3>
              <p className="text-[11px] font-bold tracking-wide text-[#64748B] uppercase">{metric.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}