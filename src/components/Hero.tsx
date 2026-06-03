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
      className="relative min-h-screen flex flex-col justify-between pt-40 pb-0 overflow-hidden bg-[#0f1825] select-none text-center"
    >
      {/* ── Background Photo & Premium Dark Mask ── */}
      <div className="absolute inset-0 z-0">
        {/* IT Software engineering database network background overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-35 scale-102 transition-transform duration-1000"
          style={{ backgroundImage: `url('/viyara_software_room_bg.png')` }}
        />
        
        {/* Soft atmospheric radial gradients & light streaks */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1825] via-[#0f1825]/75 to-[#0f1825]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1825] via-transparent to-[#0f1825]/70" />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0f1825_92%)]" />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Ambient glows (interactive mouse movement) */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-[10%] left-[25%] w-[600px] h-[600px] bg-[#cca353]/5 rounded-full filter blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ x: glowY, y: glowX }}
        className="absolute bottom-[15%] right-[25%] w-[550px] h-[550px] bg-[#3f6a9e]/10 rounded-full filter blur-[130px] pointer-events-none"
      />

      {/* Main Core Layout (Centralized structure) */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex-grow flex items-center justify-center relative z-10 py-16">
        <div className="flex flex-col items-center justify-center text-center w-full">
          
          {/* Editorial Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white mb-7 mt-8 uppercase"
          >
            Building Modern Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ede7d7] via-white to-[#3f6a9e] text-glow-plum">
              Experiences For Growing Brands
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-sm md:text-base lg:text-lg text-[rgba(255,255,255,0.72)] font-light max-w-2xl leading-relaxed mb-10 tracking-wide"
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
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-[#cca353]/40 bg-[#cca353]/15 text-[#ede7d7] hover:bg-[#cca353]/30 hover:border-[#cca353]/80 hover:text-white shadow-[0_0_20px_rgba(204,163,83,0.25)] hover:shadow-[0_0_35px_rgba(204,163,83,0.45)] transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300 text-[#cca353]" />
              </a>
            </Magnetic>
            <Magnetic range={0.25}>
              <a
                href="#services"
                className="px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/25 backdrop-blur-md transition-all duration-300"
              >
                Our Services
              </a>
            </Magnetic>
          </motion.div>

        </div>
      </div>

      {/* Marquee Footer Banner */}
      <div className="w-full bg-black/45 py-7 border-t border-white/5 relative z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-3">
          <p className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/50 text-center">
            Pioneering digital infrastructures in key sectors
          </p>
        </div>

        {/* Infinite marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeTechs, ...marqueeTechs, ...marqueeTechs].map((tech, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 px-6 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-[#cca353]/30 hover:scale-105 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[#cca353] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#f1f5f9] whitespace-nowrap">
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
