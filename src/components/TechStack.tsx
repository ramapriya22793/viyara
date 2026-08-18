import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Cpu, Database, Cloud, LayoutTemplate, 
  Smartphone, Paintbrush, ShieldCheck, Milestone
} from 'lucide-react';

const techGroups = [
  {
    category: "Core Engineering",
    desc: "Robust architectures and performance-first coding.",
    items: [
      { name: "React / Next.js", icon: Code2, delay: 0.1, color: "rgba(22, 36, 54, 0.08)", text: "#162436" },
      { name: "TypeScript", icon: LayoutTemplate, delay: 0.3, color: "rgba(22, 36, 54, 0.04)", text: "#162436" },
      { name: "Node.js", icon: Cpu, delay: 0.2, color: "rgba(22, 36, 54, 0.08)", text: "#162436" },
      { name: "Go / Python", icon: ShieldCheck, delay: 0.5, color: "rgba(22, 36, 54, 0.04)", text: "#162436" },
    ]
  },
  {
    category: "Cloud & Infrastructure",
    desc: "Infinite scaling with enterprise-grade resilience.",
    items: [
      { name: "AWS / Cloud", icon: Cloud, delay: 0.4, color: "rgba(22, 36, 54, 0.04)", text: "#162436" },
      { name: "Docker / K8s", icon: Milestone, delay: 0.6, color: "rgba(22, 36, 54, 0.08)", text: "#162436" },
      { name: "Redis", icon: Database, delay: 0.2, color: "rgba(22, 36, 54, 0.04)", text: "#162436" },
    ]
  },
  {
    category: "Design & Mobile",
    desc: "Pixel-perfect interfaces and native execution.",
    items: [
      { name: "Figma (UI/UX)", icon: Paintbrush, delay: 0.3, color: "rgba(22, 36, 54, 0.08)", text: "#162436" },
      { name: "iOS / Swift", icon: Smartphone, delay: 0.7, color: "rgba(22, 36, 54, 0.04)", text: "#162436" },
      { name: "Tailwind CSS", icon: LayoutTemplate, delay: 0.4, color: "rgba(22, 36, 54, 0.08)", text: "#162436" },
    ]
  }
];

export default function TechStack() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const nextSlide = () => {
    setActiveGroupIndex((prev) => (prev + 1) % techGroups.length);
  };

  const prevSlide = () => {
    setActiveGroupIndex((prev) => (prev - 1 + techGroups.length) % techGroups.length);
  };

  // Autoplay slider for mobile view (changes every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeGroupIndex]);

  return (
    <section id="tech-stack" className="py-20 md:py-28 relative overflow-hidden bg-[#f8fafc] border-t border-[#0f172a]/5">
      {/* Background ambient decorative circles */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[var(--color-accent-blue)]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent-purple)]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-blue)]/5 border border-[var(--color-accent-blue)]/10 text-xs font-bold tracking-[0.2em] text-[var(--color-accent-blue)] uppercase mb-6"
          >
            Technology Ecosystem
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6"
          >
            Engineering with Modern Stacks
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#475569] text-lg leading-relaxed"
          >
            We deploy production-hardened, high-performance architectures engineered to handle enterprise scale and deliver zero-latency responsiveness.
          </motion.p>
        </div>

        {/* Desktop View: Circular Spherical Tech Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto justify-center items-center">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: groupIndex * 0.15 }}
              className="aspect-square rounded-full flex flex-col justify-center items-center text-center p-8 md:p-12 relative overflow-hidden group transition-all duration-500 border border-[#162436]/10 shadow-[0_20px_50px_rgba(22,36,54,0.15)] bg-[#162436] hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(22,36,54,0.25)]"
            >
              {/* Radial glow on hover inside the circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6 z-10 max-w-[240px]">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">{group.category}</h4>
                <p className="text-[#cbd5e1] text-xs font-light leading-relaxed">{group.desc}</p>
              </div>

              {/* Items inside circular layout */}
              <div className="flex flex-wrap gap-2.5 justify-center z-10 max-w-[260px]">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ 
                      scale: 1.06, 
                      y: -3,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      boxShadow: '0 8px 20px -6px rgba(0,0,0,0.3)'
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    style={{ animationDelay: `${item.delay}s` }}
                    className="animate-float flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 cursor-pointer transition-all duration-300"
                  >
                    <item.icon className="w-3.5 h-3.5 text-[#60a5fa]" />
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Carousel Slider */}
        <div className="lg:hidden flex flex-col items-center justify-center relative max-w-sm mx-auto px-2">
          <div className="w-full relative min-h-[300px] sm:min-h-[320px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroupIndex}
                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -5000 || offset.x < -70) {
                    nextSlide();
                  } else if (swipe > 5000 || offset.x > 70) {
                    prevSlide();
                  }
                }}
                className="w-full aspect-square max-w-[270px] sm:max-w-[290px] rounded-full flex flex-col justify-center items-center text-center p-6 relative overflow-hidden border border-[#162436]/10 shadow-[0_20px_50px_rgba(22,36,54,0.15)] bg-[#162436] cursor-grab active:cursor-grabbing"
              >
                {/* Radial glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-indigo-500/15 pointer-events-none" />
                
                <div className="mb-4 z-10 max-w-[200px] select-none">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-1.5">{techGroups[activeGroupIndex].category}</h4>
                  <p className="text-[#cbd5e1] text-[10px] sm:text-xs font-light leading-relaxed px-2">{techGroups[activeGroupIndex].desc}</p>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-2 justify-center z-10 max-w-[220px]">
                  {techGroups[activeGroupIndex].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 bg-white/5 select-none"
                    >
                      <item.icon className="w-3 h-3 text-[#60a5fa]" />
                      <span className="text-[9px] font-bold tracking-wider uppercase text-white">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {techGroups.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGroupIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeGroupIndex ? 'w-8 bg-[#2563eb]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Fine-print certification text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 text-[10px] md:text-xs tracking-wider text-[#475569] font-medium px-4"
        >
          ✓ Fully compiled TypeScript • Server-side optimized • Zero-latency caching • Cloud Native compliant
        </motion.div>
      </div>
    </section>
  );
}
