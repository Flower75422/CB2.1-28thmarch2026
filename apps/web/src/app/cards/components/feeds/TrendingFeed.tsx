"use client";

import CardsGrid from "../CardsGrid";
import SingleCard from "../single-card"; 

const TRENDING_CARDS = [
  { 
    id: "t1", 
    name: "Startup Daily", 
    handle: "@startups", 
    views: "15k", 
    likes: 890, 
    posts: 156, 
    description: "YCombinator just released their new request for startups list.", 
    createdAt: "1h ago",
    mediaUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=60",
    mediaType: "image"
  },
  { 
    id: "t2", 
    name: "AI Weekly", 
    handle: "@ai_news", 
    views: "12k", 
    likes: 640, 
    posts: 42, 
    description: "DeepMind's new model solves geometry problems at Olympiad level.", 
    createdAt: "2h ago",
    mediaUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    mediaType: "image"
  },
  { 
    id: "t3", 
    name: "Devon Lewis", 
    handle: "@dev_lewis", 
    views: "8k", 
    likes: 210, 
    posts: 15, 
    description: "Migrating from React to Svelte: My honest takeaways.", 
    createdAt: "4h ago",
    mediaUrl: "", 
    mediaType: "video"
  }
];

export default function TrendingFeed() {
  return (
    <div className="animate-in fade-in duration-500 w-full">
      <h2 className="text-lg font-bold text-[#1c1917] mb-4">Trending Now</h2>
      <CardsGrid>
        {TRENDING_CARDS.map((card: any) => (
          <SingleCard key={card.id} {...card} />
        ))}
      </CardsGrid>
    </div>
  );
}