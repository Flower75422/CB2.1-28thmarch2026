import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import SingleCard from "./single-card";

interface TopicRowProps {
  topic: string;
  cards: any[];
}

export default function TopicRow({ topic, cards }: TopicRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!cards || cards.length === 0) return null;

  return (
    // 👇 CHANGED: Removed 'mb-8'. Now it's just 'w-full flex flex-col gap-3'
    <div className="flex flex-col gap-3 w-full">
      
      {/* Row Header */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-[16px] font-bold text-[#1c1917] flex items-center gap-2">
          {topic}
        </h3>
        
        <div className="flex items-center gap-1">
          <button 
            onClick={() => scroll("left")} 
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-[#E7E5E4] text-[#78716c] hover:text-[#1c1917] hover:bg-[#F5F5F4] transition"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={() => scroll("right")} 
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-[#E7E5E4] text-[#78716c] hover:text-[#1c1917] hover:bg-[#F5F5F4] transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 snap-x snap-mandatory pb-2" // Reduced gap-4 to gap-3 for tighter cards
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
      >
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        {cards.map((card, index) => (
          // Adjusted width slightly for better fit
          <div 
            key={`${card.id}-${index}`} 
            className="flex-none w-full md:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] snap-start"
          >
             <SingleCard {...card} />
          </div>
        ))}
      </div>

    </div>
  );
}