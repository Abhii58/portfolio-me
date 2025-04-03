import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Abhishek Bijalwan | Data Analyst";
    
    // Lazy load images (if any)
    const lazyImages = document.querySelectorAll('[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            const src = image.getAttribute('data-src');
            if (src) {
              image.src = src;
              image.removeAttribute('data-src');
            }
            imageObserver.unobserve(image);
          }
        });
      });
      
      lazyImages.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      lazyImages.forEach((img) => {
        const image = img as HTMLImageElement;
        const src = image.getAttribute('data-src');
        if (src) {
          image.src = src;
          image.removeAttribute('data-src');
        }
      });
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
