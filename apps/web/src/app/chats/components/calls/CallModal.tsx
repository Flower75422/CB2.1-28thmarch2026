"use client";

import { Mic, MicOff, Video, VideoOff, PhoneOff, Maximize2 } from "lucide-react";
import { useState } from "react";

interface CallModalProps {
  isOpen: boolean;
  type: "audio" | "video";
  onEndCall: () => void;
}

export default function CallModal({ isOpen, type, onEndCall }: CallModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Call Card */}
      <div className="bg-[#1c1917] w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl border border-white/10 relative flex flex-col aspect-[9/16] max-h-[80vh]">
        
        {/* Video Background (Simulated) */}
        <div className="flex-1 bg-stone-900 relative flex flex-col items-center justify-center">
          
          {type === "video" && !isVideoOff ? (
             <div className="absolute inset-0 bg-stone-800 flex items-center justify-center text-white/20 font-bold text-xl">
               [Video Feed Here]
             </div>
          ) : (
            // Audio / No Video UI
            <div className="flex flex-col items-center gap-6 z-10">
              <div className="h-32 w-32 rounded-full bg-[#F5F5F4] border-4 border-white/10 shadow-xl animate-pulse" />
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Aisha Khan</h2>
                <p className="text-stone-400 text-sm font-medium animate-pulse">00:42 • Connected</p>
              </div>
            </div>
          )}

          {/* Controls Overlay */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 z-20">
            
            {/* Mute */}
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`p-4 rounded-full transition ${isMuted ? "bg-white text-[#1c1917]" : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"}`}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>

            {/* End Call */}
            <button 
              onClick={onEndCall}
              className="p-4 rounded-full bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20 transform hover:scale-110 transition"
            >
              <PhoneOff size={28} />
            </button>

            {/* Video Toggle */}
            <button 
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`p-4 rounded-full transition ${isVideoOff ? "bg-white text-[#1c1917]" : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"}`}
            >
              {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}