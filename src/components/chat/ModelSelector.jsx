'use client';

import React from 'react';
import { Check, Cpu, Sparkles, Zap } from 'lucide-react';

const MODELS = [
  { id: 'gpt-4o', name: 'GPT-4o', desc: 'Complex reasoning and coding', icon: Cpu, tag: 'Popular' },
  { id: 'claude-3.5', name: 'Claude 3.5 Sonnet', desc: 'Superior writing and analysis', icon: Sparkles, tag: 'New' },
  { id: 'gemini-pro', name: 'Gemini Pro', desc: 'Fast multi-modal processing', icon: Zap },
];

const ModelSelector = ({ darkMode = false, selectedModel, onSelect }) => {
  return (
    <div
      className={`w-80 overflow-hidden rounded-2xl border p-2 shadow-2xl backdrop-blur-xl ${
        darkMode
          ? 'border-white/10 bg-[#101018]/95 text-white shadow-black/50'
          : 'border-zinc-200 bg-white/95 text-zinc-900 shadow-zinc-900/10'
      }`}
    >
      <div className="px-3 pb-2 pt-1.5 text-[11px] font-semibold uppercase tracking-wider text-violet-500">
        Select AI engine
      </div>

      <div className="space-y-1">
        {MODELS.map((m) => {
          const Icon = m.icon;
          const active = selectedModel === m.name;

          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onSelect && onSelect(m.name)}
              className={`flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition-all duration-200 ${
                active
                  ? darkMode
                    ? 'bg-violet-500/15 ring-1 ring-violet-500/40'
                    : 'bg-violet-50 ring-1 ring-violet-200'
                  : darkMode
                  ? 'hover:bg-white/[0.06]'
                  : 'hover:bg-zinc-100'
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                  active
                    ? 'bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-500/30'
                    : darkMode
                    ? 'bg-white/[0.06] text-zinc-400'
                    : 'bg-zinc-100 text-zinc-500'
                }`}
              >
                <Icon size={16} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{m.name}</span>
                  {m.tag && (
                    <span className="rounded-md bg-violet-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-violet-500">
                      {m.tag}
                    </span>
                  )}
                </div>
                <div className="truncate text-xs text-zinc-500">{m.desc}</div>
              </div>

              {active && <Check size={16} className="shrink-0 text-violet-500" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ModelSelector;