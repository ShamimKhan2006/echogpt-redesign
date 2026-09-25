'use client';

import React from 'react';
import { ArrowRight, Sparkles, Download } from 'lucide-react';

const CTA = ({ darkMode }) => {
    return (
        <section id="get-started" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-white text-gray-900'
        }`}>
            <div className="max-w-5xl mx-auto">
                <div className={`relative overflow-hidden rounded-3xl p-8 sm:p-14 border text-center shadow-2xl ${
                    darkMode 
                        ? 'bg-gradient-to-b from-[#12121a] to-[#07070a] border-purple-500/20' 
                        : 'bg-gradient-to-b from-purple-50/50 to-indigo-50/30 border-purple-200'
                }`}>
                    {/* Glow background */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Ready to transform your workflow?</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
                        Experience One AI Workspace, <br />
                        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Every Model Today.
                        </span>
                    </h2>

                    <p className={`max-w-xl mx-auto text-sm sm:text-base mb-8 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Join thousands of professionals, developers, and writers maximizing productivity with EchoGPT.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="#" 
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-purple-600/30 transition-all transform active:scale-95"
                        >
                            <span>Get Started Free</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a 
                            href="#" 
                            className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl border font-medium transition-all ${
                                darkMode 
                                    ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800 text-gray-200' 
                                    : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-sm'
                            }`}
                        >
                            <Download className="w-4 h-4" />
                            <span>Add to Chrome</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;