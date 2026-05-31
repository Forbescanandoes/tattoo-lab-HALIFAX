"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTISTS } from "@/lib/tattoo-data";
import { Eyebrow } from "./primitives";
import { TattooShell } from "./chrome";

export default function ScreenArtists() {
  return (
    <TattooShell>
      <div className="tl-screen">
        <section style={{ paddingTop: 140, paddingBottom: 48, background: "var(--tl-ink-900)" }}>
          <div className="tl-page">
            <div className="tl-section-head">
              <div>
                <Eyebrow>02 · THE ARTISTS</Eyebrow>
                <h1 className="tl-h1" style={{ fontSize: "clamp(72px, 9vw, 144px)", marginTop: 12, lineHeight: 0.86 }}>
                  THE<br />TEAM.
                </h1>
              </div>
              <div style={{
                fontFamily: "var(--tl-font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "var(--tl-fg-dim)",
                textTransform: "uppercase",
                textAlign: "right",
                lineHeight: 1.8,
              }}>
                3 ARTISTS<br />
                EACH SETS THEIR OWN RATE<br />
                <span style={{ color: "var(--tl-data)" }}>BOOKING OPEN</span>
              </div>
            </div>
            <hr className="tl-rule" style={{ margin: "48px 0 0" }} />
          </div>
        </section>

        <section style={{ background: "var(--tl-ink-900)", paddingBottom: 96 }}>
          <div className="tl-page">
            <div className="tl-grid-3">
              {ARTISTS.map((a, i) => (
                <BigArtistCard key={a.id} artist={a} seed={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </TattooShell>
  );
}

function BigArtistCard({ artist, seed }: { artist: (typeof ARTISTS)[0]; seed: number }) {
  void seed;
  const [hover, setHover] = useState(false);
  return (
    <Link href={`/artists/${artist.id}`} style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: "var(--tl-surface)",
          border: "1px solid var(--tl-line)",
          cursor: "pointer",
          position: "relative",
          transition: "border-color 220ms",
          borderColor: hover ? "var(--tl-fg)" : "var(--tl-line)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 420,
            overflow: "hidden",
            background: "var(--tl-ink-900)",
          }}
        >
          <Image
            src={artist.photo}
            alt={artist.full}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{
              objectFit: "cover",
              filter: hover ? "grayscale(0%)" : "grayscale(100%) contrast(1.05)",
              transition: "filter 320ms",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              fontFamily: "var(--tl-font-mono)",
              fontSize: 10,
              letterSpacing: "0.16em",
              color: "var(--tl-bone-50)",
              background: "var(--tl-ink-900)",
              padding: "3px 8px",
              border: "1px solid var(--tl-line)",
            }}
          >
            CHAIR {artist.chair}
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--tl-font-mono)",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: hover ? "var(--tl-ink-900)" : "var(--tl-bone-50)",
              background: hover ? "var(--tl-accent)" : "var(--tl-ink-900)",
              padding: "4px 9px",
              border: `1px solid ${hover ? "var(--tl-accent)" : "var(--tl-line)"}`,
              transition: "background 160ms, color 160ms, border-color 160ms",
              animation: hover ? "none" : "tl-pulse 1.8s ease-in-out infinite",
            }}
          >
            OPEN FILE
            <span
              style={{
                display: "inline-block",
                transform: hover ? "translateX(3px)" : "translateX(0)",
                transition: "transform 220ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              →
            </span>
          </div>
        </div>

        <div style={{ padding: 24 }}>
          <div style={{ fontFamily: "var(--tl-font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--tl-fg-dim)", textTransform: "uppercase" }}>
            SPECIMEN {artist.specimen}
          </div>
          <div className="tl-h2" style={{ fontSize: 56, lineHeight: 0.92, margin: "8px 0 0", color: hover ? "var(--tl-accent)" : "var(--tl-fg)", transition: "color 160ms" }}>
            {artist.name}
          </div>

          <hr className="tl-rule" style={{ margin: "16px 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontFamily: "var(--tl-font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--tl-fg-muted)", textTransform: "uppercase" }}>
            <div><span style={{ color: "var(--tl-fg-dim)" }}>YEARS </span>{artist.years}</div>
            <div><span style={{ color: "var(--tl-fg-dim)" }}>RIG </span>{artist.needles}</div>
            <div style={{ gridColumn: "1 / -1", color: "var(--tl-accent)", fontSize: 12 }}>${artist.rate} / HR · MIN {artist.minHours}H</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
