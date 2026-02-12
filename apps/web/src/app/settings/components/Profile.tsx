import { Camera, Upload } from "lucide-react";

export default function Profile() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-xl font-bold text-[#1c1917] mb-6">Profile</h2>

      {/* Avatar & Name Row */}
      <div className="flex gap-6 mb-8">
        <div className="relative group cursor-pointer">
          <div className="h-20 w-20 rounded-full bg-gray-200" />
          <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <Camera size={20} />
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#78716c] mb-1.5">Name</label>
            <input type="text" defaultValue="Alturm" className="w-full p-2.5 bg-[#F5F5F4] rounded-xl text-sm outline-none border border-transparent focus:border-[#d6d3d1]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#78716c] mb-1.5">Status</label>
            <select className="w-full p-2.5 bg-[#F5F5F4] rounded-xl text-sm outline-none border border-transparent focus:border-[#d6d3d1]">
              <option>Active</option>
              <option>Away</option>
              <option>Do Not Disturb</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mb-8">
          <label className="block text-xs font-semibold text-[#78716c] mb-1.5">Bio</label>
          <textarea className="w-full p-3 bg-[#F5F5F4] rounded-xl text-sm outline-none h-24 resize-none" defaultValue="Backend Engineer exploring the education space through technology."></textarea>
      </div>

      <div className="flex gap-8 border-t border-[#E7E5E4] pt-8">
          {/* Banner Upload */}
          <div className="flex-1 h-32 bg-[#F5F5F4] rounded-xl flex flex-col items-center justify-center text-[#78716c] border-2 border-dashed border-[#d6d3d1] cursor-pointer hover:bg-[#E7E5E4] transition">
            <Upload size={24} className="mb-2" />
            <span className="text-xs font-medium">Upload Banner Image</span>
          </div>
      </div>

      <div className="mt-8 flex justify-end">
          <button className="px-6 py-2.5 bg-[#1c1917] text-white font-medium text-sm rounded-xl hover:bg-[#292524] shadow-lg shadow-gray-200">
            Save Changes
          </button>
      </div>
    </div>
  );
}