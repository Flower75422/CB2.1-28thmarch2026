import { ReactNode } from "react";

interface CardsContainerProps {
  children: ReactNode;
}

export default function CardsContainer({ children }: CardsContainerProps) {
  return (
    // 👇 Notice we changed py-6 to pb-6 and pt-0 (or pt-2 if you need a tiny nudge)
    // This removes the invisible space at the top of the page!
    <div className="max-w-5xl mx-auto px-4 pb-6 pt-0 flex flex-col gap-6 font-sans w-full">
      {children}
    </div>
  );
}