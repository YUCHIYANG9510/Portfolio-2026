import React, { useEffect, useState } from 'react';

interface AnimatedContentProps {
  children: React.ReactNode;
  isTransitioning: boolean;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({ children, isTransitioning }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShow(false);
    } else {
      // Small delay for smoother transition
      const timer = setTimeout(() => setShow(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div
      className={[
        'transition-all duration-300',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
      ].join(' ')}
    >
      {children}
    </div>
  );
};
