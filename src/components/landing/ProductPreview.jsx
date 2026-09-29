'use client';

import React from 'react';
import { Monitor, Smartphone, CheckCircle, Sparkles } from 'lucide-react';

const ProductPreview = ({ darkMode }) => {
    return (
        <section id="preview" className={`py-20 px-4 sm:px-6 lg:px-8 border-y transition-colors duration-300 ${
            darkMode ? 'bg-[#07070a] border-gray-900 text-white' : 'bg-white border-gray-100 text-gray-900'
        }`}>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left details */}
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">Product Preview</span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                            See EchoGPT in action.
                        </h2>
                        <p className={`text-sm sm:text-base mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            A clean, modern, and intuitive interface designed for maximum productivity and hyper-focused AI workflows.
                        </p>

                        <div className="space-y-4">
                            {[
                                { title: "Clean workspace", desc: "Minimal and distraction-free layout." },
                                { title: "Powerful conversations", desc: "Get answers, write code, or draft content instantly." },
                                { title: "Smart organization", desc: "Keep your chat history and research organized." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold">{item.title}</h4>
                                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Mockup Representation */}
                    <div className="relative">
                        <div className={`p-4 rounded-2xl border shadow-2xl relative overflow-hidden ${
                            darkMode ? 'bg-[#12121a] border-gray-800' : 'bg-gray-50 border-gray-200'
                        }`}>
                            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                            
                            {/* Inner Simulated App Screen */}
                            <div className={`rounded-xl p-5 border ${
                                darkMode ? 'bg-[#0b0b10] border-gray-800' : 'bg-white border-gray-200 shadow-sm'
                            }`}>
                                <div className={`flex items-center justify-between pb-4 mb-4 border-b ${
                                    darkMode ? 'border-gray-800/40' : 'border-gray-200'
                                }`}>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className={`text-[11px] font-mono ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>EchoGPT Pro Studio</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 bg-purple-600/20 rounded w-3/4 animate-pulse" />
                                    <div className={`h-3 rounded w-full ${darkMode ? 'bg-gray-700/30' : 'bg-gray-200'}`} />
                                    <div className={`h-3 rounded w-5/6 ${darkMode ? 'bg-gray-700/30' : 'bg-gray-200'}`} />
                                    <div className={`p-3 rounded-lg border text-xs mt-4 ${
                                        darkMode ? 'bg-purple-900/10 border-purple-500/20 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-800'
                                    }`}>
                                        ✨ "Summarized web page contents successfully in 0.4s."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductPreview;