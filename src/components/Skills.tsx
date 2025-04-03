import { Code, Database, LineChart, Brain } from 'lucide-react';
import SkillsCard from './SkillsCard';
import RevealAnimation from './RevealAnimation';

const Skills = () => {
  const dataAnalysisSkills = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 95 },
    { name: 'Excel', level: 90, displayType: 'speedometer' as const },
    { name: 'Statistical Modeling', level: 85, displayType: 'speedometer' as const },
  ];

  const visualizationSkills = [
    { name: 'Tableau', level: 90 },
    { name: 'Power BI', level: 85 },
    { name: 'Data Storytelling', level: 92 },
    { name: 'Matplotlib/Seaborn', level: 88 },
  ];

  const databaseSkills = [
    { name: 'MySQL', level: 92 },
    { name: 'PostgreSQL', level: 88 },
    { name: 'Data Warehousing', level: 80 },
    { name: 'ETL Pipelines', level: 85 },
  ];

  const mlSkills = [
    { name: 'Pandas & NumPy', level: 90 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'Regression Models', level: 82 },
    { name: 'Time Series', level: 78 },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation>
            <h2 className="section-title">My Skills</h2>
          </RevealAnimation>
          <RevealAnimation delay={100}>
            <p className="section-subtitle mx-auto">
              My expertise spans across multiple domains of data analysis, enabling me to deliver comprehensive solutions.
            </p>
          </RevealAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillsCard 
            title="Data Analysis"
            skills={dataAnalysisSkills}
            icon={<Code className="h-6 w-6 text-primary" />}
            delay={0}
          />
          
          <SkillsCard 
            title="Data Visualization"
            skills={visualizationSkills}
            icon={<LineChart className="h-6 w-6 text-primary" />}
            delay={100}
          />
          
          <SkillsCard 
            title="Database Management"
            skills={databaseSkills}
            icon={<Database className="h-6 w-6 text-primary" />}
            delay={200}
          />
          
          <SkillsCard 
            title="Machine Learning"
            skills={mlSkills}
            icon={<Brain className="h-6 w-6 text-primary" />}
            delay={300}
          />
        </div>
        
        <RevealAnimation delay={400}>
          <div className="mt-16 glass-panel p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Problem-Solving', 
                'Communication', 
                'Attention to Detail', 
                'Adaptability', 
                'Strategic Thinking',
                'Data Analysis',
                'Data Mining',
                'Python',
                'SQL',
                'Excel',
                'Statistical Modeling',
                'Tableau',
                'Sas',
                'Data Storytelling',
                'Project Management',
                'Dashboard Design',
                'Data Cleaning'
              ].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Skills;
