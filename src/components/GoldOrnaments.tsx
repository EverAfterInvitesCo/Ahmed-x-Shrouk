import React from 'react';

// Delicate Gold Divider with an elegant ornamental center
export const GoldDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center my-6 space-x-4 ${className}`}>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
      <svg className="w-6 h-6 text-gold opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 2L15 9H9L12 2Z" fill="currentColor" />
        <path d="M12 22L9 15H15L12 22Z" fill="currentColor" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" fill="none" />
        <path d="M4 12H9" />
        <path d="M15 12H20" />
      </svg>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-gold to-transparent opacity-60"></div>
    </div>
  );
};

// Royal Crest Ornament for headings
export const GoldCrest: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <svg className="w-12 h-12 text-gold opacity-75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 C 45 35, 15 40, 15 50 C 15 65, 35 70, 50 90 C 65 70, 85 65, 85 50 C 85 40, 55 35, 50 10 Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
        <path d="M50 30 L50 40 M50 60 L50 70 M30 50 L40 50 M60 50 L70 50" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

// Elegant Floral Corner Flourish
export const GoldCorner: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({ position, className = '' }) => {
  const rotationClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  };

  return (
    <div className={`absolute p-4 md:p-8 pointer-events-none select-none text-gold/30 ${rotationClasses[position]} ${className}`}>
      <svg className="w-16 h-16 md:w-32 md:h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        {/* Intricate traditional corner flourish scroll */}
        <path d="M10 10 C 30 10, 45 25, 45 45 C 45 55, 35 65, 25 65 C 15 65, 10 55, 10 45" />
        <path d="M10 10 C 10 30, 25 45, 45 45 C 55 45, 65 35, 65 25 C 65 15, 55 10, 45 10" />
        <path d="M15 15 L35 35 M15 15 L15 35 M15 15 L35 15" strokeWidth="1.5" />
        <circle cx="45" cy="45" r="3" fill="currentColor" />
        <path d="M5 5 H 95 M5 5 V 95" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>
    </div>
  );
};

// Luxury Initials Monogram (AxS) with decorative gold border
export const GoldMonogram: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full border border-gold/40 bg-ivory/30 backdrop-blur-sm shadow-lg animate-glow">
        <div className="absolute inset-1.5 rounded-full border border-dashed border-gold/20"></div>
        
        {/* Monogram Content */}
        <span className="font-cinzel text-3xl md:text-4xl font-medium tracking-widest text-gold-dark flex items-center">
          A
          <span className="font-decorative text-gold text-2xl md:text-3xl mx-1 select-none">&amp;</span>
          S
        </span>
      </div>
    </div>
  );
};
