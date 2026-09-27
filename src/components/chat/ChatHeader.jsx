'use client';

import React from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  Share2, 
  Settings, 
  Sun, 
  Moon, 
  Cpu, 
  Globe 
} from 'lucide-react';

const ChatHeader = ({ darkMode, toggleTheme, currentModel = "GPT-4o", onSelectModel }) => {
    return (
        <header className={`w-full px-4 sm:px-6 py-3.5 border-b flex items-center justify-between sticky top-0 z-40 transition-colors duration-300 ${
            darkMode 
                ? 'bg-[#0b0b10]/90 backdrop-blur-md border-gray-800 text-white' 
                : 'bg-white/90 backdrop-blur-md border-gray-200 text-gray-900'
        }`}>
            
            {/* Left: Model Selector Dropdown & Status */}
            <div className="flex items-center space-x-3">
                <div className="relative group">
                    <button className={`flex items-center space-x-2.5 px-3.5 py-2 rounded-xl border text-sm font-medium transition-all ${
                        darkMode 
                            ? 'bg-gray-900/80 border-gray-800 text-gray-200 hover:border-purple-500/50' 
                            : 'bg-gray-50 border-gray-200 text-gray-800 hover:border-purple-400 shadow-sm'
                    }`}>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold">{currentModel}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                </div>

                {/* Workspace mode tag */}
                <div className={`hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${
                    darkMode ? 'bg-purple-950/40 text-purple-300 border border-purple-800/40' : 'bg-purple-50 text-purple-600'
                }`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Multi-Model Active</span>
                </div>
            </div>

            {/* Right: Actions, Theme Switch & User Profile */}
            <div className="flex items-center space-x-2 sm:space-x-3">
                
                {/* Share / Export Button */}
                <button 
                    title="Share Chat"
                    className={`p-2.5 rounded-xl border transition-colors ${
                        darkMode 
                            ? 'bg-gray-900/50 border-gray-800 text-gray-300 hover:bg-gray-800' 
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 shadow-sm'
                    }`}
                >
                    <Share2 className="w-4 h-4" />
                </button>

                {/* Theme Toggle Button */}
                <button 
                    onClick={toggleTheme}
                    title="Toggle Theme"
                    className={`p-2.5 rounded-xl border transition-colors ${
                        darkMode 
                            ? 'bg-gray-900/50 border-gray-800 text-yellow-400 hover:bg-gray-800' 
                            : 'bg-white border-gray-200 text-purple-600 hover:bg-gray-50 shadow-sm'
                    }`}
                >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Settings */}
                <button 
                    title="Settings"
                    className={`p-2.5 rounded-xl border transition-colors ${
                        darkMode 
                            ? 'bg-gray-900/50 border-gray-800 text-gray-300 hover:bg-gray-800' 
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 shadow-sm'
                    }`}
                >
                    <Settings className="w-4 h-4" />
                </button>

                {/* User Avatar */}
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 shadow-md flex items-center justify-center cursor-pointer">
                    <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center text-white font-bold text-xs">
                        AI
                    </div>
                </div>

            </div>
        </header>
    );
};

export default ChatHeader;