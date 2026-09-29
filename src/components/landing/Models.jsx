'use client';

import React from 'react';
import { Cpu, Sparkles, Zap, Box, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

const Models = ({ darkMode }) => {
    const aiModels = [
        {
            name: "GPT-4o",
            provider: "OpenAI",
            description: "Best for multimodal workflows, creative synthesis, and fast conversational reasoning.",
            badge: "Popular",
            badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
            icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
            border: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
            glow: "group-hover:bg-emerald-500/5"
        },
        {
            name: "Claude 3.5 Sonnet",
            provider: "Anthropic",
            description: "Exceptional code generation, nuance detection, complex technical writing, and logic.",
            badge: "Deep Logic",
            badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
            icon: <Cpu className="w-6 h-6 text-orange-400" />,
            border: "hover:border-orange-500/50 hover:shadow-orange-500/10",
            glow: "group-hover:bg-orange-500/5"
        },
        {
            name: "Gemini 1.5 Pro",
            provider: "Google",
            description: "Massive 2M token context window, deep research analysis, and multimodal ingestion.",
            badge: "2M Context",
            badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
            icon: <Zap className="w-6 h-6 text-blue-400" />,
            border: "hover:border-blue-500/50 hover:shadow-blue-500/10",
            glow: "group-hover:bg-blue-500/5"
        },
        {
            name: "Custom / Open",
            provider: "DeepSeek & Llama",
            description: "Deploy private enterprise models, DeepSeek R1, Llama 3, or customized fine-tunes.",
            badge: "Flexible",
            badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
            icon: <Box className="w-6 h-6 text-purple-400" />,
            border: "hover:border-purple-500/50 hover:shadow-purple-500/10",
            glow: "group-hover:bg-purple-500/5"
        }
    ];

    return (
        <section id="models" className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-[#fafafc] text-gray-900'
        }`}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <FadeIn direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">
                        AI Model Suite
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        One workspace, Multiple AI perspectives.
                    </h2>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Choose the right AI for every task and get the best results with specialized frontier models.
                    </p>
                </FadeIn>

                {/* Staggered Grid */}
                <StaggerContainer staggerChildren={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aiModels.map((model, index) => (
                        <StaggerItem key={index}>
                            <motion.div 
                                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                                className={`p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden h-full flex flex-col justify-between ${model.border} ${
                                    darkMode 
                                        ? 'bg-[#12121a] border-gray-800' 
                                        : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                                }`}
                            >
                                <div className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${model.glow}`} />

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <motion.div 
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform ${
                                                darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-100'
                                            }`}
                                        >
                                            {model.icon}
                                        </motion.div>
                                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${model.badgeColor}`}>
                                            {model.badge}
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-purple-400 uppercase tracking-wider block">
                                        {model.provider}
                                    </span>
                                    <h3 className="text-xl font-bold mt-1 mb-2">
                                        {model.name}
                                    </h3>
                                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {model.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-800/40 flex items-center text-xs font-medium text-purple-400 group-hover:translate-x-1 transition-transform">
                                    <span>Available in workspace</span>
                                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default Models;