"use client";

import { useState } from "react";
import ChatSidebar from "./components/sidebar/ChatSidebar";
import ChatArea from "./components/chat-box/ChatArea";
import CallModal from "./components/calls/CallModal";

export default function ChatsPage() {
  const [activeChatId, setActiveChatId] = useState<number | null>(1);
  const [callState, setCallState] = useState<{ isOpen: boolean; type: "audio" | "video" }>({
    isOpen: false,
    type: "audio"
  });

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#FDFBF7]">
      
      {/* 1. Sidebar */}
      <ChatSidebar 
        activeChatId={activeChatId} 
        onSelectChat={setActiveChatId} 
      />

      {/* 2. Main Chat Area */}
      {activeChatId ? (
        <ChatArea 
          onStartCall={(type) => setCallState({ isOpen: true, type })} 
        />
      ) : (
        <div className="flex-1 flex items-center justify-center text-[#a8a29e]">
          Select a chat to start messaging
        </div>
      )}

      {/* 3. Call Overlay (Hidden by default) */}
      <CallModal 
        isOpen={callState.isOpen} 
        type={callState.type} 
        onEndCall={() => setCallState({ ...callState, isOpen: false })} 
      />

    </div>
  );
}