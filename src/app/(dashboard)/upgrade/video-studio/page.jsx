'use client';

// File path: app/video-studio/page.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Video, Sparkles, Download, Trash2, Loader2, Clapperboard } from 'lucide-react';

/* ---------------------------------------------------------------
   Options
---------------------------------------------------------------- */
const RATIOS = [
  { id: '16:9', label: 'Landscape', box: 'w-8 h-[18px]' },
  { id: '9:16', label: 'Portrait', box: 'w-[18px] h-8' },
  { id: '1:1', label: 'Square', box: 'w-6 h-6' },
];

const DURATIONS = [5, 10];
const QUALITIES = ['720p', '1080p'];
const STYLES = ['Cinematic', 'Realistic', 'Anime', '3D Animation', 'Documentary'];

const EXAMPLES = [
  'A red kite flying over a rice field at sunrise',
  'Rain falling on a busy street market at night',
  'A drone shot over a river winding through green hills',
];

/* ---------------------------------------------------------------
   generateVideo
   Ekhon eta mock (3 sec por sample video ferot dey).
   Real API hole ei function-er bhitor fetch boshao:

   const res = await fetch('/api/video-studio/generate', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(params),
   });
   if (!res.ok) throw new Error('Generation failed');
   const data = await res.json();
   return { url: data.videoUrl };
---------------------------------------------------------------- */
const generateVideo = async (params) => {
  await new Promise((r) => setTimeout(r, 3000));
  return {
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  };
};

/* ---------------------------------------------------------------
   Page
---------------------------------------------------------------- */
export default function VideoStudioPage() {
  // TODO: ekhane user plan check koro; free user hole /upgrade/video-studio e redirect koro

  const [prompt, setPrompt] = useState('');
  const [ratio, setRatio] = useState('16:9');
  const [duration, setDuration] = useState(5);
  const [quality, setQuality] = useState('720p');
  const [style, setStyle] = useState('Cinematic');

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(null);
  const [history, setHistory] = useState([]);

  const timerRef = useRef(null);
  useEffect(() => () => clearInterval(timerRef.current), []);

  const startFakeProgress = () => {
    setProgress(5);
    timerRef.current = setInterval(() => {
      setProgress((p) => (p < 90 ? p + Math.random() * 8 : p));
    }, 400);
  };

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;

    setError('');
    setLoading(true);
    startFakeProgress();

    try {
      const params = { prompt: prompt.trim(), ratio, duration, quality, style };
      const result = await generateVideo(params);

      const item = {
        id: Date.now(),
        url: result.url,
        ...params,
      };

      setCurrent(item);
      setHistory((prev) => [item, ...prev]);
      setProgress(100);
    } catch (e) {
      setError('Video toiri hoyni. Abar try koro.');
    } finally {
      clearInterval(timerRef.current);
      setLoading(false);
    }
  };

  const removeFromHistory = (id) => {
    setHistory((prev) => prev.filter((h) => h.id !== id));
    if (current?.id === id) setCurrent(null);
  };

  const ratioClass = (r) =>
    r === '9:16' ? 'aspect-[9/16] max-h-[520px]' : r === '1:1' ? 'aspect-square max-h-[520px]' : 'aspect-video';

  const chip = (active) =>
    `rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
      active
        ? 'border-purple-500 bg-purple-500/15 text-purple-600 dark:text-purple-300'
        : 'border-gray-300 text-gray-600 hover:border-purple-400 dark:border-gray-700 dark:text-gray-300'
    }`;

  return (
    <div className="mx-auto max-w-6xl p-6 md:p-8">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white">
          <Video className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Video Studio</h1>
          <p className="text-sm text-gray-500">Prompt likho, AI video toiri korbe.</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
        {/* Left: controls */}
        <div className="space-y-6">
          <div>
            <label htmlFor="prompt" className="mb-2 block text-sm font-medium">
              Prompt
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={5}
              maxLength={500}
              placeholder="Ki dekhte chao ta bornona koro..."
              className="w-full resize-none rounded-xl border border-gray-300 bg-transparent p-3 text-sm outline-none focus:border-purple-500 dark:border-gray-700"
            />
            <div className="mt-1 flex justify-between text-[11px] text-gray-500">
              <span>{prompt.length}/500</span>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  onClick={() => setPrompt(ex)}
                  className="rounded-full border border-gray-300 px-3 py-1 text-[11px] text-gray-500 hover:border-purple-400 hover:text-purple-500 dark:border-gray-700"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div>
            <p className="mb-2 text-sm font-medium">Style</p>
            <div className="flex flex-wrap gap-2">
              {STYLES.map((s) => (
                <button key={s} onClick={() => setStyle(s)} className={chip(style === s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Ratio */}
          <div>
            <p className="mb-2 text-sm font-medium">Aspect ratio</p>
            <div className="grid grid-cols-3 gap-2">
              {RATIOS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRatio(r.id)}
                  className={`flex flex-col items-center gap-2 rounded-xl border py-3 text-xs transition-colors ${
                    ratio === r.id
                      ? 'border-purple-500 bg-purple-500/15 text-purple-600 dark:text-purple-300'
                      : 'border-gray-300 text-gray-600 hover:border-purple-400 dark:border-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className={`rounded-sm border-2 border-current ${r.box}`} />
                  <span>
                    {r.label} ({r.id})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Duration + quality */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-2 text-sm font-medium">Duration</p>
              <div className="flex gap-2">
                {DURATIONS.map((d) => (
                  <button key={d} onClick={() => setDuration(d)} className={chip(duration === d)}>
                    {d}s
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Quality</p>
              <div className="flex gap-2">
                {QUALITIES.map((q) => (
                  <button key={q} onClick={() => setQuality(q)} className={chip(quality === q)}>
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-all hover:from-purple-500 hover:to-indigo-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate video
              </>
            )}
          </button>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>

        {/* Right: preview + history */}
        <div className="space-y-8">
          <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-gray-300 p-4 dark:border-gray-700">
            {loading ? (
              <div className="w-full max-w-sm text-center">
                <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-purple-500" />
                <p className="mb-3 text-sm">Video toiri hocche...</p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : current ? (
              <div className="w-full space-y-3">
                <video
                  key={current.id}
                  src={current.url}
                  controls
                  autoPlay
                  loop
                  className={`mx-auto w-full rounded-xl bg-black ${ratioClass(current.ratio)}`}
                />
                <div className="flex items-center justify-between gap-4">
                  <p className="line-clamp-2 text-sm text-gray-500">{current.prompt}</p>
                  <a
                    href={current.url}
                    download
                    className="flex shrink-0 items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium hover:border-purple-400 dark:border-gray-700"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <Clapperboard className="mx-auto mb-3 h-10 w-10" />
                <p className="text-sm">Toiri kora video ekhane dekhabe.</p>
                <p className="text-xs">Prompt likhe Generate video-te click koro.</p>
              </div>
            )}
          </div>

          {/* History */}
          {history.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold">Ei session-er video</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {history.map((h) => (
                  <div
                    key={h.id}
                    className={`group relative overflow-hidden rounded-xl border ${
                      current?.id === h.id ? 'border-purple-500' : 'border-gray-300 dark:border-gray-700'
                    }`}
                  >
                    <button onClick={() => setCurrent(h)} className="block w-full text-left">
                      <video src={h.url} muted className="aspect-video w-full bg-black object-cover" />
                      <p className="line-clamp-2 p-2 text-[11px] text-gray-500">{h.prompt}</p>
                    </button>
                    <button
                      onClick={() => removeFromHistory(h.id)}
                      className="absolute right-1.5 top-1.5 rounded-md bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label="Remove video"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}