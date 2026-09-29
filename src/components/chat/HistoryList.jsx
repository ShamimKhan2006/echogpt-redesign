'use client';

import React, { useState } from 'react';
import { MessageSquare, Trash2, Clock, Plus } from 'lucide-react';

const INITIAL_ITEMS = [
  'React Component Optimization',
  'Summarize Web Page - TechCrunch',
  'Generate Resume Bullet Points',
  'Compare GPT-4o vs Claude 3.5',
];

const HistoryList = ({ darkMode = false, onNewChat }) => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [active, setActive] = useState(0);

  const remove = (e, idx) => {
    e.stopPropagation();
    setItems((prev) => prev.filter((_, i) => i !== idx));
    setActive(0);
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={onNewChat}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-600/30 transition-all hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98]"
      >
        <Plus size={16} />
        New chat
      </button>

      <div>
        <div className="mb-2 flex items-center gap-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-violet-500">
          <Clock size={13} />
          Recent history
        </div>

        {items.length === 0 ? (
          <p className="px-2 py-6 text-center text-xs text-zinc-500">No conversations yet.</p>
        ) : (
          <div className="space-y-1">
            {items.map((title, idx) => {
              const isActive = active === idx;
              return (
                <div
                  key={title}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(idx)}
                  onKeyDown={(e) => e.key === 'Enter' && setActive(idx)}
                  className={`group flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'bg-violet-500/15 text-white ring-1 ring-violet-500/30'
                        : 'bg-violet-50 text-violet-900 ring-1 ring-violet-200'
                      : darkMode
                      ? 'text-zinc-400 hover:bg-white/[0.06] hover:text-white'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <MessageSquare
                      size={15}
                      className={`shrink-0 ${isActive ? 'text-violet-500' : 'text-zinc-400'}`}
                    />
                    <span className="truncate">{title}</span>
                  </div>

                  <button
                    type="button"
                    aria-label={`Delete ${title}`}
                    onClick={(e) => remove(e, idx)}
                    className="rounded-md p-1 text-zinc-400 opacity-0 transition hover:bg-red-500/10 hover:text-red-500 group-hover:opacity-100"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryList;