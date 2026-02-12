// apps/web/src/app/cards/components/single-card/front/BodyOfSingleCard.tsx
import { MapPin } from "lucide-react";

export default function BodyOfSingleCard({ description, location = "NYC" }: any) {
  // Strict 120 character limit
  const truncatedBio = description.length > 120 
    ? description.slice(0, 120) + "..." 
    : description;

  return (
    <div className="flex flex-col flex-grow gap-2 mt-1">
      
      {/* 1. LOCATION ONLY (Simplified) */}
      <div className="flex items-center gap-1 text-[#a8a29e] text-[9px] font-bold uppercase tracking-tight">
        <MapPin size={10} className="text-[#d6d3d1]" />
        <span>{location}</span>
      </div>

      {/* 2. BIO (Below the location) */}
      <div className="h-[48px] overflow-hidden">
        <p className="text-gray-700 text-xs leading-[16px] font-normal break-words">
          {truncatedBio}
        </p>
      </div>

    </div>
  );
}