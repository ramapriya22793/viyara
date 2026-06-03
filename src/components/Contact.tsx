import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[var(--color-secondary)]/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-accent-blue)] uppercase mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)]">
              Extraordinary
            </span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              <p className="text-[var(--color-text-silver)] mb-8 leading-relaxed max-w-md">
                Ready to transform your ideas into scalable digital experiences? Reach out to our team of experts and let's start the conversation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin className="text-[var(--color-accent-blue)]" size={20} />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Headquarters</h5>
                  <p className="text-[var(--color-text-silver)] leading-relaxed">
                    No 11 Saraswati Avenue,<br />
                    Achipatti,<br />
                    Pollachi - 642002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 shrink-0">
                  <Phone className="text-[var(--color-accent-blue)]" size={20} />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Phone</h5>
                  <p className="text-[var(--color-text-silver)]">+91 8754287774</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 shrink-0">
                  <Mail className="text-[var(--color-accent-blue)]" size={20} />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Email</h5>
                  <p className="text-[var(--color-text-silver)]">VIYARA.com@gmail.com</p>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Right Side: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass p-8 md:p-10 rounded-2xl border border-white/10 glow-box relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)]"></div>
              
              <h4 className="text-2xl font-bold text-white mb-8">Send us a Message</h4>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-blue)] focus:bg-white/10 transition-all peer" placeholder=" " required />
                    <label htmlFor="name" className="absolute left-4 top-3 text-[var(--color-text-silver)] transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-[var(--color-primary)] peer-focus:px-2 peer-focus:text-[var(--color-accent-blue)] peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-[var(--color-primary)] peer-valid:px-2 rounded">
                      Full Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-blue)] focus:bg-white/10 transition-all peer" placeholder=" " required />
                    <label htmlFor="email" className="absolute left-4 top-3 text-[var(--color-text-silver)] transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-[var(--color-primary)] peer-focus:px-2 peer-focus:text-[var(--color-accent-blue)] peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-[var(--color-primary)] peer-valid:px-2 rounded">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <input type="text" id="subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-purple)] focus:bg-white/10 transition-all peer" placeholder=" " required />
                  <label htmlFor="subject" className="absolute left-4 top-3 text-[var(--color-text-silver)] transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-[var(--color-primary)] peer-focus:px-2 peer-focus:text-[var(--color-accent-purple)] peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-[var(--color-primary)] peer-valid:px-2 rounded">
                    Subject / Service Needed
                  </label>
                </div>

                <div className="relative group">
                  <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-purple)] focus:bg-white/10 transition-all peer resize-none" placeholder=" " required></textarea>
                  <label htmlFor="message" className="absolute left-4 top-3 text-[var(--color-text-silver)] transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-[var(--color-primary)] peer-focus:px-2 peer-focus:text-[var(--color-accent-purple)] peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-[var(--color-primary)] peer-valid:px-2 rounded">
                    Your Message
                  </label>
                </div>

                <button type="submit" className="w-full py-4 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>


      </div>
    </section>
  );
}
