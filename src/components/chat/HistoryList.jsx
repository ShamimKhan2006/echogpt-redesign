'use client';

import React from 'react';
import { MessageSquare, Trash2, Clock } from 'lucide-react';

const HistoryList = ({ darkMode }) => {
    const historyItems = [
        "React Component Optimization",
        "Summarize Web Page - TechCrunch",
        "Generate Resume Bullet Points",
        "Compare GPT-4o vs Claude 3.5"
    ];

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between px-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Recent History</span>
                </span>
            </div>
            {historyItems.map((title, idx) => (
                <button 
                    key={idx}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium transition-all group ${
                        darkMode 
                            ? 'text-gray-300 hover:bg-gray-800/80 hover:text-white' 
                            : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                    }`}
                >
                    <div className="flex items-center space-x-2.5 truncate">
                        <MessageSquare className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="truncate">{title}</span>
                    </div>
                    <Trash2 className="w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity" />
                </button>
            ))}
        </div>
    );
};

export default HistoryList;