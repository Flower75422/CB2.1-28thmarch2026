"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Import your sub-components
import Profile from "./components/Profile";
import Account from "./components/Account";
import Preferences from "./components/Preferences";
// import Privacy from "./components/Privacy"; // Create these files similarly
// import Security from "./components/Security"; 

export default function SettingsPage() {
  // STATE: Tracks which tab is active
  const [activeTab, setActiveTab] = useState("profile");

  // Helper function to render the correct component
  const renderContent = () => {
    switch (activeTab) {
      case "profile": return <Profile />;
      case "account": return <Account />;
      case "preferences": return <Preferences />;
      case "privacy": return <div>Privacy Settings (Coming Soon)</div>;
      case "security": return <div>Security Settings (Coming Soon)</div>;
      default: return <Profile />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      
      {/* 1. Header with Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/profile" 
          className="p-2 rounded-full hover:bg-white hover:shadow-sm transition text-[#78716c] hover:text-[#1c1917]"
        >
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-[#1c1917]">Settings</h1>
      </div>

      <div className="flex gap-8 items-start">
        
        {/* 2. Inner Sidebar (Navigation) */}
        <div className="w-64 flex-shrink-0 space-y-1">
          {["Profile", "Account", "Preferences", "Privacy", "Security"].map((item) => {
            const key = item.toLowerCase();
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left px-4 py-2.5 rounded-xl transition text-sm font-medium ${
                  isActive 
                    ? "bg-white text-[#1c1917] shadow-sm font-semibold" 
                    : "text-[#78716c] hover:bg-white/50 hover:text-[#1c1917]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* 3. Content Area (Dynamic) */}
        <div className="flex-1 bg-white rounded-[24px] p-8 shadow-sm min-h-[500px]">
          {renderContent()}
        </div>

      </div>
    </div>
  );
}