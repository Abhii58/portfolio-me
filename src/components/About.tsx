import { GraduationCap, Award, Briefcase, Users } from 'lucide-react';
import RevealAnimation from './RevealAnimation';

const About = () => {
  return (
import { useState } from 'react';
import { Award, Briefcase, ChevronLeft, ChevronRight, GraduationCap, Users } from 'lucide-react';
import RevealAnimation from './RevealAnimation';

const certifications = [
  {
    title: 'Accenture Data Analytics and Visualization Job Simulation',
    issuer: 'Accenture',
    year: '2024',
    description: 'Completed a practical job simulation focused on analytics, visualization, and communicating business insights.',
  },
  {
    title: 'Add Your Next Certificate',
    issuer: 'Certificate Provider',
    year: 'Year',
    description: 'Replace this placeholder with another certificate, course, or achievement you want to showcase.',
  },
];

const About = () => {
  const [activeCertificate, setActiveCertificate] = useState(0);

  const showPreviousCertificate = () => {
    setActiveCertificate((current) =>
      current === 0 ? certifications.length - 1 : current - 1
    );
  };

  const showNextCertificate = () => {
    setActiveCertificate((current) =>
      current === certifications.length - 1 ? 0 : current + 1
    );
  };

  const certificate = certifications[activeCertificate];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={200}>
              <div className="glass-panel p-6 h-full">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Certifications</h3>
                <p className="text-sm text-muted-foreground">
                 Accenture Data Analytics and Visualization Job Simulation
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <div className="glass-panel p-6 h-full overflow-hidden">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <Award className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold">Certifications</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPreviousCertificate}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label="Show previous certificate"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextCertificate}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label="Show next certificate"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="relative min-h-[156px]">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-primary/10 bg-primary/5" />
                  <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-lg border border-primary/15 bg-background/50" />
                  <article
                    key={certificate.title}
                    className="relative min-h-[156px] rounded-lg border border-primary/20 bg-background/70 p-4 shadow-sm transition-all duration-300 animate-fade-in"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {certificate.issuer}
                      </span>
                      <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        {certificate.year}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold leading-snug text-foreground">
                      {certificate.title}
                    </h4>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {certificate.description}
                    </p>
                  </article>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {certifications.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveCertificate(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeCertificate === index
                          ? 'w-6 bg-primary'
                          : 'w-2 bg-primary/25 hover:bg-primary/45'
                      }`}
                      aria-label={`Show certificate ${index + 1}`}
                      aria-current={activeCertificate === index}
                    />
                  ))}
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={300}>
              <div className="glass-panel p-6 h-full">