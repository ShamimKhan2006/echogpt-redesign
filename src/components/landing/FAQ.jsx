'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = ({ darkMode }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is EchoGPT and how does it work?",
            answer: "EchoGPT is an advanced multi-model AI workspace that aggregates top AI assistants like GPT-4o, Claude, and Gemini into a single unified platform and browser extension."
        },
        {
            question: "Can I use multiple AI models at the same time?",
            answer: "Yes! You can compare responses side-by-side using different AI models to pick the absolute best output for your specific requirements."
        },
        {
            question: "Is there a Chrome Extension available?",
            answer: "Yes, EchoGPT includes a powerful Chrome extension that lets you summarize web pages, highlight text for instant explanations, and query AI anywhere on the web."
        },
        {
            question: "How secure is my data and chat history?",
            answer: "We use high-grade encryption and secure protocols to protect your chats and data privacy, ensuring complete confidentiality."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
            darkMode ? 'bg-[#0b0b10] text-white' : 'bg-[#fafafc] text-gray-900'
        }`}>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">Got Questions?</span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index}
                                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                                    darkMode ? 'bg-[#12121a] border-gray-800' : 'bg-white border-gray-200 shadow-sm'
                                }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-5 text-left font-medium text-base focus:outline-none"
                                >
                                    <span>{faq.question}</span>
                                    <span className={`p-1 rounded-full ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className={`px-5 pb-5 text-sm leading-relaxed border-t pt-3 ${
                                        darkMode ? 'text-gray-400 border-gray-800/60' : 'text-gray-600 border-gray-100'
                                    }`}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;