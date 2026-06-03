import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why VIYARA', href: '#why-VIYARA' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3.5 mt-4 mx-4 md:mx-12 rounded-2xl bg-white/90 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(22,36,54,0.08)]' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group cursor-pointer" data-cursor-text="Home">
            <div className="relative">
              <img
                src={isScrolled ? "/logo-blue.png" : "/logo-white.png"}
                alt="VIYARA Logo"
                className="w-9 h-9 group-hover:scale-105 transition-transform duration-300 object-contain"
              />
              <div className="absolute inset-0 rounded-xl bg-[#cca353]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className={`font-sans font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-[#162436]' : 'text-white'
            }`}>
              VIYARA
            </span>
          </a>
 
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 relative py-1 ${
                  isScrolled ? 'text-[#162436]/70 hover:text-[#162436]' : 'text-white/70 hover:text-white'
                } group`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] rounded-full bg-gradient-to-r ${
                  isScrolled ? 'from-[#162436] to-[#cca353]' : 'from-[#cca353] to-[#ede7d7]'
                } transition-all duration-300 group-hover:w-full`} />
              </a>
            ))}
          </div>
 
          {/* Call-to-Action with Magnetic Effect */}
          <div className="hidden md:block">
            <Magnetic range={0.25}>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${
                  isScrolled 
                    ? 'border-[#162436]/30 bg-[#162436]/5 text-[#162436] hover:bg-[#162436] hover:border-[#162436] hover:text-white shadow-[0_0_15px_rgba(22,36,54,0.1)]' 
                    : 'border-[#cca353]/40 bg-[#cca353]/15 text-[#ede7d7] hover:bg-[#cca353]/35 hover:border-[#cca353]/80 hover:text-white shadow-[0_0_15px_rgba(204,163,83,0.2)] hover:shadow-[0_0_25px_rgba(204,163,83,0.4)]'
                }`}
              >
                <PhoneCall size={12} className={isScrolled ? 'text-[#162436] transition-colors group-hover:text-white' : 'text-[#cca353]'} />
                Get Quote
              </a>
            </Magnetic>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors duration-300 ${
              isScrolled ? 'text-[#162436] hover:bg-black/5' : 'text-white hover:bg-white/5'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
 
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-[#0f1825]/95 backdrop-blur-xl border border-white/10 shadow-2xl py-8 px-6 flex flex-col gap-5"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white py-1 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#cca353]/40 bg-[#cca353]/20 text-[#ede7d7] text-xs font-bold tracking-wider uppercase shadow-lg text-center"
              >
                <PhoneCall size={12} className="text-[#cca353]" />
                Get Quote
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
