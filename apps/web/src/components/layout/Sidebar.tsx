"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, MessageSquare, Users, User, Bell } from "lucide-react";

const navItems = [
  { name: "Cards", href: "/cards", icon: Layers },
  { name: "Chats", href: "/chats", icon: MessageSquare },
  { name: "Communities", href: "/communities", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    // 👇 CHANGED 'p-6' TO 'p-8' TO ALIGN VERTICALLY WITH PAGES
    <aside className="w-64 flex-shrink-0 flex flex-col justify-between bg-[#F5F5F4] p-8 h-screen sticky top-0">
      
      <div>
        {/* Logo - Text Only */}
        {/* Added px-4 to align with the Nav Item text indentation */}
        <div className="mb-10 px-4">
          <span className="text-2xl font-bold text-[#1c1917] tracking-tight font-serif">Cobucket</span>
        </div>

        {/* Main Nav */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[#1c1917] shadow-sm"
                    : "text-[#78716c] hover:bg-[#E7E5E4]/50 hover:text-[#1c1917]"
                }`}
              >
                <item.icon size={20} strokeWidth={1.5} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-[#E7E5E4]">
        <Link 
          href="/profile"
          className="p-2.5 rounded-full hover:bg-white hover:shadow-sm transition text-[#78716c] hover:text-[#1c1917]"
        >
          <User size={20} strokeWidth={1.5} />
        </Link>
        
        <Link 
          href="/notifications"
          className="relative p-2.5 rounded-full hover:bg-white hover:shadow-sm transition text-[#78716c] hover:text-[#1c1917]"
        >
          <Bell size={20} strokeWidth={1.5} />
          <span className="absolute top-1 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-[#F5F5F4]"></span>
        </Link>
      </div>
    </aside>
  );
}