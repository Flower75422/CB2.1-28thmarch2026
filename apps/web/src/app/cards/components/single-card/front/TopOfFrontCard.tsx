"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Plus, 
  Check, 
  MoreVertical, 
  Eye, 
  Heart, 
  FileText, 
  UserPlus, 
  ShieldAlert, 
  Ban,
  EyeOff // New icon for Hide
} from "lucide-react";

export default function TopOfFrontCard({ name, handle, views, likes, posts }: any) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-start justify-between w-full">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center text-lg font-bold text-[#78716c] border border-[#E7E5E4] shadow-sm">
            {name.charAt(0)}
          </div>
        </div>

        {/* Identity & Stats */}
        <div className="flex flex-col pt-0.5">
          <h3 className="font-bold text-[#1c1917] text-[14px] leading-tight tracking-tight">
            {name}
          </h3>
          <p className="text-[11px] text-[#a8a29e] font-medium mb-1.5">
            {handle}
          </p>
          
          <div className="flex items-center gap-2.5 text-[#a8a29e] text-[10px] font-bold tracking-tight">
            <div className="flex items-center gap-1 group">
              <Eye size={12} className="text-[#d6d3d1]" />
              <span>{views}</span>
            </div>
            <div className="w-[2px] h-[2px] rounded-full bg-[#E7E5E4]"></div>
            <div className="flex items-center gap-1 group">
              <Heart size={12} className="text-[#d6d3d1]" />
              <span>{likes}</span>
            </div>
            <div className="w-[2px] h-[2px] rounded-full bg-[#E7E5E4]"></div>
            <div className="flex items-center gap-1 group">
              <FileText size={12} className="text-[#d6d3d1]" />
              <span>{posts}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1 relative" ref={menuRef}>
        <button 
          onClick={() => setIsFollowing(!isFollowing)}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
            isFollowing ? "bg-[#1c1917] text-white shadow-sm" : "text-[#a8a29e] hover:bg-[#F5F5F4] hover:text-[#1c1917]"
          }`}
        >
          {isFollowing ? <Check size={16} strokeWidth={2.5} /> : <Plus size={18} />}
        </button>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
            isMenuOpen ? "bg-[#F5F5F4] text-[#1c1917]" : "text-[#a8a29e] hover:bg-[#F5F5F4]"
          }`}
        >
          <MoreVertical size={18} />
        </button>

        {/* --- DROPDOWN MENU --- */}
        {isMenuOpen && (
          <div className="absolute right-0 top-10 w-40 bg-white rounded-xl shadow-xl border border-[#E7E5E4] z-[100] py-1 animate-in fade-in zoom-in-95 duration-100">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] font-bold text-[#57534e] hover:bg-[#FDFBF7] hover:text-[#1c1917] transition-colors">
              <Heart size={14} /> Like
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] font-bold text-[#57534e] hover:bg-[#FDFBF7] hover:text-[#1c1917] transition-colors">
              <UserPlus size={14} /> Connect
            </button>
            {/* --- HIDE OPTION ADDED HERE --- */}
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] font-bold text-[#57534e] hover:bg-[#FDFBF7] hover:text-[#1c1917] transition-colors">
              <EyeOff size={14} /> Hide
            </button>
            
            <div className="h-px bg-[#E7E5E4] my-1 mx-2"></div>
            
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] font-bold text-red-500 hover:bg-red-50 transition-colors">
              <ShieldAlert size={14} /> Spam
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] font-bold text-red-500 hover:bg-red-50 transition-colors">
              <Ban size={14} /> Block
            </button>
          </div>
        )}
      </div>
    </div>
  );
}