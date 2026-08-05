import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  UploadCloud, 
  CheckCircle2, 
  Globe, 
  GraduationCap, 
  User, 
  Briefcase, 
  Sparkles, 
  Code2, 
  Palette, 
  Server, 
  AlertCircle, 
  Trash2, 
  Code, 
  ArrowUpRight,
  Smartphone
} from 'lucide-react';

// Custom platform icons not present in standard lucide-react

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

interface Position {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  tags: string[];
}

const OPEN_POSITIONS: Position[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer Intern',
    icon: Code2,
    description: 'Build high-performance, pixel-perfect user interfaces with modern frontend frameworks like React and TailwindCSS.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Framer Motion'],
  },
  {
    id: 'backend',
    title: 'Backend Developer Intern',
    icon: Server,
    description: 'Design robust, scalable RESTful and GraphQL APIs, database schemas, and background worker systems.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'REST/GraphQL'],
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer Intern',
    icon: Code,
    description: 'Work across the entire application lifecycle, implementing complete end-to-end features from database to UI.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 'uiux',
    title: 'UI/UX Design Intern',
    icon: Palette,
    description: 'Craft premium user journeys, high-fidelity wireframes, interactive prototypes, and modern visual design systems.',
    tags: ['Figma', 'UI Design', 'Wireframing', 'Prototyping', 'User Research'],
  },
  {
    id: 'mobile',
    title: 'Mobile App Developer Intern',
    icon: Smartphone,
    description: 'Create native cross-platform mobile applications with smooth, responsive animations and outstanding mobile experience.',
    tags: ['React Native', 'Flutter', 'iOS & Android', 'TypeScript', 'Mobile UX'],
  },
];

export default function Careers() {
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    gradYear: '',
    cgpa: '',
    position: '',
    duration: '6 Months',
    startDate: '',
    github: '',
    linkedin: '',
    whyViyara: '',
    achievements: ''
  });

  const [resume, setResume] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(-1); // -1: idle, 0-100: uploading, 100: finished
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  // Handle sticky button visibility based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current) return;
      const formTop = formRef.current.getBoundingClientRect().top + window.scrollY;
      const currentScroll = window.scrollY;

      // Show button after scrolling 400px, hide once we reach the application form
      if (currentScroll > 400 && currentScroll < formTop - 500) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set page scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleApplyPosition = (positionTitle: string) => {
    setFormData(prev => ({ ...prev, position: positionTitle }));
    setTimeout(() => {
      scrollToSection(formRef);
    }, 100);
  };

  // Input changes with floating labels support
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // Resume drag & drop handling
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const simulateProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 150);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      const validExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      
      if (!validExtensions.includes(fileExtension)) {
        setFormErrors(prev => ({ ...prev, resume: 'Invalid file format. Only PDF, DOC, and DOCX are allowed.' }));
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, resume: 'File size exceeds maximum limit of 5MB.' }));
        return;
      }

      setResume(file);
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated.resume;
        return updated;
      });
      simulateProgress();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setResume(file);
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated.resume;
        return updated;
      });
      simulateProgress();
    }
  };

  const handleRemoveResume = () => {
    setResume(null);
    setUploadProgress(-1);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.college.trim()) errors.college = 'College/University name is required';
    if (!formData.degree.trim()) errors.degree = 'Degree/Major is required';
    if (!formData.gradYear) errors.gradYear = 'Graduation Year is required';
    if (!formData.cgpa.trim()) errors.cgpa = 'CGPA/Percentage is required';
    if (!formData.position) errors.position = 'Please select a target position';
    if (!formData.startDate) errors.startDate = 'Preferred start date is required';
    
    // Check if resume is uploaded & finished processing
    if (!resume) {
      errors.resume = 'Please upload your resume';
    } else if (uploadProgress < 100) {
      errors.resume = 'Please wait for the resume upload to complete';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Find the first error and scroll to it
      const errorKeys = Object.keys(formErrors);
      if (errorKeys.length > 0) {
        const firstErrorEl = document.getElementsByName(errorKeys[0])[0];
        if (firstErrorEl) {
          firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: (formRef.current?.offsetTop || 0) - 80, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-viyara-bg-light font-poppins relative selection:bg-viyara-primary/10 selection:text-viyara-primary">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-viyara-primary text-white pt-36 pb-28 md:pt-48 md:pb-40">
        {/* Modern SaaS background graphics */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,207,167,0.08)_0%,transparent_60%)] filter blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(63,106,158,0.15)_0%,transparent_60%)] filter blur-3xl" />
          
          {/* Tech Grid Background Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-[#E8CFA7]" />
              <span className="text-xs font-inter font-medium tracking-wide text-slate-300">We are hiring interns</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-poppins text-white"
            >
              Build Your Career <br />
              <span className="text-[#E8CFA7] relative inline-block">
                at Viyara
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#E8CFA7]/30 rounded-full" />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-300 font-inter text-base md:text-lg font-light leading-relaxed max-w-xl"
            >
              Work on real-world projects, collaborate with experienced mentors, and launch your career with one of the fastest-growing technology companies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button 
                onClick={() => {
                  const section = document.getElementById('open-positions');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-viyara-primary hover:bg-[#E8CFA7] hover:text-viyara-primary font-semibold text-sm transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer"
              >
                View Open Positions
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button 
                onClick={() => scrollToSection(formRef)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 font-semibold text-sm transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                Apply Now
              </button>
            </motion.div>
          </div>

          {/* Hero Illustration / Premium SaaS Mockup */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[460px] aspect-[4/3] rounded-2xl bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 p-5 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {/* Inner glowing element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E8CFA7]/10 rounded-full filter blur-3xl pointer-events-none" />

              {/* Grid Header Mockup */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="px-3 py-1 rounded bg-white/5 text-[10px] text-slate-400 font-mono tracking-wider">
                  viyara_core_repo
                </div>
              </div>

              {/* Simulated Code Dashboard UI */}
              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-green-400">~/viyara</span>
                  <span>$ npm run dev</span>
                </div>
                <div className="text-slate-400 text-[10px] leading-relaxed">
                  <span className="text-blue-400">✔ Ready in 450ms</span><br />
                  <span>&gt; Local: http://localhost:5173</span>
                </div>

                {/* Grid Visual Nodes */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3 relative group hover:border-[#E8CFA7]/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Design System</span>
                      <Palette size={12} className="text-[#E8CFA7]" />
                    </div>
                    <div className="text-[9px] text-[#E8CFA7]">Figma Component Library</div>
                    <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-[#E8CFA7] h-full w-[85%]" />
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-lg p-3 relative group hover:border-[#E8CFA7]/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">API Gateway</span>
                      <Server size={12} className="text-blue-400" />
                    </div>
                    <div className="text-[9px] text-blue-400">GraphQL Server Stack</div>
                    <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full w-[92%]" />
                    </div>
                  </div>
                </div>

                {/* Floating Tags (Animated) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React Native', 'Figma', 'TypeScript', 'Tailwind', 'NextJS'].map((item, i) => (
                    <motion.span
                      key={item}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: 'easeInOut'
                      }}
                      className="px-2.5 py-1 rounded bg-[#E8CFA7]/10 border border-[#E8CFA7]/20 text-[10px] text-[#E8CFA7]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Open Positions Section */}
      <section id="open-positions" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-viyara-primary">
            Open Internship Positions
          </h2>
          <p className="text-slate-500 font-inter font-light">
            We are looking for motivated students and fresh graduates who want to make a real impact. Jumpstart your technical journey with our active engineering teams.
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OPEN_POSITIONS.map((pos, idx) => {
            const Icon = pos.icon;
            return (
              <motion.div
                key={pos.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-100/80 rounded-2xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(22,36,54,0.06)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-viyara-primary/5 flex items-center justify-center text-viyara-primary group-hover:bg-[#E8CFA7]/20 group-hover:text-viyara-primary transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-viyara-primary leading-snug">
                    {pos.title}
                  </h3>
                  <p className="text-sm font-inter text-slate-500 leading-relaxed font-light">
                    {pos.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {pos.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] font-inter font-medium tracking-wide px-2 py-0.5 bg-slate-50 text-slate-600 rounded border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleApplyPosition(pos.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-viyara-primary hover:bg-viyara-primary hover:border-viyara-primary hover:text-white transition-all duration-300 group/btn cursor-pointer"
                  >
                    Apply Now
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Apply Now Form Section */}
      <section ref={formRef} className="bg-slate-50 py-24 md:py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-viyara-primary">
              Apply Now
            </h2>
            <p className="text-slate-500 font-inter font-light">
              Fill in your details to begin your internship journey with Viyara.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Background elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#E8CFA7]/10 rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(22,36,54,0.05)] rounded-3xl p-6 md:p-12">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-12"
                    noValidate
                  >
                    
                    {/* A. Personal Info */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        <User className="text-[#E8CFA7]" size={18} />
                        <h3 className="font-bold text-base text-viyara-primary tracking-wide uppercase">Personal Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="relative">
                          <input 
                            type="text" 
                            name="fullName"
                            id="fullName"
                            placeholder=" "
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`peer w-full px-4 py-3.5 bg-white border ${formErrors.fullName ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/20'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                          />
                          <label 
                            htmlFor="fullName"
                            className="absolute left-4 top-3.5 text-xs text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                            peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                            peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-viyara-primary peer-focus:font-semibold"
                          >
                            Full Name *
                          </label>
                          {formErrors.fullName && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.fullName}
                            </span>
                          )}
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <input 
                            type="email" 
                            name="email"
                            id="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`peer w-full px-4 py-3.5 bg-white border ${formErrors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/20'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                          />
                          <label 
                            htmlFor="email"
                            className="absolute left-4 top-3.5 text-xs text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                            peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                            peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-viyara-primary peer-focus:font-semibold"
                          >
                            Email Address *
                          </label>
                          {formErrors.email && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.email}
                            </span>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="relative md:col-span-2">
                          <input 
                            type="tel" 
                            name="phone"
                            id="phone"
                            placeholder=" "
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`peer w-full px-4 py-3.5 bg-white border ${formErrors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/20'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                          />
                          <label 
                            htmlFor="phone"
                            className="absolute left-4 top-3.5 text-xs text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                            peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                            peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-viyara-primary peer-focus:font-semibold"
                          >
                            Phone Number *
                          </label>
                          {formErrors.phone && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.phone}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* B. Academic Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        <GraduationCap className="text-[#E8CFA7]" size={18} />
                        <h3 className="font-bold text-base text-viyara-primary tracking-wide uppercase">Academic Information</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* College/University */}
                        <div className="relative md:col-span-2">
                          <input 
                            type="text" 
                            name="college"
                            id="college"
                            placeholder=" "
                            value={formData.college}
                            onChange={handleInputChange}
                            className={`peer w-full px-4 py-3.5 bg-white border ${formErrors.college ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/20'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                          />
                          <label 
                            htmlFor="college"
                            className="absolute left-4 top-3.5 text-xs text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                            peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                            peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-viyara-primary peer-focus:font-semibold"
                          >
                            College / University Name *
                          </label>
                          {formErrors.college && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.college}
                            </span>
                          )}
                        </div>

                        {/* Degree/Major */}
                        <div className="relative">
                          <input 
                            type="text" 
                            name="degree"
                            id="degree"
                            placeholder=" "
                            value={formData.degree}
                            onChange={handleInputChange}
                            className={`peer w-full px-4 py-3.5 bg-white border ${formErrors.degree ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/20'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                          />
                          <label 
                            htmlFor="degree"
                            className="absolute left-4 top-3.5 text-xs text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                            peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                            peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-viyara-primary peer-focus:font-semibold"
                          >
                            Degree / Major * (e.g. B.Tech CSE)
                          </label>
                          {formErrors.degree && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.degree}
                            </span>
                          )}
                        </div>

                        {/* Graduation Year */}
                        <div className="relative">
                          <input 
                            type="number" 
                            name="gradYear"
                            id="gradYear"
                            placeholder=" "
                            value={formData.gradYear}
                            onChange={handleInputChange}
                            className={`peer w-full px-4 py-3.5 bg-white border ${formErrors.gradYear ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/20'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                          />
                          <label 
                            htmlFor="gradYear"
                            className="absolute left-4 top-3.5 text-xs text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                            peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                            peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-viyara-primary peer-focus:font-semibold"
                          >
                            Graduation Year *
                          </label>
                          {formErrors.gradYear && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.gradYear}
                            </span>
                          )}
                        </div>

                        {/* CGPA / Percentage */}
                        <div className="relative md:col-span-2">
                          <input 
                            type="text" 
                            name="cgpa"
                            id="cgpa"
                            placeholder=" "
                            value={formData.cgpa}
                            onChange={handleInputChange}
                            className={`peer w-full px-4 py-3.5 bg-white border ${formErrors.cgpa ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-[#E8CFA7] focus:ring-[#E8CFA7]/20'} rounded-xl text-sm outline-none transition-all focus:ring-4`}
                          />
                          <label 
                            htmlFor="cgpa"
                            className="absolute left-4 top-3.5 text-xs text-slate-400 pointer-events-none transition-all duration-300 origin-left 
                            peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 
                            peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-viyara-primary peer-focus:font-semibold"
                          >
                            CGPA / Percentage *
                          </label>
                          {formErrors.cgpa && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.cgpa}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* C. Internship Details */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        <Briefcase className="text-[#E8CFA7]" size={18} />
                        <h3 className="font-bold text-base text-viyara-primary tracking-wide uppercase">Internship Details</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Position (Premium Dropdown) */}
                        <div className="relative">
                          <select
                            name="position"
                            id="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 bg-white border ${formErrors.position ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#E8CFA7]'} rounded-xl text-sm outline-none transition-all focus:ring-4 focus:ring-[#E8CFA7]/20 appearance-none`}
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\' stroke-width=\'2\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                          >
                            <option value="" disabled>Select target position *</option>
                            <option value="Frontend Developer Intern">Frontend Developer Intern</option>
                            <option value="Backend Developer Intern">Backend Developer Intern</option>
                            <option value="Full Stack Developer Intern">Full Stack Developer Intern</option>
                            <option value="UI/UX Design Intern">UI/UX Design Intern</option>
                            <option value="Mobile App Developer Intern">Mobile App Developer Intern</option>
                          </select>
                          {formErrors.position && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.position}
                            </span>
                          )}
                        </div>

                        {/* Duration */}
                        <div className="relative">
                          <select
                            name="duration"
                            id="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#E8CFA7] rounded-xl text-sm outline-none transition-all focus:ring-4 focus:ring-[#E8CFA7]/20 appearance-none"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\' stroke-width=\'2\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                          >
                            <option value="3 Months">3 Months</option>
                            <option value="6 Months">6 Months</option>
                          </select>
                        </div>

                        {/* Preferred Start Date */}
                        <div className="relative md:col-span-2">
                          <input 
                            type="date" 
                            name="startDate"
                            id="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 bg-white border ${formErrors.startDate ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#E8CFA7]'} rounded-xl text-sm outline-none transition-all focus:ring-4 focus:ring-[#E8CFA7]/20`}
                          />
                          <span className="block mt-1 text-[10.5px] text-slate-400">Preferred Start Date *</span>
                          {formErrors.startDate && (
                            <span className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter">
                              <AlertCircle size={12} /> {formErrors.startDate}
                            </span>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* D. Technical Profiles */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        <Globe className="text-[#E8CFA7]" size={18} />
                        <h3 className="font-bold text-base text-viyara-primary tracking-wide uppercase">Professional Profiles</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* GitHub */}
                        <div className="relative flex items-center">
                          <div className="absolute left-4 text-slate-400"><GithubIcon /></div>
                          <input 
                            type="url" 
                            name="github"
                            id="github"
                            placeholder="GitHub Profile URL"
                            value={formData.github}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 focus:border-[#E8CFA7] rounded-xl text-sm outline-none transition-all focus:ring-4 focus:ring-[#E8CFA7]/20"
                          />
                        </div>

                        {/* LinkedIn */}
                        <div className="relative flex items-center">
                          <div className="absolute left-4 text-slate-400"><LinkedinIcon /></div>
                          <input 
                            type="url" 
                            name="linkedin"
                            id="linkedin"
                            placeholder="LinkedIn Profile URL"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 focus:border-[#E8CFA7] rounded-xl text-sm outline-none transition-all focus:ring-4 focus:ring-[#E8CFA7]/20"
                          />
                        </div>

                      </div>
                    </div>

                    {/* E. Resume Upload Area */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        <UploadCloud className="text-[#E8CFA7]" size={18} />
                        <h3 className="font-bold text-base text-viyara-primary tracking-wide uppercase">Resume Upload</h3>
                      </div>

                      <div className="space-y-4">
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          onChange={handleFileSelect}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />

                        {/* Drag and Drop Container */}
                        {!resume ? (
                          <div 
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={`w-full py-12 px-6 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 ${
                              isDragOver 
                                ? 'border-[#E8CFA7] bg-[#E8CFA7]/5 scale-[0.99]' 
                                : 'border-slate-200 bg-white hover:border-[#E8CFA7]/50 hover:bg-slate-50'
                            }`}
                          >
                            <div className="w-14 h-14 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:text-viyara-primary transition-colors">
                              <UploadCloud size={28} className={isDragOver ? 'text-[#E8CFA7]' : 'text-slate-400'} />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-semibold text-viyara-primary">Drag & Drop your Resume here, or <span className="text-[#E8CFA7] hover:underline">Browse</span></p>
                              <p className="text-[11px] text-slate-400 mt-1 font-inter">Supports PDF, DOC, and DOCX (Max 5MB)</p>
                            </div>
                          </div>
                        ) : (
                          /* Upload Progress Animation & File Display */
                          <div className="w-full p-6 border border-slate-200 bg-white rounded-2xl space-y-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                                  <Briefcase size={22} className="text-slate-600" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-viyara-primary truncate max-w-[280px] sm:max-w-[420px]">
                                    {resume.name}
                                  </p>
                                  <p className="text-xs text-slate-400 font-inter">
                                    {(resume.size / (1024 * 1024)).toFixed(2)} MB
                                  </p>
                                </div>
                              </div>
                              <button 
                                type="button"
                                onClick={handleRemoveResume}
                                className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>

                            {/* Progress bar container */}
                            {uploadProgress >= 0 && (
                              <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs font-inter font-medium text-slate-500">
                                  <span>{uploadProgress < 100 ? 'Uploading resume...' : 'Upload complete'}</span>
                                  <span>{uploadProgress}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                  <div 
                                    className="bg-[#162436] h-full rounded-full transition-all duration-200 ease-out"
                                    style={{ width: `${uploadProgress}%` }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {formErrors.resume && (
                          <span className="flex items-center gap-1 text-xs text-red-500 font-inter">
                            <AlertCircle size={12} /> {formErrors.resume}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* F. Additional Info */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        <Sparkles className="text-[#E8CFA7]" size={18} />
                        <h3 className="font-bold text-base text-viyara-primary tracking-wide uppercase">Additional Information</h3>
                      </div>

                      <div className="space-y-6">
                        {/* Why Viyara */}
                        <div className="relative">
                          <textarea 
                            name="whyViyara"
                            id="whyViyara"
                            rows={4}
                            placeholder="Why do you want to join Viyara?"
                            value={formData.whyViyara}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#E8CFA7] focus:ring-4 focus:ring-[#E8CFA7]/20 rounded-xl text-sm outline-none transition-all resize-y"
                          />
                        </div>

                        {/* Key achievements */}
                        <div className="relative">
                          <textarea 
                            name="achievements"
                            id="achievements"
                            rows={3}
                            placeholder="List your key achievements or links to major projects (if any)"
                            value={formData.achievements}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#E8CFA7] focus:ring-4 focus:ring-[#E8CFA7]/20 rounded-xl text-sm outline-none transition-all resize-y"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-viyara-primary hover:bg-[#1f324b] text-white font-semibold text-sm transition-all duration-300 shadow-[0_8px_30px_rgba(22,36,54,0.15)] hover:shadow-[0_15px_40px_rgba(22,36,54,0.22)] hover:-translate-y-0.5 disabled:bg-slate-300 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  
                  /* 4. Success Screen */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="py-16 px-6 text-center space-y-6 flex flex-col items-center max-w-lg mx-auto"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2 shadow-[0_10px_25px_rgba(34,197,94,0.12)]">
                      <CheckCircle2 size={44} className="stroke-[1.5]" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold text-viyara-primary font-poppins">
                      Thank You!
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-slate-600 font-semibold text-sm">
                        Your application was submitted successfully.
                      </p>
                      <p className="text-slate-400 font-inter font-light text-xs leading-relaxed max-w-sm">
                        Our HR team will review your application and contact you soon. If your profile matches our requirements, we will reach out to you via email.
                      </p>
                    </div>

                    <div className="pt-6 w-full flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            college: '',
                            degree: '',
                            gradYear: '',
                            cgpa: '',
                            position: '',
                            duration: '6 Months',
                            startDate: '',
                            github: '',
                            linkedin: '',
                            whyViyara: '',
                            achievements: ''
                          });
                          setResume(null);
                          setUploadProgress(-1);
                          setIsSubmitted(false);
                        }}
                        className="px-6 py-3 rounded-xl border border-slate-200 hover:border-viyara-primary text-viyara-primary hover:bg-slate-50 font-semibold text-xs transition-all duration-200 cursor-pointer"
                      >
                        Submit Another Application
                      </button>
                      
                      <button
                        onClick={() => {
                          window.location.hash = '#home';
                        }}
                        className="px-6 py-3 rounded-xl bg-viyara-primary hover:bg-[#1f324b] text-white font-semibold text-xs transition-all duration-200 shadow-sm cursor-pointer"
                      >
                        Go Back to Home
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Sticky "Apply Now" CTA Button */}
      <AnimatePresence>
        {showStickyBtn && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={() => scrollToSection(formRef)}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-viyara-primary text-[#E8CFA7] hover:bg-[#1a2c41] font-semibold text-xs uppercase tracking-wider shadow-2xl hover:shadow-[#162436]/30 border border-[#E8CFA7]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Apply Now
              <ArrowUpRight size={14} className="text-[#E8CFA7]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
