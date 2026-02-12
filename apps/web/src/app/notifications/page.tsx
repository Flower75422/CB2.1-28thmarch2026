import { Trash2 } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#1c1917]">Notifications</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-[#E7E5E4] text-[#57534e] text-xs font-medium rounded-xl hover:bg-white bg-transparent">Mark all as read</button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#E7E5E4] text-[#57534e] text-xs font-medium rounded-xl hover:bg-white bg-transparent">
            <Trash2 size={14} /> Clear
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <button className="px-4 py-1.5 bg-white text-[#1c1917] text-xs font-bold rounded-lg shadow-sm border border-[#E7E5E4]">All</button>
      </div>

      {/* List */}
      <div className="bg-white rounded-[24px] shadow-sm divide-y divide-[#F5F5F4] overflow-hidden">
        
        {/* Item 1 */}
        <div className="p-5 flex gap-4 hover:bg-[#FAFAFA] transition">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-[#1c1917]">
              <span className="font-bold">Ravi Singh</span> mentioned you in a comment
            </p>
            <p className="text-xs text-[#78716c] mt-0.5">Check out the latest updates here?</p>
          </div>
          <span className="text-xs text-[#a8a29e] font-medium">1 hour ago</span>
        </div>

        {/* Item 2 */}
        <div className="p-5 flex gap-4 hover:bg-[#FAFAFA] transition">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-[#1c1917]">
              <span className="font-bold">Liam</span> mentioned you in a discussion
            </p>
            <p className="text-xs text-[#78716c] mt-0.5">What do you think about this?</p>
          </div>
          <span className="text-xs text-[#a8a29e] font-medium">3 hours ago</span>
        </div>

         {/* Item 3 */}
         <div className="p-5 flex gap-4 hover:bg-[#FAFAFA] transition">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600 flex-shrink-0">FSD</div>
          <div className="flex-1">
            <p className="text-sm text-[#1c1917]">
              <span className="font-bold">Full Stack Developers</span> created a new channel:
            </p>
            <p className="text-xs text-[#78716c] mt-0.5">API Integration Guide</p>
          </div>
          <span className="text-xs text-[#a8a29e] font-medium">2 days ago</span>
        </div>

      </div>
    </div>
  );
}