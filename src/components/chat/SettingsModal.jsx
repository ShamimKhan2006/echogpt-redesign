'use client';

import React, { useEffect, useState } from 'react';
import { X, Settings, Shield, Bell, Key, Eye, EyeOff } from 'lucide-react';

const Toggle = ({ checked, onChange, darkMode }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
      checked ? 'bg-violet-600' : darkMode ? 'bg-white/15' : 'bg-zinc-300'
    }`}
  >
    <span
      className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
        checked ? 'translate-x-5' : ''
      }`}
    />
  </button>
);

const SettingsModal = ({ darkMode = false, isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [saveHistory, setSaveHistory] = useState(true);
  const [notifications, setNotifications] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const row = `flex items-center justify-between gap-4 rounded-2xl border p-4 ${
    darkMode ? 'border-white/[0.08] bg-white/[0.03]' : 'border-zinc-200 bg-zinc-50/70'
  }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md rounded-3xl border p-6 shadow-2xl ${
          darkMode
            ? 'border-white/10 bg-[#101018] text-white shadow-black/60'
            : 'border-zinc-200 bg-white text-zinc-900 shadow-zinc-900/20'
        }`}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                darkMode ? 'bg-violet-500/10 text-violet-400' : 'bg-violet-100 text-violet-600'
              }`}
            >
              <Settings size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Preferences</h3>
              <p className="text-xs text-zinc-500">Manage your workspace settings</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
              darkMode ? 'text-zinc-400 hover:bg-white/[0.08]' : 'text-zinc-500 hover:bg-zinc-100'
            }`}
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-3">
          {/* API key */}
          <div className={`space-y-3 rounded-2xl border p-4 ${
            darkMode ? 'border-white/[0.08] bg-white/[0.03]' : 'border-zinc-200 bg-zinc-50/70'
          }`}>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Key size={16} className="text-violet-500" />
              API key
            </div>

            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className={`h-11 w-full rounded-xl border pl-3.5 pr-11 text-sm outline-none transition ${
                  darkMode
                    ? 'border-white/10 bg-black/30 text-white placeholder:text-zinc-600 focus:border-violet-500/60'
                    : 'border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-violet-400'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowKey((v) => !v)}
                aria-label={showKey ? 'Hide key' : 'Show key'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-violet-500"
              >
                {showKey ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          {/* Privacy */}
          <div className={row}>
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-emerald-500" />
              <div>
                <div className="text-sm font-semibold">Save chat history</div>
                <div className="text-xs text-zinc-500">Keep conversations in your sidebar</div>
              </div>
            </div>
            <Toggle checked={saveHistory} onChange={setSaveHistory} darkMode={darkMode} />
          </div>

          {/* Notifications */}
          <div className={row}>
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-amber-500" />
              <div>
                <div className="text-sm font-semibold">Notifications</div>
                <div className="text-xs text-zinc-500">Get alerts when replies finish</div>
              </div>
            </div>
            <Toggle checked={notifications} onChange={setNotifications} darkMode={darkMode} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-7 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
              darkMode
                ? 'border-white/10 text-zinc-300 hover:bg-white/[0.06]'
                : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
            }`}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-600/30 transition hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98]"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;