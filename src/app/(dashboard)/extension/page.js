"use client";

import ExtensionChat from "@/components/extension/ExtensionChat";
import ExtensionHeader from "@/components/extension/ExtensionHeader";


import ExtensionQuickActions from "@/components/extension/ExtensionQuickActions";
import PageContextToggle from "@/components/extension/PageContextToggle";




export default function ExtensionPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-5xl">
        
        {/* Page Title */}
        <div className="mb-8 text-center">
          <span className="mb-3 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
            Chrome Extension
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            EchoGPT Browser Assistant
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Get instant AI assistance while browsing the web.
            Ask questions, summarize pages, rewrite content and more.
          </p>
        </div>

        {/* Extension Window */}
        <div className="mx-auto max-w-[430px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
          
          <ExtensionHeader />

          <PageContextToggle/>

          <ExtensionChat/>
          
        <ExtensionQuickActions/>

       

        </div>
      </div>
    </main>
  );
}