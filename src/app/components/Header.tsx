import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Our Team', to: '/team' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const isHomePage = location.pathname === '/';
  const isSolid = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolid
        ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="ICG"
            className={`h-9 w-auto object-contain transition-all duration-300 ${isSolid ? '' : 'brightness-0 invert'
              }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide uppercase transition-colors duration-200 rounded-lg ${isActive(item.to)
                ? isSolid
                  ? 'text-primary'
                  : 'text-white'
                : isSolid
                  ? 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
            >
              {item.label}
              {isActive(item.to) && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden sm:flex h-10 items-center justify-center rounded-lg px-6 text-[13px] font-bold uppercase tracking-wide transition-all duration-300 ${isSolid
              ? 'bg-primary text-white hover:bg-orange-600 shadow-sm'
              : 'bg-white/15 backdrop-blur-md text-white border border-white/25 hover:bg-white/25'
              }`}
          >
            Get in Touch
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex md:hidden items-center justify-center w-10 h-10 rounded-lg transition-colors ${isSolid ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-6 py-6 space-y-1 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${isActive(item.to)
                  ? 'text-primary bg-orange-50'
                  : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-2">
              <Link
                to="/contact"
                className="flex h-11 w-full items-center justify-center rounded-lg bg-primary text-sm font-bold text-white hover:bg-orange-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
