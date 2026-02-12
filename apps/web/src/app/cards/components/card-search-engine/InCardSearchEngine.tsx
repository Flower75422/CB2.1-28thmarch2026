"use client";

import { useState, useRef, useEffect } from "react";
import InputDisplayStyle from "./InputDisplayStyle";
import DisplayViewStyle, { FilterType } from "./CardSearchEngine";
import OutputDisplayStyle from "./OutputDisplayStyle";

// --- MOCK DATA ---
const MOCK_PEOPLE = [
  { id: "p1", name: "Sarah Designer", handle: "@sarah_ux" },
  { id: "p2", name: "Devon Lewis", handle: "@dev_lewis" },
  { id: "p3", name: "Startup Daily", handle: "@startups_hq" },
];

const MOCK_CHANNELS = [
  { id: "c1", name: "DesignSystem", members: "1.2k" },
  { id: "c2", name: "Engineering", members: "850" },
];

const MOCK_INTEREST_POOLS = [
  { id: "i1", name: "UI/UX", posts: "4.2k" },
  { id: "i2", name: "ReactJS", posts: "8.1k" },
];

export default function InCardSearchEngine() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("people");
  const [isOpen, setIsOpen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter Logic
  const getResults = () => {
    const q = query.toLowerCase();
    if (!q) return [];
    
    if (activeFilter === "people") return MOCK_PEOPLE.filter(i => i.name.toLowerCase().includes(q));
    if (activeFilter === "channels") return MOCK_CHANNELS.filter(i => i.name.toLowerCase().includes(q));
    if (activeFilter === "interest pool") return MOCK_INTEREST_POOLS.filter(i => i.name.toLowerCase().includes(q));
    return [];
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md font-sans z-50">
      
      {/* 1. INPUT */}
      <InputDisplayStyle 
        query={query} 
        onQueryChange={(val) => {
          setQuery(val);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
      />

      {/* 2. VIEW (Dropdown) */}
      <DisplayViewStyle 
        isOpen={isOpen} 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter}
      >
        {/* 3. OUTPUT (Results) */}
        <OutputDisplayStyle 
          results={getResults()} 
          query={query} 
          activeFilter={activeFilter} 
        />
      </DisplayViewStyle>

    </div>
  );
}