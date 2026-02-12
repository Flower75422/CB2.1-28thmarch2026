"use client";

import { useState } from "react";
import { Plus, Eye, EyeOff, Trash2 } from "lucide-react";

interface TopicGroup {
  id: number;
  topics: string[];
  primary: string;
  isVisible: boolean;
  channelName: string;
}

export default function DiscoverySection() {
  const [groups, setGroups] = useState<TopicGroup[]>([
    {
      id: 1,
      topics: ["AI", "Machine Learning"],
      primary: "AI",
      isVisible: true,
      channelName: "Altech102"
    }
  ]);

  const addGroup = () => {
    if (groups.length < 6) {
      setGroups([...groups, { id: Date.now(), topics: [], primary: "", isVisible: true, channelName: "" }]);
    }
  };

  const removeGroup = (id: number) => {
    if (groups.length > 1) setGroups(groups.filter(g => g.id !== id));
  };

  const toggleVisibility = (id: number) => {
    setGroups(groups.map(g => g.id === id ? { ...g, isVisible: !g.isVisible } : g));
  };

  const updateChannelName = (id: number, name: string) => {
    setGroups(groups.map(g => g.id === id ? { ...g, channelName: name } : g));
  };

  const updatePrimary = (id: number, primary: string) => {
    setGroups(groups.map(g => g.id === id ? { ...g, primary } : g));
  };

  const addDummyTopic = (id: number) => {
    const dummies = ["React", "Design", "Space", "Crypto", "Tech"];
    const random = dummies[Math.floor(Math.random() * dummies.length)];
    setGroups(groups.map(g => {
        if (g.id === id && g.topics.length < 9) {
            return { ...g, topics: [...g.topics, random], primary: g.primary || random };
        }
        return g;
    }));
  };

  return (
    <div>
      {/* Compact Header */}
      <div className="flex justify-between items-end mb-3">
         <div>
            <h3 className="text-base font-bold text-[#1c1917]">Discovery Visibility</h3>
            <p className="text-[11px] text-[#78716c]">Manage groups ({groups.length}/6).</p>
         </div>
         <button 
            onClick={addGroup}
            disabled={groups.length >= 6}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-white text-[10px] font-bold rounded-lg transition ${groups.length >= 6 ? "bg-gray-300" : "bg-[#1c1917] hover:bg-[#292524]"}`}
         >
            <Plus size={12} /> Add Group
         </button>
      </div>

      <div className="border border-[#E7E5E4] rounded-xl overflow-hidden bg-white">
         
         {/* Tighter Headers */}
         <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-[#FAFAFA] border-b border-[#E7E5E4] text-[10px] font-bold text-[#a8a29e] uppercase tracking-wider">
            <div className="col-span-4">Interest Group</div>
            <div className="col-span-3">Primary</div>
            <div className="col-span-2 text-center">Visibility</div>
            <div className="col-span-3 pl-2">Channel</div>
         </div>

         {/* Compact Rows */}
         <div className="divide-y divide-[#F5F5F4]">
            {groups.map((group) => (
                <div key={group.id} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center hover:bg-[#FAFAFA]/50 transition">
                    
                    {/* Topics */}
                    <div className="col-span-4 flex flex-wrap gap-1">
                        {group.topics.map((topic, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-[#F5F5F4] text-[#57534e] text-[10px] font-bold rounded border border-[#E7E5E4]">{topic}</span>
                        ))}
                        {group.topics.length < 9 && (
                            <button onClick={() => addDummyTopic(group.id)} className="px-1.5 py-0.5 text-[#a8a29e] hover:text-[#1c1917] text-[10px] font-bold border border-dashed border-[#d6d3d1] rounded hover:bg-white">+ Add</button>
                        )}
                    </div>

                    {/* Primary Dropdown */}
                    <div className="col-span-3">
                        <select 
                            value={group.primary}
                            onChange={(e) => updatePrimary(group.id, e.target.value)}
                            className="w-full bg-[#F5F5F4] text-[#1c1917] text-[10px] font-bold px-2 py-1.5 rounded-lg outline-none cursor-pointer hover:bg-[#E7E5E4]"
                            disabled={group.topics.length === 0}
                        >
                            {group.topics.length === 0 ? <option>None</option> : null}
                            {group.topics.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    {/* Visibility Toggle */}
                    <div className="col-span-2 flex justify-center">
                        <button 
                            onClick={() => toggleVisibility(group.id)}
                            className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold transition ${group.isVisible ? "bg-[#1c1917] text-white" : "bg-white border border-[#E7E5E4] text-[#a8a29e]"}`}
                        >
                            {group.isVisible ? <>Show <Eye size={10} /></> : <>Hide <EyeOff size={10} /></>}
                        </button>
                    </div>

                    {/* Channel & Delete */}
                    <div className="col-span-3 flex items-center gap-2">
                        <input 
                            type="text" 
                            value={group.channelName}
                            onChange={(e) => updateChannelName(group.id, e.target.value)}
                            placeholder="Name..."
                            className="w-full bg-transparent text-xs text-[#57534e] font-medium outline-none border-b border-transparent hover:border-[#E7E5E4] focus:border-[#1c1917] px-1 py-0.5" 
                        />
                        {groups.length > 1 && (
                            <button onClick={() => removeGroup(group.id)} className="text-[#a8a29e] hover:text-red-500 transition"><Trash2 size={12} /></button>
                        )}
                    </div>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
}