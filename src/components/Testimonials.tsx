import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with VIYARA was a game-changer. They completely transformed our brand identity and engineered a SaaS platform that exceeded our expectations in performance and structural design.",
    name: "Sarah Jenkins",
    role: "CEO, TechNova Solutions",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    quote: "The level of premium quality and strategic insight they brought to our custom headless storefront helped us 10x our sales conversions within the first quarter of launch. Highly professional.",
    name: "David Chen",
    role: "Founder, Lumina Retail",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "VIYARA's UI/UX and database engineering standards are unmatched. They have an incredible eye for detail, and their cloud architectures are robust and secure. A true enterprise-level partner.",
    name: "Emily Rodriguez",
    role: "CMO, Nexus FinTech",
    image: "https://i.pravatar.cc/150?img=32"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden bg-[#ffffff]/40 border-t border-[#162436]/5">
      {/* Background visual gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#162436]/2 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3f6a9e]/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#162436]/5 border border-[#162436]/10 text-xs font-bold tracking-[0.2em] text-[#162436] uppercase mb-6">
            Enterprise Feedback
          </span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0f172a]">
            Voices of Impact
          </h3>
        </div>

        {/* Carousel Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative glass p-10 md:p-16 rounded-[2.5rem] border border-[#162436]/10 glow-plum shadow-sm"
        >
          {/* Quote Icon decorative */}
          <div className="absolute top-8 left-8 text-[#162436]/8 pointer-events-none">
            <Quote size={80} fill="currentColor" />
          </div>

          <div className="min-h-[220px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <p className="text-lg md:text-xl text-[#0f172a] font-serif font-light leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </p>

                {/* Profile Card */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#162436]/20 p-[2px] overflow-hidden bg-white">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h5 className="text-[#0f172a] font-bold text-sm">{testimonials[current].name}</h5>
                    <p className="text-[#3f6a9e] text-[11px] font-semibold tracking-wide uppercase mt-0.5">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Controls */}
          <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-4 items-center">
            
            {/* Prev Button */}
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-[#f1f5f9]/60 border border-[#162436]/10 flex items-center justify-center text-[#0f172a] hover:bg-[#162436] hover:text-[#f1f5f9] transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-5 bg-[#162436]' : 'w-1.5 bg-[#162436]/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-[#f1f5f9]/60 border border-[#162436]/10 flex items-center justify-center text-[#0f172a] hover:bg-[#162436] hover:text-[#f1f5f9] transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
