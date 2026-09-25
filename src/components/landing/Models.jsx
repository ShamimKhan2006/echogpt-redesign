'use client';

import React from 'react';
import { Cpu, Sparkles, Zap, Box } from 'lucide-react';

const Models = ({ darkMode }) => {
    const aiModels = [
        {
            name: "GPT-4o",
            provider: "OpenAI",
            description: "Best for general tasks, creative writing, and advanced reasoning.",
            badge: "Popular",
            icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
            border: "hover:border-emerald-500/50"
        },
        {
            name: "Claude 3.5",
            provider: "Anthropic",
            description: "Ideal for deep analysis, coding, and extensive text processing.",
            badge: "Advanced",
            icon: <Cpu className="w-6 h-6 text-orange-400" />,
            border: "hover:border-orange-500/50"
        },
        {
            name: "Gemini Pro",
            provider: "Google",
            description: "Ideal for research, multi-modal information processing, and coding.",
            badge: "Fast",
            icon: <Zap className="w-6 h-6 text-blue-400" />,
            border: "hover:border-blue-500/50"
        },
        {
            name: "Other Models",
            provider: "Custom / Open",
            description: "Access local and specialized open-source custom models easily.",
            badge: "Flexible",
            icon: <Box className="w-6 h-6 text-purple-400" />,
            border: "hover:border-purple-500/50"
        }
    ];

    return (
        <section id="models" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-[#fafafc] text-gray-900'
        }`}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">AI Models</span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        One workspace, Multiple AI perspectives.
                    </h2>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Choose the right AI for every task and get the best results with specialized models.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aiModels.map((model, index) => (
                        <div 
                            key={index}
                            className={`p-6 rounded-2xl border transition-all duration-300 relative group ${model.border} ${
                                darkMode 
                                    ? 'bg-[#12121a] border-gray-800' 
                                    : 'bg-white border-gray-200 shadow-sm'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                    darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-100'
                                }`}>
                                    {model.icon}
                                </div>
                                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                                    darkMode ? 'bg-purple-950/60 text-purple-300 border border-purple-800/50' : 'bg-purple-50 text-purple-600'
                                }`}>
                                    {model.badge}
                                </span>
                            </div>
                            <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">{model.provider}</span>
                            <h3 className="text-xl font-bold mt-1 mb-2">{model.name}</h3>
                            <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {model.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Models;