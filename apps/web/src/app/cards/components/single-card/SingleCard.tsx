"use client";

import { useState } from "react";
import FrontOfCard from "./front/FrontOfCard";
import BackOfCard from "./back/BackOfCard";

export default function SingleCard(props: any) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // 'group' allows hover effects
    // 'h-full' ensures card takes full height of grid row
    <div className="group w-full h-full [perspective:1000px]">
      <div 
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* --- FRONT --- */}
        {/* 'relative' ensures it establishes layout context */}
        <div className="relative w-full h-full [backface-visibility:hidden] z-10">
          <FrontOfCard {...props} onFlip={() => setIsFlipped(true)} />
        </div>

        {/* --- BACK --- */}
        {/* 'absolute inset-0' ensures it perfectly covers the front */}
        <div className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] z-0">
          <BackOfCard {...props} onFlipBack={() => setIsFlipped(false)} />
        </div>
      </div>
    </div>
  );
}