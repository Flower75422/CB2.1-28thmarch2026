"use client";

import { Search, Plus } from "lucide-react";

interface ChatSidebarProps {
  onSelectChat: (chatId: number) => void;
  activeChatId: number | null;
}

const chats = [
  { id: 1, name: "Aisha Khan", msg: "Can you send the Figma file?", time: "2m", unread: 2 },
  { id: 2, name: "Rahul Verma", msg: "Great work on the backend!", time: "1h", unread: 0 },
  { id: 3, name: "Design Team", msg: "Meeting at 4 PM?", time: "3h", unread: 5 },
  { id: 4, name: "John Doe", msg: "Let's connect tomorrow.", time: "1d", unread: 0 },
];

export default function ChatSidebar({ onSelectChat, activeChatId }: ChatSidebarProps) {
  return (
    <div className="w-72 flex flex-col border-r border-[#E7E5E4] bg-[#FDFBF7] h-full">
      
      {/* Header - Compact */}
      <div className="p-4 border-b border-[#F5F5F4]">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg font-bold text-[#1c1917]">Chats</h1>
          <button className="p-1.5 bg-[#1c1917] text-white rounded-full hover:bg-[#292524] transition shadow-sm">
            <Plus size={14} />
          </button>
        </div>

        {/* Search - Smaller */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a8a29e]" size={14} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-9 pr-3 py-2 bg-white border border-transparent focus:border-[#E7E5E4] rounded-lg text-xs outline-none shadow-sm transition" 
          />
        </div>
      </div>

      {/* Chat List - Tighter */}
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        {chats.map((chat) => (
          <div 
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`flex gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 group ${
              activeChatId === chat.id 
                ? "bg-white shadow-sm border border-[#E7E5E4]" 
                : "hover:bg-white/60"
            }`}
          >
            {/* Avatar - Smaller (h-10) */}
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-[#F5F5F4] border border-white shadow-sm flex-shrink-0" />
              {chat.unread > 0 && <div className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-[#FDFBF7]" />}
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <h3 className={`text-xs font-bold truncate ${activeChatId === chat.id ? "text-[#1c1917]" : "text-[#57534e]"}`}>
                  {chat.name}
                </h3>
                <span className="text-[9px] text-[#a8a29e] font-medium">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[11px] text-[#78716c] truncate w-28">{chat.msg}</p>
                {chat.unread > 0 && (
                  <span className="min-w-[16px] h-4 px-1 flex items-center justify-center bg-[#1c1917] text-white text-[9px] font-bold rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}