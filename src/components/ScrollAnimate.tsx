import React, { useEffect, useRef } from 'react';

interface ScrollAnimateProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-bottom' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in';
  delay?: number;
  className?: string;
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add('active');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    'fade-up': 'reveal-fade-up',
    'fade-bottom': 'reveal-fade-bottom',
    'fade-left': 'reveal-fade-left',
    'fade-right': 'reveal-fade-right',
    'fade-in': 'reveal-fade-in',
    'zoom-in': 'reveal-zoom-in',
  }[animation];

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};
