import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = forwardRef((_, ref) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    playMusic: () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(e => console.log("Playback failed", e));
        setIsMuted(false);
      }
    }
  }));

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-[100]">
      <audio ref={audioRef} loop>
        <source src="/Royal.mp3" type="audio/mpeg" />
      </audio>
      
      <button 
        onClick={toggleMute}
        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-gold-light hover:bg-white/20 transition-all border border-gold-light/20"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </div>
  );
});
