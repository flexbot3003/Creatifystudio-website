import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { IntroGrid } from './sections/IntroGrid';
import { Services } from './sections/Services';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Testimonials } from './sections/Testimonials';
import { LogoTicker } from './sections/LogoTicker';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';
import { About } from './sections/About';
import { ServicesPage } from './sections/ServicesPage';
import { Work } from './sections/Work';
import { ProjectDetail } from './sections/ProjectDetail';
import ClickSpark from './components/ui/ClickSpark';
import { siteConfig } from './config';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <main className="relative w-full overflow-x-hidden">
        <IntroGrid />
        <Services />
        <WhyChooseMe />
        <FeaturedProjects />
        <Testimonials />
        <LogoTicker />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  useLenis();

  useEffect(() => {
    if (siteConfig.siteTitle) document.title = siteConfig.siteTitle;
    if (siteConfig.language) document.documentElement.lang = siteConfig.language;
  }, []);

  return (
    <Router>
      {/* Global Spark Animation! */}
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        easing="ease-out"
        extraScale={1}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
