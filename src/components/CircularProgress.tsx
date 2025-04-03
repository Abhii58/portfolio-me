import { useEffect, useRef, useState } from 'react';

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  className?: string;
  delay?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 100,
  strokeWidth = 8,
  showLabel = true,
  className = '',
  delay = 0
}) => {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

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

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, value]);

  // Calculate the stroke offset for the progress
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Dynamic color based on progress
  const getProgressColor = () => {
    if (progress < 30) return '#ea384c'; // Red for beginner
    if (progress < 60) return '#f97316'; // Orange for intermediate
    if (progress < 80) return '#0EA5E9'; // Blue for advanced
    return '#22c55e'; // Green for expert
  };
  
  const progressColor = getProgressColor();

  return (
    <div 
      ref={componentRef}
      className={`relative flex items-center justify-center group ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow effect */}
      <div 
        className="absolute rounded-full transition-opacity duration-300"
        style={{ 
          width: size, 
          height: size,
          background: `radial-gradient(circle, ${progressColor}20 0%, transparent 70%)`,
          opacity: isHovered ? 0.8 : 0.5,
          transform: 'scale(1.2)',
          filter: `blur(${strokeWidth}px)`,
        }}
      />
      
      {/* Ripple effect on hover */}
      <div 
        className="absolute rounded-full transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-20"
        style={{ 
          width: size, 
          height: size,
          border: `1px solid ${progressColor}`,
          animation: isHovered ? 'ripple 1.5s ease-out infinite' : 'none',
        }}
      />
      
      <svg width={size} height={size} className="relative z-10 animate-float">
        {/* Background circle - darker track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-secondary/30"
        />
        
        {/* Progress circle with glow effect */}
        <circle
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? strokeDashoffset : circumference}
          style={{ 
            transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1), stroke 1s ease',
            filter: `drop-shadow(0 0 ${strokeWidth/2}px ${progressColor})`,
          }}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            <span 
              className="text-lg font-bold transition-all duration-300"
              style={{ 
                color: progressColor,
                textShadow: isHovered ? `0 0 8px ${progressColor}80` : 'none',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              {Math.round(progress)}%
            </span>
            <div 
              className="h-0.5 w-8 mt-1 rounded-full transition-all duration-300"
              style={{ 
                background: progressColor,
                opacity: isHovered ? 1 : 0.7,
                transform: isHovered ? 'scaleX(1.2)' : 'scaleX(1)',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
