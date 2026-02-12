"use client";

import TopicRow from "../TopicRow";
import SingleCard from "../single-card"; // 👈 Ensure this is imported if you use it inside TopicRow, otherwise TopicRow needs updating

// Mock Data Helper
const generateCards = (topic: string) => {
  return Array.from({ length: 6 }).map((_, i) => ({
    id: `${topic}-${i}`,
    name: i % 2 === 0 ? "Sarah Designer" : "Devon Lewis",
    handle: i % 2 === 0 ? "@sarah_ux" : "@dev_lewis",
    views: "1.2k",
    likes: 69,
    posts: 12,
    description: `Exploring the best practices in and I am very much interested to learn a lot in this ${topic}.`,
    createdAt: "2h ago",
    channelName: topic,
    // 👇 Random image for back of card
    mediaUrl: i % 2 === 0 
      ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"
      : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    mediaType: "image"
  }));
};

const TOPICS = [
  "Technology", "Design Systems", "Startups", 
  "AI & ML", "Web3", "Productivity", 
  "Health", "Venture Capital", "Marketing"
];

export default function Feed() {
  return (
    <div className="flex flex-col gap-8 pb-10 animate-in fade-in duration-500">
      {TOPICS.map((topic) => (
        <TopicRow 
          key={topic} 
          topic={topic} 
          cards={generateCards(topic)} 
        />
      ))}
    </div>
  );
}