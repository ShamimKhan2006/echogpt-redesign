'use client';

import React, { useState } from 'react';
import { Monitor, Smartphone, CheckCircle, Sparkles, Terminal, Activity, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn, Floating, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

const ProductPreview = ({ darkMode }) => {
  const [activeView, setActiveView] = useState('chat');

  return (
    <section
      id="preview"
      className={`py-24 px-4 sm:px-6 lg:px-8 border-y transition-colors duration-300 relative overflow-hidden ${
        darkMode
          ? "bg-[#07070a] border-gray-900 text-white"
          : "bg-white border-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left details */}
          <FadeIn direction="left" distance={30}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">
                Product Preview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                See EchoGPT in action.
              </h2>
              <p
                className={`text-sm sm:text-base mb-8 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                A clean, modern, and hyper-intuitive interface built for maximum
                efficiency. Toggle between side-by-side model views, prompt chaining,
                and instant internet retrieval with zero bloat.
              </p>

              <StaggerContainer staggerChildren={0.08} className="space-y-4">
                {[
                  {
                    title: "Clean distraction-free workspace",
                    desc: "Focus on your thoughts with a minimal, responsive canvas.",
                  },
                  {
                    title: "Parallel conversation streams",
                    desc: "Query GPT-4o, Claude, and Gemini simultaneously with one prompt.",
                  },
                  {
                    title: "Intelligent history & export",
                    desc: "Tag conversations, export markdown, or generate SOPs with one click.",
                  },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-start space-x-3.5">
                      <div className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <p
                          className={`text-xs mt-0.5 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Right Mockup Representation */}
          <FadeIn direction="right" distance={30}>
            <div className="relative">
              <Floating duration={6} yOffset={10} className="absolute -top-10 -right-10 pointer-events-none">
                <div className="w-48 h-48 bg-purple-500/15 rounded-full blur-3xl" />
              </Floating>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`p-4 sm:p-5 rounded-2xl border shadow-2xl relative overflow-hidden ${
                  darkMode
                    ? "bg-[#12121a] border-gray-800 shadow-purple-950/20"
                    : "bg-gray-50 border-gray-200 shadow-purple-500/5"
                }`}
              >
                {/* Inner Simulated App Screen */}
                <div
                  className={`rounded-xl p-5 border ${
                    darkMode
                      ? "bg-[#0b0b10] border-gray-800/80"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <div
                    className={`flex items-center justify-between pb-4 mb-4 border-b ${
                      darkMode ? "border-gray-800/60" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    
                    {/* View Switcher Pills */}
                    <div className="flex bg-gray-900/60 p-1 rounded-lg border border-gray-800/80 text-[11px]">
                      <button
                        onClick={() => setActiveView('chat')}
                        className={`px-2.5 py-0.5 rounded-md font-medium transition-all ${
                          activeView === 'chat'
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Parallel View
                      </button>
                      <button
                        onClick={() => setActiveView('analytics')}
                        className={`px-2.5 py-0.5 rounded-md font-medium transition-all ${
                          activeView === 'analytics'
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Tokens & Speed
                      </button>
                    </div>

                    <span
                      className={`text-[11px] font-mono hidden sm:inline ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                    >
                      EchoGPT Pro
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {activeView === 'chat' ? (
                      <motion.div
                        key="chat"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="space-y-3.5"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-semibold text-emerald-400">Comparing 2 Models Live</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className={`p-3 rounded-xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                            <div className="font-semibold text-purple-400 mb-1 flex items-center justify-between">
                              <span>GPT-4o</span>
                              <span className="text-[10px] text-gray-500">230 t/s</span>
                            </div>
                            <p className={`text-[11px] ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              Concise summary highlighting structural strengths and quantitative differences.
                            </p>
                          </div>
                          <div className={`p-3 rounded-xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                            <div className="font-semibold text-amber-400 mb-1 flex items-center justify-between">
                              <span>Claude 3.5</span>
                              <span className="text-[10px] text-gray-500">190 t/s</span>
                            </div>
                            <p className={`text-[11px] ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              In-depth algorithmic analysis featuring benchmark breakdown and edge cases.
                            </p>
                          </div>
                        </div>

                        <div
                          className={`p-3 rounded-lg border text-xs mt-3 ${
                            darkMode
                              ? "bg-purple-900/10 border-purple-500/20 text-purple-300"
                              : "bg-purple-50 border-purple-200 text-purple-800"
                          }`}
                        >
                          ✨ Side-by-side comparison completed with 100% token consistency.
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="analytics"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="space-y-3 py-2 text-xs"
                      >
                        <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Avg First Token Latency</span>
                          <span className="font-mono font-bold text-emerald-400">180ms</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Context Window Cache Hit</span>
                          <span className="font-mono font-bold text-purple-400">94.2%</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Cost Efficiency Index</span>
                          <span className="font-mono font-bold text-indigo-400">3.8x Saved</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
