import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'PAIDHU',
    category: 'The Edible Flower Co. & Artisanal Delights',
    website: 'https://paidhuethicalfoods.com/',
    description: 'Paidhu is an ethical food brand crafting 100% natural flower-infused Bloom Cookies, artisanal petal jams, botanical teas, and pure Kashmiri Mongra saffron.',
    tags: ['React.js', 'Tailwind CSS', 'Shopify Plus', 'E-commerce', 'Framer Motion'],
    features: [
      'Bloom Cookies (Lotus, Hibiscus, Aavaram)',
      'Artisanal Hibiscus & Rose Petal Jams',
      '100% Pure Kashmiri Mongra Saffron',
      'Blue Pea & Hibiscus Teas',
      'Clean Sourcing & 0% Preservatives'
    ],
    visualType: 'paidhu',
    theme: {
      cardGradient: 'bg-white shadow-[0_20px_60px_rgba(102,38,84,0.15)]',
      borderColor: 'border-[#662654]/30 hover:border-[#662654]',
      hoverGlow: 'from-[#662654]/10 via-[#EDE707]/20 to-transparent',
      titleColor: 'text-[#662654]',
      descriptionColor: 'text-gray-600',
      featureTextColor: 'text-gray-700',
      dividerColor: 'bg-gray-200',
      categoryColor: 'text-[#662654]',
      idHoverColor: 'group-hover:text-[#662654]',
      dotColor: 'bg-[#662654] shadow-[0_0_10px_#662654]',
      tagBg: 'bg-[#662654]/10 text-[#662654] border-[#662654]/25 font-semibold',
      btnStyle: 'bg-[#662654] text-[#EDE707] hover:bg-[#501d42] font-bold shadow-md shadow-purple-900/20',
      activeColor: '#662654'
    }
  },
  {
    id: '02',
    title: 'PAIDHU SAFFRON',
    category: '100% Pure Kashmiri Mongra Saffron',
    website: 'https://paidhusaffron.com/',
    description: 'Paidhu Saffron brings the world’s finest A++ grade Kashmiri Mongra Saffron, handpicked directly from the fields of Pampore, Kashmir. Rich in crocin and natural therapeutic benefits.',
    tags: ['React.js', 'Tailwind CSS', 'Shopify Plus', 'Brand Strategy', 'Premium Sourcing'],
    features: [
      'A++ Grade Kashmiri Mongra Saffron',
      'Rich in Crocin, Safranal & Picrocrocin',
      'Handpicked directly from Pampore Fields',
      '100% Lab Tested & Certified Pure',
      'Luxury Moisture-Lock Packaging'
    ],
    visualType: 'paidhusaffron',
    theme: {
      cardGradient: 'bg-white shadow-[0_20px_60px_rgba(185,28,28,0.15)]',
      borderColor: 'border-[#B91C1C]/30 hover:border-[#B91C1C]',
      hoverGlow: 'from-[#B91C1C]/10 via-[#F59E0B]/20 to-transparent',
      titleColor: 'text-[#B91C1C]',
      descriptionColor: 'text-gray-600',
      featureTextColor: 'text-gray-700',
      dividerColor: 'bg-gray-200',
      categoryColor: 'text-[#B91C1C]',
      idHoverColor: 'group-hover:text-[#B91C1C]',
      dotColor: 'bg-[#B91C1C] shadow-[0_0_10px_#B91C1C]',
      tagBg: 'bg-[#B91C1C]/10 text-[#B91C1C] border-[#B91C1C]/25 font-semibold',
      btnStyle: 'bg-[#B91C1C] text-[#EDE707] hover:bg-[#991b1b] font-bold shadow-md shadow-red-900/20',
      activeColor: '#B91C1C'
    }
  },
  {
    id: '03',
    title: 'KALIKA SPHERE',
    category: '360° Space for Skill Development & Child Programs',
    website: 'https://www.kalikasphere.com/',
    description: 'Kalika Sphere is a vibrant 360° learning ecosystem designed to help children explore creativity, speech confidence, hands-on science & pro labs through immersive experiences.',
    tags: ['Next.js', 'Framer Motion', 'Interactive UI', 'Creative Learning', 'Responsive Web'],
    features: [
      'Summer Camp 2026 Special Program',
      'Kids Lab & Pro Lab Interactive Modules',
      'Speech, Confidence & Art Development',
      'Modern Educational Branding',
      'Responsive Website Experience'
    ],
    visualType: 'kalikasphere',
    theme: {
      cardGradient: 'bg-white shadow-[0_20px_60px_rgba(227,30,36,0.12)]',
      borderColor: 'border-red-500/30 hover:border-blue-500/60',
      hoverGlow: 'from-red-500/5 via-blue-500/5 to-transparent',
      titleColor: 'text-[#e31e24]',
      descriptionColor: 'text-gray-600',
      featureTextColor: 'text-gray-700',
      dividerColor: 'bg-gray-200',
      categoryColor: 'text-[#2563eb]',
      idHoverColor: 'group-hover:text-[#e31e24]',
      dotColor: 'bg-[#2563eb] shadow-[0_0_10px_#2563eb]',
      tagBg: 'bg-blue-500/5 text-[#2563eb] border-blue-500/20 font-semibold',
      btnStyle: 'bg-gradient-to-r from-[#e31e24] to-[#2563eb] text-white hover:opacity-90 transition-opacity font-bold shadow-md shadow-red-500/10',
      activeColor: '#e31e24'
    }
  },
  {
    id: '04',
    title: 'THE PRINK',
    category: 'Personalized Gifts, Miniatures & Printing Platform',
    website: 'https://www.theprink.in/',
    description: 'The Prink is a premier personalized print-commerce platform specializing in handcrafted miniature frames, Spotify photo keepsakes, and occasion-based surprise gifts.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'PDFKit', 'Sharp Image Processing', 'WhatsApp API'],
    features: [
      'Handcrafted Miniature Photo Frames',
      'Spotify Music Code Acrylic Keepsakes',
      'WhatsApp Automated Order Workflow',
      'Occasion-Based Gifting Collections',
      'Print-Ready Automation Engine'
    ],
    visualType: 'prink',
    theme: {
      cardGradient: 'bg-white shadow-[0_20px_60px_rgba(12,30,67,0.12)]',
      borderColor: 'border-[#0C1E43]/30 hover:border-[#0C1E43]',
      hoverGlow: 'from-[#0C1E43]/10 via-[#4F46E5]/10 to-transparent',
      titleColor: 'text-[#0C1E43]',
      descriptionColor: 'text-gray-600',
      featureTextColor: 'text-gray-700',
      dividerColor: 'bg-gray-200',
      categoryColor: 'text-[#4F46E5]',
      idHoverColor: 'group-hover:text-[#0C1E43]',
      dotColor: 'bg-[#4F46E5] shadow-[0_0_10px_#4F46E5]',
      tagBg: 'bg-indigo-500/5 text-[#4F46E5] border-indigo-500/20 font-semibold',
      btnStyle: 'bg-[#0C1E43] text-white hover:bg-[#08142d] font-bold shadow-md shadow-indigo-900/20',
      activeColor: '#0C1E43'
    }
  },
  {
    id: '05',
    title: 'FLOFFI',
    category: 'Traditional Spreads, Chutneys & Gourmet Foods',
    website: 'https://www.floffi.in/',
    description: 'Floffi brings tradition in every spoon and taste in every bite with naturally crafted spreads, Rose Gulkand, Aavaram Jaggery, and authentic flower chutneys.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'E-commerce', 'GSAP'],
    features: [
      'Nectar & Aavaram Jaggery Spreads',
      'Rose Gulkand & Petal Preserves',
      'Banana Flower & Aavaram Poo Chutneys',
      '100% Natural & Zero Preservatives'
    ],
    visualType: 'floffi',
    theme: {
      cardGradient: 'bg-white shadow-[0_20px_60px_rgba(255,140,0,0.15)]',
      borderColor: 'border-[#FF8C00]/40 hover:border-[#FF8C00]',
      hoverGlow: 'from-[#FF8C00]/10 via-[#F2EFCF]/40 to-transparent',
      titleColor: 'text-[#FF8C00]',
      descriptionColor: 'text-gray-600',
      featureTextColor: 'text-gray-700',
      dividerColor: 'bg-gray-200',
      categoryColor: 'text-[#FF8C00]',
      idHoverColor: 'group-hover:text-[#FF8C00]',
      dotColor: 'bg-[#FF8C00] shadow-[0_0_10px_#FF8C00]',
      tagBg: 'bg-[#FF8C00]/10 text-[#FF8C00] border-[#FF8C00]/25 font-semibold',
      btnStyle: 'bg-[#FF8C00] text-[#F2EFCF] hover:bg-[#e07b00] font-bold shadow-md shadow-orange-500/20',
      activeColor: '#FF8C00'
    }
  }
];

const KalikaMockup = () => {
  return (
    <div className="relative w-full h-[140px] sm:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF1F2] via-[#F0F9FF] to-[#E0F2FE] border border-red-500/20 flex items-center justify-center p-2 sm:p-3 shadow-inner group/mockup">
      <div className="absolute w-[140px] h-[140px] rounded-full bg-[conic-gradient(from_0deg,#e31e24,#2563eb,#e31e24)] opacity-20 blur-2xl animate-[spin_8s_linear_infinite] pointer-events-none group-hover/mockup:opacity-40 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,30,36,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1 right-1 w-14 h-14 bg-[#e31e24]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1 left-1 w-16 h-16 bg-[#2563eb]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="absolute top-2 left-2 z-20 px-2 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-500/30 text-[8px] font-bold text-[#2563eb] shadow-lg flex items-center gap-1 group-hover/mockup:scale-105 transition-transform duration-300 animate-bounce">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-ping" />
        ✨ 360° Learning Ecosystem
      </div>

      <div className="relative w-full max-w-[230px] [perspective:1200px] z-10 transition-transform duration-500 hover:-translate-y-1">
        <motion.div
          initial={{ rotateX: 5, rotateY: -6 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full rounded-2xl border border-blue-500/20 bg-white shadow-[0_20px_40px_rgba(225,29,72,0.15)] group-hover/mockup:shadow-[0_25px_50px_rgba(225,29,72,0.22)] overflow-hidden transition-all duration-300"
        >
          <div className="flex items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-100/95 justify-between">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-xs" />
              <div className="ml-1 px-1.5 py-0.5 rounded bg-white text-[6px] text-gray-700 font-mono border border-gray-200 shadow-2xs flex items-center gap-0.5 font-semibold">
                <span className="text-emerald-600">🔒</span> kalikasphere.com
              </div>
            </div>
            <div className="flex items-center gap-1 text-[5px] font-extrabold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded-full border border-emerald-300">
              <span className="w-0.5 h-0.5 rounded-full bg-emerald-500 animate-ping" />
              LIVE
            </div>
          </div>

          <div className="w-full h-[60px] sm:h-[95px] overflow-hidden bg-gray-50 relative">
            <img 
              src="/projects/kalika-home.png" 
              alt="Kalika Sphere Homepage" 
              className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const PrinkMockup = () => {
  return (
    <div className="relative w-full h-[140px] sm:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF] to-[#C7D2FE] border border-[#0C1E43]/20 flex items-center justify-center p-2 sm:p-3 shadow-inner group/mockup">
      <div className="absolute w-[140px] h-[140px] rounded-full bg-[conic-gradient(from_0deg,#0C1E43,#4F46E5,#0C1E43)] opacity-20 blur-2xl animate-[spin_8s_linear_infinite] pointer-events-none group-hover/mockup:opacity-40 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,30,67,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1 right-1 w-14 h-14 bg-[#0C1E43]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1 left-1 w-16 h-16 bg-[#4F46E5]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="absolute top-2 left-2 z-20 px-2 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#0C1E43]/30 text-[8px] font-bold text-[#0C1E43] shadow-lg flex items-center gap-1 group-hover/mockup:scale-105 transition-transform duration-300 animate-bounce">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-ping" />
        🎁 Automated Print Commerce
      </div>

      <div className="relative w-full max-w-[230px] [perspective:1200px] z-10 transition-transform duration-500 hover:-translate-y-1">
        <motion.div
          initial={{ rotateX: 5, rotateY: -6 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full rounded-2xl border border-[#0C1E43]/20 bg-white shadow-[0_20px_40px_rgba(12,30,67,0.15)] group-hover/mockup:shadow-[0_25px_50px_rgba(12,30,67,0.22)] overflow-hidden transition-all duration-300"
        >
          <div className="flex items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-100/95 justify-between">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-xs" />
              <div className="ml-1 px-1.5 py-0.5 rounded bg-white text-[6px] text-gray-700 font-mono border border-gray-200 shadow-2xs flex items-center gap-0.5 font-semibold">
                <span className="text-emerald-600">🔒</span> theprink.in
              </div>
            </div>
            <div className="flex items-center gap-1 text-[5px] font-extrabold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded-full border border-emerald-300">
              <span className="w-0.5 h-0.5 rounded-full bg-emerald-500 animate-ping" />
              LIVE
            </div>
          </div>

          <div className="w-full h-[60px] sm:h-[95px] overflow-hidden bg-gray-50 relative">
            <img 
              src="/projects/prink-home.png" 
              alt="The Prink Homepage" 
              className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const PaidhuMockup = () => {
  return (
    <div className="relative w-full h-[140px] sm:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#fdf4fb] via-[#f8e7f5] to-[#f3d5ee] border border-[#662654]/30 flex items-center justify-center p-2 sm:p-3 shadow-inner group/mockup">
      <div className="absolute w-[140px] h-[140px] rounded-full bg-[conic-gradient(from_0deg,#662654,#EDE707,#662654)] opacity-25 blur-2xl animate-[spin_8s_linear_infinite] pointer-events-none group-hover/mockup:opacity-50 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,38,84,0.2)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1 right-1 w-14 h-14 bg-[#662654]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1 left-1 w-16 h-16 bg-[#EDE707]/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="absolute top-2 left-2 z-20 px-2 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#662654]/40 text-[8px] font-bold text-[#662654] shadow-lg flex items-center gap-1 group-hover/mockup:scale-105 transition-transform duration-300 animate-bounce">
        <span className="w-1.5 h-1.5 rounded-full bg-[#662654] animate-ping" />
        🌸 100% Pure Floral Foods
      </div>

      <div className="relative w-full max-w-[230px] [perspective:1200px] z-10 transition-transform duration-500 hover:-translate-y-1">
        <motion.div
          initial={{ rotateX: 5, rotateY: -6 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full rounded-2xl border border-[#662654]/30 bg-white shadow-[0_20px_40px_rgba(102,38,84,0.28)] group-hover/mockup:shadow-[0_25px_50px_rgba(102,38,84,0.38)] overflow-hidden transition-all duration-300"
        >
          <div className="flex items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-100/95 justify-between">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-xs" />
              <div className="ml-1 px-1.5 py-0.5 rounded bg-white text-[6px] text-gray-700 font-mono border border-gray-200 shadow-2xs flex items-center gap-0.5 font-semibold">
                <span className="text-emerald-600">🔒</span> paidhuethicalfoods.com
              </div>
            </div>
            <div className="flex items-center gap-1 text-[5px] font-extrabold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded-full border border-emerald-300">
              <span className="w-0.5 h-0.5 rounded-full bg-emerald-500 animate-ping" />
              LIVE
            </div>
          </div>

          <div className="w-full h-[60px] sm:h-[95px] overflow-hidden bg-gray-50 relative">
            <img 
              src="/projects/paidhu-home.png" 
              alt="Paidhu Homepage" 
              className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FloffiMockup = () => {
  return (
    <div className="relative w-full h-[140px] sm:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA] border border-[#FF8C00]/30 flex items-center justify-center p-2 sm:p-3 shadow-inner group/mockup">
      <div className="absolute w-[140px] h-[140px] rounded-full bg-[conic-gradient(from_0deg,#FF8C00,#F2EFCF,#FF8C00)] opacity-25 blur-2xl animate-[spin_8s_linear_infinite] pointer-events-none group-hover/mockup:opacity-50 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.2)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1 right-1 w-14 h-14 bg-[#FF8C00]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1 left-1 w-16 h-16 bg-[#FF8C00]/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="absolute top-2 left-2 z-20 px-2 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#FF8C00]/40 text-[8px] font-bold text-[#FF8C00] shadow-lg flex items-center gap-1 group-hover/mockup:scale-105 transition-transform duration-300 animate-bounce">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] animate-ping" />
        🍯 Gourmet Nectar &amp; Spreads
      </div>

      <div className="relative w-full max-w-[230px] [perspective:1200px] z-10 transition-transform duration-500 hover:-translate-y-1">
        <motion.div
          initial={{ rotateX: 5, rotateY: -6 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full rounded-2xl border border-[#FF8C00]/30 bg-white shadow-[0_20px_40px_rgba(255,140,0,0.28)] group-hover/mockup:shadow-[0_25px_50px_rgba(255,140,0,0.38)] overflow-hidden transition-all duration-300"
        >
          <div className="flex items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-100/95 justify-between">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-xs" />
              <div className="ml-1 px-1.5 py-0.5 rounded bg-white text-[6px] text-gray-700 font-mono border border-gray-200 shadow-2xs flex items-center gap-0.5 font-semibold">
                <span className="text-emerald-600">🔒</span> floffi.in
              </div>
            </div>
            <div className="flex items-center gap-1 text-[5px] font-extrabold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded-full border border-emerald-300">
              <span className="w-0.5 h-0.5 rounded-full bg-emerald-500 animate-ping" />
              LIVE
            </div>
          </div>

          <div className="w-full h-[60px] sm:h-[95px] overflow-hidden bg-gray-50 relative">
            <img 
              src="/projects/floffi-home.png" 
              alt="Floffi Homepage" 
              className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const PaidhuSaffronMockup = () => {
  return (
    <div className="relative w-full h-[140px] sm:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#FEF2F2] via-[#FEF3C7] to-[#FDE68A] border border-[#B91C1C]/30 flex items-center justify-center p-2 sm:p-3 shadow-inner group/mockup">
      <div className="absolute w-[140px] h-[140px] rounded-full bg-[conic-gradient(from_0deg,#B91C1C,#F59E0B,#B91C1C)] opacity-25 blur-2xl animate-[spin_8s_linear_infinite] pointer-events-none group-hover/mockup:opacity-50 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.2)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1 right-1 w-14 h-14 bg-[#B91C1C]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1 left-1 w-16 h-16 bg-[#F59E0B]/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="absolute top-2 left-2 z-20 px-2 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#B91C1C]/40 text-[8px] font-bold text-[#B91C1C] shadow-lg flex items-center gap-1 group-hover/mockup:scale-105 transition-transform duration-300 animate-bounce">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] animate-ping" />
        🍂 A++ Grade Kashmiri Saffron
      </div>

      <div className="relative w-full max-w-[230px] [perspective:1200px] z-10 transition-transform duration-500 hover:-translate-y-1">
        <motion.div
          initial={{ rotateX: 5, rotateY: -6 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full rounded-2xl border border-[#B91C1C]/30 bg-white shadow-[0_20px_40px_rgba(185,28,28,0.28)] group-hover/mockup:shadow-[0_25px_50px_rgba(185,28,28,0.38)] overflow-hidden transition-all duration-300"
        >
          <div className="flex items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-100/95 justify-between">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-xs" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-xs" />
              <div className="ml-1 px-1.5 py-0.5 rounded bg-white text-[6px] text-gray-700 font-mono border border-gray-200 shadow-2xs flex items-center gap-0.5 font-semibold">
                <span className="text-emerald-600">🔒</span> paidhusaffron.com
              </div>
            </div>
            <div className="flex items-center gap-1 text-[5px] font-extrabold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded-full border border-emerald-300">
              <span className="w-0.5 h-0.5 rounded-full bg-emerald-500 animate-ping" />
              LIVE
            </div>
          </div>

          <div className="w-full h-[60px] sm:h-[95px] overflow-hidden bg-gray-50 relative">
            <img 
              src="/projects/paidhu-saffron.png" 
              alt="Paidhu Saffron Homepage" 
              className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Automatic Swipe Effect (5s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      nextProject();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? 12 : -12,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir < 0 ? 12 : -12,
    }),
  };

  return (
    <section id="portfolio" className="relative bg-[#ffffff] overflow-hidden py-12 md:py-16 border-y border-[#0f172a]/5">
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #000000 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Editorial Header */}
      <div className="flex flex-col items-center justify-center mb-8 text-center px-6 md:px-12 relative z-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700 font-bold uppercase tracking-widest shadow-2xs">
          <Sparkles size={14} className="text-[#3b82f6]" />
          SWIPE &amp; EXPLORE FEATURED WORKS
        </div>

        <motion.h3 
          className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a] leading-tight max-w-2xl mx-auto uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h3>

        {/* Interactive Swipe Tabs Navigation Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 pt-4 max-w-full overflow-x-auto scrollbar-none px-4 pb-2 w-full sm:flex-wrap">
          {projects.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 border cursor-pointer shrink-0 ${
                  isActive
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-slate-100/80 text-slate-600 border-slate-200 hover:bg-slate-200 hover:text-slate-900'
                }`}
                style={isActive ? { backgroundColor: proj.theme.activeColor, borderColor: proj.theme.activeColor } : {}}
              >
                <span 
                  className={`w-2 h-2 rounded-full ${isActive ? 'animate-ping' : ''}`}
                  style={{ backgroundColor: isActive ? '#ffffff' : '#94a3b8' }}
                />
                <span>
                  {proj.id}{' '}
                  {proj.title === 'KALIKA SPHERE' ? (
                    <>
                      <span className={isActive ? 'text-white' : 'text-[#e31e24]'}>KALIKA</span>{' '}
                      <span className={isActive ? 'text-white' : 'text-[#2563eb]'}>SPHERE</span>
                    </>
                  ) : (
                    proj.title
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Swipeable Single Page Slide Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 min-h-[400px] flex items-center justify-center [perspective:1200px]">
        
        {/* Next / Prev Navigation Floating Arrow Buttons */}
        <button
          onClick={prevProject}
          aria-label="Previous Project"
          className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 border border-slate-300 text-slate-800 items-center justify-center shadow-xl hover:bg-slate-900 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-md"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextProject}
          aria-label="Next Project"
          className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 border border-slate-300 text-slate-800 items-center justify-center shadow-xl hover:bg-slate-900 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-md"
        >
          <ChevronRight size={24} />
        </button>

        {/* AnimatePresence Swipeable Project View */}
        <div className="w-full relative overflow-hidden p-2 sm:p-4">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -100) {
                  nextProject();
                } else if (swipe > 10000 || offset.x > 100) {
                  prevProject();
                }
              }}
              className={`flex flex-col lg:flex-row items-center gap-3 lg:gap-8 p-4 sm:p-6 lg:p-8 rounded-2xl ${currentProject.theme.cardGradient} border border-gray-200/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.12)] relative overflow-hidden group ${currentProject.theme.borderColor} cursor-grab active:cursor-grabbing transition-shadow duration-500`}
            >
              {/* Soft hover ambient glow inside card */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${currentProject.theme.hoverGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Shimmer Light Ray Sweep effect across card on hover */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

              {/* Content Column */}
              <div className="w-full lg:w-1/2 space-y-2.5 sm:space-y-3 relative z-10">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl sm:text-3xl font-mono font-black opacity-35 ${currentProject.theme.idHoverColor} transition-colors duration-500`}>{currentProject.id}</span>
                  <span className={`w-10 h-[2px] ${currentProject.theme.dividerColor}`} />
                  <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-widest ${currentProject.theme.categoryColor}`}>{currentProject.category}</span>
                </div>

                <h4 className="text-lg sm:text-2xl lg:text-3xl font-serif font-black leading-tight tracking-tight">
                  {currentProject.title === 'KALIKA SPHERE' ? (
                    <>
                      <span className="text-[#e31e24]">KALIKA</span>{' '}
                      <span className="text-[#2563eb]">SPHERE</span>
                    </>
                  ) : (
                    <span className={currentProject.theme.titleColor}>
                      {currentProject.title}
                    </span>
                  )}
                </h4>

                <p className={`${currentProject.theme.descriptionColor} text-xs leading-relaxed font-normal`}>
                  {currentProject.description}
                </p>

                {/* Tech & Brand Tags with Animated Hover Bounce */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border backdrop-blur-md hover:scale-105 transition-transform duration-200 shadow-2xs ${currentProject.theme.tagBg} ${idx >= 4 ? 'hidden sm:inline-block' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>



                {/* Animated Action Button */}
                <div className="flex flex-wrap gap-3 pt-2 sm:pt-4">
                  {currentProject.website !== '#' ? (
                    <a
                      href={currentProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-text="Visit"
                      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase ${currentProject.theme.btnStyle} hover:scale-105 active:scale-98 transition-all duration-300 shadow-lg relative overflow-hidden group/btn`}
                    >
                      <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-20deg] -translate-x-full group-hover/btn:translate-x-[300%] transition-transform duration-750 ease-in-out pointer-events-none" />
                      <span>Visit Live Website</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      data-cursor-text="Inquire"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
                    >
                      Inquire / Request Demo
                      <ArrowRight size={13} className="text-gray-700" />
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Column - Styled without cursor hijacking on mobile */}
              <div
                className="w-full lg:w-1/2 flex items-center justify-center relative z-10 group-hover:scale-[1.03] transition-transform duration-500 mt-5 lg:mt-0"
              >
                {currentProject.visualType === 'kalikasphere' ? <KalikaMockup /> : 
                 currentProject.visualType === 'prink' ? <PrinkMockup /> : 
                 currentProject.visualType === 'paidhu' ? <PaidhuMockup /> : 
                 currentProject.visualType === 'paidhusaffron' ? <PaidhuSaffronMockup /> :
                 <FloffiMockup />}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Progress Bar & Dots */}
      <div className="flex items-center justify-center gap-3 mt-8 relative z-10">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex ? 'w-10' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
            style={idx === currentIndex ? { backgroundColor: currentProject.theme.activeColor } : {}}
          />
        ))}
      </div>

    </section>
  );
}
