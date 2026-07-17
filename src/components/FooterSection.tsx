import React from 'react';
import { motion } from 'motion/react';
import { GoldDivider } from './GoldOrnaments';

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="footer-section"
      className="relative py-10 px-6 bg-champagne/30 text-stone-600 border-t border-gold-light/25 select-none"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Elegant sentiment before footer details */}
        <motion.p
          id="footer-sentiment"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-playfair text-2xl md:text-3xl text-stone-850 font-light tracking-wide mb-6 italic"
        >
          The night won&rsquo;t be complete without you
        </motion.p>

        {/* Subtle separator gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 0.7, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full flex justify-center mb-6"
        >
          <GoldDivider />
        </motion.div>

        {/* Initials Accent */}
        <motion.h2
          id="footer-initials"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-cinzel text-2xl md:text-3xl text-gold-dark font-medium tracking-[0.4em] mb-2"
        >
          A<span className="font-decorative text-gold text-xl md:text-2xl mx-1 font-normal lowercase tracking-normal">x</span>S
        </motion.h2>

        {/* Brand Credit */}
        <motion.p
          id="footer-credit"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.65, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-cinzel text-[8px] md:text-[9px] tracking-[0.35em] text-stone-500 font-medium uppercase"
        >
          Made with love by EverAfterInvites
        </motion.p>

        {/* Small Year footer */}
        <motion.span
          id="footer-year"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-[8px] text-stone-400 mt-4 tracking-widest block"
        >
          &copy; {new Date().getFullYear()} Ahmed &amp; Shrouq. All Rights Reserved.
        </motion.span>
      </div>
    </footer>
  );
};
