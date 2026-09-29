"use client";

import React, { useMemo, useState } from "react";
import {
  Network,
  Sun,
  Moon,
  Search,
  Plus,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Settings2,
  Mail,
  CalendarDays,
  Database,
  GitBranch,
  MessageSquare, // replaces Slack
  HardDrive,
  KanbanSquare, // replaces Trello
  FileSpreadsheet,
  Zap,
  Link2,
} from "lucide-react";

const CONNECTORS = [
  {
    id: 1,
    name: "GitHub",
    description: "Connect repositories, issues, pull requests and developer workflows.",
    category: "Developer",
    icon: GitBranch,
    color: "text-zinc-900",
    darkColor: "text-white",
    lightBg: "bg-zinc-100",
    darkBg: "bg-white/[0.08]",
    connected: true,
  },
  {
    id: 2,
    name: "Google Drive",
    description: "Search and work with your documents, files and folders.",
    category: "Storage",
    icon: HardDrive,
    color: "text-blue-500",
    lightBg: "bg-blue-50",
    darkBg: "bg-blue-500/10",
    connected: true,
  },
  {
    id: 3,
    name: "Gmail",
    description: "Let AI search, summarize and organize your emails.",
    category: "Communication",
    icon: Mail,
    color: "text-red-500",
    lightBg: "bg-red-50",
    darkBg: "bg-red-500/10",
    connected: false,
  },
  {
    id: 4,
    name: "Google Calendar",
    description: "Access events, schedules and upcoming meetings.",
    category: "Productivity",
    icon: CalendarDays,
    color: "text-blue-500",
    lightBg: "bg-blue-50",
    darkBg: "bg-blue-500/10",
    connected: true,
  },
  {
    id: 5,
    name: "Slack",
    description: "Connect team conversations and workspace channels.",
    category: "Communication",
    icon: MessageSquare,
    color: "text-purple-500",
    lightBg: "bg-purple-50",
    darkBg: "bg-purple-500/10",
    connected: false,
  },
  {
    id: 6,
    name: "Notion",
    description: "Connect your workspace pages and knowledge base.",
    category: "Productivity",
    icon: FileSpreadsheet,
    color: "text-zinc-800",
    darkColor: "text-white",
    lightBg: "bg-zinc-100",
    darkBg: "bg-white/[0.08]",
    connected: false,
  },
  {
    id: 7,
    name: "Trello",
    description: "Work with boards, lists and project management data.",
    category: "Productivity",
    icon: KanbanSquare,
    color: "text-blue-600",
    lightBg: "bg-blue-50",
    darkBg: "bg-blue-500/10",
    connected: false,
  },
  {
    id: 8,
    name: "PostgreSQL",
    description: "Connect directly to your PostgreSQL database.",
    category: "Database",
    icon: Database,
    color: "text-cyan-600",
    lightBg: "bg-cyan-50",
    darkBg: "bg-cyan-500/10",
    connected: false,
  },
];

const CATEGORIES = [
  "All",
  "Developer",
  "Storage",
  "Communication",
  "Productivity",
  "Database",
];

const ConnectorsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredConnectors = useMemo(() => {
    return CONNECTORS.filter((connector) => {
      const matchesSearch =
        connector.name.toLowerCase().includes(search.toLowerCase()) ||
        connector.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || connector.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const connectedCount = CONNECTORS.filter(
    (connector) => connector.connected
  ).length;

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#08090d] text-white" : "bg-[#f7f8fa] text-[#111827]"
      }`}
    >
      {/* Header */}
      <div
        className={`sticky top-0 z-20 border-b backdrop-blur-xl ${
          darkMode
            ? "border-white/[0.08] bg-[#08090d]/80"
            : "border-black/[0.06] bg-[#f7f8fa]/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                darkMode
                  ? "bg-violet-500/10 text-violet-400"
                  : "bg-violet-100 text-violet-600"
              }`}
            >
              <Network size={21} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">Connectors</h1>
              <p className="text-xs text-zinc-500">
                Connect your favorite tools and services
              </p>
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className={`flex h-10 items-center gap-2 rounded-xl border px-3 transition ${
              darkMode
                ? "border-white/10 bg-white/[0.05] text-zinc-300 hover:bg-white/[0.08]"
                : "border-black/[0.08] bg-white text-zinc-700 shadow-sm hover:bg-zinc-50"
            }`}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}

            <span className="hidden text-sm font-medium sm:block">
              {darkMode ? "Light" : "Dark"}
            </span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Overview */}
        <section
          className={`relative overflow-hidden rounded-3xl border p-6 sm:p-8 ${
            darkMode
              ? "border-white/[0.08] bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-transparent"
              : "border-black/[0.06] bg-white shadow-sm"
          }`}
        >
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-500">
                <Sparkles size={13} />
                AI Integrations
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Bring your tools into one AI workspace.
              </h2>

              <p
                className={`mt-3 max-w-xl text-sm leading-6 sm:text-base ${
                  darkMode ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Connect your everyday apps and let AI access the information
                you need without constantly switching between platforms.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 ${
                darkMode
                  ? "border-white/[0.08] bg-black/20"
                  : "border-black/[0.06] bg-zinc-50"
              }`}
            >
              <div className="text-xs text-zinc-500">Active connections</div>

              <div className="mt-1 flex items-end gap-2">
                <span className="text-3xl font-bold">{connectedCount}</span>
                <span className="mb-1 text-sm text-zinc-500">
                  / {CONNECTORS.length}
                </span>
              </div>

              <div
                className={`mt-3 h-1.5 w-36 overflow-hidden rounded-full ${
                  darkMode ? "bg-white/10" : "bg-zinc-200"
                }`}
              >
                <div
                  className="h-full rounded-full bg-violet-500"
                  style={{
                    width: `${(connectedCount / CONNECTORS.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search + Filters */}
        <section className="mt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-zinc-500" : "text-zinc-400"
                }`}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search connectors..."
                className={`h-12 w-full rounded-2xl border pl-11 pr-4 text-sm outline-none transition ${
                  darkMode
                    ? "border-white/[0.08] bg-white/[0.04] text-white placeholder:text-zinc-600 focus:border-violet-500/50"
                    : "border-black/[0.08] bg-white text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:border-violet-400"
                }`}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {CATEGORIES.map((item) => {
                const active = category === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      active
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                        : darkMode
                        ? "border border-white/[0.08] bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08] hover:text-white"
                        : "border border-black/[0.06] bg-white text-zinc-600 shadow-sm hover:bg-zinc-50"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Connector Grid */}
        <section className="mt-6">
          {filteredConnectors.length === 0 ? (
            <div
              className={`rounded-3xl border py-16 text-center ${
                darkMode
                  ? "border-white/[0.08] bg-white/[0.03]"
                  : "border-black/[0.06] bg-white"
              }`}
            >
              <Network
                size={34}
                className={`mx-auto ${
                  darkMode ? "text-zinc-600" : "text-zinc-300"
                }`}
              />

              <h3 className="mt-4 text-lg font-semibold">
                No connectors found
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Try another search term or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {filteredConnectors.map((connector) => {
                const Icon = connector.icon;
                const iconColor =
                  darkMode && connector.darkColor
                    ? connector.darkColor
                    : connector.color;

                return (
                  <div
                    key={connector.id}
                    className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                      darkMode
                        ? "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.14] hover:bg-white/[0.05]"
                        : "border-black/[0.06] bg-white shadow-sm hover:border-black/[0.1] hover:shadow-xl hover:shadow-black/5"
                    }`}
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          darkMode ? connector.darkBg : connector.lightBg
                        }`}
                      >
                        <Icon size={23} className={iconColor} />
                      </div>

                      {connector.connected && (
                        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-500">
                          <CheckCircle2 size={12} />
                          Connected
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{connector.name}</h3>

                        <span
                          className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${
                            darkMode
                              ? "bg-white/[0.06] text-zinc-500"
                              : "bg-zinc-100 text-zinc-500"
                          }`}
                        >
                          {connector.category}
                        </span>
                      </div>

                      <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-500">
                        {connector.description}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="mt-5">
                      {connector.connected ? (
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className={`flex flex-1 items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-semibold transition ${
                              darkMode
                                ? "border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
                                : "border-black/[0.06] bg-zinc-50 text-zinc-700 hover:bg-zinc-100"
                            }`}
                          >
                            <Settings2 size={14} />
                            Manage
                          </button>

                          <button
                            type="button"
                            aria-label={`Open ${connector.name}`}
                            className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                              darkMode
                                ? "bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08]"
                                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                            }`}
                          >
                            <ExternalLink size={15} />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          className={`flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition ${
                            darkMode
                              ? "bg-white text-black hover:bg-zinc-200"
                              : "bg-zinc-900 text-white hover:bg-zinc-800"
                          }`}
                        >
                          <Plus size={15} />
                          Connect
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <section
          className={`mt-10 overflow-hidden rounded-3xl border ${
            darkMode
              ? "border-white/[0.08] bg-gradient-to-r from-violet-500/10 via-white/[0.03] to-transparent"
              : "border-black/[0.06] bg-white shadow-sm"
          }`}
        >
          <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-violet-500">
                <Zap size={17} />
                <span className="text-sm font-semibold">
                  Build your AI workflow
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold">
                Need a custom integration?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                Connect your own API or database and create a workflow tailored
                to your business.
              </p>
            </div>

            <button
              type="button"
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                darkMode
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              }`}
            >
              Request Integration
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 py-8 text-xs text-zinc-400">
          <Link2 size={13} />
          Secure AI integrations
        </div>
      </div>
    </main>
  );
};

export default ConnectorsPage;