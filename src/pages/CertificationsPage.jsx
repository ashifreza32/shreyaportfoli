import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { updateMetaTags } from '../utils/seo';
import { motion } from 'framer-motion';
import { Award, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificationsPage = () => {
  const { certifications, personalInfo } = portfolioData;

  useEffect(() => {
    updateMetaTags({
      title: 'Certifications',
      description: `View ${personalInfo.name}'s verified professional certifications, cloud architecture credentials, and React certificates.`,
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
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Verified Credentials</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display mt-2">
            My <span className="text-gradient">Certifications</span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-slate-800/40 hover:border-primary/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Header Icon Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-primary/20 text-primary group-hover:text-accent transition-all duration-300 light:bg-slate-100">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-slate-800/80 light:bg-slate-100 text-[10px] font-semibold text-slate-400">
                    <Calendar className="w-3 h-3 mr-1 text-primary" />
                    {cert.date}
                  </span>
                </div>

                {/* Info titles */}
                <h3 className="text-lg font-bold text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 group-hover:text-primary transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-light-text-2 mt-1 mb-4">
                  {cert.issuer}
                </p>

                {/* ID badge info */}
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-300 mb-6 light:bg-slate-50 light:border-slate-200 light:text-light-text-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>

              {/* Verify Link */}
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 py-2.5 w-full bg-slate-800/80 hover:bg-primary border border-slate-700/50 hover:border-primary text-white text-xs font-bold rounded-lg transition-all light:bg-slate-100 light:text-light-text-1 light:border-slate-200 light:hover:bg-slate-200"
              >
                <span>Verify Credential</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Redirect CTA to Contact */}
        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Let's Discuss Opportunities</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
