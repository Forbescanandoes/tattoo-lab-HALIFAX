"use client";

import Link from "next/link";
import Image from "next/image";
import { ARTISTS } from "@/lib/tattoo-data";
import { Eyebrow, SpecimenTag, RegisterFrame, PhotoSlab, TLButton } from "./primitives";
import { TattooShell } from "./chrome";

export default function ScreenArtistDetail({ artistId }: { artistId: string }) {
  const artist = ARTISTS.find((a) => a.id === artistId) ?? ARTISTS[0];

  return (
    <TattooShell>
      <div className="tl-screen">
        <section style={{ paddingTop: 96, background: "var(--tl-ink-900)" }}>
          <div className="tl-page">
            <Link href="/artists" style={{
              display: "inline-block",
              fontFamily: "var(--tl-font-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              color: "var(--tl-fg-dim)",
              textTransform: "uppercase",
              textDecoration: "none",
              marginBottom: 24,
            }}>← BACK TO ROSTER</Link>

            <div className="tl-grid-artist-hdr">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  border: "1px solid var(--tl-line)",
                  overflow: "hidden",
                  background: "var(--tl-ink-900)",
                }}
              >
                <Image
                  src={artist.photo}
                  alt={artist.full}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  style={{ objectFit: "cover", filter: "grayscale(100%) contrast(1.05)" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    fontFamily: "var(--tl-font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    color: "var(--tl-bone-50)",
                    background: "var(--tl-ink-900)",
                    padding: "3px 8px",
                    border: "1px solid var(--tl-line)",
                  }}
                >
                  CHAIR {artist.chair} · SPECIMEN {artist.spec_letter}
                </div>
              </div>

              <div>
                <Eyebrow>SPECIMEN {artist.specimen}</Eyebrow>
                <h1 className="tl-h1" style={{ fontSize: "clamp(72px, 9vw, 144px)", marginTop: 12, lineHeight: 0.86 }}>
                  {artist.full}
                </h1>
                <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
                  <SpecimenTag variant="outline">CHAIR {artist.chair}</SpecimenTag>
                  <SpecimenTag variant="outline">{artist.years} YR PRACTICE</SpecimenTag>
                  <SpecimenTag variant="outline">{artist.needles}</SpecimenTag>
                  <SpecimenTag variant="blood">${artist.rate} / HR · MIN {artist.minHours}H</SpecimenTag>
                </div>

                <div style={{
                  marginTop: 28,
                  fontFamily: "var(--tl-font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  color: "var(--tl-fg-dim)",
                  lineHeight: 1.9,
                  textTransform: "uppercase",
                  borderLeft: "1px solid var(--tl-line)",
                  paddingLeft: 24,
                }}>
                  <div style={{ color: "var(--tl-fg)", marginBottom: 6, fontSize: 13 }}>SUBJECT FILE</div>
                  <div>NAME: {artist.full}</div>
                  <div>SPECIMEN: {artist.specimen}</div>
                  <div>RATE: ${artist.rate} / HR (MIN ${artist.minCharge})</div>
                  <div style={{ color: "var(--tl-data)" }}>STATUS: {artist.status}</div>
                </div>
              </div>
            </div>

            <hr className="tl-rule" style={{ margin: "48px 0 0" }} />
          </div>
        </section>

        <section style={{ background: "var(--tl-ink-900)", padding: "64px 0" }}>
          <div className="tl-page tl-grid-artist-bio">
            <div>
              <Eyebrow>BIOGRAPHY</Eyebrow>
              <p className="tl-lede" style={{ marginTop: 16, color: "var(--tl-fg)" }}>
                {artist.bio}
              </p>
              <Link href={`/book?artist=${artist.id}`}>
                <TLButton variant="primary" size="lg" stamped>
                  BOOK WITH {artist.name} <span>→</span>
                </TLButton>
              </Link>
            </div>

            <div>
              <Eyebrow>SELECTED WORKS</Eyebrow>
              <div className="tl-grid-artist-works" style={{ marginTop: 16 }}>
                {artist.works.map((w, i) => (
                  <RegisterFrame key={i} style={{ padding: 10, border: "1px solid var(--tl-line)" }}>
                    <PhotoSlab
                      height={200}
                      seed={i + Number(artist.chair)}
                      label={`FIG.${(i + 1).toString().padStart(2, "0")}`}
                    />
                    <div style={{ padding: "12px 6px 4px" }}>
                      <div className="tl-h3" style={{ fontSize: 22, color: "var(--tl-fg)" }}>{w.title}</div>
                      <div style={{
                        display: "flex", justifyContent: "space-between", marginTop: 6,
                        fontFamily: "var(--tl-font-mono)", fontSize: 10,
                        letterSpacing: "0.14em", color: "var(--tl-fg-dim)", textTransform: "uppercase",
                      }}>
                        <span>{w.size}</span>
                        <span>{w.hours}H</span>
                      </div>
                    </div>
                  </RegisterFrame>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </TattooShell>
  );
}
