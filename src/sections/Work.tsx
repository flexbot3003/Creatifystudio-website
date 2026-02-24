import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export function Work() {
  // Creating an array of 8 dummy projects for now
  const projects = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Project Name ${i + 1}`,
    category: i % 2 === 0 ? "Brand Identity" : "Web Design"
  }));

  return (
    <div className="min-h-screen bg-forest-dark text-white pt-24 pb-20 px-6">
      <nav className="absolute top-0 left-0 p-6 md:px-12 py-6 w-full flex justify-start z-50">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-body font-medium">Back to Home</span>
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-16 tracking-tighter uppercase mt-8">Selected Work</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link to={`/work/${project.id}`} key={project.id} className="group block">
              <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden relative mb-6">
                <span className="text-6xl font-bold text-white/10 group-hover:scale-110 transition-transform duration-500">
                  IMAGE {project.id}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-sans font-bold mb-2 group-hover:text-white/80 transition-colors">{project.title}</h3>
                  <p className="text-white/50 font-body text-sm uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
