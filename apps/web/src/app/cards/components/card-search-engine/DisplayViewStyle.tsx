"use client";

import { 
  Sparkles, 
  Search, 
  Settings2
} from "lucide-react";

interface DisplayViewStyleProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onOpenSettings: () => void;
}

export default function DisplayViewStyle({ activeFilter, onFilterChange, onOpenSettings }: DisplayViewStyleProps) {
  return (
    // Removed 'py-' padding to move it up.
    // 'h-10' ensures a fixed, compact height.
    <div className="w-full flex items-center justify-between h-10 border-b border-gray-100">
      
      {/* --- LEFT: TABS (Flush Left Alignment) --- */}
      <div className="flex items-center gap-6 h-full">
        <TabButton 
          isActive={activeFilter === "feed"} 
          onClick={() => onFilterChange("feed")} 
          label="Feed" 
        />
        <TabButton 
          isActive={activeFilter === "trending"} 
          onClick={() => onFilterChange("trending")} 
          label="Trending" 
        />
        <TabButton 
          isActive={activeFilter === "following"} 
          onClick={() => onFilterChange("following")} 
          label="Following" 
        />
      </div>

      {/* --- RIGHT: TOOLS --- */}
      <div className="flex items-center gap-2">
        
        {/* Sparkle Icon */}
        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
          <Sparkles size={16} className="opacity-60" />
        </button>

        {/* Search Bar */}
        <div className="relative w-56 hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input 
            type="text"
            placeholder="Search..."
            className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:border-gray-200 focus:outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Card Setting Button */}
        <button 
          onClick={onOpenSettings}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#1c1917] text-white rounded-lg hover:bg-black transition-all shadow-sm active:scale-95 group ml-2"
        >
          <Settings2 size={14} className="group-hover:rotate-45 transition-transform duration-500" />
          <span className="text-[11px] font-bold hidden sm:inline">Settings</span>
        </button>

      </div>
    </div>
  );
}

// Tab Helper
function TabButton({ isActive, onClick, label }: any) {
  return (
    <button
      onClick={onClick}
      className={`relative h-full flex items-center text-[13px] font-bold transition-colors ${
        isActive 
          ? "text-[#1c1917]" 
          : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1c1917]"></span>
      )}
    </button>
  );
}