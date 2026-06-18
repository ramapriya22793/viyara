import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import founderImg from '../assets/WhatsApp Image 2026-06-10 at 12.58.25 PM.jpeg';

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#141414]">
      {/* Elegant background photo with radial fade */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#141414_85%)]" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-blue)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent-purple)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="relative glass-premium p-8 md:p-14 rounded-[2.5rem] border border-white/10 shadow-2xl text-center space-y-8"
        >
          {/* Quote Icon decorative */}
          <div className="absolute top-6 left-8 text-white/5 pointer-events-none">
            <Quote size={64} fill="currentColor" />
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-blue)]/10 border border-[var(--color-accent-blue)]/20 text-xs font-bold tracking-[0.18em] text-[#93c5fd] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
              Leadership
            </span>
          </div>

          {/* Quote Text */}
          <p className="text-white text-lg md:text-2xl leading-relaxed italic font-serif font-medium max-w-2xl mx-auto relative z-10">
            "Beyond technology, VIYARA provides complete visual marketing and content solutions — empowering brands to dominate their market and build a future-ready digital ecosystem."
          </p>

          {/* Divider */}
          <div className="h-[1px] bg-white/10 w-20 mx-auto" />

          {/* Profile Card down with the content */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            {/* Small circular photo */}
            <div className="relative w-16 h-16 rounded-full p-0.5 bg-white/10 border border-white/20 shadow-lg overflow-hidden shrink-0">
              <img 
                src={founderImg} 
                alt="Ragapriya Karunakaran - Co-Founder of VIYARA" 
                className="w-full h-full object-cover rounded-full filter brightness-95 contrast-101"
              />
            </div>
            
            {/* Name and Role */}
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-lg md:text-xl font-bold text-white">
                Ragapriya Karunakaran
              </h4>
              <p className="text-[#60a5fa] font-bold text-xs tracking-wider uppercase mt-1">
                Co-Founder &amp; Director
              </p>
            </div>
          </div>

          {/* Fine Subtext */}
          <p className="text-white/40 text-[11px] font-light leading-relaxed max-w-md mx-auto">
            Leading the brand curation, creative execution, and technical design advisory boards at VIYARA to deliver premium digital products for global businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
