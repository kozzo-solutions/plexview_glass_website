import { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  delay?: number;
  once?: boolean;
}

export function AnimatedText({ 
  text, 
  className = '', 
  tag = 'div', 
  delay = 0,
  once = true
}: AnimatedTextProps) {
  const elementRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('animate-reveal');
            }, delay);
            
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            element.classList.remove('animate-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [delay, once]);
  
  const TagName = tag;
  
  return (
    // @ts-ignore
    <TagName 
      ref={elementRef} 
      className={`opacity-0 ${className}`}
    >
      {text}
    </TagName>
  );
}
