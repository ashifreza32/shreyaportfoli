import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SectionCard = ({ title, subtitle, description, icon: Icon, path, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="glass-card flex flex-col justify-between p-6 rounded-2xl relative overflow-hidden group border border-slate-200/40 dark:border-slate-800/40 hover:border-primary/50 transition-all duration-300"
    >
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Icon & Title */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:bg-primary/20 text-primary group-hover:text-accent transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-light-text-2 dark:text-slate-400">
              {subtitle}
            </span>
            <h3 className="text-xl font-bold text-light-text-1 dark:text-dark-text-1 group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-light-text-2 dark:text-slate-300 mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Navigation Link */}
      <Link
        to={path}
        className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:text-accent group/btn"
      >
        <span>Explore Details</span>
        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default SectionCard;
