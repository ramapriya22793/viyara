import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, ChevronDown, ArrowRight } from 'lucide-react';
import { supabase } from '../services/supabaseClient';

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    byoc: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Web & SaaS Engineering',
    'Mobile Application Development',
    'Cloud Systems & DevOps',
    'AI-driven Enterprise Systems',
    'UI/UX Product Design',
    'Performance & Growth Marketing',
    'Digital Brand Strategy'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your consultation request';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Save inquiry to supabase contacts table
      const formattedPhone = `[Email: ${formData.email.trim()}] | [Service: ${formData.service}] | [Message: ${formData.message.trim()}]` + (formData.byoc ? ` | [BYOC Space: ${formData.byoc.trim()}]` : ' | [BYOC Space: None]');

      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name.trim(),
          phone: formattedPhone
        }]);

      if (error) throw error;

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Database insertion failed:', err.message);
      setErrors(prev => ({
        ...prev,
        submit: 'Failed to transmit inquiry. Please check your network connection.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f1f5f9] font-poppins flex items-center justify-center relative overflow-hidden select-none w-full py-16">
      
      {/* Background ambient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,207,167,0.08)_0%,transparent_60%)] filter blur-[80px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(63,106,158,0.15)_0%,transparent_60%)] filter blur-[100px] pointer-events-none z-0" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />

      <div className="w-full max-w-[620px] px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#162436]/45 backdrop-blur-3xl border border-white/10 rounded-[28px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="service-form-container"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="mb-8">
                  <h1 className="font-sans text-2xl font-bold tracking-tight text-white mb-1.5">
                    Inquiry Console
                  </h1>
                  <p className="text-xs text-slate-400 font-light font-inter">
                    Submit your engineering brief to consult with our digital team
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name and Email in one row on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="e.g. Johnathan Smith"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4.5 py-3.5 bg-white/3 border ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-blue-500'} rounded-xl text-xs outline-none transition-all placeholder:text-slate-500`}
                      />
                      {errors.name && (
                        <span className="block text-[10px] text-red-400 font-inter">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        id="email"
                        placeholder="e.g. j.smith@enterprise.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4.5 py-3.5 bg-white/3 border ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-blue-500'} rounded-xl text-xs outline-none transition-all placeholder:text-slate-500`}
                      />
                      {errors.email && (
                        <span className="block text-[10px] text-red-400 font-inter">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dropdown service field */}
                  <div className="space-y-2 relative">
                    <label htmlFor="service" className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Subject / Service Required
                    </label>
                    <div className="relative">
                      <select 
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`appearance-none w-full px-4.5 py-3.5 bg-white/3 border ${errors.service ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-blue-500'} rounded-xl text-xs outline-none transition-all text-slate-300 cursor-pointer`}
                      >
                        <option value="" disabled className="bg-[#0b0f19] text-slate-500">Select a Service...</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service} className="bg-[#0b0f19] text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                    {errors.service && (
                      <span className="block text-[10px] text-red-400 font-inter">
                        {errors.service}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Consultation Message
                    </label>
                    <textarea 
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Detail your engineering challenges or brand direction specs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4.5 py-3.5 bg-white/3 border ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-blue-500'} rounded-xl text-xs outline-none transition-all resize-none placeholder:text-slate-500`}
                    />
                    {errors.message && (
                      <span className="block text-[10px] text-red-400 font-inter">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Custom File Upload Brief field */}
                  {/* BYOC field */}
                  <div className="space-y-2">
                    <label htmlFor="byoc" className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      BYOCs - Build Your Own Commerce Space
                    </label>
                    <textarea 
                      name="byoc"
                      id="byoc"
                      rows={3}
                      placeholder="Describe your custom commerce features, workflows, or integrations..."
                      value={formData.byoc}
                      onChange={handleInputChange}
                      className="w-full px-4.5 py-3.5 bg-white/3 border border-white/10 focus:border-blue-500 rounded-xl text-xs outline-none transition-all resize-none placeholder:text-slate-500 text-slate-300"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-550 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 disabled:bg-white/20 disabled:text-white/40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <Send size={12} className="stroke-[2.5]" />
                          Transmit Inquiry
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </motion.div>
            ) : (
              /* Success Screen */
              <motion.div
                key="service-success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-center py-6"
              >
                <div className="w-18 h-18 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 mx-auto border border-green-500/20">
                  <CheckCircle2 size={36} className="stroke-[2]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  Inquiry Transmitted
                </h3>
                
                <p className="text-xs text-slate-400 font-inter font-light leading-relaxed max-w-sm mx-auto mb-8">
                  Thank you for submitting your brief. Our engineering and design team will review it and get back to you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', email: '', service: '', message: '', byoc: '' });
                    setIsSubmitted(false);
                  }}
                  className="group inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-all duration-200 cursor-pointer"
                >
                  Return to Console
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
}
