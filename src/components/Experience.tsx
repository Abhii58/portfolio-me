import { Briefcase, Calendar, MapPin } from 'lucide-react';
import RevealAnimation from './RevealAnimation';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics & Visualization Consultant",
      company: "Accenture Job Simulation (Forage)",
      location: "Virtual",
      period: "2025",
      description: [
        "Advised hypothetical social media client through full data analysis lifecycle - cleaning, modeling, and analyzing 7 datasets to identify content trends",
        "Developed strategic recommendations through PowerPoint deck and video presentation for client and stakeholder decision-making",
        "Created data visualizations that highlighted key performance indicators and content engagement metrics"
      ]
    },
    {
      title: "Data Visualization Specialist",
      company: "Tata Insights Simulation (Forage)",
      location: "Virtual",
      period: "2025",
      description: [
        "Designed interactive dashboards supporting executive-level business decisions through Tableau and Power BI",
        "Performed exploratory data analysis (EDA) to uncover trends and patterns in complex datasets",
        "Collaborated with cross-functional stakeholders to define business requirements and present data-driven solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation>
            <h2 className="section-title">Professional Experience</h2>
          </RevealAnimation>
          <RevealAnimation delay={100}>
            <p className="section-subtitle mx-auto">
              My journey through various roles has equipped me with the expertise to excel in data analytics and visualization.
            </p>
          </RevealAnimation>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-px"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2.5 z-10"></div>
                
                {/* Left content (appears on right on mobile) */}
                <RevealAnimation 
                  direction={index % 2 === 0 ? 'left' : 'right'} 
                  className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}
                >
                  <div>
                    <div className="flex items-center mb-1 md:mb-2 md:justify-end">
                      <Calendar className="h-4 w-4 mr-1 text-primary md:order-2 md:ml-1 md:mr-0" />
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex items-center mb-4 md:justify-end">
                      <Briefcase className="h-4 w-4 mr-1 text-primary md:order-2 md:ml-1 md:mr-0" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center mb-4 md:justify-end">
                      <MapPin className="h-4 w-4 mr-1 text-primary md:order-2 md:ml-1 md:mr-0" />
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                </RevealAnimation>
                
                {/* Right content (appears on left on mobile) */}
                <RevealAnimation 
                  direction={index % 2 === 0 ? 'right' : 'left'} 
                  className={`${index % 2 === 0 ? 'md:order-first' : ''}`}
                  delay={200}
                >
                  <div className="glass-panel p-6">
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
