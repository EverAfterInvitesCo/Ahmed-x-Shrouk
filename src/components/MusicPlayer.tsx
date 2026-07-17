import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-[100]">
      {/* Updated the src to point to Royal.mp3 */}
      <audio ref={audioRef} loop autoPlay muted>
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
};
