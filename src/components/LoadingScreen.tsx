import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 2.2 seconds loading duration for animation to play
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-[#162436] z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle geometric lines in background */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative flex flex-col items-center select-none">
            {/* Animated Logo Container with Flying Arrow & Impact Shockwave */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-8">
              
              {/* Ripple / Impact Ring (triggers exactly on hit at 0.55s) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.1, 2.2, 2.8],
                }}
                transition={{ 
                  delay: 0.55, 
                  duration: 0.85,
                  ease: "easeOut"
                }}
                className="absolute w-24 h-24 rounded-full border border-cyan-400/60 bg-cyan-400/5 pointer-events-none z-0"
              />

              {/* Glowing Impact Core */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.6, 2.2],
                }}
                transition={{ 
                  delay: 0.55,
                  duration: 0.65,
                  ease: "easeOut"
                }}
                className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-md pointer-events-none z-0"
              />

              {/* Logo Monogram (Shakes on impact at 0.55s) */}
              <motion.img
                src="/logo-white.png"
                alt="VIYARA Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: [0, 0, -5, 5, -4, 3, -1, 0],
                  y: [0, 0, -4, 4, -3, 2, -1, 0],
                  rotate: [0, 0, -4, 4, -3, 1, 0]
                }}
                transition={{ 
                  duration: 1.3, 
                  ease: [0.16, 1, 0.3, 1],
                  x: { delay: 0.55, duration: 0.5 },
                  y: { delay: 0.55, duration: 0.5 },
                  rotate: { delay: 0.55, duration: 0.5 }
                }}
                className="w-24 h-24 object-contain relative z-10"
              />

              {/* Flying Arrow (Flies in from top-left, hits at 0.55s, stays, and then fades out at 1.1s) */}
              <motion.div
                initial={{ 
                  x: -300, 
                  y: -300, 
                  opacity: 0,
                  rotate: 45
                }}
                animate={{ 
                  x: [-300, -16, -16, -16],
                  y: [-300, -16, -16, -16],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  times: [0, 0.36, 0.75, 1], // 0.36 * 1.5s = 0.54s (impact)
                  ease: "easeOut"
                }}
                className="absolute w-20 h-10 z-20 pointer-events-none"
                style={{
                  transformOrigin: 'right center'
                }}
              >
                <svg viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
                  {/* Arrow line */}
                  <line x1="2" y1="12" x2="48" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Arrow point */}
                  <path d="M40 5L52 12L40 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Tail fins */}
                  <path d="M5 6L2 12L5 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 6L9 12L12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>

            </div>

            {/* Viyara Brand Text Reveal (triggered right after the arrow hits at 0.8s) */}
            <div className="overflow-hidden h-8 mt-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans font-extrabold text-2xl tracking-[0.3em] uppercase text-[#f1f5f9]"
              >
                VIYARA
              </motion.h1>
            </div>
            
            {/* Fine Subtext Reveal (triggered slightly after text) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-[10px] tracking-[0.4em] uppercase text-[#f1f5f9] mt-3 font-light"
            >
              Digital Curation &amp; Engineering
            </motion.p>

          </div>

          {/* Smooth progress bar at the bottom */}
          <div className="absolute bottom-16 left-12 right-12 md:left-1/3 md:right-1/3 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
              className="w-full h-full bg-gradient-to-r from-transparent via-[#ffffff] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
