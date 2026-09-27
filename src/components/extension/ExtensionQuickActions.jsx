import React from 'react';
import { Sparkles, FileText, Zap } from 'lucide-react';

export default function ExtensionQuickActions() {
    return (
        <div className="p-4 border-t border-gray-100 bg-gray-50/55 space-y-2">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Quick Prompts</span>
            <div className="grid grid-cols-2 gap-2">
                <button className="p-2 rounded-xl border border-gray-200 bg-white hover:border-purple-400 text-left text-xs font-medium text-gray-700 transition-all flex items-center space-x-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                    <span className="truncate">Summarize Page</span>
                </button>
                <button className="p-2 rounded-xl border border-gray-200 bg-white hover:border-purple-400 text-left text-xs font-medium text-gray-700 transition-all flex items-center space-x-1.5 shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span className="truncate">Explain Selection</span>
                </button>
            </div>
        </div>
    );
}