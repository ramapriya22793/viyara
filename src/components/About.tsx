import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Globe, Layers, PenTool, Megaphone, CheckCircle, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Globe,
    title: 'Software Development',
    desc: 'Website, SaaS platforms & mobile apps built for performance, security and scale.',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    icon: PenTool,
    title: 'UI/UX & Quality',
    desc: 'User-centric design paired with rigorous testing and QA for flawless digital products.',
    color: 'from-violet-500/20 to-violet-600/5',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/20',
  },
  {
    icon: Layers,
    title: 'Visual Marketing',
    desc: 'Digital campaigns, advertising assets, videography, graphic design, and content curation.',
    color: 'from-pink-500/20 to-pink-600/5',
    iconColor: 'text-pink-400',
    border: 'border-pink-500/20',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Content marketing, visual campaigns, e-commerce and data-driven digital growth strategies.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-400',
    border: 'border-emerald-500/20',
  },
];

const values = [
  { icon: CheckCircle, text: 'Innovation-first approach' },
  { icon: CheckCircle, text: 'Consistency in delivery' },
  { icon: TrendingUp, text: 'Focused on business growth' },
  { icon: CheckCircle, text: 'Future-ready digital ecosystems' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#141414]">

      {/* Elegant background photo with radial fade */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#141414_85%)]" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-blue)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent-purple)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-blue)]/10 border border-[var(--color-accent-blue)]/20 text-xs font-bold tracking-[0.18em] text-[var(--color-accent-blue)] uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-blue)] animate-pulse" />
            About VIYARA
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
            A Leading Force in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue)] via-white to-[var(--color-accent-purple)]">
              Software &amp; Branding
            </span>
          </h2>

          {/* Main description — split into elegant paragraphs */}
          <div className="space-y-5 text-white/55 text-lg leading-relaxed font-light max-w-3xl">
            <p>
              VIYARA Marketing Solutions is a leading software and branding solutions firm, delivering
              premium digital products and strategic brand development for businesses across industries.
            </p>
            <p>
              We specialize in <span className="text-white/80 font-medium">website development, SaaS product development,</span> and{' '}
              <span className="text-white/80 font-medium">mobile app development,</span> supported by strong UI/UX design,
              software testing, and quality assurance to ensure performance, security, and scalability.
            </p>
            <p>
              With a focus on <span className="text-white/80 font-medium">innovation, consistency, and business growth,</span> VIYARA empowers
              brands to build a powerful market presence and a future-ready digital ecosystem.
            </p>
          </div>
        </motion.div>

        {/* ── Pillars grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.12)' }}
              className={`relative group rounded-2xl border ${p.border} bg-gradient-to-b ${p.color} p-7 cursor-default transition-all duration-300 overflow-hidden`}
            >
              {/* Subtle top line accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5"
              >
                <p.icon size={22} className={p.iconColor} />
              </motion.div>

              <h4 className="text-white font-semibold text-lg mb-3 leading-snug">{p.title}</h4>
              <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom strip: values + stat ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pt-10 border-t border-white/[0.06]"
        >
          {/* Values list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <v.icon size={16} className="text-blue-400 shrink-0" />
                <span className="text-white/60 text-sm font-medium">{v.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Tagline / quote block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:max-w-md p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
          >
            <p className="text-white/70 text-base leading-relaxed italic font-light mb-4">
              "Beyond technology, VIYARA provides complete visual marketing and content solutions — empowering
              brands to dominate their market and build a future-ready digital ecosystem."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="VIYARA Logo Icon"
                className="w-8 h-8 rounded shadow-md"
              />
              <div>
                <div className="text-white text-sm font-semibold">VIYARA</div>
                <div className="text-white/35 text-xs">Marketing Solutions</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
