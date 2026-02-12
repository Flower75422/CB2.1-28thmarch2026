"use client"; // Required for state (Menu toggle)

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Check,
  MoreVertical,
  Eye,
  Heart,
  FileText,
  User,
  Link as LinkIcon,
  Flag
} from "lucide-react";

interface SingleCardProps {
  id: string;
  name: string;
  handle: string;
  views: string;
  likes: number;
  posts: number;
  description: string;
  createdAt?: string;
}

export default function SingleCard({
  id,
  name,
  handle,
  views,
  likes,
  posts,
  description,
  createdAt = "7th Feb"
}: SingleCardProps) {
  
  // State for Dropdown Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // State for Follow Button (Visual only)
  const [isFollowing, setIsFollowing] = useState(false);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✂️ BIO TRUNCATION LOGIC (Max 120 chars)
  const truncatedBio = description.length > 120 
    ? description.slice(0, 120) + "..." 
    : description;

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-200 p-5 font-sans hover:shadow-md transition-all duration-200 flex flex-col gap-3 relative">

      {/* --- HEADER SECTION --- */}
      <div className="flex items-start justify-between">
        
        <div className="flex gap-3">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 shadow-inner border border-white">
               {name.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* User Info + Stats */}
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 text-sm leading-tight">{name}</h3>
            <p className="text-xs text-gray-500 font-medium mb-1.5">{handle}</p>

            {/* Stats */}
            <div className="flex items-center gap-3 text-gray-400 text-[11px] font-medium">
              <div className="flex items-center gap-1 cursor-default">
                <Eye size={12} /> <span>{views}</span>
              </div>
              <div className="w-[2px] h-[2px] rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-1 cursor-default">
                <Heart size={12} /> <span>{likes}</span>
              </div>
              <div className="w-[2px] h-[2px] rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-1 cursor-default">
                <FileText size={12} /> <span>{posts}</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- TOP RIGHT ACTIONS --- */}
        <div className="flex items-center gap-1 text-gray-400 relative">
          
          {/* 1. Follow Button (+) */}
          <button 
            onClick={() => setIsFollowing(!isFollowing)}
            className={`w-7 h-7 flex items-center justify-center rounded-full transition ${
              isFollowing 
                ? "bg-black text-white hover:bg-gray-800" 
                : "hover:bg-gray-50 hover:text-gray-900"
            }`}
            title={isFollowing ? "Unfollow" : "Follow"}
          >
            {isFollowing ? <Check size={14} /> : <Plus size={16} />}
          </button>

          {/* 2. Menu Button (3 Dots) */}
          <div ref={menuRef} className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-50 transition hover:text-gray-900"
            >
              <MoreVertical size={16} />
            </button>

            {/* 👇 THE DROPDOWN MENU */}
            {isMenuOpen && (
              <div className="absolute right-0 top-8 w-40 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                <div className="flex flex-col py-1">
                  <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-left">
                    <User size={14} /> About Account
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-left">
                    <LinkIcon size={14} /> Connection
                  </button>
                  <div className="h-px bg-gray-100 my-1"></div>
                  <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50 text-left">
                    <Flag size={14} /> Spam
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* --- BIO & CONTENT --- */}
      <div className="mt-1">
        {/* Fixed height ensures cards stay aligned even with less text */}
        <p className="text-gray-700 text-xs leading-relaxed font-normal min-h-[48px] break-words">
          {truncatedBio}
        </p>
      </div>

      {/* --- STATUS --- */}
      <div className="mt-auto">
        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide bg-gray-50 px-2 py-1 rounded-md">
          Active {createdAt}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 w-full"></div>

      {/* --- BOTTOM ACTION BUTTONS --- */}
      <div className="flex gap-2">
        <Link
          href={`/chats/${id}`}
          className="flex-1 flex items-center justify-center py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold transition"
        >
           Chat
        </Link>

        <button className="flex-1 flex items-center justify-center py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold transition">
           Channel
        </button>

        {/* 👇 UPDATED: Flip button is now Light/Normal style */}
        <button className="flex-1 flex items-center justify-center py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold transition">
           Flip
        </button>
      </div>

    </div>
  );
}