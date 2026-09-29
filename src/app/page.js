"use client";

import React, { useState, useEffect } from "react";
import Navber from "@/components/landing/Navber";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ExtensionSection from "@/components/landing/ExtensionSection";
import Models from "@/components/landing/Models";
import WhyChoose from "@/components/landing/WhyChoose";
import ProductPreview from "@/components/landing/ProductPreview";
import TrustStrip from "@/components/landing/TrustStrip";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme from localStorage and synchronize document.documentElement class
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        // This sync preserves the server-rendered default until browser storage is available.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      } else if (savedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        // Default to dark mode if no saved preference
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    } catch {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const nextMode = !prev;
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", nextMode);
      }
      try {
        localStorage.setItem("theme", nextMode ? "dark" : "light");
      } catch {}
      return nextMode;
    });
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-[#0b0b10] text-white" : "bg-white text-gray-900"}`}
    >
      <Navber darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <ExtensionSection darkMode={darkMode} />
      <Models darkMode={darkMode} />
      <WhyChoose darkMode={darkMode} />
      <ProductPreview darkMode={darkMode} />
      <TrustStrip darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <CTA darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </main>
  );
}
