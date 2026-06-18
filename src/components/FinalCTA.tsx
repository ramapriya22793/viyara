import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Sparkles, Paperclip } from 'lucide-react';
import Magnetic from './Magnetic';

export default function FinalCTA() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate premium submit transition
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFile(null);
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#0b0f19] text-[#f1f5f9]">
      {/* Visual background ambient gradient meshes */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.3)_0%,transparent_70%)]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-[#2563eb]/10 rounded-full blur-[110px]" />
      
      {/* Floating Sparkle Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
          className="absolute w-[2.5px] h-[2.5px] rounded-full bg-[#f1f5f9]/60 pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Headline and Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#f1f5f9]/50" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#f1f5f9]/65 uppercase">
                  Let's Coordinate
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-tight text-[#f1f5f9]"
              >
                Ready to Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1f5f9] via-white to-[#06b6d4]">
                  Digital Legacy?
                </span>
              </motion.h2>
              <p className="text-sm text-[#f1f5f9]/65 leading-relaxed font-light mt-6 max-w-md">
                Reach out to our engineering and design advisory team. We formulate production blueprint scopes, brand assets, and custom consultations.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f1f5f9]/70 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="text-[#f1f5f9] font-bold text-xs uppercase tracking-wider">Headquarters</h5>
                  <p className="text-[#f1f5f9]/65 text-xs font-light leading-relaxed mt-1">
                    No 11 Saraswati Avenue, Achipatti, Pollachi - 642002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f1f5f9]/70 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h5 className="text-[#f1f5f9] font-bold text-xs uppercase tracking-wider">Phone Link</h5>
                  <p className="text-[#f1f5f9]/65 text-xs font-light mt-1">+91 8754287774</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f1f5f9]/70 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h5 className="text-[#f1f5f9] font-bold text-xs uppercase tracking-wider">Email Inquiry</h5>
                  <p className="text-[#f1f5f9]/65 text-xs font-light mt-1">Info@viyara.co.in</p>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="glass-dark p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#f1f5f9]/30 to-[#2563eb]" />

              <h4 className="font-serif text-2xl font-bold text-[#f1f5f9] mb-8">Inquiry Console</h4>

              {submitted ? (
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-[#f1f5f9]/10 rounded-full flex items-center justify-center mx-auto text-[#f1f5f9] border border-[#f1f5f9]/20">
                    <Sparkles size={24} className="animate-pulse" />
                  </div>
                  <h5 className="font-serif text-xl font-bold text-[#f1f5f9]">Console Log: Received</h5>
                  <p className="text-xs text-[#f1f5f9]/65 max-w-xs mx-auto font-light leading-relaxed">
                    Thank you. Your project metadata and files have been compiled successfully. Our advisory board will reach out shortly.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#f1f5f9]/50">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs text-white focus:outline-none focus:border-[#f1f5f9] focus:bg-white/10 transition-all font-light" 
                        placeholder="e.g. Johnathan Smith" 
                        required 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#f1f5f9]/50">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs text-white focus:outline-none focus:border-[#f1f5f9] focus:bg-white/10 transition-all font-light" 
                        placeholder="e.g. j.smith@enterprise.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#f1f5f9]/50">Subject / Service Required</label>
                    <div className="relative">
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#111928]/40 border border-white/10 rounded-2xl px-5 py-4 text-xs text-white focus:outline-none focus:border-[#f1f5f9] focus:bg-white/10 transition-all font-light appearance-none cursor-pointer" 
                        required
                      >
                        <option value="" disabled className="bg-[#0b0f19] text-white/55">Select a Service...</option>
                        <option value="E-Commerce & Quick Commerce Solutions" className="bg-[#0b0f19] text-white">E-Commerce & Quick Commerce Solutions</option>
                        <option value="Branding & Brand Identity" className="bg-[#0b0f19] text-white">Branding & Brand Identity</option>
                        <option value="Website & SaaS Product Development" className="bg-[#0b0f19] text-white">Website & SaaS Product Development</option>
                        <option value="Mobile App Development" className="bg-[#0b0f19] text-white">Mobile App Development</option>
                        <option value="UI/UX & Creative Design" className="bg-[#0b0f19] text-white">UI/UX & Creative Design</option>
                        <option value="Software Testing & Quality Assurance" className="bg-[#0b0f19] text-white">Software Testing & Quality Assurance</option>
                        <option value="Digital & Visual Marketing" className="bg-[#0b0f19] text-white">Digital & Visual Marketing</option>
                        <option value="Other / Custom Integration" className="bg-[#0b0f19] text-white">Other / Custom Integration</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#f1f5f9]/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#f1f5f9]/50">Consultation Message</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs text-white focus:outline-none focus:border-[#f1f5f9] focus:bg-white/10 transition-all resize-none font-light leading-relaxed" 
                      placeholder="Detail your engineering challenges or brand direction specs..." 
                      required 
                    />
                  </div>

                  {/* File Upload Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#f1f5f9]/50">Project Brief / Attachment (PDF, Image)</label>
                    <div className="relative group/upload">
                      <input 
                        type="file" 
                        accept="image/*,application/pdf"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFile(e.target.files[0]);
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                      />
                      <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between text-xs text-white/50 focus-within:border-[#f1f5f9] focus-within:bg-white/10 hover:bg-white/10 transition-all font-light">
                        <div className="flex items-center gap-3">
                          <Paperclip size={14} className="text-[#2563eb]" />
                          <span className="truncate max-w-[200px] sm:max-w-xs">{file ? file.name : "Attach brief or mockup file..."}</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-wider font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/5 group-hover/upload:bg-white/20 transition-all">
                          Browse
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button with Magnetic Wrapper */}
                  <div className="pt-2">
                    <Magnetic range={0.15}>
                      <button 
                        type="submit" 
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#2563eb] text-white hover:bg-blue-600 text-xs font-bold tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <Send size={12} />
                        Transmit Inquiry
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
