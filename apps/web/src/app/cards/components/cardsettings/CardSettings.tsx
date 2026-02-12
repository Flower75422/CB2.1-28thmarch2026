"use client";

import { useState } from "react";
import { ArrowLeft, Save, Eye } from "lucide-react";
import ProfileSection from "./ProfileSection";
import DiscoverySection from "./DiscoverySection";
import CardPreview from "./CardPreview"; 

interface CardSettingsProps {
  onBack: () => void;
}

export default function CardSettings({ onBack }: CardSettingsProps) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    bio: ""
  });
  
  const [showPreview, setShowPreview] = useState(false);

  const handleProfileChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto -mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      
      {showPreview && (
        <CardPreview 
          name={formData.name}
          handle={formData.username}
          bio={formData.bio}
          primaryInterest="AI" 
          onClose={() => setShowPreview(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-4 px-2">
        <button 
          onClick={onBack}
          className="p-1.5 rounded-full bg-[#F5F5F4] text-[#78716c] hover:bg-white hover:text-[#1c1917] hover:shadow-sm transition"
        >
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-xl font-bold text-[#1c1917]">Card Settings</h1>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[24px] shadow-sm border border-[#E7E5E4] overflow-hidden mb-10">
        
        <div className="p-6 space-y-6">
          <ProfileSection 
            name={formData.name}
            username={formData.username}
            bio={formData.bio}
            onChange={handleProfileChange}
          />

          <hr className="border-[#F5F5F4]" />

          <DiscoverySection />
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#F5F5F4] bg-[#FAFAFA] flex justify-end gap-3">
            <button 
              onClick={() => setShowPreview(true)}
              className="px-5 py-2 bg-white border border-[#E7E5E4] text-[#1c1917] text-sm font-bold rounded-lg hover:bg-[#F5F5F4] transition shadow-sm flex items-center gap-2"
            >
              <Eye size={16} /> Show Preview
            </button>

            <button className="px-6 py-2 bg-[#1c1917] text-white rounded-lg text-sm font-bold hover:bg-[#292524] shadow-md shadow-stone-300 transform hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <Save size={16} /> Save Changes
            </button>
        </div>

      </div>
    </div>
  );
}