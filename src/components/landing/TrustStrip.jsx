'use client';

import React from 'react';
import { ShieldCheck, Zap, Users, Globe2 } from 'lucide-react';

const TrustStrip = ({ darkMode }) => {
    const stats = [
        { icon: <Users className="w-5 h-5 text-purple-400" />, value: "150K+", label: "Active AI Users" },
        { icon: <Zap className="w-5 h-5 text-indigo-400" />, value: "10M+", label: "Queries Processed" },
        { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, value: "99.9%", label: "Uptime Guaranteed" },
        { icon: <Globe2 className="w-5 h-5 text-blue-400" />, value: "50+", label: "Countries Worldwide" }
    ];

    return (
        <section className={`py-12 border-y transition-colors duration-300 ${
            darkMode ? 'bg-[#07070a] border-gray-900 text-white' : 'bg-[#fafafc] border-gray-200 text-gray-900'
        }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`p-3 rounded-xl mb-3 ${
                                darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-sm border border-gray-100'
                            }`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                {stat.value}
                            </h3>
                            <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;