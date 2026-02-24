import { Link } from 'react-router-dom';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-softblack pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-sans font-bold text-white tracking-tighter mb-6 inline-block">
              CREATIFY<span className="text-white/40">STUDIOS</span>
            </Link>
            <p className="text-white/50 font-body text-lg max-w-sm mb-8">
              Elevating brands through strategic design and digital excellence.
            </p>
            <div className="flex gap-4">
              <a href="mailto:phillipinem@creatifystudios.co.za" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/creatify_za" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-sans font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/work" className="text-white/50 hover:text-white transition-colors font-body">Our Work</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors font-body">Services</Link></li>
              <li><Link to="/about" className="text-white/50 hover:text-white transition-colors font-body">About</Link></li>
              <li><Link to="/contact" className="text-white/50 hover:text-white transition-colors font-body">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-sans font-bold mb-6">Get in Touch</h4>
            <Link to="/contact" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors font-body mb-4">
              Start a Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <p className="text-white/30 text-sm font-body leading-relaxed">
              Based in South Africa.<br />Available Worldwide.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-white/30 text-xs font-body uppercase tracking-widest">
            © {currentYear} CREATIFY STUDIOS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <button className="text-white/30 text-xs font-body uppercase tracking-widest hover:text-white transition-colors cursor-not-allowed">Privacy Policy</button>
            <button className="text-white/30 text-xs font-body uppercase tracking-widest hover:text-white transition-colors cursor-not-allowed">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
