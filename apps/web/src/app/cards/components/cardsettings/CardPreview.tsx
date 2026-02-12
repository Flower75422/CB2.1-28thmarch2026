import { 
  X, 
  Plus, 
  MoreVertical, 
  Eye, 
  Heart, 
  FileText,
  MessageSquare, // Chat icon
  Hash,          // Channel icon
  Repeat         // Flip icon
} from "lucide-react";

interface CardPreviewProps {
  name: string;
  handle: string;
  bio: string;
  primaryInterest: string; // We can use this for the "Active in..." status
  onClose: () => void;
}

export default function CardPreview({ name, handle, bio, primaryInterest, onClose }: CardPreviewProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#FDFBF7]/90 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Preview Container */}
      <div className="relative w-full max-w-md mx-4">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-[#57534e] hover:text-[#1c1917] font-bold text-sm flex items-center gap-2 transition"
        >
          Close Preview <X size={18} />
        </button>

        {/* --- THE CARD (Exact SingleCard Replica) --- */}
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-gray-200 p-5 font-sans flex flex-col gap-3 transform transition-all hover:scale-[1.02]">

          {/* 1. HEADER SECTION */}
          <div className="flex items-start justify-between">
            
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 shadow-inner border border-white">
                   {(name || "U").charAt(0).toUpperCase()}
                </div>
              </div>

              {/* User Info + Stats */}
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm leading-tight">{name || "Your Name"}</h3>
                <p className="text-xs text-gray-500 font-medium mb-1.5">{handle || "@username"}</p>

                {/* Stats Row */}
                <div className="flex items-center gap-3 text-gray-400 text-[11px] font-medium">
                  <div className="flex items-center gap-1 cursor-default">
                    <Eye size={12} />
                    <span>0</span>
                  </div>
                  <div className="w-[2px] h-[2px] rounded-full bg-gray-300"></div>
                  <div className="flex items-center gap-1 cursor-default">
                    <Heart size={12} />
                    <span>0</span>
                  </div>
                  <div className="w-[2px] h-[2px] rounded-full bg-gray-300"></div>
                  <div className="flex items-center gap-1 cursor-default">
                    <FileText size={12} />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-1 text-gray-400">
              <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-50 transition hover:text-gray-900">
                <Plus size={16} />
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-50 transition hover:text-gray-900">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>

          {/* 2. BIO & CONTENT */}
          <div className="mt-1">
            <p className="text-gray-700 text-xs leading-relaxed font-normal line-clamp-3 min-h-[3em]">
              {bio || "Your bio description will appear here. Keep it short and sweet!"}
            </p>
          </div>

          {/* 3. STATUS */}
          <div>
            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide bg-gray-50 px-2 py-1 rounded-md">
              Active in {primaryInterest || "General"}
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 w-full"></div>

          {/* 4. BOTTOM ACTION BUTTONS */}
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-bold">
               Chat
            </button>

            <button className="flex-1 flex items-center justify-center py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-bold">
               Channel
            </button>

            <button className="flex-1 flex items-center justify-center py-2 rounded-lg bg-[#1c1917] text-white text-xs font-bold shadow-md">
               Flip
            </button>
          </div>

        </div>

        <p className="text-center text-[#a8a29e] text-xs mt-6 font-medium">
          This is how others will see your card.
        </p>

      </div>
    </div>
  );
}