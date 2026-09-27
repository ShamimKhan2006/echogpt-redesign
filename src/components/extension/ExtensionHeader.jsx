import React from 'react';
import { Sparkles, X, Minus } from 'lucide-react';

export default function ExtensionHeader() {
    return (
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                    E
                </div>
                <span className="font-bold text-sm tracking-wide">EchoGPT Extension</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
                <Minus className="w-4 h-4 cursor-pointer hover:text-gray-600" />
                <X className="w-4 h-4 cursor-pointer hover:text-gray-600" />
            </div>
        </div>
    );
}