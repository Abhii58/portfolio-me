import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar style based on scroll position
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="font-display text-lg md:text-xl font-bold text-primary" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Abhishek Bijalwan
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-red">
            <a 
              href="#home"
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
            <a 
              href="#about"
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
            <a 
              href="#skills"
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
            >
              Skills
            </a>
            <a 
              href="#experience"
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
            >
              Experience
            </a>
            <a 
              href="#projects"
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projects
            </a>
            <a 
              href="#contact"
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </div>
          
          <div className="hidden md:block">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <a 
            href="#home"
            className={`text-2xl font-medium ${activeSection === 'home' ? 'text-primary' : 'text-foreground'}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#about"
            className={`text-2xl font-medium ${activeSection === 'about' ? 'text-primary' : 'text-foreground'}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#skills"
            className={`text-2xl font-medium ${activeSection === 'skills' ? 'text-primary' : 'text-foreground'}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            Skills
          </a>
          <a 
            href="#experience"
            className={`text-2xl font-medium ${activeSection === 'experience' ? 'text-primary' : 'text-foreground'}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
          >
            Experience
          </a>
          <a 
            href="#projects"
            className={`text-2xl font-medium ${activeSection === 'projects' ? 'text-primary' : 'text-foreground'}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </a>
          <a 
            href="#contact"
            className={`text-2xl font-medium ${activeSection === 'contact' ? 'text-primary' : 'text-foreground'}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
          <div className="pt-6">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
