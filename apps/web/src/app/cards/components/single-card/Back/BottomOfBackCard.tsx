// apps/web/src/app/cards/components/single-card/back/BottomOfBackCard.tsx
import Link from "next/link";
import { Repeat, User } from "lucide-react";

export default function BottomOfBackCard({ id, onFlipBack }: any) {
  return (
    <div className="w-full flex flex-col">
      <div className="h-px bg-gray-100 w-full mb-2" />
      <div className="flex gap-2">
        <Link 
          href={`/profile/${id}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#1c1917] hover:bg-black text-white text-[11px] font-bold transition"
        >
          <User size={12} /> View
        </Link>
        <button 
          onClick={onFlipBack} 
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-[11px] font-bold transition"
        >
          <Repeat size={12} /> Flip
        </button>
      </div>
    </div>
  );
}