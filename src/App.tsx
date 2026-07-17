/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { OpeningIntro } from './components/OpeningIntro';
import { HeroSection } from './components/HeroSection';
import { QuranSection } from './components/QuranSection';
import { CountdownSection } from './components/CountdownSection';
import { VenueSection } from './components/VenueSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="relative min-h-screen bg-ivory text-stone-800 selection:bg-gold-light selection:text-gold-dark">
      {/* 
        Main Website: 
        Pre-mounted underneath with low opacity, unlocking overflow and fading in 
        beautifully once the envelope opening animation concludes.
      */}
      <div 
        className={`w-full transition-opacity duration-[1200ms] ease-out ${
          introFinished ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'
        }`}
      >
        <HeroSection />
        <QuranSection />
        <CountdownSection />
        <VenueSection />
        <FooterSection />
      </div>

      {/* Absolute-positioned fullscreen video intro with exit fade */}
      <AnimatePresence>
        {!introFinished && (
          <OpeningIntro onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>
    </div>
  );
}

