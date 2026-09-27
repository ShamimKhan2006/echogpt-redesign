'use client';

import React from 'react';
import { Sparkles, Check, Cpu } from 'lucide-react';

const ModelSelector = ({ darkMode, selectedModel, onSelect }) => {
    const models = [
        { id: 'gpt-4o', name: 'GPT-4o', desc: 'Best for complex reasoning & coding' },
        { id: 'claude-3.5', name: 'Claude 3.5 Sonnet', desc: 'Superior writing & analysis' },
        { id: 'gemini-pro', name: 'Gemini Pro', desc: 'Fast multi-modal processing' }
    ];

    return (
        <div className={`p-2 rounded-2xl border shadow-xl ${
            darkMode ? 'bg-[#12121a] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
        }`}>
            <div className="px-3 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider border-b border-gray-800/40 mb-2">
                Select AI Engine
            </div>
            <div className="space-y-1">
                {models.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => onSelect && onSelect(m.name)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between ${
                            darkMode ? 'hover:bg-gray-800/60' : 'hover:bg-gray-100'
                        }`}
                    >
                        <div>
                            <div className="text-sm font-semibold">{m.name}</div>
                            <div className={`text-[11px] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{m.desc}</div>
                        </div>
                        {selectedModel === m.name && <Check className="w-4 h-4 text-purple-400" />}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ModelSelector;