import React from 'react';
import { Bot, Send } from 'lucide-react';

export default function ExtensionChat() {
    return (
        <div className="p-4 flex-1 space-y-3 min-h-[180px] bg-white">
            <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white shrink-0 text-xs">
                    <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 rounded-2xl bg-gray-100 text-xs text-gray-800 leading-relaxed rounded-tl-none">
                    Hello! How can I assist you with this webpage today?
                </div>
            </div>
        </div>
    );
}