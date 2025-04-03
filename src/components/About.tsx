import { GraduationCap, Award, Briefcase, Users } from 'lucide-react';
import RevealAnimation from './RevealAnimation';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation>
            <h2 className="section-title">About Me</h2>
          </RevealAnimation>
          <RevealAnimation delay={100}>
            <p className="section-subtitle mx-auto">
              I'm passionate about extracting meaningful insights from data and helping organizations make data-driven decisions.
            </p>
          </RevealAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <RevealAnimation direction="left">
            <div className="glass-panel p-8 h-full">
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-6">
                My Journey in Data
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a dedicated Data Analyst with a passion for transforming complex datasets into actionable intelligence. With expertise in Python, SQL, and data visualization tools, I specialize in developing insights that drive strategic decision-making.
                </p>
                <p>
                  My approach combines technical skills with business understanding, allowing me to bridge the gap between data and real-world applications. I enjoy tackling challenging problems and finding elegant solutions through data.
                </p>
                <p>
                  Beyond technical skills, I believe in the power of data storytelling to communicate insights effectively to stakeholders at all levels of an organization.
                </p>
              </div>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RevealAnimation delay={100}>
              <div className="glass-panel p-6 h-full">
                <GraduationCap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Masters in Computer Science (2022 - 2024) • Bachelors in Computer Science (2019 - 2022). 
                  </p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={200}>
              <div className="glass-panel p-6 h-full">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Certifications</h3>
                <p className="text-sm text-muted-foreground">
                  Certified in Python for Data Analysis, Tableau, and Advanced SQL.
                </p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={300}>
              <div className="glass-panel p-6 h-full">
                <Briefcase className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">
                Developed multiple web applications using React.js, Express.js, and MongoDB. Worked on data analytics, web scraping, and interactive dashboards using SQL, Power BI, and Tableau.
                 </p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <div className="glass-panel p-6 h-full">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Worked with cross-functional teams to deliver impactful data solutions.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
