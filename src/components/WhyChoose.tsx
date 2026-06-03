import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, PenTool, Target, Layers } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const reasons = [
  { icon: Cpu, title: 'Future-Ready Tech', desc: 'Built on compiled, future-proof frameworks like TypeScript and Go.' },
  { icon: ShieldCheck, title: 'Secure & Scalable', desc: 'Enterprise-grade cloud architectures with strict data security.' },
  { icon: Zap, title: 'Zero-Latency Speed', desc: 'Highly optimized page load times and data transactions.' },
  { icon: PenTool, title: 'Editorial UI/UX', desc: 'Aesthetic interfaces designed to elevate user retention and conversion.' },
  { icon: Target, title: 'Strategic Curation', desc: 'Expert brand consultancy that positions you as a market leader.' },
  { icon: Layers, title: 'Full Lifecycle', desc: 'Coordinating everything from blueprint and design to secure launch.' },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

// Simple Counter component for numbers
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    // Simple duration based counter
    const totalMiliseconds = 2000;
    const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span ref={ref} className="font-serif font-bold text-5xl text-[#162436]">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={sectionRef} id="why-VIYARA" className="py-28 relative overflow-hidden bg-[#f1f5f9]">
      {/* Parallax background ambient circle */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#162436]/3 rounded-full blur-[110px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Heading and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#162436]/5 border border-[#162436]/10 text-xs font-bold tracking-[0.2em] text-[#162436] uppercase mb-6">
              Why Partner With Us
            </span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6 leading-tight">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#162436] to-[#3f6a9e]">
                Future of Digital
              </span>
            </h3>
            <p className="text-[#475569] text-lg mb-10 leading-relaxed font-light">
              We do not just build templates. We engineer solid, scalable digital systems paired with high-end visual marketing solutions to aggressively drive user retention and corporate trust.
            </p>

            {/* Trust Stats Counter (TCS/Cognizant trust metrics) */}
            <div className="grid grid-cols-2 gap-8 border-l-2 border-[#162436]/20 pl-6">
              <div>
                <div className="h-14 flex items-center">
                  <Counter value={10} suffix="x" />
                </div>
                <div className="text-[10px] text-[#475569] uppercase tracking-wider font-bold mt-1">ROI Multiplier</div>
              </div>
              <div>
                <div className="h-14 flex items-center">
                  <Counter value={99} suffix="%" />
                </div>
                <div className="text-[10px] text-[#475569] uppercase tracking-wider font-bold mt-1">SLA Uptime SLA</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{
                  y: -6,
                  rotateX: 1.5,
                  rotateY: -1.5,
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  borderColor: 'rgba(22, 36, 54, 0.15)',
                  boxShadow: '0 15px 35px -10px rgba(22, 36, 54, 0.12)'
                }}
                className="glass p-7 rounded-3xl border border-[#162436]/5 transition-all duration-300 cursor-pointer"
              >
                {/* Micro-interactive Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-xl bg-[#162436]/5 flex items-center justify-center mb-5 text-[#162436]"
                >
                  <reason.icon className="w-5 h-5" />
                </motion.div>
                
                <h4 className="font-serif text-lg font-bold text-[#0f172a] mb-2">{reason.title}</h4>
                <p className="text-xs text-[#475569] leading-relaxed font-light">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
