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
  LayoutDashboard,
} from 'lucide-react';

/* ---------------------------------------------------------------
   1. Nav items
   pro: true       -> free user der jonno locked
   upgradeHref     -> locked item e click korle ekhane jabe
---------------------------------------------------------------- */
const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/app',
    icon: LayoutDashboard,
    color: 'text-violet-400',
  },
  {
    id: 'image',
    label: 'Image Studio',
    href: '/image-studio',
    upgradeHref: '/upgrade/image-studio',
    icon: ImageIcon,
    color: 'text-purple-400',
    pro: true,
  },
  {
    id: 'video',
    label: 'Video Studio',
    href: '/video-studio',
    upgradeHref: '/upgrade/video-studio',
    icon: Video,
    color: 'text-pink-400',
    pro: true,
  },
  {
    id: 'compare',
    label: 'Compare',
    href: '/compare',
    icon: GitCompare,
    color: 'text-indigo-400',
  },
  {
    id: 'connectors',
    label: 'Connectors',
    href: '/connectors',
    icon: Network,
    color: 'text-blue-400',
  },
  {
    id: 'history',
    label: 'History',
    href: '/history',
    icon: History,
    color: 'text-amber-400',
  },
  {
    id: 'store',
    label: 'Store',
    href: '/store',
    icon: Store,
    color: 'text-emerald-400',
  },
  {
    id: 'tasks',
    label: 'AI Tasks',
    href: '/tasks',
    icon: CheckSquare,
    color: 'text-teal-400',
    badgeKey: 'pendingTasks',
  },
  {
    id: 'job',
    label: 'AI Job Analysis',
    href: '/job-analysis',
    icon: FileSearch,
    color: 'text-orange-400',
  },
  {
    id: 'sop',
    label: 'AI SOP Builder',
    href: '/sop-builder',
    icon: FileText,
    color: 'text-cyan-400',
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
      try {
        localStorage.setItem('sidebar:collapsed', prev ? '0' : '1');
      } catch {}
      return !prev;
    });
  };

  // Har item er jonno final state: active, locked, badge, target
  const navItems = useMemo(
    () =>
      items.map((item) => {
        const locked = item.pro && !isPro;
        const count = item.badgeKey ? counts[item.badgeKey] : 0;

        let badge = null;
        if (item.pro) badge = { text: 'PRO', tone: 'pro' };
        else if (count > 0)
          badge = { text: count > 99 ? '99+' : String(count), tone: 'count' };

        return {
          ...item,
          locked,
          badge,
          // locked hole nijer alada upgrade page e jabe
          target: locked ? item.upgradeHref || '/upgrade' : item.href,
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
      className={`${
        collapsed ? 'w-[72px]' : 'w-64'
      } h-screen border-r flex flex-col justify-between p-4 transition-all duration-300 select-none ${t.aside}`}
    >
      {/* Top */}
      <div className="space-y-6 overflow-y-auto overflow-x-hidden">
        {/* Logo + collapse */}
        <div className="space-y-4">
          <div
            className={`flex items-center ${
              collapsed ? 'justify-center' : 'justify-between'
            } px-1`}
          >
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
                className={`w-full flex items-center ${
                  collapsed ? 'justify-center' : 'justify-between'
                } px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                  item.active ? t.itemActive : t.item
                } ${item.locked ? 'opacity-80' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                  {!collapsed && <span>{item.label}</span>}
                </div>

                {!collapsed &&
                  item.badge &&
                  (item.badge.tone === 'pro' ? (
                    // Pro user hole badge dekhabe na, free user hole lock + PRO
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
                  ))}
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
            <p
              className={`text-[11px] mb-3 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
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

        <div
          className={`flex items-center ${
            collapsed ? 'flex-col gap-3' : 'justify-between'
          } px-1`}
        >
          {/* <button
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
          </button> */}

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