
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

import ThemeToggle from "@/components/ThemeToggle";

/* ================================================================
   LIGHT THEME
================================================================ */

const card =
  "rounded-2xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]";

const searchInput =
  "h-12 w-full rounded-xl bg-white pl-11 pr-4 text-sm text-gray-900 shadow-[0_4px_20px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-gray-400 focus:shadow-[0_0_0_3px_rgba(20,184,166,0.10),0_8px_25px_rgba(15,23,42,0.08)]";

const chipActive =
  "bg-teal-50 text-teal-700 shadow-sm ring-1 ring-teal-500/20";

const chipIdle =
  "text-gray-500 hover:bg-gray-100 hover:text-gray-800";

/* ================================================================
   STATUS
================================================================ */

const STATUS_STYLES = {
  Completed: {
    icon: CheckCircle2,
    cls: "bg-emerald-50 text-emerald-600",
  },

  "In Progress": {
    icon: Loader2,
    cls: "bg-blue-50 text-blue-600",
    spin: true,
  },

  Pending: {
    icon: Clock3,
    cls: "bg-amber-50 text-amber-600",
  },

  Failed: {
    icon: AlertCircle,
    cls: "bg-red-50 text-red-600",
  },
};

/* ================================================================
   STATS
================================================================ */

const STATS = [
  {
    label: "Total Tasks",
    value: "24",
    icon: CheckSquare,
    cls: "bg-teal-50 text-teal-600",
    note: "All time",
  },

  {
    label: "In Progress",
    value: "03",
    icon: Loader2,
    cls: "bg-blue-50 text-blue-600",
  },

  {
    label: "Completed",
    value: "18",
    icon: CheckCircle2,
    cls: "bg-emerald-50 text-emerald-600",
  },

  {
    label: "Failed",
    value: "03",
    icon: AlertCircle,
    cls: "bg-red-50 text-red-600",
  },
];

/* ================================================================
   TASK DATA
================================================================ */

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

/* ================================================================
   STATUS BADGE
================================================================ */

function StatusBadge({ status }) {
  const { icon: Icon, cls, spin } = STATUS_STYLES[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${cls}`}
    >
      <Icon size={12} className={spin ? "animate-spin" : ""} />
      {status}
    </span>
  );
}

/* ================================================================
   PAGE
================================================================ */

const Page = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTasks = TASKS.filter((task) => {
    const q = search.toLowerCase();

    const matchesSearch =
      task.title.toLowerCase().includes(q) ||
      task.description.toLowerCase().includes(q);

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">

        {/* ========================================================
            HEADER
        ========================================================= */}

        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-teal-600">
              <CheckSquare size={16} />
              <span>AI Workspace</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Tasks
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Manage, monitor and organize all your AI-powered tasks
              from one centralized workspace.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl"
            >
              <Plus size={17} />
              New Task
            </button>
          </div>
        </div>

        {/* ========================================================
            STATS
        ========================================================= */}

        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map(
            ({ label, value, icon: Icon, cls, note }) => (
              <div
                key={label}
                className={`${card} group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(15,23,42,0.09)]`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`rounded-xl p-2.5 ${cls} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={19} />
                  </div>

                  {note && (
                    <span className="text-xs text-gray-400">
                      {note}
                    </span>
                  )}
                </div>

                <p className="text-2xl font-bold tracking-tight text-gray-900">
                  {value}
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500">
                  {label}
                </p>
              </div>
            )
          )}
        </div>

        {/* ========================================================
            SEARCH + FILTER
        ========================================================= */}

        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={searchInput}
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto rounded-xl bg-white p-1.5 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <SlidersHorizontal
              size={16}
              className="mx-2 shrink-0 text-gray-400"
            />

            {[
              "All",
              "Pending",
              "In Progress",
              "Completed",
              "Failed",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-medium transition ${
                  filter === item
                    ? chipActive
                    : chipIdle
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================
            TASKS
        ========================================================= */}

        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`${card} group p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(15,23,42,0.08)]`}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                {/* ICON */}

                <div className="flex shrink-0 items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shadow-sm">
                    <Sparkles size={19} />
                  </div>

                  <div className="min-w-0 lg:hidden">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      {task.type}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="min-w-0 flex-1">
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-3">
                      <h3 className="truncate text-sm font-semibold text-gray-800">
                        {task.title}
                      </h3>

                      <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-500">
                        {task.type}
                      </span>
                    </div>
                  </div>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                    {task.description}
                  </p>

                  {/* PROGRESS */}

                  <div className="mt-4 max-w-xl">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-gray-400">
                        Progress
                      </span>

                      <span className="text-[10px] font-semibold text-gray-600">
                        {task.progress}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full transition-all ${
                          task.status === "Failed"
                            ? "bg-red-500"
                            : task.status === "Completed"
                            ? "bg-emerald-500"
                            : "bg-teal-500"
                        }`}
                        style={{
                          width: `${task.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* META */}

                <div className="flex flex-wrap items-center gap-3 lg:w-52 lg:flex-col lg:items-end lg:justify-center">
                  <StatusBadge status={task.status} />

                  <span className="text-[10px] font-medium text-gray-400">
                    {task.time}
                  </span>
                </div>

                {/* ACTION */}

                <button
                  type="button"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900"
                >
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* EMPTY STATE */}

          {filteredTasks.length === 0 && (
            <div
              className={`${card} flex min-h-[280px] flex-col items-center justify-center text-center`}
            >
              <div className="mb-4 rounded-2xl bg-gray-100 p-4 text-gray-400">
                <Search size={24} />
              </div>

              <h3 className="text-sm font-semibold text-gray-700">
                No tasks found
              </h3>

              <p className="mt-1 text-xs text-gray-400">
                Try another search or change the filter.
              </p>
            </div>
          )}
        </div>

        {/* ========================================================
            BOTTOM CTA
        ========================================================= */}

        <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-teal-50 via-white to-cyan-50 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Zap
                  size={14}
                  className="text-teal-600"
                />

                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  AI Automation
                </span>
              </div>

              <h3 className="text-sm font-semibold text-gray-800">
                Automate your next workflow
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Create a new AI task and let your workspace
                handle the rest.
              </p>
            </div>

            <button
              type="button"
              className="flex w-fit items-center gap-2 rounded-xl bg-teal-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-teal-500/15 transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl"
            >
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

