import { useState } from "react";
import { Play } from "lucide-react";

/**
 * videoId is a DUMMY placeholder (see src/lib/constants.js-style TODOs).
 * We intentionally never auto-load the iframe: it stays a designed poster
 * until clicked, both so a fake ID never shows a broken/error player, and
 * because click-to-play is simply better practice (no unrequested YouTube
 * script weight on first paint).
 */
export default function VideoEmbed({ videoId, title = "Mentorship Intro", aspect = "aspect-video", className = "" }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-ink shadow-card-lg ${aspect} ${className}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`group relative overflow-hidden rounded-2xl shadow-card-lg ${aspect} ${className} w-full text-left`}
      style={{
        background:
          "radial-gradient(120% 140% at 15% 15%, #232C51 0%, #10152B 55%, #0A0E1E 100%)",
      }}
      aria-label={`Play video: ${title}`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.15]" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M 34 0 L 0 0 0 34" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold text-white shadow-[0_8px_24px_-4px_rgba(184,134,61,0.65)] transition-transform duration-300 group-hover:scale-110">
          <Play size={28} fill="currentColor" strokeWidth={0} className="ml-1" />
        </span>
        <div>
          <p className="font-display text-white text-base sm:text-lg font-semibold">{title}</p>
          <p className="text-white/50 text-sm mt-1">Tap to play</p>
        </div>
      </div>
    </button>
  );
}
