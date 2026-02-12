"use client";

import { X, Users, Hash } from "lucide-react";

interface CreateCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateCommunityModal({ isOpen, onClose }: CreateCommunityModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E7E5E4] flex justify-between items-center bg-[#FDFBF7]">
          <h2 className="text-lg font-bold text-[#1c1917]">Create New</h2>
          <button onClick={onClose} className="p-2 hover:bg-[#E7E5E4] rounded-full transition">
            <X size={20} className="text-[#57534e]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
           <button className="w-full flex items-center gap-4 p-4 bg-[#F5F5F4] hover:bg-[#E7E5E4] rounded-2xl transition group text-left">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#1c1917] shadow-sm">
                <Users size={20} />
              </div>
              <div>
                 <h3 className="font-bold text-[#1c1917]">Create Group</h3>
                 <p className="text-xs text-[#78716c]">For discussions and community chat.</p>
              </div>
           </button>

           <button className="w-full flex items-center gap-4 p-4 bg-[#F5F5F4] hover:bg-[#E7E5E4] rounded-2xl transition group text-left">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#1c1917] shadow-sm">
                <Hash size={20} />
              </div>
              <div>
                 <h3 className="font-bold text-[#1c1917]">Create Channel</h3>
                 <p className="text-xs text-[#78716c]">For announcements and content.</p>
              </div>
           </button>
        </div>

      </div>
    </div>
  );
}