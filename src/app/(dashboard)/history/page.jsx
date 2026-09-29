"use client";

import React, { useMemo, useState } from "react";
import {
  Search, SlidersHorizontal, Clock3, Image as ImageIcon, Video, FileSearch,
  FileText, Sparkles, MoreHorizontal, Trash2, ExternalLink, CheckCircle2,
  XCircle, Loader2, CalendarDays,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const card =
  "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/[0.08] dark:bg-white/[0.025] dark:shadow-none";

const chipActive =
  "bg-violet-500/15 text-violet-700 ring-1 ring-violet-500/30 dark:text-violet-300 dark:ring-violet-500/20";
const chipIdle =
  "text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-zinc-500 dark:hover:bg-white/[0.05] dark:hover:text-zinc-300";

const iconBtn =
  "rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-600 dark:hover:bg-white/[0.06] dark:hover:text-zinc-200";

const STATUS_STYLES = {
  Completed: { icon: CheckCircle2, cls: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  Processing: { icon: Loader2, cls: "bg-amber-500/10 text-amber-600 dark:text-amber-400", spin: true },
  Failed: { icon: XCircle, cls: "bg-red-500/10 text-red-600 dark:text-red-400" },
};

const STATS = [
  { label: "Total Activities", value: "128", icon: Sparkles, cls: "bg-violet-500/10 text-violet-600 dark:text-violet-400", note: "+12%" },
  { label: "Completed", value: "116", icon: CheckCircle2, cls: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  { label: "Processing", value: "08", icon: Loader2, cls: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  { label: "Failed", value: "04", icon: XCircle, cls: "bg-red-500/10 text-red-600 dark:text-red-400" },
];

const HISTORY_DATA = [
  { id: 1, title: "Professional Product Image", type: "Image Generation", icon: ImageIcon, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10", status: "Completed", date: "Today, 2:45 PM", duration: "12 sec" },
  { id: 2, title: "Frontend Developer Job Analysis", type: "AI Job Analysis", icon: FileSearch, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10", status: "Completed", date: "Today, 12:30 PM", duration: "18 sec" },
  { id: 3, title: "Marketing Campaign Video", type: "Video Generation", icon: Video, color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-500/10", status: "Processing", date: "Yesterday, 8:15 PM", duration: "—" },
  { id: 4, title: "Software Engineer SOP", type: "SOP Builder", icon: FileText, color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-500/10", status: "Completed", date: "Yesterday, 5:40 PM", duration: "24 sec" },
  { id: 5, title: "E-commerce Hero Banner", type: "Image Generation", icon: ImageIcon, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10", status: "Failed", date: "Sep 27, 2026", duration: "8 sec" },
];

function StatusBadge({ status }) {
  const { icon: Icon, cls, spin } = STATUS_STYLES[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${cls}`}>
      <Icon size={12} className={spin ? "animate-spin" : ""} />
      {status}
    </span>
  );
}

const History = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredHistory = useMemo(() => {
    const q = search.toLowerCase();
    return HISTORY_DATA.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q);
      const matchesFilter =
        filter === "All" || item.status === filter || item.type.includes(filter);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-[#08090d] dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400">
              <Clock3 size={16} />
              <span>Activity Center</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">History</h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 dark:text-zinc-400">
              View and manage all your previous AI generations, analyses,
              tasks and workflows in one place.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="flex w-fit items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.07]">
              <CalendarDays size={17} />
              All Time
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.map(({ label, value, icon: Icon, cls, note }) => (
            <div key={label} className={`${card} p-5`}>
              <div className="mb-4 flex items-center justify-between">
                <div className={`rounded-xl p-2.5 ${cls}`}>
                  <Icon size={19} />
                </div>
                {note && <span className="text-xs text-emerald-600 dark:text-emerald-400">{note}</span>}
              </div>
              <p className="text-2xl font-bold">{value}</p>
              <p className="mt-1 text-xs text-gray-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500" />
            <input
              type="text"
              placeholder="Search your history..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500/60 dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-violet-500/40 dark:focus:bg-white/[0.05]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <SlidersHorizontal size={17} className="mr-1 shrink-0 text-gray-400 dark:text-zinc-500" />
            {["All", "Completed", "Processing", "Failed"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                  filter === item ? chipActive : chipIdle
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* History List */}
        <div className={`${card} overflow-hidden`}>
          <div className="hidden grid-cols-[1fr_180px_140px_100px] gap-4 border-b border-gray-200 px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:border-white/[0.06] dark:text-zinc-600 md:grid">
            <span>Activity</span>
            <span>Date</span>
            <span>Status</span>
            <span className="text-right">Action</span>
          </div>

          {filteredHistory.length > 0 ? (
            <div className="divide-y divide-gray-200 dark:divide-white/[0.06]">
              {filteredHistory.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group grid gap-4 px-5 py-5 transition hover:bg-gray-50 dark:hover:bg-white/[0.025] md:grid-cols-[1fr_180px_140px_100px] md:items-center"
                  >
                    {/* Activity */}
                    <div className="flex min-w-0 items-center gap-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-gray-800 dark:text-zinc-200">{item.title}</h3>
                        <p className="mt-1 text-xs text-gray-500 dark:text-zinc-600">
                          {item.type} · {item.duration}
                        </p>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="text-xs text-gray-500">{item.date}</div>

                    {/* Status */}
                    <div>
                      <StatusBadge status={item.status} />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-start gap-1 md:justify-end">
                      <button title="Open" className={iconBtn}>
                        <ExternalLink size={16} />
                      </button>
                      <button
                        title="Delete"
                        className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600 dark:text-zinc-600 dark:hover:bg-red-500/10 dark:hover:text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>
                      <button title="More" className={iconBtn}>
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex min-h-[300px] flex-col items-center justify-center px-5 text-center">
              <div className="mb-4 rounded-2xl bg-gray-100 p-4 text-gray-400 dark:bg-white/[0.04] dark:text-zinc-600">
                <Search size={25} />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-zinc-300">No activity found</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-zinc-600">Try changing your search or filter.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-500/[0.08] via-transparent to-purple-500/[0.06] p-5 dark:border-violet-500/10">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Sparkles size={15} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-semibold text-violet-700 dark:text-violet-300">AI WORKSPACE</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-zinc-200">Ready to create something new?</h3>
              <p className="mt-1 text-xs text-gray-500">Start a new AI task from your workspace.</p>
            </div>
            <button className="flex w-fit items-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-500/10 transition hover:bg-violet-400">
              <Sparkles size={15} />
              Create New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;