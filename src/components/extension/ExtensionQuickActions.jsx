import React from 'react';
import { Globe } from 'lucide-react';

export default function PageContextToggle({
    label = 'Read current page context',
    enabled = true,
    onToggle,
}) {
    return (
        <div className="px-4 py-2.5 bg-purple-50/60 border-b border-purple-100 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-purple-700 font-medium">
                <Globe className="w-3.5 h-3.5" />
                <span>{label}</span>
            </div>
            <button
                type="button"
                onClick={() => onToggle?.(!enabled)}
                className={`px-2 py-0.5 rounded font-bold text-[10px] transition-colors ${
                    enabled
                        ? 'bg-purple-200/60 text-purple-800'
                        : 'bg-gray-200 text-gray-500'
                }`}
            >
                {enabled ? 'Active' : 'Off'}
            </button>
        </div>
    );
}