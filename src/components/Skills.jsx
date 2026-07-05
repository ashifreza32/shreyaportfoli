// src/components/Skills.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Settings, ShieldAlert, Cpu } from 'lucide-react';

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const groups = [
    {
      title: "Technical Toolkits",
      icon: <Settings className="text-[#6C63FF]" size={22} />,
      list: ["Advanced Microsoft Excel", "Google Sheets Frameworks", "PowerPoint Layouts", "Digital Operations Systems"]
    },
    {
      title: "Professional Workflow Capabilities",
      icon: <ShieldAlert className="text-[#A78BFA]" size={22} />,
      list: ["Stakeholder Management", "Operations Coordination", "Vendor Negotiations", "Customer Relationship (CRM)", "Lead Generation Analytics"]
    },
    {
      title: "Strategic & Digital Operations",
      icon: <Cpu className="text-[#4ECDC4]" size={22} />,
      list: ["Sales Strategy Design", "Product Management", "Team Management", "Digital Marketing", "Social Media Performance Metrics"]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-24 bg-gradient-to-b from-transparent to-slate-100/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-[#1E293B]">Functional Competencies</h2>
          <p className="text-[#64748B] font-light">Structured overview of technical software expertise alongside core administrative operational capabilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, gIdx) => (
            <motion.div 
              key={gIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gIdx * 0.1 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 shadow-xl flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                {group.icon}
                <h3 className="text-lg font-bold text-[#1E293B]">{group.title}</h3>
              </div>
              <ul className="space-y-4 flex-grow">
                {group.list.map((skill, sIdx) => (
                  <li key={sIdx} className="space-y-1.5">
                    <span className="text-xs font-semibold text-[#1E293B] block">{skill}</span>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${92 - (sIdx * 4) - (gIdx * 3)}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#6C63FF] to-[#A78BFA]"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}