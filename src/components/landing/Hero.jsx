'use client';
import Link from 'next/link';
import React from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Hero = ({ darkMode }) => {
    return (
        <section className={`relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-[#fafafc] text-gray-900'
        }`}>
            {/* Background Glow Effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-6xl mx-auto text-center relative z-10">
                
                {/* Top Badge */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold mb-6 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>AI Remastered — Version 2.0</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                    One AI Workspace. <br />
                    <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                        Every Model.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className={`max-w-2xl mx-auto text-base sm:text-lg mb-10 font-normal leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                    Chat with multiple AI assistants, compare responses, summarize web pages, and get things done faster — all from one unified workspace.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link
                        href="/signin" 
                        className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-7 py-3.5 rounded-xl shadow-xl shadow-purple-600/25 transition-all transform active:scale-95"
                    >
                   
                        <span>Start Chatting</span>
                      
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    
                    <a 
                        href="#preview" 
                        className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl border font-medium transition-all ${
                            darkMode 
                                ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800 text-gray-200' 
                                : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-sm'
                        }`}
                    >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Explore Extension</span>
                    </a>
                </div>

                {/* Product UI Mockup Preview Box (Matches EchoGPT Screen) */}
                <div className={`relative rounded-2xl border p-2 shadow-2xl overflow-hidden transition-all ${
                    darkMode ? 'border-gray-800 bg-[#12121a]' : 'border-gray-200 bg-white shadow-purple-500/5'
                }`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />
                    <div className={`rounded-xl overflow-hidden border text-left p-6 sm:p-8 transition-colors ${
                        darkMode ? 'border-gray-800/50 bg-[#0b0b10]' : 'border-gray-200 bg-gray-50/80'
                    }`}>
                        <div className={`flex items-center justify-between pb-6 border-b ${
                            darkMode ? 'border-gray-800' : 'border-gray-200'
                        }`}>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className={`text-xs font-mono ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>echogpt.workspace.app</span>
                        </div>
                        
                        <div className="py-12 text-center">
                            <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl border flex items-center justify-center font-bold text-xl ${
                                darkMode ? 'bg-purple-600/20 border-purple-500/30 text-purple-400' : 'bg-purple-100 border-purple-200 text-purple-600'
                            }`}>
                                E
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>EchoGPT Interface Ready</h3>
                            <p className={`text-sm max-w-md mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Type a question, switch models instantly, or compare multi-model outputs side-by-side with ultimate precision.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;