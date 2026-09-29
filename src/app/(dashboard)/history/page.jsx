
"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Clock3,
  Image as ImageIcon,
  Video,
  FileSearch,
  FileText,
  Sparkles,
  MoreHorizontal,
  Trash2,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Loader2,
  CalendarDays,
} from "lucide-react";

const HISTORY_DATA = [
  {
    id: 1,
    title: "Professional Product Image",
    type: "Image Generation",
    icon: ImageIcon,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    status: "Completed",
    date: "Today, 2:45 PM",
    duration: "12 sec",
  },
  {
    id: 2,
    title: "Frontend Developer Job Analysis",
    type: "AI Job Analysis",
    icon: FileSearch,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    status: "Completed",
    date: "Today, 12:30 PM",
    duration: "18 sec",
  },
  {
    id: 3,
    title: "Marketing Campaign Video",
    type: "Video Generation",
    icon: Video,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    status: "Processing",
    date: "Yesterday, 8:15 PM",
    duration: "—",
  },
  {
    id: 4,
    title: "Software Engineer SOP",
    type: "SOP Builder",
    icon: FileText,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    status: "Completed",
    date: "Yesterday, 5:40 PM",
    duration: "24 sec",
  },
  {
    id: 5,
    title: "E-commerce Hero Banner",
    type: "Image Generation",
    icon: ImageIcon,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    status: "Failed",
    date: "Sep 27, 2026",
    duration: "8 sec",
  },
];

const History = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredHistory = useMemo(() => {
    return HISTORY_DATA.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        item.status === filter ||
        item.type.includes(filter);

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-violet-400">
              <Clock3 size={16} />
              <span>Activity Center</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              History
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
              View and manage all your previous AI generations, analyses,
              tasks and workflows in one place.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07]">
            <CalendarDays size={17} />
            All Time
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-violet-500/10 p-2.5 text-violet-400">
                <Sparkles size={19} />
              </div>

              <span className="text-xs text-emerald-400">+12%</span>
            </div>

            <p className="text-2xl font-bold">128</p>
            <p className="mt-1 text-xs text-zinc-500">Total Activities</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl">
            <div className="mb-4 rounded-xl bg-emerald-500/10 p-2.5 w-fit text-emerald-400">
              <CheckCircle2 size={19} />
            </div>

            <p className="text-2xl font-bold">116</p>
            <p className="mt-1 text-xs text-zinc-500">Completed</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl">
            <div className="mb-4 rounded-xl bg-amber-500/10 p-2.5 w-fit text-amber-400">
              <Loader2 size={19} />
            </div>

            <p className="text-2xl font-bold">08</p>
            <p className="mt-1 text-xs text-zinc-500">Processing</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl">
            <div className="mb-4 rounded-xl bg-red-500/10 p-2.5 w-fit text-red-400">
              <XCircle size={19} />
            </div>

            <p className="text-2xl font-bold">04</p>
            <p className="mt-1 text-xs text-zinc-500">Failed</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search your history..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/40 focus:bg-white/[0.05]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <SlidersHorizontal size={17} className="mr-1 shrink-0 text-zinc-500" />

            {["All", "Completed", "Processing", "Failed"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                  filter === item
                    ? "bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/20"
                    : "text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* History List */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          <div className="hidden grid-cols-[1fr_180px_140px_100px] gap-4 border-b border-white/[0.06] px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-600 md:grid">
            <span>Activity</span>
            <span>Date</span>
            <span>Status</span>
            <span className="text-right">Action</span>
          </div>

          {filteredHistory.length > 0 ? (
            <div className="divide-y divide-white/[0.06]">
              {filteredHistory.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="group grid gap-4 px-5 py-5 transition hover:bg-white/[0.025] md:grid-cols-[1fr_180px_140px_100px] md:items-center"
                  >
                    {/* Activity */}
                    <div className="flex min-w-0 items-center gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-zinc-200">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-zinc-600">
                          {item.type} · {item.duration}
                        </p>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="text-xs text-zinc-500">
                      {item.date}
                    </div>

                    {/* Status */}
                    <div>
                      {item.status === "Completed" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                          <CheckCircle2 size={12} />
                          Completed
                        </span>
                      )}

                      {item.status === "Processing" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-400">
                          <Loader2 size={12} className="animate-spin" />
                          Processing
                        </span>
                      )}

                      {item.status === "Failed" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-[11px] font-medium text-red-400">
                          <XCircle size={12} />
                          Failed
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-start gap-1 md:justify-end">
                      <button
                        title="Open"
                        className="rounded-lg p-2 text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-200"
                      >
                        <ExternalLink size={16} />
                      </button>

                      <button
                        title="Delete"
                        className="rounded-lg p-2 text-zinc-600 transition hover:bg-red-500/10 hover:text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>

                      <button
                        title="More"
                        className="rounded-lg p-2 text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-200"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex min-h-[300px] flex-col items-center justify-center px-5 text-center">
              <div className="mb-4 rounded-2xl bg-white/[0.04] p-4 text-zinc-600">
                <Search size={25} />
              </div>

              <h3 className="text-sm font-semibold text-zinc-300">
                No activity found
              </h3>

              <p className="mt-1 text-xs text-zinc-600">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-violet-500/10 bg-gradient-to-r from-violet-500/[0.08] via-transparent to-purple-500/[0.06] p-5">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Sparkles size={15} className="text-violet-400" />
                <span className="text-xs font-semibold text-violet-300">
                  AI WORKSPACE
                </span>
              </div>

              <h3 className="text-sm font-semibold text-zinc-200">
                Ready to create something new?
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Start a new AI task from your workspace.
              </p>
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

