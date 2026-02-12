"use client";

import CardsGrid from "../CardsGrid";
import SingleCard from "../single-card";

// Mock Data
const FOLLOWING_CARDS = [
  { 
    id: "f1", 
    name: "Mike Creator", 
    handle: "@mike_builds", 
    views: "4k", 
    likes: 210, 
    posts: 8, 
    description: "Day 12 of building my SaaS. Authentication is finally working! Check out the demo.", 
    createdAt: "Just now",
    mediaUrl: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_24fps.mp4", 
    mediaType: "video" 
  },
  { 
    id: "f2", 
    name: "Emma AI", 
    handle: "@emma_ai", 
    views: "900", 
    likes: 45, 
    posts: 3, 
    description: "Just published a new paper on transformer efficiency. Link in bio!", 
    createdAt: "10h ago",
    mediaUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60", 
    mediaType: "image"
  },
  { 
    id: "f3", 
    name: "Design Daily", 
    handle: "@design_daily", 
    views: "1.2k", 
    likes: 60, 
    posts: 200, 
    description: "Top 10 fonts you need to try in your next project. Swipe to see the list.", 
    createdAt: "1d ago",
    mediaUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60", 
    mediaType: "image"
  },
  { 
    id: "f4", 
    name: "Sarah Works", 
    handle: "@sarah_w", 
    views: "300", 
    likes: 12, 
    posts: 5, 
    description: "My home office setup tour 2026. What do you think?", 
    createdAt: "2d ago",
    mediaUrl: "", 
    mediaType: "image"
  }
];

export default function FollowingFeed() {
  return (
    <div className="animate-in fade-in duration-500 w-full">
      {/* Header Label */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-lg font-bold text-[#1c1917]">Your Following</h2>
        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
          {FOLLOWING_CARDS.length} New
        </span>
      </div>

      <CardsGrid>
        {FOLLOWING_CARDS.map((card: any) => (
          <SingleCard key={card.id} {...card} />
        ))}
      </CardsGrid>
    </div>
  );
}