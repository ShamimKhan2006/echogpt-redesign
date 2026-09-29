'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Globe, 
  ChevronDown 
} from 'lucide-react';

const Navber = ({ darkMode = true, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`w-full border-b transition-colors duration-300 sticky top-0 z-50 ${
            darkMode 
                ? 'bg-[#0b0b10] border-gray-800 text-white' 
                : 'bg-white border-gray-200 text-gray-900'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Left: Logo & Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <span className="text-white font-bold text-lg">E</span>
                        </div>
                        <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            EchoGPT
                        </span>
                        
                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center ml-8 space-x-6 text-sm font-medium">
                            <a href="#products" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Products</a>
                            <a href="#extensions" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Extensions</a>
                            <a href="#pro" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Pro EchoGPT</a>
                            <a href="#faq" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>FAQ</a>
                        </div>
                    </div>

                    {/* Right: Actions & Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language / Globe Icon */}
                        <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                            <Globe className="w-5 h-5" />
                        </button>

                        {/* Theme Toggle Button */}
                        <button 
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-purple-600'}`}
                            title="Toggle Theme"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        {/* Sign In */}
                        <Link href="/signin" className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
                            Sign In
                        </Link>

                        {/* Get Started CTA Button */}
                        <Link
                            href="/signup" 
                            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg shadow-purple-600/25 transition-all transform active:scale-95"
                        >
                            <span>Get Started</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-3">
                        <button 
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg ${darkMode ? 'text-yellow-400' : 'text-purple-600'}`}
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu dropdown */}
            {isOpen && (
                <div className={`md:hidden px-4 pt-2 pb-4 space-y-3 border-t ${darkMode ? 'border-gray-800 bg-[#0b0b10]' : 'border-gray-200 bg-white'}`}>
                    <a href="#products" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Products</a>
                    <a href="#extensions" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Extensions</a>
                    <a href="#pro" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Pro EchoGPT</a>
                    <a href="#faq" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>FAQ</a>
                    
                    <div className="pt-2 flex flex-col space-y-2">
                        <Link 
                            href="/signin" 
                            className={`w-full text-center py-2.5 rounded-xl font-medium border text-sm transition-colors ${
                                darkMode 
                                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                                    : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                            }`}
                        >
                            Sign In
                        </Link>
                        <Link 
                            href="/signup" 
                            className="w-full text-center py-2.5 rounded-xl font-medium text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 hover:opacity-95 transition-opacity"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navber;