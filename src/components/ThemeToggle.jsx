"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // default: light
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      // This sync preserves the server-rendered default until browser storage is available.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (localStorage.getItem("theme") === "dark") setTheme("dark");
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme, ready]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      aria-label="Toggle theme"
      title={theme === "light" ? "Switch to dark" : "Switch to light"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:bg-white/[0.08]"
    >
      {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
