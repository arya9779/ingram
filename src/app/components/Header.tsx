import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${isScrolled ? 'border-blue-100 bg-white/95 backdrop-blur-sm' : 'border-transparent bg-white/80 backdrop-blur-sm'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Consultingram" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.label === 'Services' ? (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${location.pathname.startsWith(item.to) ? 'text-secondary hover:text-primary' : 'text-slate-500 hover:text-primary'}`}
                >
                  {item.label}
                  <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform duration-300">expand_more</span>
                </Link>
                <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="w-56 bg-white rounded-xl shadow-xl shadow-blue-900/10 border border-blue-100 overflow-hidden flex flex-col p-2">
                    <Link to="/services#strategy" className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors">Strategic Planning</Link>
                    <Link to="/services#finance" className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors">Financial Advisory</Link>
                    <Link to="/services#operations" className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors">Operational Excellence</Link>
                    <Link to="/services#mna" className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors">Mergers &amp; Acquisitions</Link>
                    <Link to="/services#digital" className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors">Digital Transformation</Link>
                    <div className="h-px bg-slate-100 my-1 mx-2"></div>
                    <Link to="/services" className="px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider hover:bg-orange-50 rounded-lg transition-colors text-center mt-1">View All Services</Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm font-medium transition-colors ${location.pathname === item.to ? 'text-secondary hover:text-primary' : 'text-slate-500 hover:text-primary'}`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-orange-600 shadow-md shadow-orange-200"
          >
            Book Consultation
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center p-2 text-slate-900 hover:bg-slate-100 rounded-full"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-blue-100"
        >
          <div className="px-4 py-4 space-y-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`block py-2 text-sm font-medium transition-colors ${location.pathname === item.to ? 'text-secondary' : 'text-slate-500'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 flex h-10 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white shadow-md shadow-orange-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
