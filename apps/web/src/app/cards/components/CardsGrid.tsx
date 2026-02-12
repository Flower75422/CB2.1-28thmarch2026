"use client";

import { ReactNode } from "react";

export default function CardsGrid({ children }: { children: ReactNode }) {
  return (
    // 'auto-fill' combined with 'minmax' creates a responsive grid 
    // where cards stay between 320px and ~450px, preventing huge size jumps.
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {children}
    </div>
  );
}