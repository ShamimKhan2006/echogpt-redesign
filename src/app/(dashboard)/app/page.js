"use client";

import Sidebar from "@/components/chat/Sidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatWindow from "@/components/chat/ChatWindow";

import HistoryList from "@/components/chat/HistoryList";
import ModelSelector from "@/components/chat/ModelSelector";
import QuickActions from "@/components/chat/QuickActions";
import SettingsModal from "@/components/chat/SettingsModal";



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
        {/* <ModelSelector/>  */}
        {/* * <QuickActions/> 
        <SettingsModal/>  */}
        {/* HistoryList, ModelSelector, QuickActions, SettingsModal */}
      </main>
    </div>
  );
}