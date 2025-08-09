import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, direction = 'up', delay = 0, duration = 0.5, distance = '50px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1, 
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance})`;
      case 'down':
        return `translateY(-${distance})`;
      case 'left':
        return `translateX(${distance})`;
      case 'right':
        return `translateX(-${distance})`;
      default:
        return `translateY(${distance})`;
    }
  };

  const style = {
    transition: `all ${duration}s ease-out ${delay}s`,
    transform: isVisible ? 'none' : getTransform(),
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div ref={domRef} style={style} className="scroll-reveal">
      {children}
    </div>
  );
};

export default ScrollReveal;