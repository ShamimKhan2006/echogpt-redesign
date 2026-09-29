"use client";

import React, { useMemo, useState } from "react";
import {
  Scale,
  Sun,
  Moon,
  Check,
  X,
  Plus,
  RotateCcw,
  Mail,
  CalendarDays,
  Database,
  GitBranch,
  MessageSquare,
  HardDrive,
  KanbanSquare,
  FileSpreadsheet,
} from "lucide-react";

const CONNECTORS = [
  {
    id: 1,
    name: "GitHub",
    category: "Developer",
    icon: GitBranch,
    color: "text-zinc-900",
    darkColor: "text-white",
    lightBg: "bg-zinc-100",
    darkBg: "bg-white/[0.08]",
    auth: "OAuth 2.0",
    setup: "2 min",
    access: "Read & write",
    sync: "Real-time",
    features: { search: true, write: true, webhooks: true, files: false, selfHosted: false },
  },
  {
    id: 2,
    name: "Google Drive",
    category: "Storage",
    icon: HardDrive,
    color: "text-blue-500",
    lightBg: "bg-blue-50",
    darkBg: "bg-blue-500/10",
    auth: "OAuth 2.0",
    setup: "1 min",
    access: "Read & write",
    sync: "Every 15 min",
    features: { search: true, write: true, webhooks: false, files: true, selfHosted: false },
  },
  {
    id: 3,
    name: "Gmail",
    category: "Communication",
    icon: Mail,
    color: "text-red-500",
    lightBg: "bg-red-50",
    darkBg: "bg-red-500/10",
    auth: "OAuth 2.0",
    setup: "1 min",
    access: "Read only",
    sync: "Every 5 min",
    features: { search: true, write: false, webhooks: false, files: true, selfHosted: false },
  },
  {
    id: 4,
    name: "Google Calendar",
    category: "Productivity",
    icon: CalendarDays,
    color: "text-blue-500",
    lightBg: "bg-blue-50",
    darkBg: "bg-blue-500/10",
    auth: "OAuth 2.0",
    setup: "1 min",
    access: "Read & write",
    sync: "Every 5 min",
    features: { search: true, write: true, webhooks: true, files: false, selfHosted: false },
  },
  {
    id: 5,
    name: "Slack",
    category: "Communication",
    icon: MessageSquare,
    color: "text-purple-500",
    lightBg: "bg-purple-50",
    darkBg: "bg-purple-500/10",
    auth: "OAuth 2.0",
    setup: "3 min",
    access: "Read & write",
    sync: "Real-time",
    features: { search: true, write: true, webhooks: true, files: true, selfHosted: false },
  },
  {
    id: 6,
    name: "Notion",
    category: "Productivity",
    icon: FileSpreadsheet,
    color: "text-zinc-800",
    darkColor: "text-white",
    lightBg: "bg-zinc-100",
    darkBg: "bg-white/[0.08]",
    auth: "API token",
    setup: "3 min",
    access: "Read & write",
    sync: "Every 10 min",
    features: { search: true, write: true, webhooks: false, files: true, selfHosted: false },
  },
  {
    id: 7,
    name: "Trello",
    category: "Productivity",
    icon: KanbanSquare,
    color: "text-blue-600",
    lightBg: "bg-blue-50",
    darkBg: "bg-blue-500/10",
    auth: "API key + token",
    setup: "4 min",
    access: "Read & write",
    sync: "Every 10 min",
    features: { search: true, write: true, webhooks: true, files: false, selfHosted: false },
  },
  {
    id: 8,
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
    color: "text-cyan-600",
    lightBg: "bg-cyan-50",
    darkBg: "bg-cyan-500/10",
    auth: "Connection string",
    setup: "5 min",
    access: "Read only",
    sync: "On demand",
    features: { search: true, write: false, webhooks: false, files: false, selfHosted: true },
  },
];

const ROWS = [
  { label: "Category", get: (c) => c.category },
  { label: "Authentication", get: (c) => c.auth },
  { label: "Setup time", get: (c) => c.setup },
  { label: "Data access", get: (c) => c.access },
  { label: "Sync", get: (c) => c.sync },
  { label: "Search content", get: (c) => c.features.search, bool: true },
  { label: "Write actions", get: (c) => c.features.write, bool: true },
  { label: "Webhooks", get: (c) => c.features.webhooks, bool: true },
  { label: "File support", get: (c) => c.features.files, bool: true },
  { label: "Self-hosted", get: (c) => c.features.selfHosted, bool: true },
];

const MAX_COMPARE = 3;

const ComparePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selected, setSelected] = useState([1, 2, 5]);

  const selectedConnectors = useMemo(
    () => selected.map((id) => CONNECTORS.find((c) => c.id === id)).filter(Boolean),
    [selected]
  );

  const toggle = (id) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, id];
    });
  };

  const muted = "text-zinc-500";
  const card = darkMode
    ? "border-white/[0.08] bg-white/[0.03]"
    : "border-black/[0.06] bg-white shadow-sm";

  const iconBox = (c) => (darkMode ? c.darkBg : c.lightBg);
  const iconColor = (c) => (darkMode && c.darkColor ? c.darkColor : c.color);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#08090d] text-white" : "bg-[#f7f8fa] text-zinc-900"
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
              <Scale size={21} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Compare</h1>
              <p className={`text-xs ${muted}`}>
                Compare connectors side by side
              </p>
            </div>
          </div>

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
        {/* Picker */}
        <section className={`rounded-3xl border p-5 sm:p-6 ${card}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold">Choose connectors</h2>
              <p className={`mt-1 text-sm ${muted}`}>
                Select up to {MAX_COMPARE} to compare ({selected.length}/
                {MAX_COMPARE} selected)
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelected([])}
              disabled={selected.length === 0}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition disabled:opacity-40 ${
                darkMode
                  ? "border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
                  : "border-black/[0.06] bg-zinc-50 text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              <RotateCcw size={13} />
              Clear
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CONNECTORS.map((c) => {
              const Icon = c.icon;
              const active = selected.includes(c.id);
              const disabled = !active && selected.length >= MAX_COMPARE;

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => toggle(c.id)}
                  disabled={disabled}
                  className={`flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40 ${
                    active
                      ? "border-violet-500 bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                      : darkMode
                      ? "border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
                      : "border-black/[0.06] bg-white text-zinc-700 shadow-sm hover:bg-zinc-50"
                  }`}
                >
                  <Icon size={16} />
                  {c.name}
                  {active && <Check size={14} />}
                </button>
              );
            })}
          </div>
        </section>

        {/* Comparison */}
        <section className="mt-6">
          {selectedConnectors.length < 2 ? (
            <div className={`rounded-3xl border py-16 text-center ${card}`}>
              <Scale
                size={34}
                className={`mx-auto ${darkMode ? "text-zinc-600" : "text-zinc-300"}`}
              />
              <h3 className="mt-4 text-lg font-semibold">
                Pick at least 2 connectors
              </h3>
              <p className={`mt-2 text-sm ${muted}`}>
                Select connectors above to see them side by side.
              </p>
            </div>
          ) : (
            <div className={`overflow-x-auto rounded-3xl border ${card}`}>
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="w-44 p-5" />
                    {selectedConnectors.map((c) => {
                      const Icon = c.icon;
                      return (
                        <th key={c.id} className="p-5 align-top">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconBox(c)}`}
                            >
                              <Icon size={22} className={iconColor(c)} />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">{c.name}</div>
                              <div className={`text-xs font-normal ${muted}`}>
                                {c.category}
                              </div>
                            </div>
                            <button
                              type="button"
                              aria-label={`Remove ${c.name}`}
                              onClick={() => toggle(c.id)}
                              className={`flex h-7 w-7 items-center justify-center rounded-lg transition ${
                                darkMode
                                  ? "text-zinc-500 hover:bg-white/[0.08]"
                                  : "text-zinc-400 hover:bg-zinc-100"
                              }`}
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody>
                  {ROWS.map((row) => (
                    <tr
                      key={row.label}
                      className={`border-t ${
                        darkMode ? "border-white/[0.06]" : "border-black/[0.05]"
                      }`}
                    >
                      <td className={`p-5 text-sm font-medium ${muted}`}>
                        {row.label}
                      </td>

                      {selectedConnectors.map((c) => {
                        const value = row.get(c);
                        return (
                          <td key={c.id} className="p-5 text-sm">
                            {row.bool ? (
                              value ? (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                                  <Check size={14} />
                                </span>
                              ) : (
                                <span
                                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                                    darkMode
                                      ? "bg-white/[0.05] text-zinc-600"
                                      : "bg-zinc-100 text-zinc-400"
                                  }`}
                                >
                                  <X size={14} />
                                </span>
                              )
                            ) : (
                              <span className="font-medium">{value}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr
                    className={`border-t ${
                      darkMode ? "border-white/[0.06]" : "border-black/[0.05]"
                    }`}
                  >
                    <td className="p-5" />
                    {selectedConnectors.map((c) => (
                      <td key={c.id} className="p-5">
                        <button
                          type="button"
                          className={`flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition ${
                            darkMode
                              ? "bg-white text-black hover:bg-zinc-200"
                              : "bg-zinc-900 text-white hover:bg-zinc-800"
                          }`}
                        >
                          <Plus size={15} />
                          Connect {c.name}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ComparePage;