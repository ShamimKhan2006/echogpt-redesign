'use client';

import React from 'react';
import { Layers, GitCompare, Globe, FileText, Zap, ShieldCheck } from 'lucide-react';

const Features = ({ darkMode }) => {
    const featuresList = [
        {
            icon: <Layers className="w-6 h-6 text-purple-400" />,
            title: "Multi-Model AI",
            description: "Switch seamlessly between GPT-4o, Claude 3.5, Gemini Pro, and custom models effortlessly."
        },
        {
            icon: <GitCompare className="w-6 h-6 text-indigo-400" />,
            title: "Compare Responses",
            description: "Evaluate parallel outputs side-by-side to find the absolute best response for your data."
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            title: "Web Intelligence",
            description: "Summarize active web pages, extract key insights, and interact with live internet contents."
        },
        {
            icon: <FileText className="w-6 h-6 text-pink-400" />,
            title: "Explain Selected Text",
            description: "Highlight text anywhere on your browser to get instant explanations, translations, or rewrites."
        },
        {
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            title: "Context-Aware",
            description: "Deep contextual memory allows smarter follow-ups and accurate task execution."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
            title: "Fast & Secure",
            description: "Enterprise-grade safety paired with lightning-fast query processing speeds."
        }
    ];

    return (
        <section id="products" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
            darkMode ? 'bg-[#07070a] text-white' : 'bg-white text-gray-900'
        }`}>
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Powerful Capabilities</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Everything you need to work smarter with AI
                    </h3>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Designed around your daily workflow to maximize productivity without complications.
                    </p>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresList.map((feature, index) => (
                        <div 
                            key={index} 
                            className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                                darkMode 
                                    ? 'bg-[#0b0b10] border-gray-800/80 hover:border-purple-500/40' 
                                    : 'bg-[#fafafc] border-gray-200 hover:border-purple-400 shadow-sm'
                            }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                                darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-sm border border-gray-100'
                            }`}>
                                {feature.icon}
                            </div>
                            <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;