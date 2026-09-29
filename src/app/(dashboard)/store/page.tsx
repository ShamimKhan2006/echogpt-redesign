"use client";

import React, { useState } from "react";
import {
  Search, ShoppingBag, Sparkles, Image as ImageIcon, Video, FileText,
  Code2, Mic2, Wand2, Star, ArrowRight, Zap, Check, Crown,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const card =
  "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/[0.08] dark:bg-white/[0.025] dark:shadow-none";

const chipActive =
  "bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/30 dark:text-emerald-300 dark:ring-emerald-500/20";
const chipIdle =
  "text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-zinc-500 dark:hover:bg-white/[0.05] dark:hover:text-zinc-300";

const PRODUCTS = [
  { id: 1, name: "AI Image Pro", description: "Create high-quality images from simple text prompts.", category: "Image", icon: ImageIcon, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10", price: "12", rating: "4.9", users: "2.4k", pro: true },
  { id: 2, name: "AI Video Studio", description: "Turn ideas into cinematic AI-generated videos.", category: "Video", icon: Video, color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-500/10", price: "18", rating: "4.8", users: "1.8k", pro: true },
  { id: 3, name: "Smart Writer", description: "Generate professional content, emails and documents.", category: "Writing", icon: FileText, color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-500/10", price: "8", rating: "4.9", users: "3.2k", pro: false },
  { id: 4, name: "Code Assistant", description: "Build, refactor and debug code with AI assistance.", category: "Developer", icon: Code2, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10", price: "10", rating: "4.7", users: "4.1k", pro: true },
  { id: 5, name: "Voice Studio", description: "Generate natural AI voices for your creative projects.", category: "Audio", icon: Mic2, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10", price: "9", rating: "4.8", users: "1.3k", pro: false },
  { id: 6, name: "Magic Enhancer", description: "Upscale, enhance and improve your images instantly.", category: "Image", icon: Wand2, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10", price: "7", rating: "4.6", users: "980", pro: false },
];

const CATEGORIES = ["All", "Image", "Video", "Writing", "Developer", "Audio"];

const Page = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = PRODUCTS.filter((product) => {
    const q = search.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q);
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-[#08090d] dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
              <ShoppingBag size={16} />
              <span>AI Marketplace</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Store</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-zinc-400">
              Discover powerful AI tools, extensions and creative capabilities
              built to supercharge your workflow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className={`${card} flex items-center gap-2 rounded-xl px-4 py-2.5`}>
              <Zap size={16} className="text-amber-500 dark:text-amber-400" />
              <span className="text-xs text-gray-500 dark:text-zinc-400">Credits</span>
              <span className="text-sm font-bold">1,240</span>
            </div>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.12] via-transparent to-blue-500/[0.08] p-6 dark:border-violet-500/15 sm:p-8">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -bottom-20 left-1/2 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 dark:border-violet-400/10">
              <Sparkles size={13} className="text-violet-600 dark:text-violet-400" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                Featured Collection
              </span>
            </div>

            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Upgrade your workflow
              <span className="text-violet-600 dark:text-violet-400"> with AI.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 dark:text-zinc-400">
              Explore premium AI tools designed for creators, developers,
              professionals and modern teams.
            </p>

            <button className="mt-6 flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Explore Premium Tools
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-5">
          <div className="relative max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-600" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500/60 dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-emerald-500/40"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-7 flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                category === item ? chipActive : chipIdle
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Section Heading */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-zinc-200">Explore AI Tools</h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-zinc-600">Powerful tools for every workflow</p>
          </div>
          <span className="text-xs text-gray-500 dark:text-zinc-600">{filteredProducts.length} tools</span>
        </div>

        {/* Products */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className={`${card} group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md dark:hover:border-white/[0.14] dark:hover:bg-white/[0.04] dark:hover:shadow-none`}
              >
                {product.pro && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-100 px-2 py-1 text-[9px] font-semibold text-amber-700 dark:border-amber-400/10 dark:bg-amber-400/10 dark:text-amber-300">
                    <Crown size={10} />
                    PRO
                  </div>
                )}

                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${product.bg} ${product.color}`}>
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-semibold text-gray-800 dark:text-zinc-200">{product.name}</h3>
                <p className="mt-2 min-h-[40px] text-xs leading-5 text-gray-500">{product.description}</p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium text-gray-700 dark:text-zinc-300">{product.rating}</span>
                  </div>
                  <span className="text-gray-300 dark:text-zinc-700">•</span>
                  <span className="text-xs text-gray-500 dark:text-zinc-600">{product.users} users</span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-white/[0.06]">
                  <div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <span className="ml-1 text-[10px] text-gray-500 dark:text-zinc-600">/ month</span>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-[11px] font-semibold text-gray-700 transition hover:bg-emerald-500 hover:text-white dark:bg-white/[0.06] dark:text-zinc-300 dark:hover:bg-emerald-500 dark:hover:text-white">
                    <Check size={13} />
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className={`${card} flex min-h-[300px] flex-col items-center justify-center text-center`}>
            <div className="mb-4 rounded-2xl bg-gray-100 p-4 text-gray-400 dark:bg-white/[0.04] dark:text-zinc-600">
              <Search size={24} />
            </div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-zinc-300">No tools found</h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-zinc-600">Try searching for another AI tool.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/[0.07] via-transparent to-cyan-500/[0.05] p-6 dark:border-emerald-500/10">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Sparkles size={14} className="text-emerald-600 dark:text-emerald-400" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  Premium Workspace
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-zinc-200">Unlock more AI capabilities</h3>
              <p className="mt-1 text-xs text-gray-500">
                Get access to premium tools, higher limits and advanced AI features.
              </p>
            </div>
            <button className="flex w-fit items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-400">
              <Crown size={14} />
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;