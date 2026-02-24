import { Hexagon, Triangle, Circle, Square, Star, Cloud, Box } from 'lucide-react';

export function LogoTicker() {
  // Placeholder logos - we can swap these for actual image tags later!
  const logos = [
    { icon: Hexagon, name: "HexaCorp" },
    { icon: Triangle, name: "Vertex" },
    { icon: Circle, name: "O-Ring" },
    { icon: Square, name: "BlockHQ" },
    { icon: Star, name: "Nova" },
    { icon: Cloud, name: "SkyNet" },
    { icon: Box, name: "Cubeify" },
  ];

  return (
    <section className="py-20 bg-forest-dark relative overflow-hidden flex flex-col items-center">
      <p className="text-white/40 font-body text-sm uppercase tracking-widest mb-10">
        Trusted by visionary brands
      </p>
      
      {/* The Magic Mask: Fades the left and right edges */}
      <div 
        className="w-full max-w-7xl overflow-hidden relative"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused] cursor-default">
          {/* We map the logos 3 times in a row so it scrolls infinitely without empty spaces */}
          {[...logos, ...logos, ...logos].map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div key={index} className="flex items-center gap-3 px-12 text-white/40 hover:text-white transition-colors duration-300">
                <Icon className="w-8 h-8" />
                <span className="font-sans font-bold text-2xl tracking-tighter">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Keyframes so we don't have to touch your tailwind.config file */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-ticker {
          animation: ticker 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
