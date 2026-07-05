import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            finishLoading();
          }, 300);
          return 100;
        }
        const diff = Math.random() * 20;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 bg-dark-bg z-50 flex flex-col justify-center items-center font-sans">
      <div className="flex flex-col items-center max-w-xs w-full px-6">
        {/* Animated Brand Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-primary via-secondary to-accent shadow-2xl shadow-primary/20 mb-6"
        >
          <span className="text-white text-3xl font-extrabold tracking-tight">AR</span>
          
          {/* Animated decorative ring */}
          <div className="absolute -inset-2 rounded-2xl border border-primary/30 animate-pulse-glow" />
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden border border-slate-700/30">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut' }}
          />
        </div>

        {/* Loading text info */}
        <div className="flex justify-between items-center w-full mt-2 text-xs font-semibold text-slate-400">
          <span className="tracking-widest uppercase">Initializing Portfolio</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
