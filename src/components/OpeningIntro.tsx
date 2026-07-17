import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OpeningIntroProps {
  onComplete: () => void;
}

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete }) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!hasInteracted) return;

    // Hard fallback timeout - if video fails to notify completion or gets stuck
    const safetyTimeout = setTimeout(() => {
      handleTransition();
    }, 12000); // Envelope.mp4 is short, ~5-8 seconds max

    return () => {
      clearTimeout(safetyTimeout);
    };
  }, [hasInteracted]);

  const handleStartPlayback = () => {
    setHasInteracted(true);
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Video playback was prevented or failed:', err);
          handleTransition();
        });
    } else {
      handleTransition();
    }
  };

  const handleEnded = () => {
    handleTransition();
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.currentTime >= 3.0) {
      handleTransition();
    }
  };

  const handleTransition = () => {
    if (isEnding) return;
    setIsEnding(true);
    onComplete();
  };

  return (
    <motion.div
      id="opening-experience"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0d] overflow-hidden cursor-pointer"
      onClick={hasInteracted ? handleTransition : undefined}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      {/* Main Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain pointer-events-none select-none"
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onError={handleTransition} // Fail gracefully to main site if file fails
      >
        <source src="Envelope.mp4" type="video/mp4" />
        <source src="assets/Envelope.mp4" type="video/mp4" />
      </video>

      {/* Luxury Tap to Open Overlay */}
      {!hasInteracted && (
        <div
          id="tap-to-open-overlay"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[2px] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering outer skip during start click
            handleStartPlayback();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center space-y-6 text-center px-6"
          >
            {/* Elegant Monogram / Seal */}
            <div className="relative flex items-center justify-center w-32 h-32 md:w-36 md:h-36 rounded-full border border-gold bg-[#0d0d0d]/85 backdrop-blur-md shadow-2xl animate-glow">
              <div className="absolute inset-2 rounded-full border border-dashed border-gold/30"></div>
              <div className="absolute inset-0 rounded-full border border-gold/10 animate-[spin_40s_linear_infinite]"></div>

              <span className="font-cinzel text-3xl md:text-4xl font-medium tracking-widest text-gold flex items-center select-none">
                A
                <span className="font-decorative text-gold-light text-2xl md:text-3xl mx-1">&amp;</span>
                S
              </span>
            </div>

            <div className="space-y-2">
              <p className="font-cinzel text-xs tracking-[0.4em] text-gold-light opacity-95 uppercase">
                Ahmed &amp; Shrouq
              </p>
              <p className="font-cormorant text-xl md:text-2xl text-white italic tracking-wider font-light">
                You are cordially invited
              </p>
            </div>

            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="mt-4 px-7 py-3 rounded-full border border-gold bg-gold/10 text-gold font-cinzel text-xs tracking-widest uppercase hover:bg-gold/20 transition-all duration-300 cursor-pointer shadow-lg"
            >
              Tap to Open
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Subtle bypass key at the very bottom, in case anything gets stuck or they want to jump in */}
      {hasInteracted && !isEnding && (
        <motion.div
          className="absolute bottom-10 inset-x-0 flex justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <button
            id="btn-skip-intro"
            onClick={handleTransition}
            className="px-5 py-2 rounded-full border border-gold/30 text-gold-light bg-black/44 backdrop-blur-md hover:bg-gold/10 hover:border-gold transition-all duration-300 font-cinzel text-[10px] tracking-widest cursor-pointer"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
