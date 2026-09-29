'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

const FAQ = ({ darkMode }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is EchoGPT and how does it work?",
            answer: "EchoGPT is an advanced multi-model AI workspace that brings top frontier assistants like GPT-4o, Claude 3.5, and Gemini into a single unified dashboard and lightweight browser extension. You can chat with individual models or run multi-model queries simultaneously."
        },
        {
            question: "Can I use multiple AI models at the exact same time?",
            answer: "Yes! EchoGPT features parallel multi-model comparison. Type a single prompt, and watch GPT-4o, Claude 3.5, and Gemini respond in parallel so you can evaluate differences and pick the optimal output."
        },
        {
            question: "How does the Chrome Extension integrate with web pages?",
            answer: "The EchoGPT Chrome extension attaches to your browser toolbar and provides a persistent, lightweight popup. You can summarize pages in 0.3s, highlight text for instant explanations, and interact with web content without switching tabs."
        },
        {
            question: "How secure is my data and chat history?",
            answer: "We adhere to enterprise-grade data protection standards. We employ TLS 1.3 encryption in transit, zero persistent model-training data sharing, and full export/purge controls for your chat history."
        },
        {
            question: "Can I connect my own custom models or API keys?",
            answer: "Yes, EchoGPT Pro and Enterprise tiers allow you to plug in your own OpenAI, Anthropic, or OpenRouter keys, as well as connect to self-hosted open-source models like DeepSeek and Llama."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-[#fafafc] text-gray-900'
        }`}>
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <FadeIn direction="up" distance={20} className="text-center mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">
                        Got Questions?
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Everything you need to know about the product, extension, and privacy.
                    </p>
                </FadeIn>

                {/* Staggered Accordion Items */}
                <StaggerContainer staggerChildren={0.08} className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <StaggerItem key={index}>
                                <div 
                                    className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                                        darkMode 
                                            ? isOpen 
                                                ? 'bg-[#12121a] border-purple-500/40 shadow-lg shadow-purple-950/20' 
                                                : 'bg-[#12121a]/60 border-gray-800 hover:border-gray-700' 
                                            : isOpen 
                                                ? 'bg-white border-purple-300 shadow-md' 
                                                : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-medium text-base sm:text-lg focus:outline-none transition-colors"
                                    >
                                        <span className="pr-4">{faq.question}</span>
                                        <motion.div 
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                            className={`p-1.5 rounded-full shrink-0 ${
                                                darkMode ? 'bg-gray-800/80 text-purple-400' : 'bg-gray-100 text-purple-600'
                                            }`}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.div>
                                    </button>
                                    
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t ${
                                                    darkMode ? 'text-gray-400 border-gray-800/60' : 'text-gray-600 border-gray-100'
                                                }`}>
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default FAQ;