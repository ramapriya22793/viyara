import { useState, useEffect } from 'react';
import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import TechStack from './components/TechStack';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Custom spring scroll progress bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  // Initialize Lenis smooth scroll after loading finishes
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="bg-[#f1f5f9] min-h-screen text-[#0f172a] antialiased selection:bg-[#162436]/15 selection:text-[#162436]">
      {/* Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <AnimatePresence>
          {/* Scroll Progress Bar */}
          <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#162436] via-[#3f6a9e] to-[#162436] origin-left z-[100] rounded-r-full"
          />

          {/* Sticky Header */}
          <Navbar />

          <main>
            {/* Sections in user recommended sequence */}
            <Hero />
            <Services />
            <WhyChoose />
            <Process />
            <TechStack />
            <FinalCTA />
          </main>

          <Footer />
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
