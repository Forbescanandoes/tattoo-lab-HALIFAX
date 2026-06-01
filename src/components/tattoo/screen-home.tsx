"use client";

import { useState } from "react";
import Link from "next/link";
import { ARTISTS, BLACKGREY_WORKS, COLOR_WORKS } from "@/lib/tattoo-data";
import {
  TLButton, Eyebrow, SpecimenTag, RegisterFrame, PhotoSlab, SectionHeader, RotatingSlab,
} from "./primitives";
import { TattooShell } from "./chrome";

export default function ScreenHome() {
  return (
    <TattooShell>
      <div className="tl-screen">
        <HomeHero />
        <HomeWorks />
        <HomeRoster />
        <HomePricing />
        <HomeManifesto />
        <HomeCTA />
      </div>
    </TattooShell>
  );
}

function rotateFrom<T>(arr: T[], start: number): T[] {
  const n = arr.length;
  if (n === 0) return arr;
  const offset = ((start % n) + n) % n;
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

function WorksColumn({
  eyebrow,
  entries,
  reverse,
  baseDelay,
}: {
  eyebrow: string;
  entries: typeof BLACKGREY_WORKS;
  reverse?: boolean;
  baseDelay: number;
}) {
  const hero = (
    <RotatingSlab
      entries={rotateFrom(entries, 0)}
      height={400}
      delayMs={baseDelay}
    />
  );
  const supports = (
    <div className="tl-grid-works-sub">
      <RotatingSlab
        entries={rotateFrom(entries, 2)}
        height={200}
        delayMs={baseDelay + 1800}
      />
      <RotatingSlab
        entries={rotateFrom(entries, 4)}
        height={200}
        delayMs={baseDelay + 3600}
      />
    </div>
  );
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
        {reverse ? <>{supports}{hero}</> : <>{hero}{supports}</>}
      </div>
    </div>
  );
}

function HomeWorks() {
  return (
    <section className="tl-section" style={{ background: "var(--tl-ink-900)" }}>
      <div className="tl-page">
        <SectionHeader
          eyebrow="02 · THE WORK"
          title={<>Specimen&nbsp;A. <br />Specimen&nbsp;B.</>}
          side={
            <div style={{
              textAlign: "right",
              fontFamily: "var(--tl-font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--tl-fg-dim)",
              textTransform: "uppercase",
              lineHeight: 1.8,
            }}>
              247 SPECIMENS LOGGED<br />
              <span style={{ color: "var(--tl-data)" }}>UPDATED WEEKLY</span>
            </div>
          }
        />
        <hr className="tl-rule" />
        <div className="tl-grid-2" style={{ marginTop: 32 }}>
          <WorksColumn
            eyebrow="SPECIMEN · A · BLACK-AND-GREY"
            entries={BLACKGREY_WORKS}
            baseDelay={0}
          />
          <WorksColumn
            eyebrow="SPECIMEN · B · COLOUR & TRADITIONAL"
            entries={COLOR_WORKS}
            reverse
            baseDelay={900}
          />
        </div>
      </div>
    </section>
  );
}

function HomeHero() {
  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      paddingTop: 64,
      background: "var(--tl-ink-900)",
      overflow: "hidden",
    }}>
      <div className="tl-hero-meta" style={{
        fontFamily: "var(--tl-font-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "var(--tl-fg-dim)",
        textTransform: "uppercase",
        zIndex: 2,
      }}>
        <span>SPECIMEN_04 · OBSERVED 2026-05-25</span>
        <span>HALIFAX, NS · 44°39′N 63°34′W</span>
        <span>STUDIO OPEN · BOOKING NOW</span>
      </div>

      <div className="tl-page tl-grid-hero" style={{
        position: "relative",
        zIndex: 2,
        paddingTop: 140,
        paddingBottom: 80,
      }}>
        <div>
          <Eyebrow>01 · HALIFAX, NS</Eyebrow>
          <h1 className="tl-h1" style={{
            margin: "16px 0 0",
            fontSize: "clamp(56px, 8.4vw, 132px)",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
          }}>
            <div style={{ whiteSpace: "nowrap" }}>A</div>
            <div style={{ whiteSpace: "nowrap" }}>HALIFAX</div>
            <div style={{ whiteSpace: "nowrap", color: "var(--tl-accent)" }}>TATTOO</div>
            <div style={{ whiteSpace: "nowrap", color: "var(--tl-accent)" }}>LAB.</div>
          </h1>

          <p className="tl-lede" style={{ marginTop: 28, maxWidth: 520 }}>
            A collaboration between your vision and our artistry. Transparent
            pricing, fair hours, no hidden fees.
          </p>

          <div style={{ marginTop: 28, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/book">
              <TLButton variant="primary" size="lg">BOOK A CONSULT <span>→</span></TLButton>
            </Link>
            <Link href="/artists">
              <TLButton variant="secondary" size="lg">MEET THE ARTISTS</TLButton>
            </Link>
          </div>
        </div>

        <RegisterFrame style={{ padding: 14 }}>
          <PhotoSlab height={420} label="FIG.04 · HEALED LINEWORK · 12 WEEKS POST" seed={1}>
            <div style={{ position: "absolute", top: 14, right: 14, display: "flex", flexDirection: "column", gap: 6 }}>
              <SpecimenTag variant="bone" shape="square">SPECIMEN 04</SpecimenTag>
              <SpecimenTag variant="blood" shape="square">3RL · IRON BLACK</SpecimenTag>
            </div>
            <div style={{
              position: "absolute", bottom: 64, left: 14,
              fontFamily: "var(--tl-font-mono)",
              fontSize: 10,
              color: "var(--tl-bone-200)",
              letterSpacing: "0.12em",
              lineHeight: 1.7,
            }}>
              ARTIST: MILO H.<br />
              DURATION: 4H 20M<br />
              CHAIR: 01<br />
              SUBJECT CONSENTED.
            </div>
          </PhotoSlab>
        </RegisterFrame>
      </div>

      <div className="tl-hero-watermark" style={{
        position: "absolute",
        bottom: -16, left: 0, right: 0,
        textAlign: "center",
        fontFamily: "var(--tl-font-display)",
        fontWeight: 900,
        fontSize: "clamp(72px, 12vw, 180px)",
        lineHeight: 0.85,
        color: "var(--tl-ink-800)",
        textTransform: "uppercase",
        letterSpacing: "-0.02em",
        pointerEvents: "none",
        zIndex: 1,
      }}>
        TATTOO LAB
      </div>
    </section>
  );
}

function RosterCard({ artist, seed }: { artist: (typeof ARTISTS)[0]; seed: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Link href={`/artists/${artist.id}`} style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          cursor: "pointer",
          position: "relative",
          transition: "transform 220ms cubic-bezier(0.16,1,0.3,1)",
          transform: hover ? "translateY(-4px)" : "none",
        }}
      >
        <div style={{ position: "relative" }}>
          <PhotoSlab height={360} seed={seed} />
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
        <div style={{ padding: "20px 0 0" }}>
          <div className="tl-h2" style={{ fontSize: 56, lineHeight: 0.92, color: hover ? "var(--tl-accent)" : "var(--tl-fg)", transition: "color 160ms" }}>
            {artist.name}
          </div>
          <div style={{ marginTop: 10, fontFamily: "var(--tl-font-mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--tl-fg-dim)", textTransform: "uppercase" }}>
            {artist.specimen.split(" · ")[1]} · {artist.years} YEARS
          </div>
        </div>
      </div>
    </Link>
  );
}

function HomeRoster() {
  return (
    <section className="tl-section">
      <div className="tl-page">
        <SectionHeader
          eyebrow="03 · THE ARTISTS"
          title={<>Three hands. <br />Three styles.</>}
          side={
            <Link href="/artists">
              <TLButton variant="ghost">MEET THEM →</TLButton>
            </Link>
          }
        />
        <hr className="tl-rule" />
        <div className="tl-grid-3" style={{ marginTop: 32 }}>
          {ARTISTS.map((a, i) => <RosterCard key={a.id} artist={a} seed={i} />)}
        </div>
      </div>
    </section>
  );
}

const PRICING_TIERS = [
  {
    label: "SMALL",
    eyebrow: "SPECIMEN · S",
    from: 150,
    duration: "1 – 2 HRS",
    blurb: "First-timers or simple, minimal designs. Quick and clean.",
    features: [
      "Up to 3″ in size",
      "Simple linework or symbol",
      "Single-session completion",
      "Free touch-up within 6 months",
      "Aftercare kit included",
    ],
    popular: false,
  },
  {
    label: "MEDIUM",
    eyebrow: "SPECIMEN · M",
    from: 500,
    duration: "3 – 5 HRS",
    blurb: "Detailed work and medium-coverage pieces.",
    features: [
      "Up to 6″ in size",
      "Detailed design with shading",
      "Typically a single session",
      "Free touch-up within 6 months",
      "Aftercare kit included",
      "Custom design consultation",
    ],
    popular: true,
  },
  {
    label: "LARGE",
    eyebrow: "SPECIMEN · L",
    from: 1000,
    duration: "6+ HRS",
    blurb: "Sleeves, back pieces, and full coverage.",
    features: [
      "Over 6″ in size",
      "Complex, multi-faceted design",
      "Spread across multiple sessions",
      "Free touch-up within 1 year",
      "Premium aftercare kit",
      "Extended design consultation",
      "Priority booking schedule",
    ],
    popular: false,
  },
];

function PricingTier({ tier }: { tier: (typeof PRICING_TIERS)[0] }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: tier.popular ? "var(--tl-ink-900)" : "transparent",
        border: tier.popular ? "1px solid var(--tl-accent)" : "1px solid var(--tl-line)",
        padding: 28,
        position: "relative",
        transition: "transform 220ms cubic-bezier(0.16,1,0.3,1)",
        transform: hover ? "translateY(-3px)" : "none",
      }}
    >
      {tier.popular && (
        <span style={{
          position: "absolute", top: -1, right: -1,
          background: "var(--tl-accent)", color: "var(--tl-fg)",
          fontFamily: "var(--tl-font-mono)", fontSize: 10,
          letterSpacing: "0.18em", textTransform: "uppercase",
          padding: "5px 10px",
        }}>
          MOST REQUESTED
        </span>
      )}

      <div style={{ fontFamily: "var(--tl-font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--tl-fg-dim)", textTransform: "uppercase" }}>
        [ {tier.eyebrow} ]
      </div>

      <h3 className="tl-h2" style={{ fontSize: 64, marginTop: 8, lineHeight: 0.92 }}>
        {tier.label}
      </h3>

      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8 }}>
        <span style={{ fontFamily: "var(--tl-font-display)", fontWeight: 900, fontSize: 40, color: "var(--tl-accent)" }}>
          ${tier.from}+
        </span>
        <span style={{ fontFamily: "var(--tl-font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--tl-fg-dim)", textTransform: "uppercase" }}>
          · {tier.duration}
        </span>
      </div>

      <p className="tl-p" style={{ marginTop: 12, maxWidth: 260 }}>
        {tier.blurb}
      </p>

      <hr className="tl-rule" />

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {tier.features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--tl-font-body)", fontSize: 14, lineHeight: 1.45, color: "var(--tl-fg)" }}>
            <span style={{ color: "var(--tl-accent)", fontFamily: "var(--tl-font-mono)", flexShrink: 0, marginTop: 1 }}>+</span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 24 }}>
        <Link href="/book">
          <TLButton variant={tier.popular ? "primary" : "secondary"}>GET A QUOTE <span>→</span></TLButton>
        </Link>
      </div>
    </div>
  );
}

function HomePricing() {
  return (
    <section className="tl-section" style={{ background: "var(--tl-ink-800)" }}>
      <div className="tl-page">
        <SectionHeader
          eyebrow="04 · PRICING"
          title={<>Priced by the hour, <br />not the piece.</>}
          side={
            <div style={{ textAlign: "right", fontFamily: "var(--tl-font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--tl-fg-dim)", textTransform: "uppercase", lineHeight: 1.8 }}>
              EXAMPLES, NOT EXACT QUOTES.<br />
              <span style={{ color: "var(--tl-data)" }}>NO HIDDEN FEES.</span>
            </div>
          }
        />
        <hr className="tl-rule" />
        <div className="tl-grid-3" style={{ marginTop: 32 }}>
          {PRICING_TIERS.map((t) => <PricingTier key={t.label} tier={t} />)}
        </div>
        <p className="tl-p" style={{ marginTop: 28, maxWidth: 720, color: "var(--tl-fg-dim)", fontSize: 14 }}>
          Each artist sets their own hourly rate based on style, speed, and detail.
          Final price depends on complexity, placement, and the artist&apos;s expertise —
          you&apos;ll know what you&apos;re paying before your session begins.
        </p>
      </div>
    </section>
  );
}

function HomeManifesto() {
  return (
    <section className="tl-section tl-section-light">
      <div className="tl-page">
        <div className="tl-grid-manifesto">
          <div>
            <Eyebrow>05 · MANIFESTO</Eyebrow>
            <div style={{
              marginTop: 16,
              fontFamily: "var(--tl-font-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--tl-iodine-500)",
              lineHeight: 1.8,
            }}>
              OBSERVATION_04<br />
              FILED 2026-04-12<br />
              AUTHOR: A. GRAY<br />
              STATUS: STANDING
            </div>
          </div>
          <div>
            <h2
              className="tl-h2"
              style={{
                color: "var(--tl-ink-900)",
                maxWidth: 820,
                lineHeight: 0.9,
                letterSpacing: "-0.014em",
                textWrap: "balance",
                margin: 0,
              }}
            >
              A tattoo is a milestone. Every line proves it.
            </h2>

            <hr
              className="tl-rule"
              style={{
                margin: "32px 0 32px",
                width: 96,
                border: 0,
                borderTop: "2px solid var(--tl-accent)",
              }}
            />

            <div style={{ maxWidth: 620 }}>
              <p
                style={{
                  fontFamily: "var(--tl-font-body)",
                  fontSize: 22,
                  lineHeight: 1.45,
                  letterSpacing: "-0.005em",
                  color: "var(--tl-ink-900)",
                  fontWeight: 400,
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                A tattoo is personal. A reflection of who you are, where you&apos;ve been, and what you value. Our artists take time to understand your story before the first sketch.
              </p>

              <p
                style={{
                  fontFamily: "var(--tl-font-body)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "var(--tl-ink-700)",
                  marginTop: 22,
                  marginBottom: 0,
                  textWrap: "pretty",
                }}
              >
                Every design is custom. Drawn for you, crafted with detail, balance, and creativity. One of one. Every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section style={{
      background: "var(--tl-ink-900)",
      borderTop: "1px solid var(--tl-line)",
      padding: "96px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="tl-page tl-grid-cta">
        <div>
          <Eyebrow>06 · NEXT STEP</Eyebrow>
          <h2 className="tl-h2" style={{ fontSize: "clamp(64px, 8vw, 120px)", marginTop: 16, lineHeight: 0.86 }}>
            BOOK THE<br />CHAIR.<span style={{ color: "var(--tl-accent)" }}>_</span>
          </h2>
          <p className="tl-lede" style={{ marginTop: 24, maxWidth: 520 }}>
            Submit a brief. We reply within 48 hours with a quote, a session length, and an artist match. Consultations are free.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/book">
              <TLButton variant="primary" size="lg" stamped>SUBMIT A BRIEF <span>→</span></TLButton>
            </Link>
            <Link href="/faq">
              <TLButton variant="secondary" size="lg">READ THE FAQ</TLButton>
            </Link>
          </div>
        </div>

        <div style={{
          fontFamily: "var(--tl-font-mono)",
          fontSize: 12,
          letterSpacing: "0.14em",
          color: "var(--tl-fg-dim)",
          lineHeight: 1.9,
          textTransform: "uppercase",
          borderLeft: "1px solid var(--tl-line)",
          paddingLeft: 24,
        }}>
          <div style={{ color: "var(--tl-fg)", marginBottom: 8, fontSize: 13 }}>WHAT YOU&apos;LL NEED:</div>
          → A REFERENCE OR DESCRIPTION<br />
          → PLACEMENT &amp; APPROX. SIZE<br />
          → YOUR AVAILABILITY (4H MIN.)<br />
          → A VALID 18+ ID ON FILE<br />
          <br />
          <div style={{ color: "var(--tl-data)" }}>→ AVG. RESPONSE: 23H</div>
        </div>
      </div>
    </section>
  );
}
