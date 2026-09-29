
"use client";

import React, { useState } from "react";
import {
  CheckSquare,
  Plus,
  Search,
  SlidersHorizontal,
  Clock3,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Sparkles,
  MoreHorizontal,
  ArrowRight,
  Zap,
} from "lucide-react";

const TASKS = [
  {
    id: 1,
    title: "Analyze Frontend Developer Job",
    description:
      "Analyze job requirements, skills, responsibilities and generate a match report.",
    type: "Job Analysis",
    status: "In Progress",
    priority: "High",
    progress: 68,
    time: "Running for 2m",
  },
  {
    id: 2,
    title: "Generate Product Marketing Copy",
    description:
      "Create premium marketing content for the new AI productivity product.",
    type: "Content",
    status: "Completed",
    priority: "Medium",
    progress: 100,
    time: "Completed 12m ago",
  },
  {
    id: 3,
    title: "Build Software Engineer SOP",
    description:
      "Generate a structured standard operating procedure for the engineering team.",
    type: "SOP Builder",
    status: "Pending",
    priority: "Medium",
    progress: 0,
    time: "Created 25m ago",
  },
  {
    id: 4,
    title: "Analyze E-commerce Landing Page",
    description:
      "Review UI, UX, conversion flow and provide actionable recommendations.",
    type: "AI Analysis",
    status: "Completed",
    priority: "Low",
    progress: 100,
    time: "Completed 1h ago",
  },
  {
    id: 5,
    title: "Generate Social Media Campaign",
    description:
      "Create a complete social media campaign with captions and content ideas.",
    type: "Content",
    status: "Failed",
    priority: "High",
    progress: 35,
    time: "Failed 2h ago",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTasks = TASKS.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-teal-400">
              <CheckSquare size={16} />
              <span>AI Workspace</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI Tasks
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
              Manage, monitor and organize all your AI-powered tasks from one
              centralized workspace.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/10 transition hover:bg-teal-400">
            <Plus size={17} />
            New Task
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-teal-500/10 p-2.5 text-teal-400">
                <CheckSquare size={19} />
              </div>

              <span className="text-xs text-zinc-600">
                All time
              </span>
            </div>

            <p className="text-2xl font-bold">24</p>
            <p className="mt-1 text-xs text-zinc-500">
              Total Tasks
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="mb-4 w-fit rounded-xl bg-blue-500/10 p-2.5 text-blue-400">
              <Loader2 size={19} />
            </div>

            <p className="text-2xl font-bold">03</p>
            <p className="mt-1 text-xs text-zinc-500">
              In Progress
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="mb-4 w-fit rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400">
              <CheckCircle2 size={19} />
            </div>

            <p className="text-2xl font-bold">18</p>
            <p className="mt-1 text-xs text-zinc-500">
              Completed
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="mb-4 w-fit rounded-xl bg-red-500/10 p-2.5 text-red-400">
              <AlertCircle size={19} />
            </div>

            <p className="text-2xl font-bold">03</p>
            <p className="mt-1 text-xs text-zinc-500">
              Failed
            </p>
          </div>
        </div>

        {/* Search / Filter */}
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
            />

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-teal-500/40 focus:bg-white/[0.05]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <SlidersHorizontal
              size={17}
              className="mr-1 shrink-0 text-zinc-600"
            />

            {["All", "Pending", "In Progress", "Completed", "Failed"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                    filter === item
                      ? "bg-teal-500/15 text-teal-300 ring-1 ring-teal-500/20"
                      : "text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-300"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-3">

          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-white/[0.13] hover:bg-white/[0.035]"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                {/* Icon */}
                <div className="flex shrink-0 items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                    <Sparkles size={19} />
                  </div>

                  <div className="min-w-0 lg:hidden">
                    <h3 className="text-sm font-semibold text-zinc-200">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-600">
                      {task.type}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-3">
                      <h3 className="truncate text-sm font-semibold text-zinc-200">
                        {task.title}
                      </h3>

                      <span className="rounded-md bg-white/[0.04] px-2 py-1 text-[10px] text-zinc-500">
                        {task.type}
                      </span>
                    </div>
                  </div>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-500">
                    {task.description}
                  </p>

                  {/* Progress */}
                  <div className="mt-4 max-w-xl">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] text-zinc-600">
                        Progress
                      </span>

                      <span className="text-[10px] font-medium text-zinc-400">
                        {task.progress}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className={`h-full rounded-full transition-all ${
                          task.status === "Failed"
                            ? "bg-red-500"
                            : task.status === "Completed"
                            ? "bg-emerald-500"
                            : "bg-teal-400"
                        }`}
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 lg:w-52 lg:flex-col lg:items-end lg:justify-center">

                  {/* Status */}
                  {task.status === "Completed" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
                      <CheckCircle2 size={12} />
                      Completed
                    </span>
                  )}

                  {task.status === "In Progress" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium text-blue-400">
                      <Loader2 size={12} className="animate-spin" />
                      In Progress
                    </span>
                  )}

                  {task.status === "Pending" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-medium text-amber-400">
                      <Clock3 size={12} />
                      Pending
                    </span>
                  )}

                  {task.status === "Failed" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-[10px] font-medium text-red-400">
                      <AlertCircle size={12} />
                      Failed
                    </span>
                  )}

                  <span className="text-[10px] text-zinc-600">
                    {task.time}
                  </span>
                </div>

                {/* Action */}
                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-white/[0.06] hover:text-white">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] text-center">
              <div className="mb-4 rounded-2xl bg-white/[0.04] p-4 text-zinc-600">
                <Search size={24} />
              </div>

              <h3 className="text-sm font-semibold text-zinc-300">
                No tasks found
              </h3>

              <p className="mt-1 text-xs text-zinc-600">
                Try another search or change the filter.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-teal-500/10 bg-gradient-to-r from-teal-500/[0.08] via-transparent to-cyan-500/[0.06] p-5">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Zap size={14} className="text-teal-400" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-300">
                  AI Automation
                </span>
              </div>

              <h3 className="text-sm font-semibold text-zinc-200">
                Automate your next workflow
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Create a new AI task and let your workspace handle the rest.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-xl bg-teal-500 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-teal-400">
              Create Task
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;

