'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Globe,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollProgressBar } from '@/components/animations/MotionWrappers';

const Navber = ({ darkMode = true, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Products", href: "#products" },
        { name: "Extensions", href: "#extensions" },
        { name: "Models", href: "#models" },
        { name: "Why Us", href: "#why-choose" },
        { name: "Preview", href: "#preview" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <>
            <ScrollProgressBar />
            <motion.nav 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full border-b backdrop-blur-xl transition-colors duration-300 sticky top-0 z-50 ${
                    darkMode 
                        ? 'bg-[#0b0b10]/85 border-gray-800/80 text-white' 
                        : 'bg-white/85 border-gray-200/80 text-gray-900'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        
                        {/* Left: Logo & Brand */}
                        <div className="flex items-center space-x-3">
                            <motion.div 
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30 cursor-pointer"
                            >
                                <span className="text-white font-bold text-lg">E</span>
                            </motion.div>
                            <Link href="/" className="font-bold text-xl tracking-wide bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                EchoGPT
                            </Link>
                            
                            {/* Desktop Navigation Links */}
                            <div className="hidden md:flex items-center ml-8 space-x-6 text-sm font-medium">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        whileHover={{ y: -1 }}
                                        transition={{ duration: 0.15 }}
                                        className={`transition-colors relative py-1 ${
                                            darkMode 
                                                ? 'text-gray-300 hover:text-white' 
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Right: Actions & Theme Toggle */}
                        <div className="hidden md:flex items-center space-x-3">
                            {/* Theme Toggle Button */}
                            <motion.button 
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.92 }}
                                onClick={toggleTheme}
                                className={`p-2 rounded-xl transition-colors border ${
                                    darkMode 
                                        ? 'hover:bg-gray-800 text-yellow-400 border-gray-800 bg-gray-900/60' 
                                        : 'hover:bg-gray-100 text-purple-600 border-gray-200 bg-gray-50'
                                }`}
                                title="Toggle Theme"
                                aria-label="Toggle Theme"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={darkMode ? "dark" : "light"}
                                        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>

                            {/* Sign In */}
                            <motion.div whileHover={{ y: -1 }}>
                                <Link 
                                    href="/signin" 
                                    className={`text-sm font-medium px-3.5 py-2 rounded-xl transition-colors ${
                                        darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-700 hover:text-black hover:bg-gray-100'
                                    }`}
                                >
                                    Sign In
                                </Link>
                            </motion.div>

                            {/* Get Started CTA Button */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link
                                    href="/signup" 
                                    className="flex items-center space-x-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg shadow-purple-600/25 transition-all"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center space-x-2">
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleTheme}
                                className={`p-2 rounded-xl border ${
                                    darkMode 
                                        ? 'text-yellow-400 border-gray-800 bg-gray-900/60' 
                                        : 'text-purple-600 border-gray-200 bg-gray-50'
                                }`}
                                aria-label="Toggle Theme"
                            >
                                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </motion.button>

                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2 rounded-xl border ${
                                    darkMode 
                                        ? 'text-gray-300 border-gray-800 bg-gray-900/60 hover:bg-gray-800' 
                                        : 'text-gray-700 border-gray-200 bg-gray-50 hover:bg-gray-100'
                                }`}
                                aria-label="Open Menu"
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </motion.button>
                        </div>

                    </div>
                </div>

                {/* Mobile Menu dropdown with smooth Framer slide & fade */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className={`md:hidden overflow-hidden border-t ${
                                darkMode ? 'border-gray-800/80 bg-[#0b0b10]/95 backdrop-blur-xl' : 'border-gray-200/80 bg-white/95 backdrop-blur-xl'
                            }`}
                        >
                            <div className="px-4 pt-3 pb-5 space-y-2">
                                {navLinks.map((link) => (
                                    <motion.a 
                                        key={link.name}
                                        href={link.href} 
                                        onClick={() => setIsOpen(false)}
                                        whileTap={{ scale: 0.98 }}
                                        className={`block px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                                            darkMode ? 'text-gray-300 hover:bg-gray-800/60' : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                                
                                <div className="pt-3 flex flex-col space-y-2">
                                    <Link 
                                        href="/signin" 
                                        onClick={() => setIsOpen(false)}
                                        className={`w-full text-center py-2.5 rounded-xl font-medium border text-sm transition-colors ${
                                            darkMode 
                                                ? 'border-gray-800 text-white hover:bg-gray-800' 
                                                : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                                        }`}
                                    >
                                        Sign In
                                    </Link>
                                    <Link 
                                        href="/signup" 
                                        onClick={() => setIsOpen(false)}
                                        className="w-full text-center py-2.5 rounded-xl font-medium text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 hover:opacity-95 transition-opacity"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navber;