'use client';

import React, { useState } from 'react';
import Navber from '@/components/landing/Navber';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Models from '@/components/landing/Models';
import ProductPreview from '@/components/landing/ProductPreview';
import FAQ from '@/components/landing/FAQ';
import TrustStrip from '@/components/landing/TrustStrip';

import Footer from '@/components/landing/Footer';
import WhyChoose from '@/components/landing/WhyChoose';
import ExtensionSection from '@/components/landing/ExtensionSection';

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <main className={`min-h-screen ${darkMode ? 'bg-[#0b0b10] text-white' : 'bg-white text-gray-900'}`}>
            {/* Navbar Pass props if needed, or handle inside */}
            <Navber darkMode={darkMode} />
            <Hero darkMode={darkMode} />
            <Features darkMode={darkMode} /> 
            <ExtensionSection darkMode={darkMode}/>
            <Models darkMode={darkMode}/> 
            <WhyChoose darkMode={darkMode}/>
            <ProductPreview darkMode={darkMode}/> 
            <TrustStrip darkMode={darkMode}/> 
            <FAQ darkMode={darkMode}/>
            <Footer darkMode={darkMode}/>
        </main>
    );
}
