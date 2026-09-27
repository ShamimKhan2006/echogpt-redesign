'use client';

import React from 'react';
import { 
  Plus, 
  Image as ImageIcon, 
  Video, 
  GitCompare, 
  Network, 
  History, 
  Store, 
  CheckSquare, 
  FileSearch, 
  FileText, 
  Settings, 
  Moon, 
  Sun,
  AlertCircle
} from 'lucide-react';
import HistoryList from './HistoryList';
import Link from 'next/link';

const Sidebar = ({ darkMode, toggleTheme }) => {
    const navItems = [
        { icon: <ImageIcon className="w-4 h-4 text-purple-400" />, label: "Image Studio", badge: "PRO" },
        { icon: <Video className="w-4 h-4 text-pink-400" />, label: "Video Studio", badge: "PRO" },
        { icon: <GitCompare className="w-4 h-4 text-indigo-400" />, label: "Compare" },
        { icon: <Network className="w-4 h-4 text-blue-400" />, label: "Connectors" },
        { icon: <History className="w-4 h-4 text-amber-400" />, label: "History" },
        { icon: <Store className="w-4 h-4 text-emerald-400" />, label: "Store" },
        { icon: <CheckSquare className="w-4 h-4 text-teal-400" />, label: "AI Tasks" },
        { icon: <FileSearch className="w-4 h-4 text-orange-400" />, label: "AI Job Analysis" },
        { icon: <FileText className="w-4 h-4 text-cyan-400" />, label: "AI SOP Builder" },
    ];

    return (
        <aside className={`w-64 h-screen border-r flex flex-col justify-between p-4 transition-colors duration-300 select-none ${
            darkMode ? 'bg-[#07070a] border-gray-800 text-white' : 'bg-[#fafafc] border-gray-200 text-gray-900'
        }`}>
            {/* Top Section */}
            <div className="space-y-6 overflow-y-auto">
                {/* Logo & New Chat */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2.5 px-2">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md">
                            E
                        </div>
                        <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            EchoGPT
                        </span>
                    </div>

                   <Link href="/extension">
                    <button className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-purple-600/25 transition-all transform active:scale-95">
                        <Plus className="w-4 h-4" />
                        <span>New Chat</span>
                    </button>
                   </Link>
                </div>

                {/* Engagement / Menu items */}
                <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 px-2 block mb-2">Engagement</span>
                    {navItems.map((item, idx) => (
                        <button 
                            key={idx}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                                darkMode ? 'text-gray-300 hover:bg-gray-800/80 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                            }`}
                        >
                            <div className="flex items-center space-x-3">
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                            {item.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                                    {item.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* History List section */}
                <div className="pt-2 border-t border-gray-800/40">
                    <HistoryList darkMode={darkMode} />
                </div>
            </div>

            {/* Bottom Upgrade Pro Box & Theme Toggle */}
            <div className="space-y-3 pt-4 border-t border-gray-800/40">
                <div className={`p-3.5 rounded-2xl border relative overflow-hidden ${
                    darkMode ? 'bg-gradient-to-br from-purple-950/50 to-indigo-950/30 border-purple-800/50' : 'bg-purple-50 border-purple-200'
                }`}>
                    <div className="flex items-center space-x-2 text-purple-400 mb-1.5">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-xs font-bold">Unlock Pro Features</span>
                    </div>
                    <p className={`text-[11px] mb-3 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        With statistics on your shot & profile performance available to Pros.
                    </p>
                    <button className="w-full py-2 rounded-xl bg-white text-gray-900 font-bold text-xs shadow hover:bg-gray-100 transition-colors">
                        Upgrade to Pro
                    </button>
                </div>

                <div className="flex items-center justify-between px-2">
                    <button 
                        onClick={toggleTheme}
                        className={`p-2 rounded-xl border transition-colors ${
                            darkMode ? 'bg-gray-900 border-gray-800 text-yellow-400' : 'bg-white border-gray-200 text-purple-600 shadow-sm'
                        }`}
                        title="Toggle Theme"
                    >
                        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <span className="text-[11px] text-gray-500 font-mono">v2.0.4 Pro</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;