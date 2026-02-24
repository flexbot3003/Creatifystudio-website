import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { featuredProjectsConfig } from '../config';
import TiltedCard from '../components/ui/TiltedCard';
import ClickSpark from '../components/ui/ClickSpark';

export function Work() {
  const projects = featuredProjectsConfig.projects;

  return (
    <div className="min-h-screen bg-forest-dark text-white pt-24 pb-20 px-6 relative">
      
      {/* Background Click Spark Effect for this page */}
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        easing="ease-out"
        extraScale={1}
      />

      <nav className="absolute top-0 left-0 p-6 md:px-12 py-6 w-full flex justify-start z-50">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group relative z-10">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-body font-medium">Back to Home</span>
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto relative z-10 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-16 tracking-tighter uppercase mt-8">Selected Work</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pointer-events-auto">
          {projects.map((project) => (
            <div key={project.id} className="group block mb-6">
              
              <Link to={`/work/${project.id}`}>
                <div className="flex justify-center mb-6">
                  <TiltedCard
                    imageSrc={project.image || "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight="400px"
                    containerWidth="100%"
                    imageHeight="400px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.02}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-2xl font-bold font-sans tracking-tight mb-2">
                          {project.title}
                        </p>
                        <span className="px-4 py-2 border border-white/50 rounded-full text-sm font-body backdrop-blur-sm">
                          View Case Study
                        </span>
                      </div>
                    }
                  />
                </div>
              </Link>

              <div className="flex justify-between items-start mt-4 px-2">
                <div>
                  <h3 className="text-2xl font-sans font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-white/50 font-body text-sm uppercase tracking-widest">{project.category}</p>
                </div>
                <Link to={`/work/${project.id}`}>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
