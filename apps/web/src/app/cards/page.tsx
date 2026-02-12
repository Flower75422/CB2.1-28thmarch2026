"use client";

import { useState } from "react";
import DisplayViewStyle from "./components/card-search-engine/DisplayViewStyle";
import TrendingFeed from "./components/feeds/TrendingFeed";
import FollowingFeed from "./components/feeds/FollowingFeed";
import Feed from "./components/feeds/Feed";
import CardSettings from "./components/cardsettings/CardSettings"; // Verified: cardsettings (no dash)
import InterestPoolModal from "./components/InterestPoolModal";

export default function CardsPage() {
  const [activeFilter, setActiveFilter] = useState("feed");
  const [isSettingsView, setIsSettingsView] = useState(false);
  const [isPoolModalOpen, setIsPoolModalOpen] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState(["Technology"]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1c1917]">
      
      {/* CONTAINER ADJUSTMENT:
         - 'px-6': Aligns horizontally with your "Cobucket" title.
         - 'pt-2': Pulls the content UP to be closer to the top.
      */}
      <div className="max-w-[1400px] mx-auto px-6 pt-2 pb-20">
        
        {isSettingsView ? (
          /* --- SETTINGS VIEW --- */
          <CardSettings onBack={() => setIsSettingsView(false)} />
        ) : (
          /* --- FEED VIEW --- */
          <div className="flex flex-col gap-4"> {/* Reduced gap from 6 to 4 */}
            
            {/* 1. TOP BAR */}
            <div className="w-full">
              <DisplayViewStyle 
                activeFilter={activeFilter} 
                onFilterChange={setActiveFilter} 
                onOpenSettings={() => setIsSettingsView(true)} 
              />
            </div>

            {/* 2. FEED CONTENT */}
            <div className="animate-in fade-in duration-300">
              {activeFilter === "feed" && <Feed />}
              {activeFilter === "trending" && <TrendingFeed />}
              {activeFilter === "following" && <FollowingFeed />}
              
              {!["feed", "trending", "following"].includes(activeFilter) && <Feed />}
            </div>

          </div>
        )}

      </div>

      {/* --- MODAL --- */}
      <InterestPoolModal 
        isOpen={isPoolModalOpen}
        onClose={() => setIsPoolModalOpen(false)}
        initialSelected={selectedInterests}
        onSave={setSelectedInterests}
      />
    </main>
  );
}