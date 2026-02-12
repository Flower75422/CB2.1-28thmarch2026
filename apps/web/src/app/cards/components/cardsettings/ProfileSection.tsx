import { Camera, Image as ImageIcon, Video } from "lucide-react";

// Define the Props
interface ProfileSectionProps {
  name: string;
  username: string;
  bio: string;
  onChange: (field: string, value: string) => void;
}

export default function ProfileSection({ name, username, bio, onChange }: ProfileSectionProps) {
  return (
    <div className="flex gap-6 items-start">
      
      {/* LEFT: Media Controls */}
      <div className="w-40 flex flex-col items-center gap-3 pt-1">
        <div className="h-28 w-28 rounded-full bg-[#F5F5F4] border-4 border-white shadow-sm flex items-center justify-center text-[#a8a29e] cursor-pointer hover:scale-105 transition">
            <Camera size={24} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#F5F5F4] text-[#57534e] text-xs font-bold rounded-lg hover:bg-[#E7E5E4] transition">
            <ImageIcon size={14} /> Add Picture
          </button>
        </div>
      </div>

      {/* RIGHT: Form Inputs */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="col-span-1">
            <label className="block text-[11px] font-bold text-[#78716c] mb-1.5 uppercase tracking-wide">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="Your Name" 
              className="w-full p-2.5 bg-[#F5F5F4] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#E7E5E4] transition" 
            />
        </div>
        <div className="col-span-1">
            <label className="block text-[11px] font-bold text-[#78716c] mb-1.5 uppercase tracking-wide">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => onChange("username", e.target.value)}
              placeholder="@username" 
              className="w-full p-2.5 bg-[#F5F5F4] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#E7E5E4] transition" 
            />
        </div>
        <div className="col-span-2">
            <label className="block text-[11px] font-bold text-[#78716c] mb-1.5 uppercase tracking-wide">Bio</label>
            <textarea 
              value={bio}
              onChange={(e) => onChange("bio", e.target.value)}
              placeholder="Tell us about yourself..." 
              className="w-full p-2.5 bg-[#F5F5F4] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#E7E5E4] transition h-24 resize-none leading-relaxed" 
            />
        </div>
      </div>
    </div>
  );
}