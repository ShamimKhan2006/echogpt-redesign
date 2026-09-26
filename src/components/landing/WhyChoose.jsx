'use client';

import React from 'react';
import { Layers, GitCompare, Zap, ShieldCheck, Cpu, Globe } from 'lucide-react';

const WhyChoose = ({ darkMode }) => {
    const reasons = [
        {
            icon: <Layers className="w-6 h-6 text-purple-400" />,
            title: "All-in-One AI Workspace",
            description: "No need to switch between different platforms. Access GPT-4o, Claude 3.5, Gemini Pro, and custom models in one unified dashboard[cite: 2]."
        },
        {
            icon: <GitCompare className="w-6 h-6 text-indigo-400" />,
            title: "Multi-Model Comparison",
            description: "Evaluate parallel outputs side-by-side from top-tier AI assistants to pick the absolute best response for your queries[cite: 2]."
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            title: "Smart Browser Extension",
            description: "Summarize active web pages, extract key insights, and interact with live internet contents without leaving your current tab[cite: 2]."
        },
        {
            icon: <Cpu className="w-6 h-6 text-emerald-400" />,
            title: "Context-Aware Memory",
            description: "Deep contextual awareness allows smarter follow-up prompts and accurate automated task executions."
        },
        {
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            title: "Lightning Fast Performance",
            description: "Optimized architecture ensures ultra-low latency and instant query processing speeds."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-pink-400" />,
            title: "Enterprise-Grade Security",
            description: "Advanced data protection and strict privacy protocols keep your chat history and research completely secure."
        }
    ];

    return (
        <section id="why-choose" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
            darkMode ? 'bg-[#07070a] text-white' : 'bg-[#fafafc] text-gray-900'
        }`}>
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Why Choose EchoGPT?
                    </h2>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Engineered to eliminate workflow friction and supercharge your daily productivity with artificial intelligence.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((item, index) => (
                        <div 
                            key={index} 
                            className={`p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-1.5 ${
                                darkMode 
                                    ? 'bg-[#0b0b10] border-gray-800 hover:border-purple-500/50' 
                                    : 'bg-white border-gray-200 hover:border-purple-400 shadow-sm'
                            }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                                darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-purple-50 border border-purple-100'
                            }`}>
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;