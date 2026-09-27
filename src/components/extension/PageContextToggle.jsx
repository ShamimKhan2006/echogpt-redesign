import React from 'react';
import { Globe } from 'lucide-react';

export default function PageContextToggle() {
    return (
        <div className="px-4 py-2.5 bg-purple-50/60 border-b border-purple-100 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-purple-700 font-medium">
                <Globe className="w-3.5 h-3.5" />
                <span>Read current page context</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-purple-200/60 text-purple-800 font-bold text-[10px]">Active</span>
        </div>
    );
}