"use client";

import { useState } from "react";
import { X, Check, Waves } from "lucide-react"; // Using Waves for a "Pool" theme

interface PoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelected: string[];
  onSave: (selected: string[]) => void; 
}

// Grouped interests for better organization
const INTEREST_GROUPS = [
  "Technology", "Design", "Startups", "AI", 
  "Web3", "Marketing", "Productivity", "Coding",
  "Venture Capital", "Engineering", "UX/UI", "SaaS"
];

export default function PoolModal({ isOpen, onClose, initialSelected, onSave }: PoolModalProps) {
  const [selected, setSelected] = useState<string[]>(initialSelected);

  if (!isOpen) return null;

  const toggleInterest = (item: string) => {
    setSelected(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1917]/20 backdrop-blur-md animate-in fade-in duration-300 p-4">
      <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl border border-[#E7E5E4] overflow-hidden flex flex-col">
        
        {/* --- HEADER --- */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FDFBF7] flex items-center justify-center text-[#1c1917] border border-[#E7E5E4]">
              <Waves size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1c1917] leading-none">Pool</h2>
              <p className="text-[11px] text-[#a8a29e] font-bold uppercase tracking-wider mt-1">Curate your feed</p>
            </div>
          </div>
          
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F4] text-[#a8a29e] hover:text-[#1c1917] transition-all">
            <X size={16} />
          </button>
        </div>

        {/* --- INTEREST PILLS --- */}
        <div className="p-6 overflow-y-auto max-h-[400px]">
          <div className="flex flex-wrap gap-2.5">
            {INTEREST_GROUPS.map((interest) => {
              const isSelected = selected.includes(interest);
              return (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[13px] font-bold transition-all duration-300 border ${
                    isSelected 
                      ? "bg-[#1c1917] text-white border-[#1c1917] shadow-lg shadow-black/10 scale-95" 
                      : "bg-white text-[#57534e] border-[#E7E5E4] hover:border-[#a8a29e] hover:bg-[#FDFBF7]"
                  }`}
                >
                  {interest}
                  <div className={`transition-all duration-300 ${isSelected ? "w-4 opacity-100" : "w-0 opacity-0 overflow-hidden"}`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- FOOTER ACTION --- */}
        <div className="p-6 bg-[#FDFBF7] border-t border-[#E7E5E4]">
          <button 
            onClick={() => { onSave(selected); onClose(); }}
            className="w-full py-4 bg-[#1c1917] hover:bg-black text-white rounded-2xl text-[14px] font-bold shadow-xl transition-all transform active:scale-[0.98]"
          >
            Update My Pool
          </button>
        </div>
      </div>
    </div>
  );
}