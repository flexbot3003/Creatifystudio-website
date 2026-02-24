import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-forest-dark text-white flex flex-col items-center justify-center p-6 text-center">
      <nav className="absolute top-0 left-0 p-6 md:px-12 py-6 w-full flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-body font-medium">Back to Home</span>
        </Link>
      </nav>
      <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-4 tracking-tighter">ABOUT US</h1>
      <p className="text-white/60 font-body mb-8 max-w-md text-lg italic font-serif">
        "Design is the silent ambassador of your brand."
      </p>
      <div className="w-20 h-px bg-white/20 mb-8" />
      <p className="text-white/60 font-body max-w-lg">
        Creatify Studios is currently refining our story. We'll be sharing our mission, values, and the team behind the magic very soon.
      </p>
    </div>
  );
}
