import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams(); // Gets the project number from the URL
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images (Numbers 1-5 for now)
  const slides = ["1", "2", "3", "4", "5"];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-forest-dark text-white pt-24 pb-12 px-6">
      <nav className="absolute top-0 left-0 p-6 md:px-12 py-6 w-full flex justify-start z-50">
        <Link to="/work" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-body font-medium">Back to Work</span>
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto mt-8">
        {/* Project Header Overview */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-white/50 font-body uppercase tracking-widest text-sm mb-4">Project {id}</p>
          <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-6 tracking-tighter">Project Title {id}</h1>
          <p className="text-white/70 font-body text-lg md:text-xl max-w-3xl leading-relaxed">
            This is the overview for Project {id}. Here you will explain the problem the client faced, the strategy you used, and how Creatify solved it with brilliant design.
          </p>
        </div>

        {/* The Slideshow */}
        <div className="relative aspect-video bg-[#1a241f] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
          
          {/* Main Slide Content (Placeholder Number) */}
          <span className="text-9xl font-sans font-bold text-white/20 select-none transition-all duration-500 scale-110 group-hover:scale-100">
            {slides[currentSlide]}
          </span>

          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
          >
            <ChevronLeft className="w-6 h-6 ml-[-2px]" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
          >
            <ChevronRight className="w-6 h-6 mr-[-2px]" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
