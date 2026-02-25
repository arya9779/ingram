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
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Team', to: '/team' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="text-2xl font-heading font-bold text-slate-900 tracking-tight">
              Consult<span className="text-sky-700">Ingram</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={`text-sm font-medium relative group cursor-pointer transition-colors duration-200 ${
                    location.pathname === item.to
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-sky-700 transition-all duration-300 ${
                      location.pathname === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors duration-200 text-sm font-medium cursor-pointer"
              >
                Get Started
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 cursor-pointer p-2 -mr-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`block py-3 transition-colors duration-200 text-sm font-medium ${
                  location.pathname === item.to
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full mt-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg text-center text-sm font-medium cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
