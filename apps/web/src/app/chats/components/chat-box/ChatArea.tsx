"use client";

import { Phone, Video, MoreVertical, Paperclip, Send, Smile } from "lucide-react";

interface ChatAreaProps {
  onStartCall: (type: "audio" | "video") => void;
}

export default function ChatArea({ onStartCall }: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col bg-white h-full relative">
      
      {/* 1. Header - Slim */}
      <div className="px-4 py-3 border-b border-[#F5F5F4] flex justify-between items-center bg-white/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#F5F5F4] border border-[#E7E5E4]" />
          <div>
            <h2 className="text-sm font-bold text-[#1c1917]">Aisha Khan</h2>
            <p className="text-[10px] text-green-600 font-medium flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button onClick={() => onStartCall("audio")} className="p-2 text-[#57534e] hover:bg-[#F5F5F4] rounded-lg transition">
            <Phone size={16} />
          </button>
          <button onClick={() => onStartCall("video")} className="p-2 text-[#57534e] hover:bg-[#F5F5F4] rounded-lg transition">
            <Video size={16} />
          </button>
          <button className="p-2 text-[#57534e] hover:bg-[#F5F5F4] rounded-lg transition">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      {/* 2. Messages List - Compact Spacing */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAFAFA]">
        
        {/* Received */}
        <div className="flex gap-2">
          <div className="h-7 w-7 rounded-full bg-[#F5F5F4] flex-shrink-0 mt-auto border border-white shadow-sm" />
          <div className="max-w-[75%] space-y-0.5">
            <div className="bg-white border border-[#E7E5E4] px-3 py-2 rounded-xl rounded-bl-none text-xs text-[#57534e] shadow-sm leading-relaxed">
              Hey! Did you get a chance to look at the designs?
            </div>
            <span className="text-[9px] text-[#a8a29e] pl-1">10:30 AM</span>
          </div>
        </div>

        {/* Sent */}
        <div className="flex gap-2 flex-row-reverse">
          <div className="max-w-[75%] space-y-0.5">
            <div className="bg-[#1c1917] text-white px-3 py-2 rounded-xl rounded-br-none text-xs shadow-md leading-relaxed">
              Yes! They look amazing. Especially the color palette. 😍
            </div>
            <span className="text-[9px] text-[#a8a29e] text-right pr-1 block">10:32 AM</span>
          </div>
        </div>

        {/* Sent */}
        <div className="flex gap-2 flex-row-reverse">
           <div className="max-w-[75%] space-y-0.5">
            <div className="bg-[#1c1917] text-white px-3 py-2 rounded-xl rounded-br-none text-xs shadow-md leading-relaxed">
              I'm sending over the updated backend schema now.
            </div>
          </div>
        </div>

      </div>

      {/* 3. Input Area - Compact */}
      <div className="p-3 bg-white border-t border-[#F5F5F4]">
        <div className="flex items-center gap-2 bg-[#F5F5F4] px-3 py-1.5 rounded-xl border border-transparent focus-within:border-[#E7E5E4] transition">
          <button className="text-[#a8a29e] hover:text-[#57534e] transition"><Paperclip size={16} /></button>
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-transparent outline-none text-xs text-[#1c1917] placeholder:text-[#a8a29e] py-1.5"
          />
          <button className="text-[#a8a29e] hover:text-[#57534e] transition"><Smile size={16} /></button>
          <button className="p-1.5 bg-[#1c1917] text-white rounded-lg shadow-sm hover:bg-[#292524] transition">
            <Send size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}