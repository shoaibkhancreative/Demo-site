const TONES = {
  gold: "bg-gold-soft text-gold-deep",
  signal: "bg-signal-soft text-signal-deep",
  bull: "bg-bull-soft text-bull",
  ink: "bg-surface-alt text-ink-soft",
};

export default function Badge({ children, tone = "ink", icon: Icon, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${TONES[tone]} ${className}`}
    >
      {Icon && <Icon size={13} strokeWidth={2.5} />}
      {children}
    </span>
  );
}
