import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { updateMetaTags } from '../utils/seo';
import { motion } from 'framer-motion';
import { Code, Server, Sparkles, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Code: Code,
  Server: Server,
  Sparkles: Sparkles,
  Cloud: Cloud,
};

const ServicesPage = () => {
  const { services, personalInfo } = portfolioData;

  useEffect(() => {
    updateMetaTags({
      title: 'Services',
      description: `Browse developer services offered by ${personalInfo.name}, including Frontend, Backend, UI/UX interaction, and Cloud DevOps.`,
    });
  }, [personalInfo.name]);

  return (
    <div className="pt-24 pb-20 text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">What I Offer</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display mt-2">
            My <span className="text-gradient">Services</span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="gradient-border-card p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white mb-6 shadow-md shadow-primary/10">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-display text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-light-text-2 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-slate-800/40 dark:border-slate-800/40 light:border-slate-200/60 pt-4 flex justify-between items-center text-xs font-semibold text-slate-400">
                  <span>Professional Grade Delivery</span>
                  <span className="text-primary group-hover:text-accent">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Redirect CTA to Certifications */}
        <div className="mt-20 text-center">
          <Link
            to="/certifications"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>View My Technical Certifications</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
