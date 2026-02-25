import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Team', to: '/team' },
      { label: 'Contact', to: '/contact' },
    ],
    services: [
      { label: 'Leadership Development', to: '/services' },
      { label: 'Executive Coaching', to: '/services' },
      { label: 'Strategic Planning', to: '/services' },
      { label: 'All Services', to: '/services' },
    ],
  };

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-heading font-bold text-white mb-4 tracking-tight">
                Consult<span className="text-sky-400">Ingram</span>
              </div>
              <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                Ingram Consulting Group provides subject matter expertise, advocacy,
                training, and organizational improvement services. Your trusted partner
                for human capital development since 1995.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Mail className="text-sky-400" size={14} />
                  <a href="mailto:leangela@consultingram.com" className="hover:text-white transition-colors duration-200 text-sm">
                    leangela@consultingram.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-sky-400" size={14} />
                  <a href="tel:+12026436011" className="hover:text-white transition-colors duration-200 text-sm">
                    (202) 643-6011
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-sky-400" size={14} />
                  <span className="text-sm">4938 Hampden Lane #302, Bethesda, MD 20814</span>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/ingram-consulting-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-sky-700 transition-colors duration-200 cursor-pointer"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white mb-4 text-xs font-semibold uppercase tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-500 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
              &copy; {currentYear} Ingram Consulting Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-slate-600 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-600 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
