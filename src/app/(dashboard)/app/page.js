"use client";


import ChatHeader from "@/components/chat/ChatHeader";
import ChatWindow from "@/components/chat/ChatWindow";

import HistoryList from "@/components/chat/HistoryList";



import { useState } from "react";

// ...baki import

export default function ChatPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="flex h-screen">
   
      <main className="flex flex-1 flex-col">
        <ChatHeader />
        <ChatWindow /> 
        <HistoryList/> 
      
      </main>
    </div>
  );
}