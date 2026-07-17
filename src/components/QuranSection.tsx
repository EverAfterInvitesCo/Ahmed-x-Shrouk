import React from 'react';
import { motion } from 'motion/react';
import { GoldDivider, GoldCrest } from './GoldOrnaments';

export const QuranSection: React.FC = () => {
  return (
    <section
      id="quran-section"
      className="relative min-h-[60vh] flex flex-col items-center justify-center py-20 px-6 md:px-12 bg-ivory text-stone-800 border-b border-gold-light/20"
    >
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Top Flourish */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <GoldCrest />
        </motion.div>

        {/* The Arabic Quranic Verse */}
        <motion.p
          id="quran-arabic"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 leading-loose sm:leading-relaxed md:leading-loose text-center px-4 font-normal tracking-wide"
          style={{ direction: 'rtl', fontFamily: '"Amiri", "Traditional Arabic", "Times New Roman", serif' }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </motion.p>

        {/* Decorative Gold Divider between Quran text and citation */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <GoldDivider className="my-8" />
        </motion.div>

        {/* The Citation */}
        <motion.p
          id="quran-citation"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-dark font-medium"
        >
          الروم - ٢١
        </motion.p>

        {/* English Translation (Optional and elegant, can be added for completeness in small font) */}
        <motion.p
          id="quran-translation"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 font-cormorant text-sm md:text-base text-stone-600 italic max-w-2xl leading-relaxed"
        >
          &ldquo;And among His Signs is this, that He created for you mates from among yourselves, that you may dwell in tranquillity with them, and He has put love and mercy between your hearts...&rdquo;
        </motion.p>
      </div>
    </section>
  );
};
