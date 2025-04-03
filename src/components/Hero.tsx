import { ArrowDownCircle } from 'lucide-react';
import RevealAnimation from './RevealAnimation';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <RevealAnimation>
              <div className="inline-block mb-2 px-3 py-1 bg-secondary rounded-full text-sm font-medium text-primary">
                Data Analyst
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-4">
                Abhishek Bijalwan
              </h1>
            </RevealAnimation>
            
            <RevealAnimation delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Transforming complex data into actionable insights through analysis, visualization, and data-driven storytelling.
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={300}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                  Download Resume
                </a>
                <button 
                  onClick={scrollToAbout}
                  className="flex items-center gap-2 text-primary border border-primary rounded-full px-8 py-3 text-base font-medium transition-all hover:bg-primary/5"
                >
                  Learn More
                </button>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <RevealAnimation direction="right">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-secondary to-primary/10 flex items-center justify-center overflow-hidden">
                  {/* Replace with actual profile image */}
                  <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-secondary flex items-center justify-center text-primary text-5xl font-bold">
                    AB
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 glass-panel px-4 py-3">
                  <div className="text-primary font-medium">Data Enthusiast</div>
                  <div className="text-sm text-muted-foreground">Python + SQL + Tableau</div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-primary/70 hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDownCircle className="h-10 w-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
