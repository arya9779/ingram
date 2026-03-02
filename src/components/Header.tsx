import { Link } from 'react-router-dom'
import { Menu, X, MapPin, Mail, Clock, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useState } from 'react'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Our Clients', path: '/clients' },
        { name: 'Podcasts', path: '/podcasts' },
        { name: 'Contact Us', path: '/contact' },
    ]

    return (
        <div className="w-full font-sans shadow-sm sticky top-0 z-50 bg-white">
            {/* Top Bar - Replaced Orange with Dark Blue / Gold */}
            <div className="hidden lg:flex w-full items-center justify-between px-8 py-2 border-b border-slate-100 bg-white text-sm">
                <div className="flex items-center gap-6 text-slate-600">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary text-secondary p-1.5 rounded-full flex items-center justify-center">
                            <MapPin className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col leading-tight text-xs">
                            <span className="font-semibold text-secondary">4938 Hampden Lane #302</span>
                            <span>Bethesda, MD 20814</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-primary text-secondary p-1.5 rounded-full flex items-center justify-center">
                            <Mail className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col leading-tight text-xs">
                            <span className="font-semibold text-secondary">Support Email:</span>
                            <span>leangela@consultingram.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-primary text-secondary p-1.5 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col leading-tight text-xs">
                            <span className="font-semibold text-secondary">Monday - Saturday: 8.00am - 17.00pm</span>
                            <span>Sunday: Closed</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-primary">
                    <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-secondary transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="w-full">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">

                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2 text-secondary hover:opacity-90 transition-opacity">
                            <img
                                src="/logo.png"
                                alt="Ingram Consulting Group"
                                className="h-[64px] md:h-[80px] w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-[15px] font-semibold text-secondary hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="rounded-full bg-primary px-6 py-3 text-[15px] font-bold text-secondary shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all w-max inline-block"
                        >
                            Book An Appointment
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100/50 hover:text-slate-900 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden border-t border-slate-200 bg-white">
                        <div className="space-y-1 px-4 pb-3 pt-2 sm:px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-secondary hover:bg-slate-50 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}
