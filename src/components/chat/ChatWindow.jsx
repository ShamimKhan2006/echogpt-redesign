'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Mic, Paperclip, Bot, User, Sparkles } from 'lucide-react';

const SUGGESTIONS = [
  'Summarize this article for me',
  'Write a professional email',
  'Explain React hooks simply',
  'Give me 5 startup ideas',
];

const ChatWindow = ({ darkMode = false }) => {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hello! I am EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. How can I help today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text) => {
    const query = text.trim();
    if (!query || typing) return;

    setMessages((prev) => [...prev, { role: 'user', text: query }]);
    setInput('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `Here is the multi-model perspective for: "${query}". Processed successfully with maximum precision.`,
        },
      ]);
      setTyping(false);
    }, 1200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 160) + 'px';
  };

  const tool = `flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
    darkMode ? 'text-zinc-400 hover:bg-white/[0.08] hover:text-white' : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
  }`;

  const canSend = input.trim().length > 0 && !typing;

  return (
    <div
      className={`flex h-full flex-1 flex-col transition-colors duration-300 ${
        darkMode ? 'bg-[#08090d] text-white' : 'bg-[#f7f8fa] text-zinc-900'
      }`}
    >
      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 sm:px-6">
          {messages.map((msg, i) => {
            const isUser = msg.role === 'user';
            return (
              <div key={i} className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
                {!isUser && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-500/30">
                    <Bot size={17} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 sm:max-w-xl ${
                    isUser
                      ? 'rounded-br-md bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/20'
                      : darkMode
                      ? 'rounded-bl-md border border-white/[0.08] bg-white/[0.04] text-zinc-200'
                      : 'rounded-bl-md border border-zinc-200 bg-white text-zinc-800 shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>

                {isUser && (
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      darkMode ? 'bg-white/10 text-zinc-300' : 'bg-zinc-200 text-zinc-600'
                    }`}
                  >
                    <User size={17} />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing indicator */}
          {typing && (
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-500/30">
                <Bot size={17} />
              </div>
              <div
                className={`flex items-center gap-1.5 rounded-2xl rounded-bl-md border px-4 py-4 ${
                  darkMode ? 'border-white/[0.08] bg-white/[0.04]' : 'border-zinc-200 bg-white shadow-sm'
                }`}
              >
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Suggestions (only at start) */}
          {messages.length === 1 && !typing && (
            <div className="grid gap-2 pt-2 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode
                      ? 'border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:border-violet-500/40 hover:bg-white/[0.06]'
                      : 'border-zinc-200 bg-white text-zinc-700 shadow-sm hover:border-violet-300 hover:shadow-md'
                  }`}
                >
                  <Sparkles size={14} className="shrink-0 text-violet-500" />
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="mx-auto w-full max-w-3xl px-4 pb-5 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className={`rounded-2xl border p-2.5 transition-all duration-200 ${
            darkMode
              ? 'border-white/10 bg-white/[0.04] focus-within:border-violet-500/50 focus-within:shadow-[0_0_0_4px_rgba(139,92,246,0.10)]'
              : 'border-zinc-200 bg-white shadow-lg shadow-zinc-900/5 focus-within:border-violet-400 focus-within:shadow-[0_0_0_4px_rgba(139,92,246,0.10)]'
          }`}
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question or type a prompt..."
            className={`max-h-40 w-full resize-none bg-transparent px-3 py-2 text-sm leading-6 outline-none ${
              darkMode ? 'text-white placeholder:text-zinc-600' : 'text-zinc-900 placeholder:text-zinc-400'
            }`}
          />

          <div className="mt-1 flex items-center justify-between px-1">
            <div className="flex items-center gap-1">
              <button type="button" aria-label="Attach file" className={tool}>
                <Paperclip size={17} />
              </button>
              <button type="button" aria-label="Voice input" className={tool}>
                <Mic size={17} />
              </button>
            </div>

            <button
              type="submit"
              disabled={!canSend}
              aria-label="Send message"
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-white transition-all duration-200 active:scale-95 ${
                canSend
                  ? 'bg-gradient-to-br from-violet-600 to-indigo-600 shadow-md shadow-violet-600/30 hover:from-violet-500 hover:to-indigo-500'
                  : darkMode
                  ? 'cursor-not-allowed bg-white/10 text-zinc-600'
                  : 'cursor-not-allowed bg-zinc-200 text-zinc-400'
              }`}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-[11px] text-zinc-500">
          Press Enter to send, Shift + Enter for a new line
        </p>
      </div>
    </div>
  );
};

export default ChatWindow;