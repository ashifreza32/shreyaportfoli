import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { updateMetaTags } from '../utils/seo';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperiencePage = () => {
  const { experience, personalInfo } = portfolioData;

  useEffect(() => {
    updateMetaTags({
      title: 'Experience',
      description: `Browse ${personalInfo.name}'s professional work history and development accomplishments.`,
    });
  }, [personalInfo.name]);

  return (
    <div className="pt-24 pb-20 text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Professional Journey</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display mt-2">
            Work <span className="text-gradient">Experience</span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Central Pin Marker Icon */}
              <span className="absolute -left-[45px] sm:-left-[53px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Briefcase className="w-4 h-4" />
              </span>

              {/* Glassmorphic Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/40 hover:border-primary/40 transition-colors duration-300">
                
                {/* Header Details */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 group-hover:text-primary transition-colors duration-200">
                      {exp.position}
                    </h3>
                    <p className="text-sm font-semibold text-slate-400 dark:text-slate-400 light:text-light-text-2">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/80 light:bg-slate-100 text-xs font-semibold text-primary">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                {/* Description details */}
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-light-text-2 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Core Technologies Used */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Technologies Utilized:</span>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-800/50 light:bg-slate-100 border border-slate-700/30 light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-light-text-2 hover:border-primary hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Redirect CTA to Projects */}
        <div className="mt-20 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Browse My Engineering Projects</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
