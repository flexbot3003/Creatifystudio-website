import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { IntroGrid } from './sections/IntroGrid';
import { Services } from './sections/Services';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { Construction } from './sections/Construction';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Construction />} />
        <Route path="/services" element={<Construction />} />
        <Route path="/work" element={<Construction />} />
        <Route path="/contact" element={<Construction />} />
      </Routes>
    </Router>
  );
}
