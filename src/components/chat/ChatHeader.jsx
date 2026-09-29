'use client';

import React, { useState } from 'react';
import { Sparkles, ChevronDown, Share2, Settings, Sun, Moon } from 'lucide-react';
import ModelSelector from './ModelSelector';

const ChatHeader = ({
  darkMode = false,
  toggleTheme,
  currentModel = 'GPT-4o',
  onSelectModel,
  onOpenSettings,
}) => {
  const [open, setOpen] = useState(false);

  const iconBtn = `flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 active:scale-95 ${
    darkMode
      ? 'border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
      : 'border-zinc-200 bg-white text-zinc-600 shadow-sm hover:bg-zinc-50 hover:text-zinc-900'
  }`;

  return (
    <header
      className={`sticky top-0 z-40 flex w-full items-center justify-between border-b px-4 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-6 ${
        darkMode
          ? 'border-white/[0.08] bg-[#08090d]/80 text-white'
          : 'border-zinc-200/80 bg-white/80 text-zinc-900'
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 items-center gap-2.5 rounded-xl border px-3.5 text-sm font-semibold transition-all duration-200 ${
              darkMode
                ? 'border-white/10 bg-white/[0.04] text-zinc-100 hover:border-violet-500/50'
                : 'border-zinc-200 bg-white text-zinc-800 shadow-sm hover:border-violet-300'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {currentModel}
            <ChevronDown
              size={16}
              className={`text-zinc-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          {open && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
              <div className="absolute left-0 top-full z-50 mt-2">
                <ModelSelector
                  darkMode={darkMode}
                  selectedModel={currentModel}
                  onSelect={(name) => {
                    onSelectModel && onSelectModel(name);
                    setOpen(false);
                  }}
                />
              </div>
            </>
          )}
        </div>

        <div
          className={`hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium sm:flex ${
            darkMode
              ? 'border-violet-500/20 bg-violet-500/10 text-violet-300'
              : 'border-violet-200 bg-violet-50 text-violet-600'
          }`}
        >
          <Sparkles size={13} />
          Multi-Model Active
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button type="button" title="Share chat" aria-label="Share chat" className={iconBtn}>
          <Share2 size={17} />
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle theme"
          className={iconBtn}
        >
          {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-violet-600" />}
        </button>

        <button
          type="button"
          onClick={onOpenSettings}
          title="Settings"
          aria-label="Settings"
          className={iconBtn}
        >
          <Settings size={17} />
        </button>

        <div className="ml-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 text-xs font-bold text-white shadow-md shadow-violet-500/30 ring-2 ring-white/10 transition-transform hover:scale-105">
          AI
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;