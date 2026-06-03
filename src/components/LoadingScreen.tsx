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
            {/* Animated Logo Monogram (PNG) */}
            <div className="relative mb-8 w-24 h-24">
              <motion.img
                src="/logo-white.png"
                alt="VIYARA Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-contain relative z-10"
              />
            </div>

            {/* Viyara Text Reveal */}
            <div className="overflow-hidden h-8">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans font-extrabold text-2xl tracking-[0.3em] uppercase text-[#f1f5f9]"
              >
                VIYARA
              </motion.h1>
            </div>
            
            {/* Fine Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.9, duration: 0.6 }}
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
              className="w-full h-full bg-gradient-to-r from-transparent via-[#f1f5f9] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
