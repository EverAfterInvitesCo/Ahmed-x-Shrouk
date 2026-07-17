import React from 'react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Loop Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="Turn.mp4" type="video/mp4" />
          <source src="assets/Turn.mp4" type="video/mp4" />
          <source src="assets/Twirl.mp4" type="video/mp4" />
          <source src="Twirl.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Luxury Overlay (approx 30-40% for text readability) */}
        <div className="absolute inset-0 bg-black/35 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
      </div>

      {/* Centered Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl">
        {/* Tiny top accent flourish */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          className="mb-6"
        >
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold-light opacity-90">THE WEDDING OF</span>
        </motion.div>

        {/* Groom & Bride Names */}
        <motion.h1
          id="hero-names"
          initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.8,
            ease: [0.25, 1, 0.5, 1], // Custom elegant bezier
            delay: 0.5
          }}
          className="font-cinzel text-5xl sm:text-6xl md:text-8xl text-white font-medium tracking-wider drop-shadow-md"
        >
          Ahmed <span className="font-decorative text-gold text-4xl sm:text-5xl md:text-7xl mx-2 md:mx-4 font-normal lowercase tracking-normal">&amp;</span> Shrouk
        </motion.h1>

        {/* Announcement Text */}
        <motion.p
          id="hero-tagline"
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.5,
            ease: [0.25, 1, 0.5, 1],
            delay: 1.1
          }}
          className="mt-6 font-cormorant text-xl sm:text-2xl md:text-3xl text-gold-light italic tracking-wide font-light drop-shadow-sm"
        >
          are getting married
        </motion.p>
      </div>

      {/* Elegant Scroll Indicator at Bottom */}
      <motion.div
        id="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.4, 1, 0], y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 2, delay: 2.2 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
        }}
        className="absolute bottom-10 flex flex-col items-center justify-center space-y-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('quran-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-cinzel text-[9px] tracking-[0.3em] text-gold-light opacity-75">SCROLL TO ENTER</span>
        <svg className="w-5 h-5 text-gold-light opacity-75" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
};
