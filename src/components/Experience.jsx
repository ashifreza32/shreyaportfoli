// src/components/Experience.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Building2, Calendar, ShieldCheck } from 'lucide-react';

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const positions = [
    {
      role: "Administrative Operations Executive",
      org: "Govaged",
      date: "Nov 2024 – Present",
      bullets: [
        "Manage end-to-end alignment for highly complex government contracting documentation and bidding parameters across critical service divisions.",
        "Govern systematic vendor background research initiatives and protect structured repository data files for validated service operators.",
        "Review and authenticate precise commercial quotes ensuring bulletproof contractual standard matching rules.",
        "Structure dynamic internal analytical charts, live operational timelines, and operational milestone tracking sheets."
      ]
    },
    {
      role: "Client Relations Executive",
      org: "Amazon",
      date: "May 2024 – Oct 2024 (Contractual)",
      bullets: [
        "Served as the core relationship node translating user case dependencies into immediate multi-department programmatic responses.",
        "Partnered deeply with shipping lines, global logistical teams, and tech operations groups to trace and mitigate critical pipeline tracking issues."
      ]
    },
    {
      role: "Sales Manager",
      org: "Investoxpert Advisors Private Limited",
      date: "Nov 2022 – Jan 2024",
      bullets: [
        "Directed operational sales squads to hit demanding target quotas while scaling customer relationship indices.",
        "Boosted target acquisition conversions by 20% through intense competitive pricing reports and data-driven targeted marketing lists.",
        "Aligned contract processing workflows between inside legal parameters, finance controllers, and marketing desks."
      ]
    },
    {
      role: "Social Media & Operations Manager",
      org: "Freelance",
      
      bullets: [
        "Administered day-to-day fulfillment frameworks, real-time stocking levels, and incoming customer relationship tracking pipelines.",
        "Evaluated digital advertisement conversion analytics and demographic metrics to adapt strategic content performance models."
      ]
    },
    {
      role: "Intern – Outpatient Department (OPD)",
      org: "CMRI Hospital",
      date: "Kolkata, India",
      bullets: [
        "Assisted in daily operations of the Outpatient Department (OPD), supporting appointment scheduling and systematic file tracking.",
        "Coordinated diagnostic scheduling pipelines, patient routing channels, and hospital supply inventories under strict compliance standards."
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-bold tracking-tight text-[#1E293B]">Professional Milestones</h2>
        <p className="text-[#64748B] font-light max-w-md mx-auto">Chronological trajectory tracing executive administrative, corporate sales, and healthcare operations assignments.</p>
      </div>

      <div className="relative border-l-2 border-slate-200 pl-6 md:pl-10 space-y-12 ml-4">
        {positions.map((pos, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="relative"
          >
            <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#6C63FF] shadow-sm z-10" />

            <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B]">{pos.role}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#6C63FF] mt-1">
                    <Building2 size={15} /> <span>{pos.org}</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] bg-slate-100 rounded-full px-3 py-1 self-start md:set-center">
                  <Calendar size={13} /> {pos.date}
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-[#64748B] font-light">
                {pos.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4ECDC4] shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}