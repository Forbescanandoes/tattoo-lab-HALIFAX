"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { Work } from "@/lib/tattoo-data";

export function BrandMark({ size = 28, dark = false }: { size?: number; dark?: boolean }) {
  const src = dark ? "/logo-wordmark-dark.png" : "/logo-wordmark.webp";
  return (
    <Image
      src={src}
      alt="Tattoo Lab"
      height={size}
      width={size * 5}
      style={{ height: size, width: "auto", display: "block" }}
    />
  );
}

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "light";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  stamped?: boolean;
  size?: "md" | "lg";
  disabled?: boolean;
}

export function TLButton({
  variant = "primary",
  children,
  onClick,
  type = "button",
  stamped = false,
  size = "md",
  disabled = false,
}: ButtonProps) {
  const [hover, setHover] = useState(false);

  const base: React.CSSProperties = {
    fontFamily: "var(--tl-font-display)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    fontSize: size === "lg" ? 18 : 15,
    padding: size === "lg" ? "16px 26px" : "12px 20px",
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: disabled ? "default" : "pointer",
    transition: "background 120ms, color 120ms, transform 120ms",
    boxShadow: stamped ? "6px 6px 0 0 var(--tl-fg)" : "none",
    opacity: disabled ? 0.5 : 1,
  };

  const styles: Record<string, React.CSSProperties> = {
    primary:   { background: "var(--tl-accent)", color: "var(--tl-fg)" },
    secondary: { background: "transparent", color: "var(--tl-fg)", border: "2px solid var(--tl-fg)" },
    ghost:     { background: "transparent", color: "var(--tl-fg)", border: "1px solid var(--tl-line)" },
    light:     { background: "var(--tl-ink-900)", color: "var(--tl-bone-50)" },
  };

  const hoverStyles: Record<string, React.CSSProperties> = {
    primary:   hover ? { background: "var(--tl-fg)", color: "var(--tl-ink-900)" } : {},
    secondary: hover ? { background: "var(--tl-fg)", color: "var(--tl-ink-900)" } : {},
    ghost:     hover ? { background: "var(--tl-surface)" } : {},
    light:     hover ? { background: "var(--tl-accent)", color: "var(--tl-fg)" } : {},
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...styles[variant], ...hoverStyles[variant] }}
    >
      {children}
    </button>
  );
}

export function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="tl-eyebrow-bracket" style={color ? { color } : undefined}>
      [ {children} ]
    </div>
  );
}

interface SpecimenTagProps {
  children: React.ReactNode;
  variant?: "outline" | "blood" | "serum" | "muted" | "filled" | "bone";
  shape?: "pill" | "square";
  color?: string;
}

export function SpecimenTag({ children, variant = "outline", shape = "pill", color }: SpecimenTagProps) {
  const palette: Record<string, { bg: string; fg: string; bd: string }> = {
    outline: { bg: "transparent", fg: "var(--tl-fg)",      bd: "var(--tl-fg)" },
    blood:   { bg: "transparent", fg: "var(--tl-accent)",  bd: "var(--tl-accent)" },
    serum:   { bg: "transparent", fg: "var(--tl-data)",    bd: "var(--tl-data)" },
    muted:   { bg: "transparent", fg: "var(--tl-fg-dim)",  bd: "var(--tl-fg-dim)" },
    filled:  { bg: "var(--tl-accent)", fg: "var(--tl-fg)", bd: "var(--tl-accent)" },
    bone:    { bg: "var(--tl-bone-50)", fg: "var(--tl-ink-900)", bd: "var(--tl-bone-50)" },
  };
  const p = palette[variant] ?? palette.outline;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      fontFamily: "var(--tl-font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      background: p.bg,
      color: color ?? p.fg,
      border: `1px solid ${color ?? p.bd}`,
      borderRadius: shape === "pill" ? 999 : 0,
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

export function RegisterFrame({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="tl-register-frame" style={{ position: "relative", ...style }}>
      <span className="tl-corner tl">+</span>
      <span className="tl-corner tr">+</span>
      <span className="tl-corner bl">+</span>
      <span className="tl-corner br">+</span>
      {children}
    </div>
  );
}

interface PhotoSlabProps {
  height?: number;
  label?: string;
  seed?: number;
  accent?: boolean;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export function PhotoSlab({ height = 240, label, seed = 0, accent = false, image, imageAlt, children }: PhotoSlabProps) {
  const shapes = [
    "M30,20 Q90,5 150,40 T260,50 L280,180 Q200,150 130,170 T20,140 Z",
    "M40,30 Q120,10 180,60 T280,40 L260,200 Q170,170 90,180 T30,150 Z",
    "M20,40 Q90,80 170,30 T270,70 L290,180 Q210,210 120,170 T10,200 Z",
    "M50,20 L260,40 L280,170 Q200,180 130,160 T30,190 Z",
    "M60,30 C100,10 200,10 240,30 C290,80 290,140 240,190 C200,210 100,210 60,190 C10,140 10,80 60,30 Z",
    "M80,40 L220,40 L260,110 L220,180 L80,180 L40,110 Z",
    "M30,50 Q150,20 270,50 L270,170 Q150,200 30,170 Z",
    "M40,40 Q90,30 150,60 Q210,30 260,40 L260,90 Q210,120 150,110 Q90,120 40,90 Z M40,130 Q90,120 150,150 Q210,120 260,130 L260,180 Q210,200 150,190 Q90,200 40,180 Z",
    "M50,30 L150,20 L250,30 L260,110 L240,190 L150,200 L60,190 L40,110 Z",
    "M30,110 Q90,30 150,110 Q210,190 270,110 Q210,30 150,110 Q90,190 30,110 Z",
    "M40,60 Q100,20 150,60 Q200,100 260,60 L260,160 Q200,200 150,160 Q100,120 40,160 Z",
    "M60,40 L240,40 L240,80 L80,80 L80,120 L240,120 L240,160 L60,160 Z",
  ];
  const path = shapes[seed % shapes.length];

  return (
    <div className="tl-photo tl-grain" style={{ height, position: "relative", width: "100%", overflow: "hidden" }}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={imageAlt ?? label ?? ""}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      ) : (
        <svg
          viewBox="0 0 300 220"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <defs>
            <pattern id={`dots${seed}`} width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.6" fill={accent ? "#C8102E" : "#3B342D"} />
            </pattern>
          </defs>
          <rect width="300" height="220" fill={accent ? "#1A0608" : "#0A0908"} />
          <path d={path} fill={`url(#dots${seed})`} opacity="0.95" />
          <path d={path} fill="none" stroke={accent ? "#E84A5F" : "#5C5045"} strokeWidth="1.2" opacity="0.8" />
          <line x1="0" y1="110" x2="300" y2="110" stroke={accent ? "#C8102E" : "#3B342D"} strokeWidth="0.5" opacity="0.5" />
          <line x1="150" y1="0" x2="150" y2="220" stroke={accent ? "#C8102E" : "#3B342D"} strokeWidth="0.5" opacity="0.5" />
        </svg>
      )}
      {label && <div className="tl-photo-tag">{label}</div>}
      {children}
    </div>
  );
}

interface RotatingSlabProps {
  entries: Work[];
  height?: number;
  delayMs?: number;
  intervalMs?: number;
  accent?: boolean;
}

export function RotatingSlab({
  entries,
  height = 320,
  delayMs = 0,
  intervalMs = 5000,
  accent = false,
}: RotatingSlabProps) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (entries.length <= 1) return;
    const reduced = typeof window !== "undefined"
      && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const start = setTimeout(() => {
      const tick = () => {
        setPrevIndex((p) => {
          void p;
          return null;
        });
        setIndex((i) => {
          const next = (i + 1) % entries.length;
          setPrevIndex(i);
          return next;
        });
        timerRef.current = setTimeout(tick, intervalMs);
      };
      tick();
    }, delayMs);

    return () => {
      clearTimeout(start);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [entries.length, delayMs, intervalMs]);

  const current = entries[index];
  const previous = prevIndex !== null ? entries[prevIndex] : null;

  const renderLayer = (entry: Work, opacity: number, zIndex: number) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        transition: "opacity 600ms ease-in-out",
        zIndex,
      }}
    >
      {entry.img ? (
        <Image
          src={entry.img}
          alt={`Specimen ${entry.specimenNo} by ${entry.artist}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <PhotoSlab height={height} seed={entry.seed} accent={accent} />
      )}
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <RegisterFrame style={{ padding: 10 }}>
        <div style={{ position: "relative", width: "100%", height }}>
          {previous && renderLayer(previous, 0, 1)}
          {renderLayer(current, 1, 2)}
          <div style={{
            position: "absolute",
            top: 14, right: 14,
            zIndex: 3,
            fontFamily: "var(--tl-font-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "var(--tl-bone-50)",
            background: "var(--tl-ink-900)",
            padding: "3px 8px",
            border: "1px solid var(--tl-line)",
          }}>
            SPECIMEN {String(current.specimenNo).padStart(2, "0")}
          </div>
        </div>
      </RegisterFrame>
      <div style={{
        fontFamily: "var(--tl-font-mono)",
        fontSize: 10,
        letterSpacing: "0.16em",
        color: "var(--tl-fg-dim)",
        textTransform: "uppercase",
      }}>
        FIG.{String(current.specimenNo).padStart(2, "0")} · {current.artist} · {current.duration} · {current.needle}
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  side,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  side?: React.ReactNode;
}) {
  return (
    <div className="tl-section-head">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="tl-h2" style={{ margin: "6px 0 0", maxWidth: 720 }}>{title}</h2>
      </div>
      {side && <div style={{ flexShrink: 0 }}>{side}</div>}
    </div>
  );
}
