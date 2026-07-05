import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { updateMetaTags } from '../utils/seo';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Trophy, Mail, MapPin, UserCheck, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { personalInfo, about, stats } = portfolioData;

  useEffect(() => {
    updateMetaTags({
      title: 'About Me',
      description: `Learn more about ${personalInfo.name}. ${about.bio.substring(0, 150)}...`,
    });
  }, [personalInfo.name, about.bio]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-20 text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Discover My Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display mt-2">
            About <span className="text-gradient">Me</span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Introduction / Bio Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20"
        >
          {/* Left Avatar Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
              <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold font-display">
              I am <span className="text-primary">{personalInfo.name}</span>, a {personalInfo.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-light-text-2 leading-relaxed">
              {about.bio}
            </p>
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-light-text-2 leading-relaxed">
              {about.story}
            </p>

            {/* Quick Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-light-text-2">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-primary" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <UserCheck className="w-4 h-4 text-primary" />
                <span>Available for Freelance / Fulltime</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Lead Full Stack Developer</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center border border-slate-800/40"
            >
              <h3 className="text-3xl font-extrabold text-gradient mb-1">{stat.value}</h3>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-light-text-2 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Education & Achievements Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-display">Education</h2>
            </div>

            <div className="relative border-l border-slate-800 dark:border-slate-800 light:border-slate-200 ml-4 pl-6 space-y-8">
              {about.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Outer circle marker */}
                  <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-900 border-2 border-primary group-hover:bg-primary transition-all duration-300" />
                  
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-slate-800/50 light:bg-slate-100 text-[10px] font-semibold text-primary uppercase tracking-wider mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {edu.duration}
                  </span>
                  
                  <h4 className="text-lg font-bold text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 mt-1">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-light-text-2">
                    {edu.institution}
                  </p>
                  
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-light-text-2 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Trophy className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-display">Achievements</h2>
            </div>

            <div className="relative border-l border-slate-800 dark:border-slate-800 light:border-slate-200 ml-4 pl-6 space-y-8">
              {about.achievements.map((ach, idx) => (
                <div key={idx} className="relative group">
                  {/* Outer circle marker */}
                  <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-900 border-2 border-primary group-hover:bg-primary transition-all duration-300" />
                  
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-slate-800/50 light:bg-slate-100 text-[10px] font-semibold text-primary uppercase tracking-wider mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {ach.year}
                  </span>
                  
                  <h4 className="text-lg font-bold text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 mt-1">
                    {ach.title}
                  </h4>
                  
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-light-text-2">
                    {ach.organization}
                  </p>
                  
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-light-text-2 mt-2 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Redirect CTA to Skills */}
        <div className="mt-20 text-center">
          <Link
            to="/skills"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Check Out My Technical Skills</span>
            <Calendar className="w-4 h-4 hidden" /> {/* Dummy icon placement */}
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
