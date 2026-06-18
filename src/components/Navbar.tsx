import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
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
            <span className={`font-sans font-bold text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-[#0f172a]' : 'text-white'
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
                className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 relative py-1 ${
                  isScrolled ? 'text-[#0f172a]/70 hover:text-[#0f172a]' : 'text-white/70 hover:text-white'
                } group`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] rounded-full bg-gradient-to-r ${
                  isScrolled ? 'from-[#0f172a] to-[var(--color-accent-blue)]' : 'from-[var(--color-luxury-beige)] to-[var(--color-luxury-gold)]'
                } transition-all duration-300 group-hover:w-full`} />
              </a>
            ))}
          </div>
 
          {/* Call-to-Action with Magnetic Effect */}
          <div className="hidden md:block">
            <Magnetic range={0.25}>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  isScrolled 
                    ? 'border-[#0f172a]/30 bg-[#0f172a]/5 text-[#0f172a] hover:bg-[#0f172a] hover:border-[#0f172a] hover:text-white shadow-[0_8px_20px_rgba(15,23,42,0.08)]' 
                    : 'border-[var(--color-luxury-gold)]/40 bg-[var(--color-luxury-gold)]/10 text-[var(--color-luxury-beige)] hover:bg-[var(--color-luxury-gold)] hover:text-black shadow-sm'
                }`}
              >
                <PhoneCall size={12} className={isScrolled ? 'text-[#0f172a] transition-colors group-hover:text-white' : 'text-[var(--color-luxury-gold)] group-hover:text-black'} />
                Get Consultation
              </a>
            </Magnetic>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors duration-300 ${
              isScrolled ? 'text-[#0f172a] hover:bg-black/5' : 'text-white hover:bg-white/5'
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
              className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl border border-white/10 shadow-2xl py-8 px-6 flex flex-col gap-5"
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
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[var(--color-accent-blue)]/40 bg-[var(--color-accent-blue)]/20 text-[#f1f5f9] text-xs font-bold tracking-wider uppercase shadow-lg text-center"
              >
                <PhoneCall size={12} className="text-[var(--color-accent-blue)]" />
                Get Consultation
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
