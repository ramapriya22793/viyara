import { useState, useEffect } from 'react';
import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import TechStack from './components/TechStack';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Careers from './components/Careers';
import SimpleForm from './components/SimpleForm';
import ServiceForm from './components/ServiceForm';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const { scrollYProgress } = useScroll();
  
  // Custom spring scroll progress bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  // Listen to hash change for routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Scroll to top when switching to careers or service-form
      if (window.location.hash === '#careers' || window.location.hash === '#service-form') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  // Determine if we should render standalone Name/Phone Form based on subdomain or hash path
  const isFormSubdomain = window.location.hostname.startsWith('form.') || currentHash === '#form-only';
  const isServiceSubdomain = window.location.hostname.startsWith('service.') || currentHash === '#service-form';

  return (
    <div className="bg-[#ffffff] min-h-screen text-[#0f172a] antialiased selection:bg-[#162436]/15 selection:text-[#162436]">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <AnimatePresence>
          {isFormSubdomain ? (
            <SimpleForm />
          ) : isServiceSubdomain ? (
            <ServiceForm />
          ) : (
            <>
              {/* Scroll Progress Bar */}
              <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#162436] via-[#3f6a9e] to-[#162436] origin-left z-[100] rounded-r-full"
              />

              {/* Sticky Header */}
              <Navbar />

              {currentHash === '#careers' ? (
                <Careers />
              ) : (
                <main>
                  {/* Sections in user recommended sequence */}
                  <Hero />
                  <WhyChoose />
                  <Services />
                  <Portfolio />
                  <About />
                  <Process />
                  <TechStack />
                  <FinalCTA />
                </main>
              )}

              <Footer />
            </>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
