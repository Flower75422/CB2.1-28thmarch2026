"use client";

import { useState } from "react";
import { Plus, Search, Users, Hash, Globe, Lock, Settings } from "lucide-react";

// Assuming you have this component based on your logs. 
// If not, you can temporarily comment it out.
import CreateCommunityModal from "./components/CreateCommunityModal"; 

// 👇 THIS IS THE FIX: Correctly importing from 'InterestPoolModal'
import InterestPoolModal from "../cards/components/InterestPoolModal";

export default function CommunitiesPage() {
  const [activeTab, setActiveTab] = useState<"groups" | "channels">("groups");
  
  // Modal States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  
  // Data States
  const [userInterests, setUserInterests] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1c1917] font-sans">
      
      {/* --- HEADER --- */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-1">Communities</h1>
            <p className="text-sm text-[#a8a29e] font-medium">Connect with people who share your interests.</p>
          </div>

          <div className="flex items-center gap-3">
             {/* Filter by Interest Pool */}
            <button 
              onClick={() => setIsInterestModalOpen(true)}
              className="px-4 py-2 bg-white border border-[#E7E5E4] rounded-xl text-sm font-bold text-[#57534e] hover:bg-[#F5F5F4] transition shadow-sm"
            >
              Filter by Interest
            </button>

            <button 
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2 bg-[#1c1917] text-white rounded-xl font-bold text-sm hover:bg-black transition shadow-md hover:shadow-lg transform active:scale-95"
            >
              <Plus size={16} /> Create New
            </button>
          </div>
        </div>

        {/* --- TABS & SEARCH --- */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E7E5E4] pb-1">
          <div className="flex items-center gap-6 w-full sm:w-auto overflow-x-auto">
            <button 
              onClick={() => setActiveTab("groups")}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "groups" ? "border-[#1c1917] text-[#1c1917]" : "border-transparent text-[#a8a29e] hover:text-[#57534e]"
              }`}
            >
              <span className="flex items-center gap-2"><Globe size={16} /> Public Groups</span>
            </button>
            <button 
              onClick={() => setActiveTab("channels")}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "channels" ? "border-[#1c1917] text-[#1c1917]" : "border-transparent text-[#a8a29e] hover:text-[#57534e]"
              }`}
            >
              <span className="flex items-center gap-2"><Hash size={16} /> Channels</span>
            </button>
          </div>

          <div className="relative w-full sm:w-64 mb-2 sm:mb-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a8a29e]" size={16} />
            <input 
              type="text"
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#E7E5E4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E5E4] transition"
            />
          </div>
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {activeTab === "groups" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder Group Card 1 */}
            <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] hover:shadow-md transition cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <span className="bg-[#F5F5F4] text-[#78716c] text-[10px] font-bold px-2 py-1 rounded-lg uppercase">Public</span>
              </div>
              <h3 className="font-bold text-lg text-[#1c1917] group-hover:text-blue-600 transition-colors">Tech Enthusiasts</h3>
              <p className="text-sm text-[#78716c] mt-1 mb-4 line-clamp-2">A global community for discussing the latest in technology, AI, and software development.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#a8a29e]">
                <Users size={14} /> 12.5k Members
              </div>
            </div>

            {/* Placeholder Group Card 2 */}
            <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] hover:shadow-md transition cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center">
                  <Lock size={24} />
                </div>
                <span className="bg-[#F5F5F4] text-[#78716c] text-[10px] font-bold px-2 py-1 rounded-lg uppercase">Private</span>
              </div>
              <h3 className="font-bold text-lg text-[#1c1917] group-hover:text-purple-600 transition-colors">Founders Circle</h3>
              <p className="text-sm text-[#78716c] mt-1 mb-4 line-clamp-2">Exclusive group for startup founders to share insights and resources.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#a8a29e]">
                <Users size={14} /> 840 Members
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
             {/* Placeholder Channel Row */}
            <div className="bg-white p-4 rounded-xl border border-[#E7E5E4] flex items-center justify-between hover:bg-[#FDFBF7] transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-[#57534e]">
                  <Hash size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1c1917]">general-discussion</h3>
                  <p className="text-xs text-[#a8a29e]">Everything and anything.</p>
                </div>
              </div>
              <button className="px-4 py-1.5 bg-[#F5F5F4] text-[#57534e] text-xs font-bold rounded-lg hover:bg-[#E7E5E4]">Join</button>
            </div>
          </div>
        )}
      </div>

      {/* --- MODALS --- */}
      
      {/* 1. Create Community Modal */}
      {isCreateModalOpen && (
        <CreateCommunityModal 
          isOpen={isCreateModalOpen} 
          onClose={() => setIsCreateModalOpen(false)} 
        />
      )}

      {/* 2. Interest Pool Modal (REUSED) */}
      <InterestPoolModal 
        isOpen={isInterestModalOpen}
        onClose={() => setIsInterestModalOpen(false)}
        initialSelected={userInterests}
        onSave={setUserInterests}
      />
      
    </div>
  );
}