import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { updateMetaTags } from '../utils/seo';
import { motion } from 'framer-motion';
import { Globe, Code2, Layout, Activity, Database, Server, Share2, Layers, Cloud, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  'React.js / Next.js': Globe,
  'TypeScript': Code2,
  'Tailwind CSS': Layout,
  'Framer Motion / GSAP': Activity,
  'Redux / Zustand': Database,
  'Node.js / Express': Server,
  'GraphQL / Apollo': Share2,
  'PostgreSQL / MongoDB': Layers,
  'Docker / AWS': Cloud,
  'Python / FastAPI': Terminal,
};

const SkillsPage = () => {
  const { skills, personalInfo } = portfolioData;

  useEffect(() => {
    updateMetaTags({
      title: 'Skills',
      description: `Explore ${personalInfo.name}'s frontend and backend technology stack including React, Node, DevOps, and database designs.`,
    });
  }, [personalInfo.name]);

  const renderSkillCard = (skill, index) => {
    const IconComponent = iconMap[skill.name] || Code2;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -4 }}
        className="glass-card p-6 rounded-2xl border border-slate-800/40 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-slate-800/80 group-hover:bg-primary/20 text-primary group-hover:text-accent transition-all duration-300 light:bg-slate-100">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1">
              {skill.name}
            </h3>
          </div>
          <span className="text-sm font-extrabold text-primary font-display">{skill.percentage}%</span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/30">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 }}
            className="h-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-24 pb-20 text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Technical Expertise</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display mt-2">
            My <span className="text-gradient">Tech Stack</span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skills Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Frontend Category */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold font-display">Frontend Engineering</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.frontend.map((skill, idx) => renderSkillCard(skill, idx))}
            </div>
          </div>

          {/* Backend Category */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <h2 className="text-2xl font-bold font-display">Backend & Operations</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.backend.map((skill, idx) => renderSkillCard(skill, idx))}
            </div>
          </div>
        </div>

        {/* Redirect CTA to Experience */}
        <div className="mt-20 text-center">
          <Link
            to="/experience"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Read About My Work Experience</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
