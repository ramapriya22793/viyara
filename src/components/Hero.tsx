import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const marqueeTechs = [
  { name: 'Enterprise Software' },
  { name: 'SaaS Architecture' },
  { name: 'Visual Marketing' },
  { name: 'Cloud Engineering' },
  { name: 'Quality Security' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse coordinates for parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement
  const springX = useSpring(mouseX, { stiffness: 45, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 22 });

  // Map mouse coordinates to visual offsets for parallax layers
  const glowX = useTransform(springX, [-500, 500], [-12, 12]);
  const glowY = useTransform(springY, [-500, 500], [-12, 12]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-40 pb-0 overflow-hidden bg-[var(--color-luxury-dark)] select-none text-center"
    >
      {/* ── Background Photo & Premium Luxury Mask ── */}
      <div className="absolute inset-0 z-0">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Abstract Blurred Orbs (Talentship style) */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          x: [-10, 10, -10],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-[var(--color-luxury-plum)]/15 rounded-full filter blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{
          y: [15, -15, 15],
          x: [10, -10, 10],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] bg-[var(--color-luxury-gold)]/8 rounded-full filter blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          y: [-20, 20, -20],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-[var(--color-luxury-beige)]/5 rounded-full filter blur-[70px] pointer-events-none"
      />
      
      {/* Ambient glows (interactive mouse movement) */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-[10%] left-[25%] w-[600px] h-[600px] bg-[var(--color-luxury-gold)]/4 rounded-full filter blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ x: glowY, y: glowX }}
        className="absolute bottom-[15%] right-[25%] w-[550px] h-[550px] bg-[var(--color-luxury-beige)]/3 rounded-full filter blur-[130px] pointer-events-none"
      />

      {/* Main Core Layout (Centralized structure) */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex-grow flex items-center justify-center relative z-10 py-16">
        <div className="flex flex-col items-center justify-center text-center w-full">
          
          {/* Editorial Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white mb-7 mt-8 uppercase"
          >
            Building Modern Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-luxury-beige)] via-[var(--color-luxury-gold)] to-[var(--color-luxury-beige)]">
              Experiences For Growing Brands
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-sm md:text-base lg:text-lg text-[var(--color-luxury-beige)]/70 font-light max-w-2xl leading-relaxed mb-10 tracking-wide"
          >
            We design, develop, and scale modern digital solutions that help businesses grow, operate efficiently, and create meaningful customer experiences.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Magnetic range={0.25}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#cbd5e1] via-[#f8fafc] to-[#e2e8f0] hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] transition-all duration-300 overflow-hidden active:scale-98"
              >
                {/* Glare Shine Effect Overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                Get Consultation
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300 text-black" />
              </a>
            </Magnetic>
            <Magnetic range={0.25}>
              <a
                href="#services"
                className="group relative inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-[#f1f5f9] bg-white/5 border border-white/15 hover:border-white/40 hover:bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[12px] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 overflow-hidden active:scale-98"
              >
                Services
              </a>
            </Magnetic>
          </motion.div>

        </div>
      </div>

      {/* Marquee Footer Banner */}
      <div className="w-full bg-[#0f040d]/80 py-7 border-t border-[var(--color-luxury-plum)]/20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-3">
          <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[var(--color-luxury-beige)]/80 text-center">
            Pioneering digital infrastructures in key sectors
          </p>
        </div>

        {/* Infinite marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeTechs, ...marqueeTechs, ...marqueeTechs].map((tech, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 px-6 py-2 rounded-2xl bg-white/8 border border-white/15 hover:border-[var(--color-luxury-gold)]/50 hover:scale-105 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-luxury-gold)] animate-pulse flex-shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-luxury-beige)] whitespace-nowrap opacity-90">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
