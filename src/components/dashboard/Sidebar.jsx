// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const menuItems = [
//     {
//         label: "Dashboard",
//         href: "/app",
//         icon: "⌂",
//     },
//     {
//         label: "Job Analysis",
//         href: "/job-analysis",
//         icon: "⌕",
//     },
//     {
//         label: "SOP Builder",
//         href: "/sop-builder",
//         icon: "✎",
//     },
//     {
//         label: "Compare",
//         href: "/compare",
//         icon: "⇄",
//     },
//     {
//         label: "History",
//         href: "/history",
//         icon: "◷",
//     },
//     {
//         label: "Tasks",
//         href: "/tasks",
//         icon: "✓",
//     },
// ];

// const toolItems = [
//     {
//         label: "Connectors",
//         href: "/connectors",
//         icon: "⌘",
//     },
//     {
//         label: "Image Studio",
//         href: "/image-studio",
//         icon: "✦",
//     },
//     {
//         label: "Extension",
//         href: "/extension",
//         icon: "▣",
//     },
// ];

// export default function Sidebar() {
//     const pathname = usePathname();

//     const isActive = (href) => {
//         return (
//             pathname === href ||
//             pathname.startsWith(`${href}/`)
//         );
//     };

//     return (
//         <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-gray-200 bg-white">

//             {/* Logo */}
//             <div className="flex h-16 items-center border-b border-gray-200 px-5">
//                 <Link
//                     href="/app"
//                     className="flex items-center gap-3"
//                 >
//                     <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
//                         N
//                     </div>

//                     <div>
//                         <p className="text-sm font-bold text-gray-900">
//                             EchoGPT
//                         </p>

//                         <p className="text-[11px] text-gray-400">
//                             AI Career Assistant
//                         </p>
//                     </div>
//                 </Link>
//             </div>

//             {/* Navigation */}
//             <nav className="flex-1 overflow-y-auto px-3 py-5">

//                 {/* Workspace */}
//                 <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
//                     Workspace
//                 </p>

//                 <div className="space-y-1">
//                     {menuItems.map((item) => {
//                         const active = isActive(item.href);

//                         return (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
//                                     active
//                                         ? "bg-purple-50 text-purple-700"
//                                         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                                 }`}
//                             >
//                                 <span className="flex h-6 w-6 items-center justify-center text-base">
//                                     {item.icon}
//                                 </span>

//                                 <span>
//                                     {item.label}
//                                 </span>
//                             </Link>
//                         );
//                     })}
//                 </div>

//                 {/* Divider */}
//                 <div className="my-5 border-t border-gray-100" />

//                 {/* Tools */}
//                 <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
//                     Tools
//                 </p>

//                 <div className="space-y-1">
//                     {toolItems.map((item) => {
//                         const active = isActive(item.href);

//                         return (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
//                                     active
//                                         ? "bg-purple-50 text-purple-700"
//                                         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                                 }`}
//                             >
//                                 <span className="flex h-6 w-6 items-center justify-center text-base">
//                                     {item.icon}
//                                 </span>

//                                 <span>
//                                     {item.label}
//                                 </span>
//                             </Link>
//                         );
//                     })}
//                 </div>
//             </nav>

//             {/* User */}
//             <div className="border-t border-gray-200 p-4">
//                 <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

//                     <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700">
//                         S
//                     </div>

//                     <div className="min-w-0 flex-1">
//                         <p className="truncate text-sm font-medium text-gray-900">
//                             Shamim
//                         </p>

//                         <p className="truncate text-xs text-gray-400">
//                             Free Plan
//                         </p>
//                     </div>

//                     <button className="text-gray-400 hover:text-gray-600">
//                         ⋮
//                     </button>

//                 </div>
//             </div>
//         </aside>
//     );
// } 




'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Plus,
  Image as ImageIcon,
  Video,
  GitCompare,
  Network,
  History,
  Store,
  CheckSquare,
  FileSearch,
  FileText,
  Moon,
  Sun,
  Lock,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { LayoutDashboard } from "lucide-react";

 
   const NAV_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/app",
    icon: LayoutDashboard,
    color: "text-violet-400",
  },

  {
    id: "image",
    label: "Image Studio",
    href: "/image-studio",
    icon: ImageIcon,
    color: "text-purple-400",
    pro: true,
  },

  {
    id: "video",
    label: "Video Studio",
    href: "/video-studio",
    icon: Video,
    color: "text-pink-400",
    pro: true,
  },

  {
    id: "compare",
    label: "Compare",
    href: "/compare",
    icon: GitCompare,
    color: "text-indigo-400",
  },

  {
    id: "connectors",
    label: "Connectors",
    href: "/connectors",
    icon: Network,
    color: "text-blue-400",
  },

  {
    id: "history",
    label: "History",
    href: "/history",
    icon: History,
    color: "text-amber-400",
  },

  {
    id: "store",
    label: "Store",
    href: "/store",
    icon: Store,
    color: "text-emerald-400",
  },

  {
    id: "tasks",
    label: "AI Tasks",
    href: "/tasks",
    icon: CheckSquare,
    color: "text-teal-400",
    badgeKey: "pendingTasks",
  },

  {
    id: "job",
    label: "AI Job Analysis",
    href: "/job-analysis",
    icon: FileSearch,
    color: "text-orange-400",
  },

  {
    id: "sop",
    label: "AI SOP Builder",
    href: "/sop-builder",
    icon: FileText,
    color: "text-cyan-400",
  },
];
/* ---------------------------------------------------------------
   2. Helpers
---------------------------------------------------------------- */
const isActivePath = (pathname, href) =>
  pathname === href || pathname.startsWith(href + '/');

/* ---------------------------------------------------------------
   3. Component
   Props:
     darkMode, toggleTheme  -> theme (parent theke)
     user   : { name, plan: 'free' | 'pro' }   (default: free)
     counts : { pendingTasks: number, ... }    (dynamic badge)
     items  : optional custom nav array (default NAV_ITEMS)
     onNavigate : optional callback (mobile drawer close korar jonno)
---------------------------------------------------------------- */
const Sidebar = ({
  darkMode,
  toggleTheme,
  user = { name: 'Guest', plan: 'free' },
  counts = {},
  items = NAV_ITEMS,
  onNavigate,
}) => {
  const pathname = usePathname() || '';
  const isPro = user?.plan === 'pro';

  // collapse state (localStorage e save thake, refresh korle-o thakbe)
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem('sidebar:collapsed') === '1');
    } catch {}
  }, []);
  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      try { localStorage.setItem('sidebar:collapsed', prev ? '0' : '1'); } catch {}
      return !prev;
    });
  };

  // Har item er jonno final state calculate: active, locked, badge
  const navItems = useMemo(
    () =>
      items.map((item) => {
        const locked = item.pro && !isPro;
        const count = item.badgeKey ? counts[item.badgeKey] : 0;
        let badge = null;
        if (item.pro) badge = { text: 'PRO', tone: 'pro' };
        else if (count > 0) badge = { text: count > 99 ? '99+' : String(count), tone: 'count' };

        return {
          ...item,
          locked,
          badge,
          // locked item e click korle upgrade page e jabe
          target: locked ? '/upgrade/videostudio'||'/upgrade/image-studio'  : item.href,
          active: !locked && isActivePath(pathname, item.href),
        };
      }),
    [items, counts, isPro, pathname]
  );

  const t = darkMode
    ? {
        aside: 'bg-[#07070a] border-gray-800 text-white',
        item: 'text-gray-300 hover:bg-gray-800/80 hover:text-white',
        itemActive: 'bg-purple-500/15 text-white ring-1 ring-purple-500/30',
        divider: 'border-gray-800/40',
      }
    : {
        aside: 'bg-[#fafafc] border-gray-200 text-gray-900',
        item: 'text-gray-700 hover:bg-gray-100 hover:text-black',
        itemActive: 'bg-purple-100 text-purple-900 ring-1 ring-purple-300',
        divider: 'border-gray-200',
      };

  return (
    <aside
      className={`${collapsed ? 'w-[72px]' : 'w-64'} h-screen border-r flex flex-col justify-between p-4 transition-all duration-300 select-none ${t.aside}`}
    >
      {/* Top */}
      <div className="space-y-6 overflow-y-auto overflow-x-hidden">
        {/* Logo + collapse */}
        <div className="space-y-4">
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-1`}>
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 shrink-0 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md">
                E
              </div>
              {!collapsed && (
                <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  EchoGPT
                </span>
              )}
            </Link>
            {!collapsed && (
              <button
                onClick={toggleCollapsed}
                className="p-1.5 rounded-lg text-gray-500 hover:text-purple-400 transition-colors"
                title="Collapse sidebar"
                aria-label="Collapse sidebar"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            )}
          </div>

          {collapsed && (
            <button
              onClick={toggleCollapsed}
              className="w-full flex justify-center p-1.5 rounded-lg text-gray-500 hover:text-purple-400 transition-colors"
              title="Expand sidebar"
              aria-label="Expand sidebar"
            >
              <PanelLeftOpen className="w-4 h-4" />
            </button>
          )}

          <Link href="/extension" onClick={onNavigate} className="block">
            <span
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-purple-600/25 transition-all transform active:scale-95"
              title="New Chat"
            >
              <Plus className="w-4 h-4" />
              {!collapsed && <span>New Chat</span>}
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="space-y-1" aria-label="Main">
          {!collapsed && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 px-2 block mb-2">
              Engagement
            </span>
          )}

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.target}
                onClick={onNavigate}
                aria-current={item.active ? 'page' : undefined}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                  item.active ? t.itemActive : t.item
                } ${item.locked ? 'opacity-80' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                  {!collapsed && <span>{item.label}</span>}
                </div>

                {!collapsed && item.badge && (
                  item.badge.tone === 'pro' ? (
                    // Pro user hole PRO badge dekhabe na, free user hole lock icon
                    item.locked ? (
                      <span className="flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                        <Lock className="w-2.5 h-2.5" />
                        PRO
                      </span>
                    ) : null
                  ) : (
                    <span className="min-w-[18px] text-center text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold">
                      {item.badge.text}
                    </span>
                  )
                )}
              </Link>
            );
          })}
        </nav>

        {/* History list (collapsed thakle hide) */}
        {!collapsed && (
          <div className={`pt-2 border-t ${t.divider}`}>
            {/* <HistoryList darkMode={darkMode} /> */}
          </div>
        )}
      </div>

      {/* Bottom */}
      <div className={`space-y-3 pt-4 border-t ${t.divider}`}>
        {/* Upgrade box shudhu free user der dekhabe */}
        {!isPro && !collapsed && (
          <div
            className={`p-3.5 rounded-2xl border relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-br from-purple-950/50 to-indigo-950/30 border-purple-800/50'
                : 'bg-purple-50 border-purple-200'
            }`}
          >
            <div className="flex items-center space-x-2 text-purple-400 mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold">Unlock Pro Features</span>
            </div>
            <p className={`text-[11px] mb-3 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Get Image Studio, Video Studio and performance statistics with Pro.
            </p>
            <Link
              href="/upgrade"
              onClick={onNavigate}
              className="block w-full py-2 rounded-xl bg-white text-gray-900 font-bold text-xs text-center shadow hover:bg-gray-100 transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>
        )}

        <div className={`flex items-center ${collapsed ? 'flex-col gap-3' : 'justify-between'} px-1`}>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-colors ${
              darkMode
                ? 'bg-gray-900 border-gray-800 text-yellow-400'
                : 'bg-white border-gray-200 text-purple-600 shadow-sm'
            }`}
            title="Toggle Theme"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {!collapsed && (
            <span className="text-[11px] text-gray-500 font-mono">
              v2.0.4 {isPro ? 'Pro' : 'Free'}
            </span>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;