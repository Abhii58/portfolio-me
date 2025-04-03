import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const RevealAnimation: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (ref.current) observer.unobserve(ref.current);
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

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (direction) {
      case 'up':
        return 'animate-fade-in';
      case 'right':
        return 'animate-fade-in-right';
      case 'left':
        return 'animate-fade-in-left';
      case 'none':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in';
    }
  };

  const getTransform = () => {
    if (isVisible) return '';
    
    switch (direction) {
      case 'up':
        return 'translate-y-8';
      case 'down':
        return 'translate-y-(-8)';
      case 'left':
        return 'translate-x-8';
      case 'right':
        return 'translate-x-(-8)';
      default:
        return '';
    }
  };

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${getAnimationClass()} ${getTransform()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealAnimation;
