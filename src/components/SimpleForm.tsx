import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { supabase } from '../services/supabaseClient';

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    
    const phoneRegex = /^[+]?[0-9\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name.trim(),
            phone: formData.phone.trim()
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error saving contact to database:', err);
      setErrors(prev => ({
        ...prev,
        submit: err.message || 'Failed to submit details. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f1f5f9] font-poppins flex items-center justify-center relative overflow-hidden select-none w-full">
      
      {/* Background ambient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,207,167,0.08)_0%,transparent_60%)] filter blur-[80px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(63,106,158,0.15)_0%,transparent_60%)] filter blur-[100px] pointer-events-none z-0" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />

      <div className="w-full max-w-[450px] padding-[24px] px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#162436]/45 backdrop-blur-3xl border border-white/8 rounded-[24px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-container"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="text-center mb-9">
                  <h1 className="font-sans text-2xl font-bold tracking-tight uppercase text-white mb-2">
                    Viyara<span className="text-[#E8CFA7]">.</span>
                  </h1>
                  <p className="text-xs text-slate-400 font-light font-inter">
                    Enter your contact details to get in touch
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name field */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name"
                      id="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`peer w-full px-4.5 py-4 bg-white/3 border ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-white/10 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/15'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                    />
                    <label 
                      htmlFor="name"
                      className="absolute left-4.5 top-4 text-sm text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                      peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                      peer-focus:text-xs peer-focus:-translate-y-6.5 peer-focus:text-[#E8CFA7] peer-focus:font-semibold
                      not-empty:-translate-y-6.5 not-empty:text-xs not-empty:text-[#E8CFA7] not-empty:font-semibold"
                      style={{ transform: formData.name ? 'translateY(-26px) scale(0.85)' : '' }}
                    >
                      Full Name
                    </label>
                    {errors.name && (
                      <span className="flex items-center gap-1.5 mt-1.5 text-[11px] text-red-400 font-inter">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="relative">
                    <input 
                      type="tel" 
                      name="phone"
                      id="phone"
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`peer w-full px-4.5 py-4 bg-white/3 border ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-white/10 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/15'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                    />
                    <label 
                      htmlFor="phone"
                      className="absolute left-4.5 top-4 text-sm text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                      peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                      peer-focus:text-xs peer-focus:-translate-y-6.5 peer-focus:text-[#E8CFA7] peer-focus:font-semibold"
                      style={{ transform: formData.phone ? 'translateY(-26px) scale(0.85)' : '' }}
                    >
                      Phone Number
                    </label>
                    {errors.phone && (
                      <span className="flex items-center gap-1.5 mt-1.5 text-[11px] text-red-400 font-inter">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400 font-inter mb-4 text-center">
                      {errors.submit}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-white hover:bg-[#E8CFA7] text-[#162436] font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-[#E8CFA7]/20 hover:-translate-y-0.5 disabled:bg-white/20 disabled:text-white/40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-[#162436]" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Details
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </motion.div>
            ) : (
              /* Success Screen */
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-center py-6"
              >
                <div className="w-18 h-18 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 mx-auto border border-green-500/20">
                  <CheckCircle2 size={36} className="stroke-[2]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  Submission Successful
                </h3>
                
                <p className="text-xs text-slate-400 font-inter font-light leading-relaxed max-w-xs mx-auto mb-8">
                  Thank you for sharing your details. Our representative will contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', phone: '' });
                    setIsSubmitted(false);
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-all duration-200 cursor-pointer"
                >
                  Back to Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
}
