"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Sun,
  Moon,
  ImageIcon,
  Shuffle,
  Download,
  Heart,
  Trash2,
  X,
  Maximize2,
  RefreshCw,
  Palette,
  SlidersHorizontal,
} from "lucide-react";

const STYLES = [
  { id: "realistic", name: "Realistic", hue: 200 },
  { id: "anime", name: "Anime", hue: 320 },
  { id: "3d", name: "3D Render", hue: 260 },
  { id: "watercolor", name: "Watercolor", hue: 150 },
  { id: "cyberpunk", name: "Cyberpunk", hue: 290 },
  { id: "minimal", name: "Minimal", hue: 40 },
];

const RATIOS = [
  { id: "1:1", w: 1024, h: 1024 },
  { id: "16:9", w: 1280, h: 720 },
  { id: "9:16", w: 720, h: 1280 },
  { id: "4:3", w: 1024, h: 768 },
];

const COUNTS = [1, 2, 4];

const IDEAS = [
  "A lone astronaut walking through a neon-lit desert at dusk",
  "A cozy wooden cabin in a snowy forest, warm light in the windows",
  "A futuristic city floating above the clouds at sunrise",
  "A friendly robot chef cooking in a tiny kitchen",
  "An ancient temple hidden in a misty mountain valley",
];

// Placeholder generator: makes a gradient SVG so the UI works without a backend.
// Replace this with a real image API call (see generate() below).
const makeImage = (seed, hue, w, h) => {
  const h1 = (seed * 47 + hue) % 360;
  const h2 = (h1 + 70) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="hsl(${h1},80%,55%)"/>
<stop offset="1" stop-color="hsl(${h2},80%,35%)"/>
</linearGradient>
<filter id="b"><feGaussianBlur stdDeviation="${Math.round(w / 14)}"/></filter>
</defs>
<rect width="100%" height="100%" fill="url(#g)"/>
<g filter="url(#b)" opacity="0.7">
<circle cx="${w * 0.25}" cy="${h * 0.3}" r="${w * 0.22}" fill="hsl(${(h1 + 30) % 360},90%,70%)"/>
<circle cx="${w * 0.75}" cy="${h * 0.7}" r="${w * 0.26}" fill="hsl(${(h2 + 40) % 360},85%,60%)"/>
<circle cx="${w * 0.55}" cy="${h * 0.25}" r="${w * 0.14}" fill="hsl(${(h1 + 90) % 360},90%,80%)"/>
</g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const ImageStudioPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [negative, setNegative] = useState("");
  const [styleId, setStyleId] = useState("realistic");
  const [ratioId, setRatioId] = useState("1:1");
  const [count, setCount] = useState(2);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState(null);

  const style = STYLES.find((s) => s.id === styleId);
  const ratio = RATIOS.find((r) => r.id === ratioId);

  const generate = () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);

    // TODO: replace this timeout with a real API call, e.g.
    // const res = await fetch("/api/generate", { method: "POST", body: JSON.stringify({ prompt, negative, style: styleId, ratio: ratioId, count }) });
    // const { urls } = await res.json();
    setTimeout(() => {
      const now = Date.now();
      const fresh = Array.from({ length: count }, (_, i) => {
        const seed = Math.floor(Math.random() * 1000);
        return {
          id: `${now}-${i}`,
          prompt: prompt.trim(),
          style: style.name,
          ratio: ratio.id,
          url: makeImage(seed, style.hue, ratio.w, ratio.h),
          liked: false,
        };
      });
      setImages((prev) => [...fresh, ...prev]);
      setLoading(false);
    }, 1800);
  };

  const randomIdea = () => {
    setPrompt(IDEAS[Math.floor(Math.random() * IDEAS.length)]);
  };

  const toggleLike = (id) =>
    setImages((prev) => prev.map((i) => (i.id === id ? { ...i, liked: !i.liked } : i)));

  const remove = (id) => {
    setImages((prev) => prev.filter((i) => i.id !== id));
    setPreview((p) => (p && p.id === id ? null : p));
  };

  const card = darkMode
    ? "border-white/[0.08] bg-white/[0.03]"
    : "border-black/[0.06] bg-white shadow-sm";

  const label = "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500";

  const field = `w-full rounded-xl border px-3.5 py-3 text-sm outline-none transition ${
    darkMode
      ? "border-white/[0.08] bg-black/20 text-white placeholder:text-zinc-600 focus:border-violet-500/50"
      : "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-violet-400"
  }`;

  const chip = (active) =>
    `rounded-xl border px-3 py-2 text-xs font-semibold transition ${
      active
        ? "border-violet-500 bg-violet-600 text-white shadow-md shadow-violet-600/20"
        : darkMode
        ? "border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
        : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
    }`;

  const overlayBtn =
    "flex h-9 w-9 items-center justify-center rounded-lg bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70";

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
              <ImageIcon size={21} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Image Studio</h1>
              <p className="text-xs text-zinc-500">Turn your ideas into images</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDarkMode((v) => !v)}
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

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[380px_1fr] lg:px-8">
        {/* Controls */}
        <aside className={`h-fit space-y-6 rounded-3xl border p-5 sm:p-6 ${card}`}>
          {/* Prompt */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                <Sparkles size={14} className="text-violet-500" />
                Prompt
              </span>
              <button
                type="button"
                onClick={randomIdea}
                className="flex items-center gap-1.5 text-xs font-semibold text-violet-500 transition hover:text-violet-400"
              >
                <Shuffle size={13} />
                Surprise me
              </button>
            </div>
            <textarea
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the image you want to create..."
              className={`${field} resize-none leading-6`}
            />
          </div>

          {/* Negative */}
          <div>
            <div className={label}>
              <SlidersHorizontal size={14} />
              Avoid (optional)
            </div>
            <input
              value={negative}
              onChange={(e) => setNegative(e.target.value)}
              placeholder="blurry, low quality, text..."
              className={field}
            />
          </div>

          {/* Style */}
          <div>
            <div className={label}>
              <Palette size={14} />
              Style
            </div>
            <div className="grid grid-cols-3 gap-2">
              {STYLES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStyleId(s.id)}
                  className={chip(styleId === s.id)}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Ratio */}
          <div>
            <div className={label}>Aspect ratio</div>
            <div className="grid grid-cols-4 gap-2">
              {RATIOS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRatioId(r.id)}
                  className={chip(ratioId === r.id)}
                >
                  {r.id}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <div>
            <div className={label}>Number of images</div>
            <div className="grid grid-cols-3 gap-2">
              {COUNTS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCount(n)}
                  className={chip(count === n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Generate */}
          <button
            type="button"
            onClick={generate}
            disabled={!prompt.trim() || loading}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white transition active:scale-[0.98] ${
              !prompt.trim() || loading
                ? darkMode
                  ? "cursor-not-allowed bg-white/10 text-zinc-600"
                  : "cursor-not-allowed bg-zinc-200 text-zinc-400"
                : "bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-600/30 hover:from-violet-500 hover:to-indigo-500"
            }`}
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={16} />
                Generate
              </>
            )}
          </button>
        </aside>

        {/* Gallery */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Your creations</h2>
            {images.length > 0 && (
              <button
                type="button"
                onClick={() => setImages([])}
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 transition hover:text-red-500"
              >
                <Trash2 size={13} />
                Clear all
              </button>
            )}
          </div>

          {images.length === 0 && !loading ? (
            <div className={`rounded-3xl border py-24 text-center ${card}`}>
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                  darkMode ? "bg-violet-500/10 text-violet-400" : "bg-violet-100 text-violet-600"
                }`}
              >
                <ImageIcon size={26} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Nothing here yet</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-zinc-500">
                Write a prompt on the left and press Generate to create your first image.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {/* Skeletons */}
              {loading &&
                Array.from({ length: count }).map((_, i) => (
                  <div
                    key={`sk-${i}`}
                    style={{ aspectRatio: ratio.id.replace(":", " / ") }}
                    className={`animate-pulse rounded-2xl border ${
                      darkMode
                        ? "border-white/[0.08] bg-white/[0.05]"
                        : "border-zinc-200 bg-zinc-200/70"
                    }`}
                  />
                ))}

              {images.map((img) => (
                <div
                  key={img.id}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-white/[0.08] hover:border-white/[0.16]"
                      : "border-black/[0.06] shadow-sm hover:shadow-xl hover:shadow-black/10"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.prompt}
                    style={{ aspectRatio: img.ratio.replace(":", " / ") }}
                    className="w-full object-cover"
                  />

                  <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 via-transparent to-black/20 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        aria-label="Like"
                        onClick={() => toggleLike(img.id)}
                        className={overlayBtn}
                      >
                        <Heart
                          size={16}
                          className={img.liked ? "fill-red-500 text-red-500" : ""}
                        />
                      </button>
                      <button
                        type="button"
                        aria-label="Preview"
                        onClick={() => setPreview(img)}
                        className={overlayBtn}
                      >
                        <Maximize2 size={16} />
                      </button>
                    </div>

                    <div>
                      <p className="line-clamp-2 text-xs text-white/90">{img.prompt}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                          {img.style} · {img.ratio}
                        </span>
                        <div className="flex gap-2">
                          <a
                            href={img.url}
                            download={`image-studio-${img.id}.svg`}
                            aria-label="Download"
                            className={overlayBtn}
                          >
                            <Download size={16} />
                          </a>
                          <button
                            type="button"
                            aria-label="Delete"
                            onClick={() => remove(img.id)}
                            className={overlayBtn}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Preview modal */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full w-full max-w-3xl overflow-hidden rounded-3xl bg-black shadow-2xl"
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setPreview(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 text-white transition hover:bg-black/80"
            >
              <X size={18} />
            </button>

            <img
              src={preview.url}
              alt={preview.prompt}
              className="max-h-[75vh] w-full object-contain"
            />

            <div className="flex items-center justify-between gap-4 bg-zinc-900 p-4 text-white">
              <p className="line-clamp-2 text-sm text-zinc-300">{preview.prompt}</p>
              <a
                href={preview.url}
                download={`image-studio-${preview.id}.svg`}
                className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-zinc-200"
              >
                <Download size={14} />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ImageStudioPage;