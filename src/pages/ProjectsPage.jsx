import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { updateMetaTags } from '../utils/seo';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const { projects, personalInfo } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    updateMetaTags({
      title: 'Projects',
      description: `View ${personalInfo.name}'s engineering projects, ranging from AI applications to Web3 DeFi trackers and design libraries.`,
    });
  }, [personalInfo.name]);

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Portfolio Showcase</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display mt-2">
            My <span className="text-gradient">Projects</span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Dynamic Category Filtering Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 scale-[1.02]'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/40 hover:border-slate-600 light:bg-white light:text-light-text-2 light:border-slate-200 light:hover:bg-slate-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800/40 hover:border-primary/50 group flex flex-col justify-between"
              >
                
                {/* Project Image & Category tag */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-slate-900/90 text-[10px] font-extrabold uppercase tracking-widest text-primary border border-slate-700/50">
                    {project.category}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-light-text-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-light-text-2 mb-6 leading-relaxed">
                      {project.details}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-800/50 light:bg-slate-100 border border-slate-700/30 text-[10px] font-medium text-slate-300 light:text-light-text-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-lg shadow hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-4 py-2 bg-slate-800/80 border border-slate-700/50 text-white text-xs font-bold rounded-lg hover:border-primary hover:bg-slate-800 transition-all light:bg-slate-100 light:text-light-text-1 light:border-slate-200"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Redirect CTA to Services */}
        <div className="mt-20 text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Check Out The Services I Offer</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
