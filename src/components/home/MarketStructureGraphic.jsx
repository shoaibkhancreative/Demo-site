// Candle data is a hand-tuned illustrative pattern (up-move -> sweep above the
// old high -> rejection -> CHoCH down -> order block + FVG on the way down).
// It's decorative, not a real chart - but every label on it is a concept
// this mentorship actually teaches (Chapter 2 & 3), so the hero graphic
// doubles as a preview of the curriculum's own language.
const CANDLES = [
  { o: 60, c: 75, h: 58, l: 78 },
  { o: 75, c: 95, h: 93, l: 73 },
  { o: 95, c: 90, h: 98, l: 87 },
  { o: 90, c: 115, h: 118, l: 88 },
  { o: 115, c: 133, h: 136, l: 113 },
  { o: 133, c: 128, h: 138, l: 125 },
  { o: 128, c: 110, h: 130, l: 107 },
  { o: 110, c: 118, h: 121, l: 107 },
  { o: 118, c: 124, h: 148, l: 115 },
  { o: 124, c: 95, h: 126, l: 92 },
  { o: 95, c: 70, h: 98, l: 67 },
  { o: 70, c: 76, h: 80, l: 64 },
  { o: 76, c: 52, h: 79, l: 49 },
  { o: 52, c: 58, h: 62, l: 40 },
  { o: 58, c: 35, h: 60, l: 32 },
  { o: 35, c: 42, h: 45, l: 25 },
];

const PITCH = 42;
const START_X = 46;
const CANDLE_W = 22;
const toY = (p) => 402 - p * 2.2;
const toX = (i) => START_X + i * PITCH;

export default function MarketStructureGraphic({ className = "" }) {
  const prevHighY = toY(138);
  const obX1 = toX(6) - CANDLE_W / 2 - 6;
  const obX2 = toX(7) + CANDLE_W / 2 + 6;
  const obY1 = toY(130);
  const obY2 = toY(107);

  const fvgX1 = toX(11) - CANDLE_W / 2 - 4;
  const fvgX2 = toX(13) + CANDLE_W / 2 + 4;
  const fvgY1 = toY(80);
  const fvgY2 = toY(49);

  return (
    <svg
      viewBox="0 0 710 440"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Annotated price structure diagram showing a liquidity sweep and change of character"
    >
      {/* faint horizontal grid */}
      {[60, 150, 240, 330].map((y) => (
        <line key={y} x1="0" y1={y} x2="710" y2={y} stroke="var(--color-line)" strokeWidth="1" />
      ))}

      {/* previous-high liquidity line */}
      <line
        x1="0"
        y1={prevHighY}
        x2="710"
        y2={prevHighY}
        stroke="var(--color-ink-faint)"
        strokeWidth="1.4"
        strokeDasharray="5 5"
      />
      <text x="8" y={prevHighY - 8} fontSize="12" fontWeight="600" fill="var(--color-ink-faint)" fontFamily="var(--font-display)">
        LIQUIDITY
      </text>

      {/* order block zone */}
      <rect
        x={obX1}
        y={obY1}
        width={obX2 - obX1}
        height={obY2 - obY1}
        fill="var(--color-gold)"
        fillOpacity="0.14"
        stroke="var(--color-gold)"
        strokeOpacity="0.5"
        strokeWidth="1"
        rx="3"
      />
      <text
        x={(obX1 + obX2) / 2}
        y={obY2 + 20}
        fontSize="12"
        fontWeight="700"
        textAnchor="middle"
        fill="var(--color-gold-deep)"
        fontFamily="var(--font-display)"
      >
        ORDER BLOCK
      </text>

      {/* FVG zone */}
      <rect
        x={fvgX1}
        y={fvgY1}
        width={fvgX2 - fvgX1}
        height={fvgY2 - fvgY1}
        fill="var(--color-signal)"
        fillOpacity="0.10"
        stroke="var(--color-signal)"
        strokeOpacity="0.4"
        strokeWidth="1"
        rx="3"
      />
      <text
        x={(fvgX1 + fvgX2) / 2}
        y={fvgY1 - 10}
        fontSize="12"
        fontWeight="700"
        textAnchor="middle"
        fill="var(--color-signal-deep)"
        fontFamily="var(--font-display)"
      >
        FVG
      </text>

      {/* candles */}
      {CANDLES.map((k, i) => {
        const x = toX(i);
        const bullish = k.c <= k.o; /* remember: smaller "p" input -> larger y -> lower price. c<=o in our unit means price rose */
        const bodyTop = toY(Math.max(k.o, k.c));
        const bodyBottom = toY(Math.min(k.o, k.c));
        const color = bullish ? "var(--color-bull)" : "var(--color-bear)";
        return (
          <g key={i}>
            <line x1={x} y1={toY(k.h)} x2={x} y2={toY(k.l)} stroke={color} strokeWidth="1.6" />
            <rect
              x={x - CANDLE_W / 2}
              y={bodyTop}
              width={CANDLE_W}
              height={Math.max(bodyBottom - bodyTop, 2)}
              fill={color}
              rx="2"
            />
          </g>
        );
      })}

      {/* sweep callout */}
      <circle cx={toX(8)} cy={toY(148)} r="4.5" fill="var(--color-surface)" stroke="var(--color-bear)" strokeWidth="2" />
      <line x1={toX(8)} y1={toY(148) - 4} x2={toX(8) + 34} y2={toY(148) - 34} stroke="var(--color-ink-soft)" strokeWidth="1.2" />
      <text
        x={toX(8) + 38}
        y={toY(148) - 30}
        fontSize="13"
        fontWeight="700"
        fill="var(--color-ink)"
        fontFamily="var(--font-display)"
      >
        Liquidity Sweep
      </text>

      {/* CHoCH callout */}
      <line x1={toX(9) - 6} y1={toY(107)} x2={toX(9) - 40} y2={toY(107) + 30} stroke="var(--color-ink-soft)" strokeWidth="1.2" />
      <text
        x={toX(9) - 130}
        y={toY(107) + 46}
        fontSize="13"
        fontWeight="700"
        fill="var(--color-ink)"
        fontFamily="var(--font-display)"
      >
        CHoCH ↓
      </text>
    </svg>
  );
}
