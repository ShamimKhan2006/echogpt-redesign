'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn, Floating } from '@/components/animations/MotionWrappers';

const CTA = ({ darkMode }) => {
    return (
        <section id="get-started" className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-white text-gray-900'
        }`}>
            <div className="max-w-5xl mx-auto relative">
                
                {/* Floating ambient glow */}
                <Floating duration={7} yOffset={10} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-[500px] h-[300px] bg-gradient-to-r from-purple-600/25 via-indigo-600/20 to-pink-500/15 blur-[120px] rounded-full" />
                </Floating>

                <FadeIn direction="up" distance={30}>
                    <div className={`relative overflow-hidden rounded-3xl p-8 sm:p-14 border text-center shadow-2xl backdrop-blur-xl ${
                        darkMode 
                            ? 'bg-gradient-to-b from-[#12121a]/90 to-[#07070a]/90 border-purple-500/30 shadow-purple-950/30' 
                            : 'bg-gradient-to-b from-purple-50/70 to-indigo-50/50 border-purple-200 shadow-purple-500/10'
                    }`}>
                        <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold mb-6 ${
                            darkMode ? 'text-purple-400' : 'text-purple-700'
                        }`}>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Ready to transform your workflow?</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                            Experience One AI Workspace, <br />
                            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                Every Model Today.
                            </span>
                        </h2>

                        <p className={`max-w-xl mx-auto text-sm sm:text-base mb-9 leading-relaxed ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            Join thousands of developers, researchers, and creators maximizing daily output with EchoGPT. Free tier includes all frontier models.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link 
                                    href="/signup" 
                                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-purple-600/30 transition-all"
                                >
                                    <span>Get Started Free</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <a 
                                    href="#" 
                                    className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl border font-medium transition-all ${
                                        darkMode 
                                            ? 'border-gray-800 bg-gray-900/60 hover:bg-gray-800 text-gray-200 hover:border-gray-700' 
                                            : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-sm'
                                    }`}
                                >
                                    <Download className="w-4 h-4 text-purple-400" />
                                    <span>Add Chrome Extension</span>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default CTA;