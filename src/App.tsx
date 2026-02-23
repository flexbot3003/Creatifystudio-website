import { useEffect, useState } from 'react';
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

function App() {
  // Initialize smooth scroll
  useLenis();

  // Keep track of what page we are looking at
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    if (siteConfig.siteTitle) document.title = siteConfig.siteTitle;
    if (siteConfig.language) document.documentElement.lang = siteConfig.language;

    // Listen for when someone clicks a navigation link
    const onHashChange = () => {
      setCurrentPath(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top when changing pages
    };
    
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // If the URL has these specific links, show the Coming Soon page
  const constructionPages = ['#about', '#services', '#work', '#contact'];
  if (constructionPages.includes(currentPath)) {
    return <Construction />;
  }

  // Otherwise, show the normal home page
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <IntroGrid />
      <Services />
      <WhyChooseMe />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
