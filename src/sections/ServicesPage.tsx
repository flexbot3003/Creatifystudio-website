import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function ServicesPage() {
  const list = ["Brand Identity", "Web Design", "Social Media Graphics", "Motion Design"];
  
  return (
    <div className="min-h-screen bg-forest-dark text-white flex flex-col items-center justify-center p-6 text-center">
      <nav className="absolute top-0 left-0 p-6 md:px-12 py-6 w-full flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-body font-medium">Back to Home</span>
        </Link>
      </nav>
      <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-6 tracking-tighter uppercase">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
        {list.map(item => (
          <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-white/40" />
            <span className="font-body text-sm uppercase tracking-widest">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-white/40 font-body max-w-md text-sm uppercase tracking-[0.2em]">Full Details Coming Soon</p>
    </div>
  );
}
