"use client"; // 👈 Required for the Back Button to work

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Settings, MapPin, ChevronLeft } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto">
      
      {/* 🔹 NEW HEADER: Back Button & Title */}
      <div className="flex items-center gap-2 mb-6">
        <button 
          onClick={() => router.back()} 
          className="p-2 -ml-2 rounded-xl hover:bg-black/5 text-[#57534e] transition"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-[#1c1917]">My Profile</h1>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-[24px] p-8 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] mb-8 relative">
        
        {/* Settings Link */}
        <Link 
          href="/settings" 
          className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 bg-white border border-[#E7E5E4] rounded-xl text-sm font-medium text-[#57534e] hover:bg-[#F5F5F4] transition shadow-sm"
        >
          <Settings size={16} /> Settings
        </Link>

        {/* Content... */}
        <div className="flex gap-6 items-start mb-6">
          <div className="h-24 w-24 rounded-full bg-gray-200 border-4 border-white shadow-sm" />
          <div className="pt-2">
            <h2 className="text-2xl font-bold text-[#1c1917]">Ravi Singh</h2>
            <p className="text-[#78716c] font-medium">@ravi.s</p>
            <div className="flex items-center gap-4 mt-1 text-sm text-[#a8a29e]">
               <span className="flex items-center gap-1"><MapPin size={14}/> NYC</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-6 text-sm">
          <div className="flex gap-1"><span className="font-bold text-[#1c1917]">45</span> <span className="text-[#78716c]">Followers</span></div>
          <div className="flex gap-1"><span className="font-bold text-[#1c1917]">455</span> <span className="text-[#78716c]">Following</span></div>
          <div className="flex gap-1"><span className="font-bold text-[#1c1917]">5.7m</span> <span className="text-[#78716c]">Views</span></div>
        </div>

        {/* Bio */}
        <p className="text-[#57534e] mb-6 max-w-2xl leading-relaxed">
          Backend Engineer exploring the education space through technology. 
          Passionate about scalable systems and open source.
        </p>

        {/* Tags */}
        <div className="flex gap-3 mb-8">
          <span className="px-3 py-1 bg-[#ECFDF5] text-[#047857] text-xs font-medium rounded-lg">Education</span>
          <span className="px-3 py-1 bg-[#EFF6FF] text-[#1D4ED8] text-xs font-medium rounded-lg">Technology</span>
          <span className="px-3 py-1 bg-[#FAF5FF] text-[#7E22CE] text-xs font-medium rounded-lg">Research</span>
        </div>

        {/* Activity Highlight */}
        <div className="bg-[#F5F5F4]/50 p-4 rounded-xl flex gap-3 items-center text-sm text-[#57534e]">
           <div className="h-2 w-2 rounded-full bg-green-500"></div>
           <p>Posted in <span className="font-bold text-[#1c1917]">Channels</span> 2h ago: Shared a video tutorial load balancing techniques.</p>
        </div>
      </div>

      {/* Tabs & Grid */}
      <div className="mb-6 border-b border-[#E7E5E4]">
        <div className="flex gap-8">
          <button className="pb-3 border-b-2 border-[#1c1917] font-semibold text-[#1c1917]">Wallposts</button>
          <button className="pb-3 border-b-2 border-transparent text-[#78716c] hover:text-[#57534e]">Channels</button>
          <button className="pb-3 border-b-2 border-transparent text-[#78716c] hover:text-[#57534e]">Groups</button>
          <button className="pb-3 border-b-2 border-transparent text-[#78716c] hover:text-[#57534e]">Cards</button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-xl overflow-hidden hover:opacity-90 transition cursor-pointer">
             <div className="h-full w-full bg-[#E7E5E4] flex items-center justify-center text-[#a8a29e]">Img {i}</div>
          </div>
        ))}
      </div>

    </div>
  );
}