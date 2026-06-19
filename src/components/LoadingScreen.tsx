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
            {/* Animated Logo Container */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-8">
              
              {/* Subtle ambient glow behind logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 0.4, 0.2],
                  scale: [0.8, 1.4, 1.2],
                }}
                transition={{ 
                  delay: 0.2,
                  duration: 1.5,
                  ease: "easeOut"
                }}
                className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl pointer-events-none z-0"
              />

              {/* Logo Monogram (Smooth scale up and fade in) */}
              <motion.img
                src="/logo-white.png"
                alt="VIYARA Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2
                }}
                className="w-24 h-24 object-contain relative z-10"
              />

            </div>

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
