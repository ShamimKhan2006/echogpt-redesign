'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Zap,
  Shield,
  Sparkles,
  ArrowUpRight,
  MousePointer2,
  Copy,
  BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn, Floating, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

const ExtensionSection = ({ darkMode }) => {
  const [activeAction, setActiveAction] = useState('summarize');

  const extensionFeatures = [
    "Summarize any web page instantly with one click",
    "Explain selected text anywhere on your browser",
    "Access multi-model AI responses in a lightweight popup",
    "Lightning-fast context-aware browsing assistant",
  ];

  return (
    <section
      id="extensions"
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-[#0b0b10] text-white" : "bg-[#fafafc] text-gray-900"
      }`}
    >
      {/* Glow Accent with subtle floating motion */}
      <Floating duration={8} yOffset={15} className="absolute bottom-0 right-10 pointer-events-none">
        <div className="w-96 h-96 bg-purple-600/15 blur-[130px] rounded-full" />
      </Floating>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content & Features */}
          <FadeIn direction="left" distance={30}>
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold mb-6">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.639 0 8.4 3.761 8.4 8.4 0 .97-.163 1.901-.453 2.771H12.3c-.165 0-.3.135-.3.3v2.4c0 .165.135.3.3.3h3.582c-1.127 1.83-3.155 3.029-5.482 3.029-3.535 0-6.4-2.865-6.4-6.4s2.865-6.4 6.4-6.4c1.47 0 2.825.503 3.9 1.348l1.765-1.765C16.48 4.636 14.349 3.6 12 3.6zm0 6c-1.988 0-3.6 1.612-3.6 3.6s1.612 3.6 3.6 3.6 3.6-1.612 3.6-3.6-1.612-3.6-3.6-3.6z" />
                </svg>
                <span>Chrome Extension 2.0</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                AI that stays with you. <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Never leave the page.
                </span>
              </h2>

              <p
                className={`text-sm sm:text-base mb-8 leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Supercharge your browsing experience. Extract key insights, summarize
                lengthy articles, and chat with AI directly from your browser toolbar
                without switching tabs or losing your train of thought.
              </p>

              <StaggerContainer staggerChildren={0.08} className="space-y-3.5 mb-9">
                {extensionFeatures.map((feat, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {feat}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA Button */}
              <div className="flex items-center space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-purple-600/30 transition-all"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.639 0 8.4 3.761 8.4 8.4 0 .97-.163 1.901-.453 2.771H12.3c-.165 0-.3.135-.3.3v2.4c0 .165.135.3.3.3h3.582c-1.127 1.83-3.155 3.029-5.482 3.029-3.535 0-6.4-2.865-6.4-6.4s2.865-6.4 6.4-6.4c1.47 0 2.825.503 3.9 1.348l1.765-1.765C16.48 4.636 14.349 3.6 12 3.6zm0 6c-1.988 0-3.6 1.612-3.6 3.6s1.612 3.6 3.6 3.6 3.6-1.612 3.6-3.6-1.612-3.6-3.6-3.6z" />
                  </svg>
                  <span>Add to Chrome - It&apos;s Free</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </FadeIn>

          {/* Right: Simulated Interactive Extension Popup / UI Preview */}
          <FadeIn direction="right" distance={30}>
            <div className="relative">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-3xl border shadow-2xl relative ${
                  darkMode
                    ? "bg-[#12121a] border-gray-800 shadow-purple-950/20"
                    : "bg-white border-gray-200 shadow-purple-500/5"
                }`}
              >
                <div
                  className={`flex items-center justify-between pb-4 mb-5 border-b ${
                    darkMode ? "border-gray-800/80" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span
                    className={`text-xs font-mono font-medium ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                  >
                    EchoGPT Chrome Extension
                  </span>
                </div>

                {/* Simulated Extension Content Box */}
                <div
                  className={`p-4 rounded-xl border mb-4 space-y-3 transition-colors ${
                    darkMode
                      ? "bg-[#0b0b10] border-gray-800"
                      : "bg-purple-50/50 border-purple-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-purple-400" : "text-purple-700"}`}
                    >
                      Quick Mode
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-medium ${darkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-700"}`}
                    >
                      Tab Attached
                    </span>
                  </div>

                  {/* Mode switcher tabs */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveAction('summarize')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                        activeAction === 'summarize'
                          ? 'bg-purple-600 text-white shadow-sm'
                          : darkMode ? 'bg-gray-900 text-gray-400 hover:text-white' : 'bg-white text-gray-600'
                      }`}
                    >
                      Summarize
                    </button>
                    <button
                      onClick={() => setActiveAction('explain')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                        activeAction === 'explain'
                          ? 'bg-purple-600 text-white shadow-sm'
                          : darkMode ? 'bg-gray-900 text-gray-400 hover:text-white' : 'bg-white text-gray-600'
                      }`}
                    >
                      Explain Text
                    </button>
                  </div>

                  <div
                    className={`p-3 rounded-lg border text-xs font-medium transition-all ${
                      darkMode
                        ? "bg-purple-600/10 border-purple-500/20 text-purple-300"
                        : "bg-white border-purple-200/80 text-purple-900 shadow-sm"
                    }`}
                  >
                    {activeAction === 'summarize' ? (
                      <div>
                        ✨ <strong>Page summarized in 0.3s:</strong>
                        <p className="mt-1 font-normal opacity-90">
                          Key takeaways: 3 action points identified, comparative metrics extracted, ready to copy or export.
                        </p>
                      </div>
                    ) : (
                      <div>
                        🔍 <strong>Selection analyzed:</strong>
                        <p className="mt-1 font-normal opacity-90">
                          &ldquo;Multi-vector re-ranking ensures maximum contextual accuracy with sub-50ms latency.&rdquo;
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-1">
                    <div
                      className={`h-2.5 rounded w-full animate-pulse ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
                    />
                    <div
                      className={`h-2.5 rounded w-4/5 animate-pulse ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
                    />
                  </div>
                </div>

                {/* Mini Feature Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-xl border text-center cursor-default ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-800 text-gray-300"
                        : "bg-white border-gray-200 text-gray-700 shadow-sm"
                    }`}
                  >
                    <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <span className="text-xs font-medium">Instant Hotkeys</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-xl border text-center cursor-default ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-800 text-gray-300"
                        : "bg-white border-gray-200 text-gray-700 shadow-sm"
                    }`}
                  >
                    <Shield className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <span className="text-xs font-medium">Zero Data Leaks</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExtensionSection;
