import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = { className?: string };

const ink = "var(--color-ink)";
const card = "var(--color-card)";
const terra = "var(--color-terra)";
const gold = "var(--color-gold)";
const goldSoft = "var(--color-gold-soft)";
const paper = "var(--color-paper)";

export function Apple({ className }: Props) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M42 22c2-8 12-10 16-6" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="54" cy="16" rx="8" ry="4.5" fill={gold} stroke={ink} strokeWidth="3" />
      <circle cx="38" cy="46" r="22" fill={terra} stroke={ink} strokeWidth="3" />
      <path d="M30 38c3 2 5 6 5 11" fill="none" stroke={paper} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

export function Coin({ className }: Props) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="28" fill={gold} stroke={ink} strokeWidth="3" />
      <circle cx="40" cy="40" r="20" fill="none" stroke={ink} strokeWidth="2.5" />
      <circle cx="40" cy="43" r="8" fill={terra} stroke={ink} strokeWidth="2" />
      <path d="M40 33c1-4 5-4 6-2" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Kite({ className }: Props) {
  return (
    <svg viewBox="0 0 80 110" className={className} aria-hidden="true">
      <polygon points="40,6 74,48 40,90 6,48" fill={terra} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <polygon points="40,6 40,90 74,48" fill={gold} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M40 90c8 8 6 16 0 20" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="34" cy="108" r="3" fill={gold} stroke={ink} strokeWidth="2" />
    </svg>
  );
}

export function Tree({ className, apples = 4 }: Props & { apples?: number }) {
  const spots = [
    [48, 58],
    [78, 70],
    [108, 56],
    [64, 92],
    [96, 98],
    [80, 40],
  ].slice(0, apples);
  return (
    <svg viewBox="0 0 160 180" className={className} aria-hidden="true">
      <rect x="70" y="118" width="20" height="52" rx="6" fill={ink} />
      <circle cx="80" cy="78" r="58" fill={goldSoft} stroke={ink} strokeWidth="3" />
      {spots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill={terra} stroke={ink} strokeWidth="2.5" />
      ))}
    </svg>
  );
}

export function Sun({ className }: Props) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="14" fill={gold} stroke={ink} strokeWidth="3" />
      {Array.from({ length: 8 }, (_, i) => (
        <line
          key={i}
          x1="40"
          y1="10"
          x2="40"
          y2="18"
          stroke={ink}
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${i * 45} 40 40)`}
        />
      ))}
    </svg>
  );
}

export function Stall({ className }: Props) {
  return (
    <svg viewBox="0 0 170 150" className={className} aria-hidden="true">
      <rect x="18" y="58" width="134" height="26" rx="6" fill={gold} stroke={ink} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${22 + i * 28} 58 q14 -22 26 0`}
          fill={i % 2 === 0 ? terra : gold}
          stroke={ink}
          strokeWidth="3"
          strokeLinejoin="round"
        />
      ))}
      <rect x="22" y="84" width="126" height="16" rx="3" fill={goldSoft} stroke={ink} strokeWidth="3" />
      <rect x="36" y="100" width="12" height="36" rx="2" fill={ink} />
      <rect x="122" y="100" width="12" height="36" rx="2" fill={ink} />
    </svg>
  );
}

export function Bicycle({ className }: Props) {
  return (
    <svg viewBox="0 0 140 90" className={className} aria-hidden="true">
      <circle cx="36" cy="62" r="20" fill={card} stroke={ink} strokeWidth="3" />
      <circle cx="104" cy="62" r="20" fill={card} stroke={ink} strokeWidth="3" />
      <path
        d="M36 62 L68 62 L88 34 L58 34 L36 62 M68 62 L88 34 M88 34 L104 34 M104 34 L104 46"
        fill="none"
        stroke={ink}
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M52 34 h16" stroke={terra} strokeWidth="4" strokeLinecap="round" />
      <circle cx="104" cy="30" r="4" fill={gold} stroke={ink} strokeWidth="2" />
    </svg>
  );
}

export function Candy({ className }: Props) {
  return (
    <svg viewBox="0 0 100 70" className={className} aria-hidden="true">
      <path d="M8 35 L28 22 L28 48 Z" fill={gold} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M92 35 L72 22 L72 48 Z" fill={gold} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <rect x="26" y="16" width="48" height="38" rx="16" fill={terra} stroke={ink} strokeWidth="3" />
      <path d="M40 28c6 4 14 4 20 0" fill="none" stroke={paper} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Sandwich({ className }: Props) {
  return (
    <svg viewBox="0 0 90 80" className={className} aria-hidden="true">
      <path d="M12 36c0-14 66-18 66 2v6H12Z" fill={gold} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <rect x="14" y="42" width="62" height="12" fill={terra} stroke={ink} strokeWidth="3" />
      <path d="M12 54h66c2 14-64 16-66 0Z" fill={goldSoft} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function Cup({ className }: Props) {
  return (
    <svg viewBox="0 0 80 90" className={className} aria-hidden="true">
      <path d="M18 22h44l-6 52H24Z" fill={card} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="40" cy="24" rx="22" ry="8" fill={goldSoft} stroke={ink} strokeWidth="3" />
      <path d="M62 36h8c6 0 8 8 2 14-6 6-10 6-10 0" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Coat({ className }: Props) {
  return (
    <svg viewBox="0 0 90 110" className={className} aria-hidden="true">
      <path
        d="M45 14c10 8 16 10 22 8l10 18-14 8v48H27V48L13 40l10-18c6 2 12 0 22-8Z"
        fill={terra}
        stroke={ink}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="45" cy="48" r="3" fill={gold} stroke={ink} strokeWidth="2" />
      <circle cx="45" cy="62" r="3" fill={gold} stroke={ink} strokeWidth="2" />
    </svg>
  );
}

export function Piggy({ className }: Props) {
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <ellipse cx="70" cy="58" rx="48" ry="32" fill={terra} stroke={ink} strokeWidth="3" />
      <ellipse cx="112" cy="62" rx="16" ry="12" fill={goldSoft} stroke={ink} strokeWidth="3" />
      <circle cx="108" cy="60" r="2" fill={ink} />
      <circle cx="118" cy="60" r="2" fill={ink} />
      <path d="M46 30c8-16 28-14 32 2" fill={terra} stroke={ink} strokeWidth="3" />
      <rect x="58" y="34" width="22" height="5" rx="2" fill={ink} />
      <circle cx="86" cy="52" r="3.5" fill={ink} />
      <rect x="40" y="84" width="10" height="12" rx="3" fill={ink} />
      <rect x="62" y="84" width="10" height="12" rx="3" fill={ink} />
      <rect x="84" y="84" width="10" height="12" rx="3" fill={ink} />
    </svg>
  );
}

export type Hair = "curls" | "braids" | "cap" | "short";

export function Face({ hair, className }: Props & { hair: Hair }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {hair === "curls" && <circle cx="32" cy="22" r="14" fill={ink} />}
      {hair === "braids" && <path d="M16 30c2-16 30-18 32 0" fill={ink} />}
      {hair === "cap" && <path d="M14 32c2-16 36-18 38 0" fill={gold} stroke={ink} strokeWidth="3" />}
      {hair === "short" && <path d="M16 32c2-14 32-16 34 0" fill={ink} />}
      <circle cx="32" cy="34" r="18" fill={card} stroke={ink} strokeWidth="3" />
      {hair === "cap" && <rect x="8" y="28" width="48" height="7" rx="3" fill={gold} stroke={ink} strokeWidth="3" />}
      {hair === "braids" && (
        <>
          <rect x="10" y="30" width="7" height="18" rx="3" fill={ink} />
          <rect x="47" y="30" width="7" height="18" rx="3" fill={ink} />
        </>
      )}
      <circle cx="25" cy="34" r="2.6" fill={ink} />
      <circle cx="39" cy="34" r="2.6" fill={ink} />
      <path d="M26 42c3 4 9 4 12 0" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Kid({
  hair,
  apron = false,
  className,
  mood = "smile",
}: Props & { hair: Hair; apron?: boolean; mood?: "smile" | "no" | "yum" }) {
  return (
    <svg viewBox="0 0 100 150" className={className} aria-hidden="true">
      <rect x="36" y="112" width="10" height="28" rx="5" fill={ink} />
      <rect x="56" y="112" width="10" height="28" rx="5" fill={ink} />
      <rect x="26" y="74" width="48" height="46" rx="18" fill={apron ? terra : gold} stroke={ink} strokeWidth="3" />
      {hair === "curls" && (
        <>
          <circle cx="28" cy="46" r="11" fill={ink} />
          <circle cx="50" cy="36" r="13" fill={ink} />
          <circle cx="72" cy="46" r="11" fill={ink} />
        </>
      )}
      {hair === "braids" && <path d="M24 58c2-28 50-32 54 2" fill={ink} />}
      {hair === "cap" && <path d="M24 58c2-30 54-32 56 2" fill={gold} stroke={ink} strokeWidth="3" />}
      {hair === "short" && <path d="M26 56c2-24 48-26 50 2" fill={ink} />}
      <circle cx="50" cy="62" r="26" fill={card} stroke={ink} strokeWidth="3" />
      {hair === "cap" && <rect x="16" y="54" width="70" height="10" rx="4" fill={gold} stroke={ink} strokeWidth="3" />}
      {hair === "braids" && (
        <>
          <rect x="16" y="64" width="10" height="32" rx="5" fill={ink} />
          <rect x="74" y="64" width="10" height="32" rx="5" fill={ink} />
        </>
      )}
      {hair === "curls" && (
        <>
          <circle cx="30" cy="48" r="7" fill={ink} />
          <circle cx="50" cy="42" r="8" fill={ink} />
          <circle cx="70" cy="48" r="7" fill={ink} />
        </>
      )}
      <circle cx="40" cy="64" r="3" fill={ink} />
      <circle cx="60" cy="64" r="3" fill={ink} />
      {mood === "smile" && (
        <path d="M40 76c5 7 15 7 20 0" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      )}
      {mood === "no" && (
        <path d="M40 80c6-6 14-6 20 0" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      )}
      {mood === "yum" && <ellipse cx="50" cy="78" rx="6" ry="4.5" fill={terra} />}
    </svg>
  );
}

export function Ground({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative flex items-end justify-center", className)}>
      <div className="pointer-events-none absolute bottom-1 left-1/2 h-5 w-[85%] -translate-x-1/2 rounded-full bg-line" />
      <div className="relative flex items-end justify-center gap-3">{children}</div>
    </div>
  );
}
