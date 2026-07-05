import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { portfolioData } from '../data/portfolioData';
import { updateMetaTags } from '../utils/seo';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const { personalInfo } = portfolioData;

  useEffect(() => {
    updateMetaTags({
      title: 'Contact Me',
      description: `Get in touch with ${personalInfo.name} for development, contract engineering, or collaborative opportunities.`,
    });
  }, [personalInfo.name]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setIsSubmitting(true);

    // Dynamic EmailJS config keys. 
    // Users can customize these. We will check if placeholders exist.
    const SERVICE_ID = 'service_placeholder';
    const TEMPLATE_ID = 'template_placeholder';
    const PUBLIC_KEY = 'public_key_placeholder';

    if (
      SERVICE_ID === 'service_placeholder' ||
      TEMPLATE_ID === 'template_placeholder' ||
      PUBLIC_KEY === 'public_key_placeholder'
    ) {
      // Graceful Simulation mode for instant premium developer demonstration
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success('Simulation: Message sent successfully! 🚀');
        toast('Configure real EmailJS keys in src/pages/ContactPage.jsx', {
          icon: '⚙️',
          duration: 6000
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    // Real EmailJS Send call
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      PUBLIC_KEY
    )
    .then(() => {
      setIsSubmitting(false);
      toast.success('Your message has been delivered successfully! 🚀');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      setIsSubmitting(false);
      console.error('EmailJS Error:', err);
      toast.error('Failed to deliver message. Please try again.');
    });
  };

  return (
    <div className="pt-24 pb-20 text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 min-h-screen">
      
      {/* Toast Notification Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display mt-2">
            Contact <span className="text-gradient">Me</span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-2xl font-bold font-display">Let's Connect</h2>
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-light-text-2 leading-relaxed">
              If you have any projects, freelance work, or fulltime employment opportunities in mind, feel free to fill out the form or reach out directly!
            </p>

            <div className="space-y-4 pt-4">
              {/* Phone item */}
              <div className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone Call</span>
                  <p className="text-sm font-semibold">{personalInfo.phone}</p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email Address</span>
                  <p className="text-sm font-semibold">{personalInfo.email}</p>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Location</span>
                  <p className="text-sm font-semibold">{personalInfo.location}</p>
                </div>
              </div>

              {/* LinkedIn item */}
              <div className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <FaLinkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">LinkedIn Profile</span>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:underline hover:text-accent"
                  >
                    View Professional Profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/40 space-y-5">
              
              {/* Name field */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email field */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Subject field */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className={`form-input ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message field */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Alex, let's talk about building..."
                  className={`form-input resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-primary/25 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Delivering...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
