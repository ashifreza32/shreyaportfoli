import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SectionCard from '../components/SectionCard';
import Testimonials from '../components/Testimonials';
import { User, Cpu, Briefcase, FolderGit2, Sparkles, Award, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { updateMetaTags } from '../utils/seo';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const { stats, personalInfo } = portfolioData;

  useEffect(() => {
    updateMetaTags({
      title: 'Home',
      description: `Welcome to ${personalInfo.name}'s creative engineering portfolio. Full-stack developer specializing in React, Node, and performance UI.`,
    });
  }, [personalInfo.name]);

  const cards = [
    {
      title: 'About Me',
      subtitle: 'Biography',
      description: 'Discover my journey, coding principles, Master of Science background, and industry accolades.',
      icon: User,
      path: '/about',
    },
    {
      title: 'Tech Stack',
      subtitle: 'Skills',
      description: 'Explore my specialized tech stacks in frontend interaction design, backend API scalability, and cloud operations.',
      icon: Cpu,
      path: '/skills',
    },
    {
      title: 'Work History',
      subtitle: 'Experience',
      description: 'Review my professional timeline, responsibilities, and leadership roles at top tech companies.',
      icon: Briefcase,
      path: '/experience',
    },
    {
      title: 'Featured Projects',
      subtitle: 'Portfolio',
      description: 'Browse my production-grade web applications, AI platforms, DeFi dashboards, and design systems.',
      icon: FolderGit2,
      path: '/projects',
    },
    {
      title: 'Client Services',
      subtitle: 'Offerings',
      description: 'See how I can help bring your ideas to life through modern UI design, robust server architectures, and API integrations.',
      icon: Sparkles,
      path: '/services',
    },
    {
      title: 'Certifications',
      subtitle: 'Credentials',
      description: 'Check out my verified cloud and backend qualifications from AWS, Meta, and other industry leaders.',
      icon: Award,
      path: '/certifications',
    },
  ];

  return (
    <div className="relative text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 bg-dark-bg dark:bg-dark-bg light:bg-light-bg min-h-screen">
      
      {/* 1. Hero Introduction Section */}
      <Hero />

      {/* 2. Statistical Counters */}
      <section className="py-12 border-y border-slate-800/40 dark:border-slate-800/40 light:border-slate-200/60 bg-slate-900/30 light:bg-slate-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col space-y-1"
              >
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-gradient">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-light-text-2 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Section Teaser Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Overview Dashboard</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mt-2">
              Explore My Profile
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <SectionCard
                key={idx}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                icon={card.icon}
                path={card.path}
                delay={idx * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Testimonials */}
      <Testimonials />

      {/* 5. Quick Contact Call-To-Action */}
      <section className="py-20 border-t border-slate-800/40 dark:border-slate-800/40 light:border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-slate-800/40"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl sm:text-3xl font-bold font-display mb-4">Have an Idea in Mind?</h3>
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-light-text-2 mb-8 max-w-lg mx-auto leading-relaxed">
              Let's collaborate to build stunning interfaces and scale high-performance services.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
