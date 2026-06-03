import { motion } from 'framer-motion';
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
  return (
    <section id="tech-stack" className="py-28 relative overflow-hidden bg-[#ffffff]/60 border-t border-[#162436]/5">
      {/* Background ambient decorative circles */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#162436]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#3f6a9e]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#162436]/5 border border-[#162436]/10 text-xs font-bold tracking-[0.2em] text-[#162436] uppercase mb-6"
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

        {/* Circular Spherical Tech Grid */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto justify-center items-center">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: groupIndex * 0.15 }}
              className="glass aspect-square rounded-full flex flex-col justify-center items-center text-center p-8 md:p-12 relative overflow-hidden group hover:glow-plum hover:border-[#cca353]/30 transition-all duration-500 border border-[#162436]/10 shadow-[0_15px_40px_-20px_rgba(22,36,54,0.15)] bg-white/40"
            >
              {/* Radial gradient background on sphere hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#162436]/2 via-transparent to-[#cca353]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6 z-10 max-w-[240px]">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0f172a] mb-2">{group.category}</h4>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{group.desc}</p>
              </div>

              {/* Items inside circular layout */}
              <div className="flex flex-wrap gap-2.5 justify-center z-10 max-w-[260px]">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ 
                      scale: 1.06, 
                      y: -3,
                      backgroundColor: 'rgba(22, 36, 54, 0.12)',
                      boxShadow: '0 8px 20px -6px rgba(22, 36, 54, 0.15)'
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    style={{ 
                      animationDelay: `${item.delay}s`,
                      backgroundColor: item.color,
                      color: item.text
                    }}
                    className="animate-float flex items-center gap-2 px-3 py-2 rounded-full border border-[#162436]/10 cursor-pointer transition-all duration-300"
                  >
                    <item.icon className="w-3.5 h-3.5 text-[#162436]" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine-print certification text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-xs tracking-wider text-[#475569] font-medium"
        >
          ✓ Fully compiled TypeScript • Server-side optimized • Zero-latency caching • Cloud Native compliant
        </motion.div>
      </div>
    </section>
  );
}
