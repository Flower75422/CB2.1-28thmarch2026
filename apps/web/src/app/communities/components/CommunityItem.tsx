import { Users, Hash } from "lucide-react";

interface CommunityItemProps {
  type: "group" | "channel";
  name: string;
  count: string; // Members or Subscribers
  description: string;
  icon: string; // Emoji or Image URL
}

export default function CommunityItem({ type, name, count, description, icon }: CommunityItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-transparent hover:border-[#E7E5E4] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 group">
      
      <div className="flex items-center gap-4">
        {/* Icon / Avatar */}
        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${type === 'group' ? 'bg-[#F0F9FF]' : 'bg-[#FDF4FF]'}`}>
          {icon}
        </div>
        
        {/* Info */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-[#1c1917] text-base">{name}</h3>
            {type === 'channel' && <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-1.5 py-0.5 rounded">CH</span>}
          </div>
          <p className="text-[#a8a29e] text-xs font-medium mt-0.5 mb-1">{description}</p>
          <div className="flex items-center gap-1.5 text-[#78716c] text-[11px] font-medium">
             {type === 'group' ? <Users size={12} /> : <Hash size={12} />}
             {count} {type === 'group' ? 'Members' : 'Subscribers'}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button className="px-6 py-2 bg-[#F5F5F4] text-[#1c1917] text-sm font-bold rounded-xl hover:bg-[#1c1917] hover:text-white transition shadow-sm">
        Join
      </button>
    </div>
  );
}