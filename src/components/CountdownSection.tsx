import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoldCorner, GoldDivider } from './GoldOrnaments';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const CountdownSection: React.FC = () => {
  const TARGET_DATE = new Date('2026-07-27T19:00:00'); // July 27, 2026, 7:00 PM

  const calculateTimeLeft = (): TimeLeft => {
    const difference = TARGET_DATE.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const countdownUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown-section"
      className="relative min-h-[75vh] flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-champagne/40 border-b border-gold-light/20"
    >
      {/* Decorative Gold Corners */}
      <GoldCorner position="top-left" className="opacity-40" />
      <GoldCorner position="top-right" className="opacity-40" />
      <GoldCorner position="bottom-left" className="opacity-40" />
      <GoldCorner position="bottom-right" className="opacity-40" />

      {/* Decorative center leaf flourish */}
      <div className="absolute top-12 opacity-[0.03] select-none pointer-events-none">
        <svg className="w-96 h-96 text-gold" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0 C 65 30, 95 35, 95 50 C 95 65, 65 70, 50 100 C 35 70, 5 65, 5 50 C 5 35, 35 30, 50 0" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center w-full">
        <motion.span
          id="countdown-accent"
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 0.8, letterSpacing: '0.3em' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-cinzel text-xs text-gold-dark uppercase tracking-[0.3em] mb-3"
        >
          Join Us In Celebrating
        </motion.span>

        <motion.h2
          id="countdown-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-stone-900 tracking-wide"
        >
          Save the Date
        </motion.h2>

        <motion.p
          id="countdown-date"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-3 font-cormorant text-xl sm:text-2xl text-gold-dark italic tracking-wider font-light"
        >
          July 27, 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full flex justify-center"
        >
          <GoldDivider className="my-8" />
        </motion.div>

        {/* Countdown Grid */}
        <div id="countdown-grid" className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-4 w-full max-w-3xl">
          {countdownUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="relative group p-6 md:p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-gold-light/45 shadow-[0_10px_30px_rgba(197,168,128,0.06)] flex flex-col items-center justify-center overflow-hidden animate-glow"
            >
              {/* Gold light corner indicators */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/40 group-hover:border-gold transition-colors duration-300"></div>

              {/* Counter Number */}
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={unit.value}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="font-cinzel text-4xl md:text-5xl font-semibold text-stone-900 tracking-widest"
                >
                  {formatNumber(unit.value)}
                </motion.span>
              </AnimatePresence>

              {/* Counter Label */}
              <span className="font-cormorant text-xs md:text-sm text-gold-dark uppercase tracking-widest font-medium mt-3">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {timeLeft.isCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 px-8 py-4 rounded-full border border-gold bg-white/80 backdrop-blur-sm"
          >
            <span className="font-cinzel text-md text-gold-dark tracking-widest">THE CELEBRATION HAS BEGUN</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};
