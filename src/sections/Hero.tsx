import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-animate", 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center bg-forest-dark overflow-hidden px-6">
      <div className="relative z-10 text-center">
        <span className="hero-animate block text-white/60 font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6">
          Creative Design Studio
        </span>
        <h1 className="hero-animate text-6xl md:text-8xl lg:text-9xl font-sans font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
          CRAFTING<br />
          <span className="font-serif italic font-normal text-white/80">Digital</span> ICONS
        </h1>
        <div className="hero-animate flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            to="/contact" 
            className="px-10 py-4 bg-white text-forest-dark font-sans font-bold rounded-full hover:bg-white/90 transition-all active:scale-95"
          >
            Get in Touch
          </Link>
          <Link 
            to="/work" 
            className="px-10 py-4 border border-white/20 text-white font-sans font-bold rounded-full hover:bg-white/5 transition-all active:scale-95"
          >
            View Projects
          </Link>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      </div>
    </section>
  );
}
