import React, { useEffect, useRef } from 'react';

const ParallaxComponent: React.FC = () => {
  const slowRef = useRef<HTMLDivElement>(null);
  const fastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (slowRef.current) {
        slowRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }

      if (fastRef.current) {
        fastRef.current.style.transform = `translateY(${scrollY * 0.6}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-row items-center justify-center space-x-8">
      {/* Fixed Element */}
      <div className="w-32 h-32 bg-blue-500 text-white flex items-center justify-center sticky top-20">
        Fixed Box
      </div>
      {/* Slow Translate Element */}
      <div
        ref={slowRef}
        className="w-32 h-32 bg-green-500 text-white flex items-center justify-center transition-transform duration-300 ease-out"
      >
        Slow Translate
      </div>
      {/* Fast Translate Element */}
      <div
        ref={fastRef}
        className="w-32 h-32 bg-red-500 text-white flex items-center justify-center transition-transform duration-300 ease-out"
      >
        Fast Translate
      </div>
    </div>
  );
};

export default ParallaxComponent;
