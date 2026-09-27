'use client';

import React, { useState } from 'react';
import { Send, Mic, Paperclip, Sparkles, Bot, User } from 'lucide-react';

const ChatWindow = ({ darkMode }) => {
    const [messages, setMessages] = useState([
        { role: 'ai', text: "Hello! I am EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for your workflow." }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages(prev => [...prev, { role: 'user', text: input }]);
        const query = input;
        setInput('');
        
        // Simulated AI response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: `Here is the multi-model perspective for: "${query}". Processed successfully with maximum precision.` }]);
        }, 1000);
    };

    return (
        <div className={`flex-1 flex flex-col h-full transition-colors duration-300 ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-white text-gray-900'
        }`}>
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-w-4xl mx-auto w-full">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start space-x-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'ai' && (
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shrink-0 shadow-md">
                                <Bot className="w-4 h-4" />
                            </div>
                        )}
                        <div className={`max-w-xl rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                            msg.role === 'user' 
                                ? 'bg-purple-600 text-white rounded-br-none shadow-md shadow-purple-600/20' 
                                : darkMode ? 'bg-[#12121a] border border-gray-800 text-gray-200 rounded-bl-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}>
                            {msg.text}
                        </div>
                        {msg.role === 'user' && (
                            <div className="w-8 h-8 rounded-xl bg-gray-700 flex items-center justify-center text-white shrink-0">
                                <User className="w-4 h-4" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Prompt Input Box Area */}
            <div className="p-4 sm:p-6 max-w-4xl mx-auto w-full">
                <form onSubmit={handleSend} className={`p-3 rounded-2xl border transition-all ${
                    darkMode ? 'bg-[#12121a] border-gray-800 focus-within:border-purple-500/50' : 'bg-gray-50 border-gray-200 focus-within:border-purple-400 shadow-sm'
                }`}>
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a question or type a prompt..."
                        className={`w-full bg-transparent px-3 py-2 text-sm focus:outline-none ${
                            darkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'
                        }`}
                    />
                    <div className="flex items-center justify-between pt-2 px-1 border-t border-gray-800/40 mt-2">
                        <div className="flex items-center space-x-2">
                            <button type="button" className={`p-2 rounded-lg transition-colors ${darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-200'}`}>
                                <Paperclip className="w-4 h-4" />
                            </button>
                            <button type="button" className={`p-2 rounded-lg transition-colors ${darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-200'}`}>
                                <Mic className="w-4 h-4" />
                            </button>
                        </div>
                        <button 
                            type="submit"
                            className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-600/30 transition-all transform active:scale-95"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatWindow;