import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1923] text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Ingram Consulting Group International" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              Helping ambitious organizations build the future. We combine deep industry expertise with cutting-edge strategies to deliver sustainable results.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="text-sm font-bold">in</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="text-sm font-bold">tw</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="text-sm font-bold">fb</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/team">Our Team</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services">Services</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/case-studies">Case Studies</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Whitepapers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-slate-300 text-sm mb-4">Subscribe to our newsletter for the latest insights.</p>
            <form className="flex flex-col gap-3">
              <input className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary placeholder:text-slate-400 outline-none" placeholder="Enter your email" type="email" />
              <button className="w-full bg-primary hover:bg-orange-600 text-white text-sm font-bold py-3 rounded-lg transition-colors border border-transparent cursor-pointer" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} Ingram Consulting Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
