import { useEffect, useRef, useState } from 'react';
import CircularProgress from './CircularProgress.tsx';
import DigitalSpeedometer from './DigitalSpeedometer.tsx';

interface SkillsCardProps {
  title: string;
  skills: Array<{
    name: string;
    level: number; // 0-100
    displayType?: 'circle' | 'speedometer'; // New prop to specify display type
  }>;
  icon: React.ReactNode;
  delay?: number;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills, icon, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`skills-card relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl transition-all duration-700 hover:shadow-2xl ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
        }`}
      style={{
        transitionDelay: `${delay}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
      }}
    >
      {/* Animated background glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20 transition-opacity duration-500 hover:opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 80%)',
          filter: 'blur(20px)'
        }}
      />

      <div className="p-6 relative z-10">
        <div className="flex items-center mb-8 gap-4">
          <div className="bg-primary/10 p-3 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-black">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index}>
              {skill.displayType === 'speedometer' ? (
                <DigitalSpeedometer
                  value={skill.level}
                  label={skill.name}
                  delay={delay + 100 + index * 100}
                />
              ) : (
                <div
                  className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative">
                    <CircularProgress
                      value={skill.level}
                      size={95}
                      strokeWidth={7}
                      delay={delay + 100 + index * 100}
                    />

                    {/* Highlight effect when hovered */}
                    {hoveredIndex === index && (
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none animate-pulse-slow"
                        style={{
                          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                        }}
                      />
                    )}
                  </div>

                  <div className="mt-3 flex flex-col items-center">
                    <span
                      className={`font-medium transition-all duration-300 text-black ${hoveredIndex === index ? 'scale-105' : ''
                        }`}
                    >
                      {skill.name}
                    </span>

                    <div
                      className={`h-0.5 w-0 bg-black/50 mt-1 rounded-full transition-all duration-500 ${hoveredIndex === index ? 'w-full' : ''
                        }`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

