import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'KALIKA SPHERE',
    category: '360° Learning & Creative Development Platform',
    website: 'https://www.kalikasphere.com/',
    description: 'Kalika Sphere is a vibrant 360° learning ecosystem designed to help children explore creativity, confidence, communication, and real-life skills through immersive experiences and innovative learning methods.',
    tags: ['Next.js', 'Framer Motion', 'Interactive UI', 'Creative Learning', 'Responsive Web'],
    features: [
      'Interactive Learning Experience',
      'Child Development Programs',
      'Creative Skill Building',
      'Modern Educational Branding',
      'Responsive Website Experience'
    ],
    visualType: 'kalikasphere'
  },
  {
    id: '02',
    title: 'PRINK',
    category: 'AI-Powered Print-Commerce Platform',
    website: '#',
    description: 'PRINK is an advanced AI-powered personalized print-commerce platform developed to automate the complete customer customization and print production workflow for modern e-commerce businesses.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'PDFKit', 'Sharp Image Processing', 'WhatsApp API'],
    features: [
      'Automated Shopify Order Workflow',
      'WhatsApp-Based Upload System',
      'Live Product Preview Engine',
      'Real-Time Image Editing & Cropping',
      'Automated Print-Ready PDF Generation',
      'Admin & Printer Dashboard Management',
      'Smart Template & Theme Builder',
      'Queue-Based Print Processing',
      'AWS Cloud Infrastructure Integration',
      'Mobile Responsive User Experience'
    ],
    visualType: 'prink'
  }
];

const KalikaMockup = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#051124] to-[#020712] border border-white/5 flex items-center justify-center p-6 shadow-inner">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-10 right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* 3D Tilted Wrapper */}
      <div className="relative w-full max-w-[320px] [perspective:1000px]">
        <motion.div
          initial={{ rotateX: 12, rotateY: -16, rotateZ: 4 }}
          whileHover={{ rotateX: 5, rotateY: -8, rotateZ: 2, y: -5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full rounded-2xl border border-white/15 bg-[#091122]/95 shadow-[15px_20px_40px_rgba(0,0,0,0.6)] overflow-hidden animate-float"
        >
          {/* Browser Toolbar */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#060b16]/90">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            <div className="ml-3 flex-grow h-5 rounded bg-white/[0.04] text-[8px] text-white/40 flex items-center px-3 font-mono border border-white/5">
              kalikasphere.com
            </div>
          </div>
          
          {/* Website Canvas */}
          <div className="p-4 space-y-4">
            {/* Colorful Hero Card */}
            <div className="relative rounded-xl p-3 bg-gradient-to-r from-cyan-600/95 via-blue-600/95 to-purple-600/95 border border-white/10 overflow-hidden shadow-md">
              {/* Star overlay */}
              <div className="absolute -right-2 -top-2 text-white/10 text-4xl font-serif">★</div>
              <div className="text-[7px] uppercase tracking-widest font-black text-cyan-200 font-sans">Interactive Learning Ecosystem</div>
              <div className="text-[12px] font-bold text-white font-serif mt-1 leading-tight font-sans">Explore, Create &amp; Grow</div>
              <div className="text-[7px] text-white/80 font-light mt-1.5 max-w-[150px]">360° developmental programs for modern children.</div>
              <div className="mt-2.5 inline-block px-2 py-0.8 rounded-md bg-white text-[6px] font-bold text-cyan-900 shadow-sm">
                Get Started
              </div>
            </div>

            {/* Program Blocks */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px]">🎨</span>
                  <span className="text-[5px] text-white/30 font-mono">LAB 01</span>
                </div>
                <div className="text-[8px] font-bold text-white">Creative Arts</div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-cyan-400" />
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px]">🗣️</span>
                  <span className="text-[5px] text-white/30 font-mono">LAB 02</span>
                </div>
                <div className="text-[8px] font-bold text-white">Speech Lab</div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-purple-400" />
                </div>
              </div>
            </div>

            {/* Child Development Growth Tracking */}
            <div className="p-2.5 rounded-xl bg-[#060c18] border border-white/5 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-[6px] text-white/40 uppercase">Confidence Progress</div>
                <div className="text-[9px] font-bold text-[#10b981] font-mono">+92% Development</div>
              </div>
              <div className="w-10 h-6 bg-gradient-to-t from-cyan-500/20 to-transparent border border-cyan-500/10 rounded flex items-end justify-around p-1">
                <div className="w-1 h-2 bg-cyan-500/50 rounded-t" />
                <div className="w-1 h-3 bg-cyan-500/60 rounded-t" />
                <div className="w-1 h-4 bg-cyan-500/80 rounded-t" />
                <div className="w-1 h-5 bg-cyan-400 rounded-t animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const PrinkMockup = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#050b1a] to-[#02050d] border border-white/5 flex items-center justify-center p-6 shadow-inner">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none animate-pulse" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* 3D Tilted Wrapper */}
      <div className="relative w-full max-w-[320px] [perspective:1000px]">
        <motion.div
          initial={{ rotateX: 12, rotateY: -16, rotateZ: 4 }}
          whileHover={{ rotateX: 5, rotateY: -8, rotateZ: 2, y: -5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full rounded-2xl border border-white/15 bg-[#070b16]/95 shadow-[15px_20px_40px_rgba(0,0,0,0.6)] overflow-hidden animate-float"
        >
          {/* Browser Toolbar */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#04070e]/90">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            <div className="ml-3 flex-grow h-5 rounded bg-white/[0.04] text-[8px] text-white/40 flex items-center px-3 font-mono border border-white/5">
              prink.io/dashboard
            </div>
          </div>
          
          {/* Dashboard Canvas */}
          <div className="p-3 flex gap-3">
            {/* Sidebar menu */}
            <div className="w-12 flex flex-col gap-2 pr-2.5 border-r border-white/5">
              <div className="h-3 rounded-md bg-cyan-500/20 border border-cyan-400/20" />
              <div className="h-2 rounded bg-white/5" />
              <div className="h-2 rounded bg-white/5" />
              <div className="h-2 rounded bg-white/5" />
              <div className="h-2 rounded bg-white/5" />
            </div>

            {/* Design canvas */}
            <div className="flex-grow space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-white/40 uppercase tracking-widest font-black font-sans">Design Canvas</span>
                <span className="text-[6px] text-cyan-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  Live Sync
                </span>
              </div>
              
              {/* Product customized layout box */}
              <div className="h-20 rounded-lg bg-white/[0.01] border border-dashed border-white/15 flex items-center justify-center p-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5" />
                
                {/* Visual miniature frame */}
                <div className="w-12 h-12 rounded border border-white/20 bg-white/[0.05] shadow-lg flex items-center justify-center relative">
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-green-500" />
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded border border-white/10 flex items-center justify-center text-[5px] text-white/30 font-semibold font-serif">
                    PREVIEW
                  </div>
                </div>

                <div className="absolute bottom-1 right-1 bg-[#040813] border border-white/10 rounded px-1 text-[4px] text-white/50 font-mono">
                  Scale: 100% | Crop: Auto
                </div>
              </div>

              {/* Status bar */}
              <div className="p-2 rounded-lg bg-[#040813] border border-white/5 flex items-center justify-between">
                <div className="text-[6px] font-medium text-white/80">WhatsApp PDF Export</div>
                <span className="px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-[5px] text-green-400 font-bold uppercase tracking-wider">
                  Automated
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#ffffff] overflow-hidden py-32 border-y border-[#0f172a]/5">
      {/* Premium background grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #000000 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Subtle light ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Editorial Header */}
      <div className="flex flex-col items-center justify-center mb-16 text-center px-6 md:px-12 relative z-10">
        <motion.h3 
          className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] leading-tight max-w-2xl mx-auto mb-6 uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h3>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9 }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#0c182d] via-[#091122] to-[#050b16] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-cyan-400/40 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] transition-all duration-750`}
            >
              {/* Soft hover glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Content Column */}
              <div className="w-full lg:w-1/2 space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-bold text-white/15 group-hover:text-cyan-400/40 transition-colors duration-500">{project.id}</span>
                  <span className="w-8 h-[1px] bg-white/10" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">{project.category}</span>
                </div>

                <h4 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                  {project.title}
                </h4>

                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 py-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                      <span className="text-xs text-white/80 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.website !== '#' ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-text="Visit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-black bg-[#f8fafc] hover:bg-white hover:scale-102 transition-all duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.1)] animate-pulse"
                    >
                      Visit Website
                      <ExternalLink size={13} className="text-black" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      data-cursor-text="Inquire"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:scale-102 transition-all duration-300 cursor-pointer"
                    >
                      Inquire / Request Demo
                      <ArrowRight size={13} className="text-white/70" />
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Column */}
              <div className="w-full lg:w-1/2 flex items-center justify-center relative z-10 group-hover:scale-[1.01] transition-transform duration-500">
                {project.visualType === 'kalikasphere' ? <KalikaMockup /> : <PrinkMockup />}
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Projects end */}
    </section>
  );
}
