'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, Bot, Cpu, Zap, Command, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn, Floating } from '@/components/animations/MotionWrappers';

const Hero = ({ darkMode }) => {
    const [activeTab, setActiveTab] = useState('gpt4');

    const sampleResponses = {
        gpt4: {
            model: "GPT-4o",
            tag: "Balanced & Creative",
            color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
            icon: Sparkles,
            text: "Hybrid search merges vector embeddings for semantic nuance with BM25 keyword matching for exact lexical terms. By applying Reciprocal Rank Fusion (RRF), you get the best of precision and recall."
        },
        claude: {
            model: "Claude 3.5 Sonnet",
            tag: "Deep Reasoning & Code",
            color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
            icon: Cpu,
            text: "When comparing dense vector embeddings to BM25, the critical tradeoff is domain-specific jargon vs semantic generalization. Dense representations capture synonyms, while BM25 guarantees rare keyword retrieval."
        },
        gemini: {
            model: "Gemini 1.5 Pro",
            tag: "Fast & Multi-modal",
            color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
            icon: Zap,
            text: "Utilizing Gemini's 2M token context, combining BM25 indices with dense vector search enables pinpoint accuracy across multi-thousand page documents without losing low-frequency identifiers."
        }
    };

    return (
        <section className={`relative overflow-hidden pt-12 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-[#fafafc] text-gray-900'
        }`}>
            {/* Ambient Background Glows with continuous floating motion */}
            <Floating duration={7} yOffset={12} className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-[620px] h-[360px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-pink-500/10 blur-[130px] rounded-full" />
            </Floating>

            <Floating duration={9} yOffset={-14} className="absolute top-1/3 right-10 pointer-events-none">
                <div className="w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full" />
            </Floating>
            
            <div className="max-w-6xl mx-auto text-center relative z-10">
                
                {/* Top Badge */}
                <FadeIn delay={0.1} direction="up" distance={16}>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold mb-6 shadow-sm cursor-default backdrop-blur-md"
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                        </motion.div>
                        <span>AI Remastered • Version 2.0</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                    </motion.div>
                </FadeIn>

                {/* Main Heading */}
                <FadeIn delay={0.2} direction="up" distance={24}>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
                        One AI Workspace... <br />
                        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Every Model.
                        </span>
                    </h1>
                </FadeIn>

                {/* Subtitle */}
                <FadeIn delay={0.3} direction="up" distance={20}>
                    <p className={`max-w-2xl mx-auto text-base sm:text-lg mb-10 font-normal leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Chat with multiple AI assistants, compare parallel responses in real time, summarize web pages, and boost your daily workflow with zero friction.
                    </p>
                </FadeIn>

                {/* Action Buttons */}
                <FadeIn delay={0.4} direction="up" distance={20}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <motion.div
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                href="/signup" 
                                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-xl shadow-purple-600/25 transition-all"
                            >
                                <span>Start Chatting Free</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <a 
                                href="#preview" 
                                className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl border font-medium transition-all ${
                                    darkMode 
                                        ? 'border-gray-800 bg-gray-900/60 hover:bg-gray-800 text-gray-200 hover:border-gray-700' 
                                        : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-sm'
                                }`}
                            >
                                <Play className="w-4 h-4 fill-current text-purple-400" />
                                <span>Live Demo & Preview</span>
                            </a>
                        </motion.div>
                    </div>
                </FadeIn>

                {/* Interactive Dynamic Product UI Mockup (Framer-Style Interactive Preview) */}
                <FadeIn delay={0.5} direction="up" distance={30}>
                    <div className="relative group">
                        {/* Floating Floating Badges around mockup */}
                        <Floating duration={5} yOffset={6} className="hidden sm:block absolute -top-5 -left-4 z-20">
                            <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border shadow-xl backdrop-blur-md text-xs font-semibold ${
                                darkMode ? 'bg-gray-900/90 border-purple-500/30 text-purple-300' : 'bg-white/95 border-purple-200 text-purple-700 shadow-purple-500/10'
                            }`}>
                                <Zap className="w-3.5 h-3.5 text-amber-400" />
                                <span>Parallel Multi-Model Comparison</span>
                            </div>
                        </Floating>

                        <Floating duration={6} yOffset={-6} className="hidden sm:block absolute -bottom-5 -right-4 z-20">
                            <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border shadow-xl backdrop-blur-md text-xs font-semibold ${
                                darkMode ? 'bg-gray-900/90 border-emerald-500/30 text-emerald-300' : 'bg-white/95 border-emerald-200 text-emerald-700 shadow-emerald-500/10'
                            }`}>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Realtime Response Aggregation</span>
                            </div>
                        </Floating>

                        <div className={`relative rounded-2xl border p-2.5 sm:p-3 shadow-2xl overflow-hidden transition-all duration-300 ${
                            darkMode ? 'border-gray-800 bg-[#12121a] shadow-purple-950/20' : 'border-gray-200 bg-white shadow-purple-500/5'
                        }`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-indigo-500/5 pointer-events-none" />
                            
                            <div className={`rounded-xl overflow-hidden border text-left p-4 sm:p-6 transition-colors ${
                                darkMode ? 'border-gray-800/80 bg-[#0b0b10]' : 'border-gray-200 bg-gray-50/70'
                            }`}>
                                {/* Window Chrome / Address bar */}
                                <div className={`flex items-center justify-between pb-4 border-b mb-5 ${
                                    darkMode ? 'border-gray-800' : 'border-gray-200'
                                }`}>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className={`px-4 py-1 rounded-lg text-xs font-mono flex items-center space-x-2 ${
                                        darkMode ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-white text-gray-500 border border-gray-200'
                                    }`}>
                                        <Command className="w-3 h-3" />
                                        <span>echogpt.workspace.app/multi-chat</span>
                                    </div>
                                    <div className="text-xs text-purple-400 font-mono flex items-center space-x-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="hidden sm:inline">Active</span>
                                    </div>
                                </div>
                                
                                {/* Simulated Interactive Multi-Model Switcher Tabs */}
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    <span className={`text-xs font-medium mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Compare models:
                                    </span>
                                    {Object.entries(sampleResponses).map(([key, item]) => {
                                        const Icon = item.icon;
                                        const isCurrent = activeTab === key;
                                        return (
                                            <button
                                                key={key}
                                                onClick={() => setActiveTab(key)}
                                                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                                    isCurrent
                                                        ? `${item.color} border shadow-sm`
                                                        : darkMode 
                                                            ? 'bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white' 
                                                            : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900'
                                                }`}
                                            >
                                                <Icon className="w-3.5 h-3.5" />
                                                <span>{item.model}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Active User Query Box */}
                                <div className={`p-3.5 rounded-xl border mb-4 text-xs sm:text-sm font-medium ${
                                    darkMode ? 'bg-gray-900/70 border-gray-800 text-gray-200' : 'bg-white border-gray-200 text-gray-800 shadow-sm'
                                }`}>
                                    <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 mb-1">Prompt:</div>
                                    &ldquo;How do vector embeddings compare with BM25 lexical search in modern retrieval architectures?&rdquo;
                                </div>

                                {/* Model Response Output with smooth transition */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.25 }}
                                        className={`p-4 rounded-xl border ${
                                            darkMode ? 'bg-[#12121a]/90 border-gray-800/80' : 'bg-white border-purple-100 shadow-sm'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-2.5">
                                            <div className="flex items-center space-x-2">
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded border ${sampleResponses[activeTab].color}`}>
                                                    {sampleResponses[activeTab].model}
                                                </span>
                                                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {sampleResponses[activeTab].tag}
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-mono text-purple-400">Streamed in 0.38s</span>
                                        </div>
                                        <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {sampleResponses[activeTab].text}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default Hero;