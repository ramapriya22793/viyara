import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#162436] pt-24 pb-12 border-t border-white/5 overflow-hidden text-[#f1f5f9]">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom,rgba(22,36,54,0.4)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Presentation */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2.5 group inline-flex cursor-pointer">
              <img
                src="/logo-white.png"
                alt="VIYARA Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-sans font-extrabold text-xl tracking-tight text-[#f1f5f9]">
                VIYARA
              </span>
            </a>
            <p className="text-[#f1f5f9]/65 text-xs font-light leading-relaxed max-w-sm">
              Engineering digital excellence through modern software architectures, strategic brand curation, and high-performance cloud applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#f1f5f9] uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Why VIYARA', href: '#why-VIYARA' },
                { name: 'Our Methodology', href: '#methodology' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#f1f5f9]/65 hover:text-[#f1f5f9] hover:pl-1 text-xs font-light tracking-wide transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#f1f5f9] uppercase tracking-wider mb-6">Capabilities</h4>
            <ul className="space-y-3.5">
              {['Website & SaaS Product Dev', 'Mobile App Development', 'UI/UX & Creative Design', 'QA & Software Testing', 'Visual Marketing', 'E-Commerce & Q-Commerce', 'Digital & Visual Marketing'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-[#f1f5f9]/65 hover:text-[#f1f5f9] hover:pl-1 text-xs font-light tracking-wide transition-all duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#f1f5f9] uppercase tracking-wider mb-6">Advisory Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#f1f5f9]/60 shrink-0 mt-0.5" size={16} />
                <span className="text-[#f1f5f9]/65 text-xs font-light leading-relaxed">
                  No 11 Saraswati Avenue, Achipatti, Pollachi - 642002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#f1f5f9]/60 shrink-0" size={16} />
                <span className="text-[#f1f5f9]/65 text-xs font-light">+91 8754287774</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#f1f5f9]/60 shrink-0" size={16} />
                <span className="text-[#f1f5f9]/65 text-xs font-light">Info@viyara.co.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#f1f5f9]/40 text-xs font-light">
            &copy; {currentYear} VIYARA Marketing Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#f1f5f9]/40 text-xs font-light hover:text-[#f1f5f9] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#f1f5f9]/40 text-xs font-light hover:text-[#f1f5f9] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
