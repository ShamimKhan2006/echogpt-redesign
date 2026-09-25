'use client';

import React from 'react';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`border-t transition-colors duration-300 ${
            darkMode ? 'bg-[#07070a] border-gray-900 text-gray-400' : 'bg-[#fafafc] border-gray-200 text-gray-600'
        }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                    
                    {/* Brand Info */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-base">E</span>
                            </div>
                            <span className={`font-bold text-xl tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                EchoGPT
                            </span>
                        </div>
                        <p className="text-sm max-w-sm leading-relaxed">
                            One AI Workspace. Every Model. Chat with multiple AI assistants, compare responses, and streamline your workflow effortlessly[cite: 2].
                        </p>
                        <div className="flex items-center space-x-4 pt-2">
                            {/* Twitter / X SVG */}
                            <a href="#" className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-black'}`}>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            {/* GitHub SVG */}
                            <a href="#" className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-black'}`}>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </a>
                            {/* Discord SVG */}
                            <a href="#" className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-black'}`}>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Product
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#models" className="hover:text-purple-400 transition-colors">AI Models</a></li>
                            <li><a href="#preview" className="hover:text-purple-400 transition-colors">Workspace</a></li>
                            <li><a href="#extensions" className="hover:text-purple-400 transition-colors">Extension</a></li>
                            <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pro Features</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Resources
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
                            <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Company
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                </div>

                <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs ${
                    darkMode ? 'border-gray-900 text-gray-500' : 'border-gray-200 text-gray-500'
                }`}>
                    <p>&copy; {new Date().getFullYear()} EchoGPT. All rights reserved.</p>
                    <p className="mt-4 sm:mt-0">Designed for modern AI workflows with Next.js & Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;