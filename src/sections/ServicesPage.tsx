import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';

export function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Brand Identity",
      description: "We build brands from the ground up, ensuring you stand out in your industry.",
      examples: "What to expect: Logo Design, Color Palettes, Typography Systems, Brand Guidelines, and Business Cards."
    },
    {
      title: "Web Design",
      description: "Beautiful, responsive websites tailored to convert visitors into clients.",
      examples: "What to expect: UI/UX Design, Custom Web Development, Mobile Optimization, and E-commerce setup."
    },
    {
      title: "Social Media Graphics",
      description: "Scroll-stopping visuals to elevate your social presence.",
      examples: "What to expect: Instagram Grids, Story Templates, Facebook Banners, and Ad Creatives."
    },
    {
      title: "Motion Design",
      description: "Bring your brand to life with dynamic animations and video elements.",
      examples: "What to expect: Logo Animations, Promotional Videos, UI Interactions, and Custom GIFs."
    }
  ];

  return (
    <div className="min-h-screen bg-forest-dark text-white flex flex-col items-center py-20 px-6">
      <nav className="absolute top-0 left-0 p-6 md:px-12 py-6 w-full flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-body font-medium">Back to Home</span>
        </Link>
      </nav>
      
      <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-12 tracking-tighter uppercase mt-12">Our Services</h1>
      
      <div className="w-full max-w-3xl space-y-4 text-left">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
            >
              <h3 className="text-2xl font-sans font-bold">{service.title}</h3>
              {openIndex === index ? <Minus className="text-white/50" /> : <Plus className="text-white/50" />}
            </button>
            
            {openIndex === index && (
              <div className="px-8 pb-6 text-white/70 font-body">
                <p className="mb-4 text-lg text-white/90">{service.description}</p>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-sm italic">
                  {service.examples}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
