'use client';

import React from 'react';
import { ShieldCheck, Zap, Users, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import { StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

const TrustStrip = ({ darkMode }) => {
    const stats = [
        { icon: <Users className="w-5 h-5 text-purple-400" />, value: "150K+", label: "Active AI Users" },
        { icon: <Zap className="w-5 h-5 text-indigo-400" />, value: "10M+", label: "Queries Processed" },
        { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, value: "99.9%", label: "Uptime Guaranteed" },
        { icon: <Globe2 className="w-5 h-5 text-blue-400" />, value: "50+", label: "Countries Worldwide" }
    ];

    return (
        <section className={`py-14 border-y transition-colors duration-300 relative ${
            darkMode ? 'bg-[#07070a] border-gray-900 text-white' : 'bg-[#fafafc] border-gray-200 text-gray-900'
        }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <StaggerContainer staggerChildren={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <StaggerItem key={index}>
                            <motion.div 
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                                className="flex flex-col items-center cursor-default"
                            >
                                <div className={`p-3 rounded-2xl mb-3 ${
                                    darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-sm border border-gray-100'
                                }`}>
                                    {stat.icon}
                                </div>
                                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </h3>
                                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default TrustStrip;