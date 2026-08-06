import { motion } from 'framer-motion';
import { ShieldCheck, Code, Sparkles } from 'lucide-react';
import founderImg from '../assets/WhatsApp Image 2026-06-10 at 12.58.25 PM.jpeg';
import ctoImg from '../assets/WhatsApp Image 2026-07-23 at 11.53.10 AM.jpeg';

export default function About() {
  const teamMembers = [
    {
      name: 'Ragapriya Karunakaran',
      role: 'CEO & Founder',
      badge: 'Chief Executive Officer',
      icon: Sparkles,
      image: founderImg,
      zoomClass: 'group-hover:scale-105',
      description: 'Drives VIYARA’s overall strategic vision, brand curation, executive partnerships, and digital growth initiatives.',
      gradient: 'from-[#3b82f6]/20 to-[#8b5cf6]/20',
      borderColor: 'border-[#60a5fa]/30',
      tagColor: 'bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/30'
    },
    {
      name: 'Ramapriya Karthikeyan',
      role: 'CTO',
      badge: 'Chief Technology Officer',
      icon: Code,
      image: ctoImg,
      initials: 'RK',
      zoomClass: 'scale-[2.5] origin-[50%_20%] group-hover:scale-[2.65]',
      description: 'Spearheads technology architecture, full-stack software development, cloud infrastructure, and technical innovation.',
      gradient: 'from-[#06b6d4]/20 to-[#3b82f6]/20',
      borderColor: 'border-[#22d3ee]/30',
      tagColor: 'bg-[#22d3ee]/10 text-[#22d3ee] border-[#22d3ee]/30'
    }
  ];

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

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Company Vision & Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="relative glass-premium p-8 md:p-14 rounded-[2.5rem] border border-white/10 shadow-2xl text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-medium uppercase tracking-widest">
            <ShieldCheck size={14} className="text-[#60a5fa]" />
            About VIYARA
          </div>

          {/* Main VIYARA Overview Text */}
          <div className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto relative z-10 text-center">
            <p className="text-slate-100 text-lg md:text-xl font-sans font-normal leading-relaxed">
              VIYARA is a tech-enabled software and marketing agency helping businesses grow through innovative technology and data-driven strategies. We deliver scalable software, impactful digital experiences, and performance-focused marketing solutions that drive growth, improve efficiency, and create lasting business success.
            </p>
          </div>
        </motion.div>

        {/* Executive Leadership Team Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
              Executive Leadership
            </h3>
            <p className="text-white/50 text-xs font-light tracking-wider uppercase">
              Steering Engineering, Design &amp; Business Strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => {
              const IconComp = member.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`p-8 rounded-3xl bg-gradient-to-br ${member.gradient} border ${member.borderColor} backdrop-blur-md space-y-5 relative overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 shadow-xl`}
                >
                  {/* Laser Sheen Light Sweep Effect on Hover */}
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

                  <div className="flex items-center gap-4 relative z-10">
                    {/* Member Avatar with Glow Aura */}
                    {member.image ? (
                      <div className="relative w-16 h-16 rounded-2xl p-0.5 bg-white/10 border border-white/20 shadow-lg overflow-hidden shrink-0 group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all duration-300">
                        <img 
                          src={member.image} 
                          alt={`${member.name} - ${member.role}`} 
                          className={`w-full h-full object-cover rounded-2xl filter brightness-95 contrast-101 transition-transform duration-500 ${member.zoomClass || 'group-hover:scale-105'}`}
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#06b6d4] to-[#3b82f6] flex items-center justify-center text-white text-xl font-bold font-mono border border-white/20 shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {member.initials}
                      </div>
                    )}

                    <div>
                      <h4 className="font-serif text-xl font-bold text-white group-hover:text-[#60a5fa] transition-colors">
                        {member.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${member.tagColor} flex items-center gap-1.5`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-ping" />
                          {member.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-white/70 text-xs leading-relaxed font-normal relative z-10">
                    {member.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-[11px] text-white/40 font-sans relative z-10">
                    <IconComp size={13} className="text-[#60a5fa]" />
                    <span>{member.badge}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
