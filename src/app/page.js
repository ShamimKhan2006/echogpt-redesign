'use client';

import React, { useState } from 'react';
import Navber from '@/components/landing/Navber';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Models from '@/components/landing/Models';
import ProductPreview from '@/components/landing/ProductPreview';
import FAQ from '@/components/landing/FAQ';
import TrustStrip from '@/components/landing/TrustStrip';
import ExtensionSection from '@/components/landing/ExtensionSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <main className={`min-h-screen ${darkMode ? 'bg-[#0b0b10] text-white' : 'bg-white text-gray-900'}`}>
            {/* Navbar Pass props if needed, or handle inside */}
            <Navber />
            <Hero darkMode={darkMode} />
            <Features darkMode={darkMode} /> 
            <ExtensionSection/>
            <Models/>
            <ProductPreview/> 
            <TrustStrip/> 
            <FAQ/>
            <Footer/>
        </main>
    );
}
