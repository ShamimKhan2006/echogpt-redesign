'use client';

import React from 'react';
import { Sparkles, FileText, Target, MessageSquareCode } from 'lucide-react';

const QuickActions = ({ darkMode }) => {
    const actions = [
        {
            icon: <Sparkles className="w-5 h-5 text-purple-400" />,
            title: "Unlock Your Creative Flow",
            desc: "Receive custom prompts reflecting your writing style."
        },
        {
            icon: <FileText className="w-5 h-5 text-indigo-400" />,
            title: "Build a Resume That Shines",
            desc: "Craft tailored experience matches for dream jobs."
        },
        {
            icon: <Target className="w-5 h-5 text-emerald-400" />,
            title: "Set a Challenge That Transforms You",
            desc: "Push out of your comfort zone with custom goals."
        },
        {
            icon: <MessageSquareCode className="w-5 h-5 text-amber-400" />,
            title: "Write Irresistible Social Content",
            desc: "Generate catchy captions and viral post ideas."
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto w-full my-6">
            {actions.map((act, idx) => (
                <div 
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer group hover:-translate-y-1 ${
                        darkMode 
                            ? 'bg-[#12121a] border-gray-800 hover:border-purple-500/50' 
                            : 'bg-white border-gray-200 hover:border-purple-400 shadow-sm'
                    }`}
                >
                    <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2.5 rounded-xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-purple-50'}`}>
                            {act.icon}
                        </div>
                        <h4 className="text-sm font-bold">{act.title}</h4>
                    </div>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {act.desc}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default QuickActions;