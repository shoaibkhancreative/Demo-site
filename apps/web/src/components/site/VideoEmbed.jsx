import React from 'react';
import { Play } from 'lucide-react';

// Dummy unlisted-video embed. Swap videoId per chapter when real videos are ready.
export default function VideoEmbed({ videoId = 'dQw4w9WgXcQ', title = 'Mentorship Preview', className = '' }) {
  const [playing, setPlaying] = React.useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-navy shadow-2xl shadow-navy/30 ${className}`}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-br from-navy via-navy to-emerald-950"
          aria-label={`Play ${title}`}
        >
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,hsl(var(--brand)/0.5),transparent_55%)]" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/40 transition-transform group-hover:scale-110 group-active:scale-95 sm:h-20 sm:w-20">
            <Play size={28} className="ml-0.5" fill="currentColor" />
          </span>
          <span className="absolute bottom-4 left-5 text-sm font-medium text-navy-foreground/80">{title}</span>
        </button>
      )}
    </div>
  );
}
