import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const servicePillars = [
  {
    title: 'E-Commerce & Quick Commerce Solutions',
    category: 'High-Speed Retail Architectures',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1400&q=80',
    tags: ['E-Commerce Storefronts', 'Quick Commerce', 'Custom Headless Build', 'Stripe Integrations'],
    brief: 'Developing custom, high-speed online storefronts and quick commerce platforms built entirely from scratch for maximum conversions.',
    solution: 'We code custom, template-free headless storefronts featuring lightning-fast page loading speeds and secure payment gateways.',
    outcome: 'Sub-second shopping cart transitions, boosting successful sales transactions and minimizing checkout abandonment.'
  },
  {
    title: 'Branding & Brand Identity',
    category: 'Brand Strategy & Identity Design',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
    tags: ['Brand Strategy', 'Logo & Visual Identity', 'Brand Guidelines', 'Packaging Design'],
    brief: 'Crafting powerful, distinctive brand identities that resonate deeply with your audience — from strategy and naming through to logo design, color systems, and full brand guidelines.',
    solution: 'We develop comprehensive brand systems including logo suites, typography pairings, color palettes, tone of voice, and complete brand style guides ready for all digital and print applications.',
    outcome: 'A cohesive, recognizable brand presence that builds trust, drives recall, and sets your business apart from competitors across every customer touchpoint.'
  },
  {
    title: 'Website & SaaS Product Development',
    category: 'Digital Systems',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
    tags: ['Website Development', 'SaaS Product Development', 'Next.js / Node.js', 'Scalable Architectures'],
    brief: 'We build robust, enterprise-grade websites and custom SaaS platforms engineered for high speed, search engine optimization, and seamless user experiences.',
    solution: 'We develop fully responsive websites and scalable SaaS products using Next.js, Node.js, clean TypeScript codebases, and secure database integrations.',
    outcome: 'API load speeds under 300ms, search engine performance optimization, and zero downtime under high visitor traffic.'
  },
  {
    title: 'Mobile App Development',
    category: 'Native Mobile Engineering',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop',
    tags: ['Mobile Development', 'Swift / iOS SDK', 'Android / Kotlin', 'WebSockets'],
    brief: 'Designing and engineering native iOS and Android apps that deliver fluid performance, secure transaction tunnels, and beautiful user interfaces.',
    solution: 'We develop high-performance apps utilizing Kotlin and Swift frameworks, integrated with secure offline caching and smooth gesture transitions.',
    outcome: 'Highly rated native apps on the App Store and Google Play Store with zero sync lag and maximized user engagement.'
  },
  {
    title: 'UI/UX & Creative Design',
    category: 'Visual & User Journeys',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1400&auto=format&fit=crop',
    tags: ['UI/UX Design', 'Creative Design', 'Interactive Prototypes', 'Figma Curation'],
    brief: 'Formulating user-centered design systems, clean wireframes, and creative assets that make your brand stand out and maximize customer conversions.',
    solution: 'We map complete visual user journeys, prototype interactions in Figma, and build premium brand aesthetic design guidelines.',
    outcome: 'Elevated customer engagement rates, optimized conversion funnels, and highly memorable digital visual identities.'
  },
  {
    title: 'Software Testing & Quality Assurance',
    category: 'Performance & Security Diagnostics',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1400&q=80',
    tags: ['Software Testing', 'Quality Assurance', 'Security Audits', 'Scalability Auditing'],
    brief: 'Performing rigorous manual and automated QA diagnostics to ensure your software is fast, completely secure, and bug-free before launching.',
    solution: 'We write automated Cypress test suites, carry out strict regression cycles, and execute deep security vulnerability audits.',
    outcome: 'Fault-tolerant pre-production code with zero bugs at launch, securing server data and system stability.'
  },
  {
    title: 'Digital & Visual Marketing',
    category: 'Growth & Content Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    tags: ['Digital Marketing', 'Content Marketing', 'Visual Marketing', 'Growth Campaigns'],
    brief: 'Driving growth through organic SEO campaigns, digital visibility strategy, and data-driven marketing assets to acquire qualified leads.',
    solution: 'We formulate custom SEO architectures, execute lead generation funnels, and design high-impact social media creatives.',
    outcome: 'Rankings on Google search pages, increased qualified web traffic, and a higher return on marketing investments.'
  }
];


function ServiceStackItem({ 
  pillar, 
  index
}: { 
  pillar: typeof servicePillars[0]; 
  index: number; 
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.35,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={sectionRef}
      className={`stack-section relative w-full flex items-center ${
        isActive ? 'is-active' : ''
      } ${!isEven ? 'reverse-layout' : ''}`}
    >
      {/* Background Parallax Image with Clip-Path Reveal */}
      <div 
        className="stack-parallax-bg"
        style={{ backgroundImage: `url(${pillar.image})` }}
      >
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/30 z-[2]" />
      </div>

      {/* Content Columns Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex items-center stack-content justify-center gap-0">
        
        {/* Left Side: Editorial white panel */}
        <div className="stack-card-white flex flex-col justify-between min-h-[360px] md:min-h-[420px]" data-cursor-text="Open">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent-blue)] mb-2 block">
              {pillar.category}
            </span>
            <h4 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-5">
              {pillar.title}
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed font-light mb-8 max-w-md">
              {pillar.brief}
            </p>
          </div>
        </div>

        {/* Right Side: Overlay deep-navy statistics card */}
        <div className="stack-card-accent flex flex-col justify-between min-h-[280px] md:min-h-[340px] bg-[#0b0f19]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f1f5f9]/60 block mb-6">
              DIAGNOSTIC OUTCOME
            </span>
            <p className="text-sm font-light leading-relaxed mb-6">
              {pillar.outcome}
            </p>
          </div>
          
          <div>
            <div className="h-[1px] bg-white/10 w-full mb-5" />
            <div className="flex flex-wrap gap-2">
              {pillar.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-[9px] font-bold tracking-wider uppercase bg-[#f1f5f9]/10 text-[#f1f5f9] border border-white/10 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Services() {
  const [selectedPillar, setSelectedPillar] = useState<typeof servicePillars[0] | null>(null);

  return (
    <section id="services" className="relative bg-[#ffffff] border-y border-[#0f172a]/5">
      {/* Introduction Banner before sticky items */}
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-blue)]/5 border border-[var(--color-accent-blue)]/10 text-xs font-bold tracking-[0.2em] text-[var(--color-accent-blue)] uppercase mb-6">
          Expertise &amp; Capabilities
        </span>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] leading-tight max-w-2xl mx-auto mb-6">
          Our Core Services
        </h3>
        <p className="text-[#475569] text-lg font-light max-w-xl mx-auto">
          Scroll down to explore our engineering and design capabilities.
        </p>
      </div>

      {/* Sticky Reveal Sections List */}
      <div className="relative">
        {servicePillars.map((pillar, index) => (
          <ServiceStackItem 
            key={index}
            pillar={pillar}
            index={index}
          />
        ))}
      </div>

      {/* Service Detail Dialog Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#162436]/60 z-[9999] backdrop-blur-sm flex items-center justify-center p-4 md:p-10 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
              className="bg-[#ffffff] w-full max-w-4xl rounded-[2.5rem] border border-[#162436]/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col relative"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#f1f5f9] border border-[#162436]/10 flex items-center justify-center text-[#0f172a] hover:bg-[#162436] hover:text-[#f1f5f9] transition-all z-30 shadow-md cursor-pointer"
                aria-label="Close Service Specs"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Showcase Header */}
                <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] to-transparent z-10" />
                  <img
                    src={selectedPillar.image}
                    alt={selectedPillar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-8 z-20">
                    <span className="text-[10px] font-bold tracking-widest text-[var(--color-accent-blue)] uppercase bg-[#f1f5f9] px-3 py-1 rounded-full border border-[#0f172a]/10 shadow-sm">
                      {selectedPillar.category}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0f172a] mt-3">
                      {selectedPillar.title}
                    </h2>
                  </div>
                </div>

                {/* Service Details Grid */}
                <div className="p-8 md:p-12 space-y-10">
                  {/* Detailed Analysis Section */}
                  <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="bg-[#f1f5f9]/50 border border-[#0f172a]/5 p-6 rounded-3xl space-y-3">
                      <div className="text-[9px] font-extrabold tracking-widest text-[var(--color-accent-blue)] uppercase">
                        Service Overview
                      </div>
                      <p className="text-xs text-[#0f172a] leading-relaxed font-normal">
                        {selectedPillar.brief}
                      </p>
                    </div>

                    <div className="bg-[#f1f5f9]/50 border border-[#0f172a]/5 p-6 rounded-3xl space-y-3">
                      <div className="text-[9px] font-extrabold tracking-widest text-[var(--color-accent-blue)] uppercase">
                        Execution Strategy
                      </div>
                      <p className="text-xs text-[#0f172a] leading-relaxed font-normal">
                        {selectedPillar.solution}
                      </p>
                    </div>

                    <div className="bg-[#0f172a] text-white p-6 rounded-3xl space-y-3 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
                      <div className="text-[9px] font-extrabold tracking-widest text-[var(--color-accent-purple)] uppercase relative z-10">
                        Diagnostic Outcome
                      </div>
                      <p className="text-xs text-[#f1f5f9] leading-relaxed font-normal relative z-10">
                        {selectedPillar.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Defined Tech Stack */}
                  <div className="border-t border-[#0f172a]/5 pt-8 text-center">
                    <h4 className="font-serif text-xl font-bold text-[#0f172a] mb-2">
                      Defined Technology Stack
                    </h4>
                    <p className="text-xs text-[#475569] max-w-md mx-auto mb-8 font-light">
                      The modern, production-hardened tools and languages leveraged to build high-performance, secure software integrations.
                    </p>
                    
                    {/* Grid of large premium tech badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                      {selectedPillar.tags.map((tag, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -4, borderColor: 'var(--color-accent-blue)', boxShadow: '0 10px 25px -5px rgba(22, 36, 54, 0.08)' }}
                          className="bg-[#f1f5f9]/50 border border-[#0f172a]/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#0f172a]/5 flex items-center justify-center text-[#0f172a]">
                            <CheckCircle2 size={16} className="text-[var(--color-accent-blue)]" />
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#0f172a] whitespace-nowrap">
                            {tag}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
