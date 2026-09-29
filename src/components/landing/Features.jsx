'use client';

import React from 'react';
import { Layers, GitCompare, Globe, FileText, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

const Features = ({ darkMode }) => {
    const featuresList = [
        {
            icon: <Layers className="w-6 h-6 text-purple-400" />,
            title: "Multi-Model AI",
            description: "Switch seamlessly between GPT-4o, Claude 3.5, Gemini Pro, and custom models effortlessly.",
            accent: "from-purple-500/20 to-transparent"
        },
        {
            icon: <GitCompare className="w-6 h-6 text-indigo-400" />,
            title: "Compare Responses",
            description: "Evaluate parallel outputs side-by-side to find the absolute best response for your data.",
            accent: "from-indigo-500/20 to-transparent"
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            title: "Web Intelligence",
            description: "Summarize active web pages, extract key insights, and interact with live internet contents.",
            accent: "from-blue-500/20 to-transparent"
        },
        {
            icon: <FileText className="w-6 h-6 text-pink-400" />,
            title: "Explain Selected Text",
            description: "Highlight text anywhere on your browser to get instant explanations, translations, or rewrites.",
            accent: "from-pink-500/20 to-transparent"
        },
        {
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            title: "Context-Aware",
            description: "Deep contextual memory allows smarter follow-ups and accurate task execution.",
            accent: "from-amber-500/20 to-transparent"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
            title: "Fast & Secure",
            description: "Enterprise-grade safety paired with lightning-fast query processing speeds.",
            accent: "from-emerald-500/20 to-transparent"
        }
    ];

    return (
        <section id="products" className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative ${
            darkMode ? 'bg-[#07070a] text-white' : 'bg-white text-gray-900'
        }`}>
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <FadeIn direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">
                        Powerful Capabilities
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Everything you need to work smarter with AI
                    </h2>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Designed around your daily workflow to maximize productivity without complications.
                    </p>
                </FadeIn>

                {/* Staggered Grid Cards */}
                <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresList.map((feature, index) => (
                        <StaggerItem key={index}>
                            <motion.div 
                                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                                className={`p-6 rounded-2xl border transition-colors duration-300 relative group overflow-hidden h-full ${
                                    darkMode 
                                        ? 'bg-[#0b0b10] border-gray-800/80 hover:border-purple-500/50 shadow-lg shadow-purple-950/5' 
                                        : 'bg-[#fafafc] border-gray-200 hover:border-purple-400 shadow-sm hover:shadow-md'
                                }`}
                            >
                                {/* Subtle hover top gradient line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: 3 }}
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                                        darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-sm border border-gray-100'
                                    }`}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </section>
    );
};

export default Features;