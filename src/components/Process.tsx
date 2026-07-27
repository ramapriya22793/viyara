import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, Map, Paintbrush, Code2, ShieldCheck, Rocket } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  { 
    icon: Search, 
    title: 'Discovery', 
    label: '01',
    desc: 'We conduct a deep diagnostic dive into your business goals, target audience demographics, and technology stack requirements.' 
  },
  { 
    icon: Map, 
    title: 'Planning', 
    label: '02',
    desc: 'Formulating strategic blueprints, architecture mappings, timeline schedules, and resource planning for execution.' 
  },
  { 
    icon: Paintbrush, 
    title: 'Design', 
    label: '03',
    desc: 'Crafting premium, high-fidelity editorial visual mockups and interactive user journeys that reflect your digital vision.' 
  },
  { 
    icon: Code2, 
    title: 'Development', 
    label: '04',
    desc: 'Engineering robust, compiled software solutions built for fast execution, database integrity, and server scalability.' 
  },
  { 
    icon: ShieldCheck, 
    title: 'Testing', 
    label: '05',
    desc: 'Subjecting all app systems to automated security audits and manual user acceptance testing (UAT).' 
  },
  { 
    icon: Rocket, 
    title: 'Launch & Scale', 
    label: '06',
    desc: 'Safe deployment to secure cloud nodes and implementation of performance logs for hyper-growth tracking.' 
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  // Smooth out the scroll progress using a spring
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="methodology" ref={containerRef} className="py-28 relative bg-[#ffffff]/30 border-t border-[#0f172a]/5 overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[250px] bg-[var(--color-accent-blue)]/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-blue)]/5 border border-[var(--color-accent-blue)]/10 text-xs font-bold tracking-[0.2em] text-[var(--color-accent-blue)] uppercase mb-6"
          >
            Engineering Pipeline
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6"
          >
            The Pathway to Quality
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#475569] text-lg font-light"
          >
            A systematic, structured development and visual marketing framework designed to guarantee enterprise reliability.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Background Static Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-[var(--color-accent-blue)]/8 -translate-x-1/2" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[var(--color-accent-blue)] via-[var(--color-accent-purple)] to-[var(--color-accent-blue)] -translate-x-1/2 z-10"
          />

          {/* Steps List */}
          <div className="space-y-20 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center relative"
                >
                  {/* Step Bubble Indicator */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      whileInView={{ 
                        scale: [0.8, 1.1, 1], 
                        backgroundColor: 'var(--color-accent-blue)',
                        borderColor: 'var(--color-accent-blue)'
                      }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="w-10 h-10 rounded-full border-2 border-[var(--color-accent-blue)]/20 bg-[#f1f5f9] flex items-center justify-center text-[#f1f5f9] text-xs font-bold shadow-md hover:shadow-lg transition-shadow"
                    >
                      <step.icon size={16} />
                    </motion.div>
                    
                    {/* Glowing outer aura on active scroll */}
                    <div className="absolute inset-0 rounded-full bg-[var(--color-accent-blue)]/10 blur-md pointer-events-none -z-10 animate-ping opacity-30" />
                  </div>

                  {/* Asymmetric Content Columns */}
                  
                  {/* Left Side Box (Desktop only, displays content if even, else placeholder) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 text-left md:text-right ${isEven ? 'block' : 'md:opacity-0 md:pointer-events-none'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                          borderColor: 'var(--color-accent-blue)',
                          boxShadow: '0 10px 25px -5px rgba(51, 65, 85, 0.08)'
                        }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="glass p-7 rounded-3xl border border-[#0f172a]/8 hover:border-[#0f172a]/20 transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <span className="font-serif font-bold text-[var(--color-accent-blue)]/60 text-sm tracking-widest">{step.label}</span>
                        <h4 className="font-serif text-xl font-bold text-[#0f172a] mt-1 mb-3">{step.title}</h4>
                        <p className="text-xs text-[#475569] leading-relaxed font-light">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side Box (Displays content if odd, else placeholder) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-16 text-left ${!isEven ? 'block' : 'md:hidden lg:block md:opacity-0 md:pointer-events-none'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                          borderColor: 'var(--color-accent-blue)',
                          boxShadow: '0 10px 25px -5px rgba(51, 65, 85, 0.08)'
                        }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="glass p-7 rounded-3xl border border-[#0f172a]/8 hover:border-[#0f172a]/20 transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <span className="font-serif font-bold text-[var(--color-accent-blue)]/60 text-sm tracking-widest">{step.label}</span>
                        <h4 className="font-serif text-xl font-bold text-[#0f172a] mt-1 mb-3">{step.title}</h4>
                        <p className="text-xs text-[#475569] leading-relaxed font-light">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
