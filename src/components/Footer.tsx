import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-[#EBEBEB] text-slate-700 py-20 pt-32 lg:pt-48 border-t border-slate-200">
            <div className="mx-auto max-w-[1400px] px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    <div className="md:col-span-4 space-y-6">
                        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                            <img
                                src="/logo.png"
                                alt="Ingram Consulting Group"
                                className="h-[72px] md:h-[90px] w-auto object-contain"
                            />
                        </Link>
                        <p className="text-[15px] max-w-md leading-relaxed font-sans text-slate-500 font-medium mt-6">
                            We support clients in process improvement, organizational efficiency, and business analysis to optimize performance. Through each of these efforts, we continuously see the benefits of helping our clients make better data-driven decisions.
                        </p>
                    </div>

                    <div className="md:col-span-2 md:col-start-6">
                        <h3 className="font-heading font-semibold mb-6 text-xl text-secondary">Quick Links</h3>
                        <ul className="space-y-4 font-semibold text-[15px] text-slate-500">
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#clients" className="hover:text-primary transition-colors">Our Clients</a></li>
                            <li><a href="#podcasts" className="hover:text-primary transition-colors">Podcasts</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="font-heading font-semibold mb-6 text-xl text-secondary">Service Links</h3>
                        <ul className="space-y-4 font-semibold text-[15px] text-slate-500">
                            <li><a href="#services" className="hover:text-primary transition-colors">Academic and Education Institutions</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Private Sector</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Federal and State Government</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Non-Profit Sector</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Hospitals and Healthcare Sector Clients</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-heading font-semibold mb-6 text-xl text-secondary">Social Media</h3>
                        <div className="flex gap-4 text-primary">
                            <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-[18px] h-[18px]" strokeWidth={2.5} /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="w-[18px] h-[18px]" strokeWidth={2.5} /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Twitter className="w-[18px] h-[18px]" strokeWidth={2.5} /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-[18px] h-[18px]" strokeWidth={2.5} /></a>
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-6 border-t border-slate-300 flex justify-center text-center">
                    <p className="text-slate-600 font-semibold text-[13px] tracking-wide">
                        Copyright © {new Date().getFullYear()} <span className="text-primary">Consultingram</span>. All Rights Reserved. Designed and Developed by <span className="text-primary">ABK Digital</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
