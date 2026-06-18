import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Paidhu Ethical Foods',
    category: 'Custom D2C E-Commerce',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1400&auto=format&fit=crop',
    tags: ['Shopify Headless', 'Next.js', 'Tailwind CSS', 'Wellness Commerce'],
    brief: 'Developing an immersive, high-conversion headless e-commerce experience for Paidhu, a premium D2C brand specializing in edible floral teas and organic botanical foods.',
    challenge: 'Translating Paidhu\'s core philosophy of pure nature and botanical health benefits into a fast, highly-aesthetic catalog that guides users seamlessly to checkout.',
    solution: 'Engineered a template-free Next.js storefront integrated with headless Shopify APIs, featuring rapid image load optimization and rich narrative layouts.',
    outcome: 'Drove online checkout conversions up by 115%, reduced catalog load time to 0.6 seconds, and expanded regional brand footprint.'
  },
  {
    title: 'The Prink Gifting Platform',
    category: 'Interactive Personalization Portal',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1400&auto=format&fit=crop',
    tags: ['React', 'Custom Builder', 'Node.js', 'Fulfillment API'],
    brief: 'Designing and engineering an interactive gift building dashboard enabling customers to curate and preview custom miniature frames and surprise gift boxes.',
    challenge: 'Heavy user photo uploads and custom layout setups caused sluggish browser sessions and manual order processing lags during high-traffic seasons.',
    solution: 'Formulated a React customization builder with client-side canvas engines, instant compression pipelines, and automatic printing output layouts.',
    outcome: 'Increased personalized order volume by 145%, reduced cart drop-offs, and fully automated prepress file assembly.'
  },
  {
    title: 'Nexus Enterprise SaaS',
    category: 'Cloud Engineering & SaaS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    brief: 'Designing and engineering a secure, multi-tenant cloud analytics environment to support high-density real-time database transactions.',
    challenge: 'The client needed zero-latency processing of concurrent analytics pipelines with strict isolation of database schemas.',
    solution: 'We architected a partitioned multi-tenant DB structure on PostgreSQL, supported by Redis caching queues, and deployed on serverless AWS nodes.',
    outcome: 'Zero database crosstalk, latency dropped from 420ms to 45ms, and client operational efficiency increased by 38%.'
  },
  {
    title: 'Aura Luxury Brand Identity',
    category: 'Brand Curation & Advisory',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1400&auto=format&fit=crop',
    tags: ['Brand Strategy', 'Visual Assets', 'Copywriting'],
    brief: 'Reimagining the corporate narrative and visual style guides for an upscale international hospitality brand.',
    challenge: 'Aura was perceived as a generic hotel chain; their digital presentation did not command premium market positioning.',
    solution: 'We conducted brand diagnostics, curated a custom serif-led typography suite, designed modern assets, and rewrote their narrative guidelines.',
    outcome: 'Repositioned successfully as a luxury destination, yielding a 74% increase in online reservations within six months.'
  },
  {
    title: 'Lumina Custom Storefront',
    category: 'High-Performance E-Commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
    tags: ['Next.js', 'Tailwind', 'Stripe', 'Headless CMS'],
    brief: 'Rebuilding a sluggish online shop into a headless, lightning-fast digital purchasing storefront.',
    challenge: 'High page sizes and heavy layouts caused a 5.2s page-load time, leading to a 62% cart abandonment rate.',
    solution: 'Built a custom headless e-commerce frontend using Next.js, integrating Stripe APIs and statically compiling all product cards.',
    outcome: 'Page load time dropped to 0.8s, organic traffic grew by 45%, and sales conversions increased by 140%.'
  },
  {
    title: 'Velocity Enterprise iOS',
    category: 'Native Mobile Engineering',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop',
    tags: ['Swift', 'iOS SDK', 'CoreData', 'WebSockets'],
    brief: 'Developing a secure, native iOS application for real-time fleet coordination and logistics telemetry.',
    challenge: 'Ensuring continuous tracking and zero-latency communication under low network coverage environments.',
    solution: 'We developed a Swift application using CoreData for local queue caching and WebSockets for real-time state synchronization.',
    outcome: 'Reduced tracking loss incidents to zero, successfully routed 15,000 fleets, and achieved a 4.9 App Store rating.'
  },
];

function ProjectStackSection({ 
  project, 
  index, 
  onInspect 
}: { 
  project: typeof projects[0]; 
  index: number; 
  onInspect: () => void;
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
        style={{ backgroundImage: `url(${project.image})` }}
      >
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-[#162436]/40 z-[2]" />
      </div>

      {/* Content Columns Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex items-center stack-content justify-center gap-0">
        
        {/* Left Side: Editorial white panel */}
        <div className="stack-card-white flex flex-col justify-between min-h-[360px] md:min-h-[420px]" data-cursor-text="Open">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3f6a9e] mb-2 block">
              {project.category}
            </span>
            <h4 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-5">
              {project.title}
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed font-light mb-8 max-w-md">
              {project.brief}
            </p>
          </div>
          
          <div className="flex justify-start">
            <button
              onClick={onInspect}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#162436] text-[#f1f5f9] text-[10px] font-bold uppercase tracking-wider hover:bg-transparent hover:text-[#162436] border border-[#162436] transition-all duration-300 cursor-pointer"
            >
              View Case Study
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Right Side: Overlay deep-navy statistics card */}
        <div className="stack-card-accent flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f1f5f9]/60 block mb-6">
              METRICS DELIVERED
            </span>
            <p className="text-sm font-light leading-relaxed mb-6">
              {project.outcome}
            </p>
          </div>
          
          <div>
            <div className="h-[1px] bg-white/10 w-full mb-5" />
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
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

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="relative bg-[#ffffff] border-y border-[#162436]/5">
      {/* Introduction Banner before sticky items */}
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#162436]/5 border border-[#162436]/10 text-xs font-bold tracking-[0.2em] text-[#162436] uppercase mb-6">
          Case Studies &amp; Projects
        </span>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] leading-tight max-w-2xl mx-auto mb-6">
          Featured Projects Stack
        </h3>
        <p className="text-[#475569] text-lg font-light max-w-xl mx-auto">
          Scroll down to lock sections and view our interactive, high-fidelity system deployments.
        </p>
      </div>

      {/* Sticky Reveal Sections List */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectStackSection 
            key={index}
            project={project}
            index={index}
            onInspect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Case Study Lightbox Dialog Modal */}
      <AnimatePresence>
        {selectedProject && (
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
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#f1f5f9] border border-[#162436]/10 flex items-center justify-center text-[#0f172a] hover:bg-[#162436] hover:text-[#f1f5f9] transition-all z-30 shadow-md cursor-pointer"
                aria-label="Close Case Study"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Showcase Header */}
                <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] to-transparent z-10" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-8 z-20">
                    <span className="text-[10px] font-bold tracking-widest text-[#3f6a9e] uppercase bg-[#f1f5f9] px-3 py-1 rounded-full border border-[#162436]/10 shadow-sm">
                      {selectedProject.category}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0f172a] mt-3">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Case Study Details Grid */}
                <div className="p-8 md:p-12 grid md:grid-cols-12 gap-10">
                  
                  {/* Left Column: Brief & Challenge */}
                  <div className="md:col-span-7 space-y-8">
                    <div>
                      <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-[#0f172a] mb-3">
                        <Info size={18} className="text-[#162436]" />
                        Client Brief
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed font-light">
                        {selectedProject.brief}
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-[#0f172a] mb-3">
                        <Layers size={18} className="text-[#162436]" />
                        The Technical Challenge
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed font-light">
                        {selectedProject.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Solution & Outcome */}
                  <div className="md:col-span-5 space-y-8">
                    <div className="bg-[#f1f5f9]/40 border border-[#162436]/8 rounded-3xl p-6">
                      <h4 className="flex items-center gap-2 font-serif text-base font-bold text-[#0f172a] mb-3">
                        <CheckCircle2 size={16} className="text-[#162436]" />
                        Architecture Solution
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed font-light mb-4">
                        {selectedProject.solution}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag, i) => (
                          <span key={i} className="text-[8px] font-bold uppercase tracking-wider text-[#162436] border border-[#162436]/15 px-2 py-0.5 rounded bg-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#162436] text-[#f1f5f9] rounded-3xl p-6 shadow-lg">
                      <h4 className="font-serif text-base font-bold mb-2">Metrics Delivered</h4>
                      <p className="text-xs opacity-90 leading-relaxed font-light">
                        {selectedProject.outcome}
                      </p>
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
