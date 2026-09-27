'use client';

import React from 'react';
import { X, Settings, Shield, Bell, User, Key } from 'lucide-react';

const SettingsModal = ({ darkMode, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className={`w-full max-w-md rounded-3xl border p-6 shadow-2xl relative ${
                darkMode ? 'bg-[#12121a] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
            }`}>
                <div className="flex items-center justify-between pb-4 border-b border-gray-800/40 mb-6">
                    <div className="flex items-center space-x-2">
                        <Settings className="w-5 h-5 text-purple-400" />
                        <h3 className="text-lg font-bold">Preferences & Settings</h3>
                    </div>
                    <button onClick={onClose} className={`p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-4">
                    <div className={`p-3 rounded-xl border flex items-center justify-between ${darkMode ? 'bg-gray-900/40 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center space-x-3">
                            <Key className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium">API Keys Integration</span>
                        </div>
                        <span className="text-xs text-purple-400 font-semibold cursor-pointer">Configure</span>
                    </div>

                    <div className={`p-3 rounded-xl border flex items-center justify-between ${darkMode ? 'bg-gray-900/40 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center space-x-3">
                            <Shield className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-medium">Data Privacy & History</span>
                        </div>
                        <span className="text-xs text-emerald-400 font-semibold cursor-pointer">Enabled</span>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-800/40 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium shadow-md shadow-purple-600/30 transition-all"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;