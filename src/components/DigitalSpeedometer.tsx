import { useEffect, useState } from 'react';

interface DigitalSpeedometerProps {
  value: number;
  label: string;
  delay?: number;
}

const DigitalSpeedometer: React.FC<DigitalSpeedometerProps> = ({ 
  value,
  label, 
  delay = 0 
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barCount = 5; // Number of signal bars
  
  // Calculate which bars should be active based on percentage
  const getActiveBars = () => {
    const activeBarsCount = Math.ceil((value / 100) * barCount);
    return Array(barCount).fill(0).map((_, i) => i < activeBarsCount);
  };

  const activeBars = getActiveBars();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`speedometer-${label.replace(/\s+/g, '-')}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [label]);

  // Animate the value counter when visible
  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 1500; // ms
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        setCurrentValue(Math.min(Math.round(increment * currentStep), value));
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, animationDuration / steps);
      
      return () => clearInterval(interval);
    }, delay);
  }, [isVisible, value, delay]);

  return (
    <div 
      id={`speedometer-${label.replace(/\s+/g, '-')}`}
      className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105"
    >
      {/* Digital speedometer display */}
      <div className="relative w-24 h-16">
        {/* Background panel */}
        <div 
          className="absolute inset-0 bg-black/90 border border-white/20 rounded-md overflow-hidden backdrop-blur-sm shadow-lg"
          style={{
            boxShadow: '0 0 10px rgba(30, 215, 96, 0.3), inset 0 0 5px rgba(30, 215, 96, 0.2)'
          }}
        >
          {/* Diagonal lines texture overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 5px)',
              backgroundSize: '7px 7px'
            }}
          />
        </div>
        
        {/* Percentage counter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-2xl font-bold font-mono"
            style={{ 
              color: '#1ED760', 
              textShadow: '0 0 5px rgba(30, 215, 96, 0.7)'
            }}
          >
            {currentValue}%
          </span>
        </div>
      </div>
      
      {/* Signal bars */}
      <div className="flex items-end gap-1 h-6">
        {activeBars.map((isActive, index) => (
          <div
            key={index}
            className={`w-2.5 rounded-sm transition-all duration-500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              height: `${(index + 1) * 5 + 5}px`,
              backgroundColor: isActive ? '#1ED760' : 'rgba(255, 255, 255, 0.2)',
              boxShadow: isActive ? '0 0 5px rgba(30, 215, 96, 0.7)' : 'none',
              transitionDelay: `${delay + (index * 100)}ms`
            }}
          />
        ))}
      </div>
      
      {/* Skill name */}
      <div className="mt-1">
        <span className="font-medium text-black">{label}</span>
      </div>
    </div>
  );
};

export default DigitalSpeedometer;
