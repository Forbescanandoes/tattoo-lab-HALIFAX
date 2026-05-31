"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_DATA } from "@/lib/tattoo-data";
import { Eyebrow, TLButton } from "./primitives";
import { TattooShell } from "./chrome";

export default function ScreenFaq() {
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <TattooShell>
      <div className="tl-screen tl-section-light" style={{ minHeight: "100vh", paddingTop: 140, paddingBottom: 0 }}>
        <div className="tl-page">
          <Eyebrow>05 · FAQ</Eyebrow>
          <h1 className="tl-h1" style={{ color: "var(--tl-ink-900)", fontSize: "clamp(80px, 10vw, 160px)", marginTop: 12, lineHeight: 0.84 }}>
            QUESTIONS,<br />ANSWERED.
          </h1>

          <hr className="tl-rule" style={{ margin: "48px 0", borderColor: "var(--tl-bone-400)" }} />

          {FAQ_DATA.map((cat, ci) => (
            <div key={cat.cat} style={{ marginBottom: 64 }}>
              <div className="tl-grid-faq">
                <div className="tl-faq-sidebar">
                  <div style={{ fontFamily: "var(--tl-font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--tl-blood-500)", textTransform: "uppercase" }}>
                    [ {String(ci + 1).padStart(2, "0")} · {cat.cat} ]
                  </div>
                  <div className="tl-h2" style={{ color: "var(--tl-ink-900)", marginTop: 8, fontSize: 56 }}>
                    {cat.cat}.
                  </div>
                </div>

                <div>
                  {cat.items.map((it, qi) => {
                    const id = `${ci}-${qi}`;
                    const isOpen = open === id;
                    return (
                      <div key={qi} style={{ borderTop: "1px solid var(--tl-bone-400)" }}>
                        <button
                          onClick={() => setOpen(isOpen ? null : id)}
                          style={{
                            width: "100%", background: "transparent", border: 0,
                            padding: "20px 0", textAlign: "left", cursor: "pointer",
                            display: "flex", justifyContent: "space-between",
                            alignItems: "baseline", gap: 24,
                            fontFamily: "var(--tl-font-display)", fontWeight: 800,
                            fontSize: 28, lineHeight: 1.05,
                            color: "var(--tl-ink-900)", textTransform: "uppercase",
                            letterSpacing: "0.005em",
                          }}
                        >
                          <span style={{ flex: 1 }}>{it.q}</span>
                          <span style={{ fontFamily: "var(--tl-font-mono)", fontSize: 14, color: "var(--tl-blood-500)", flexShrink: 0 }}>
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div style={{
                            paddingBottom: 24,
                            fontFamily: "var(--tl-font-body)", fontSize: 17,
                            lineHeight: 1.55, color: "var(--tl-ink-700)",
                            maxWidth: 700,
                            animation: "tl-faq-open 280ms cubic-bezier(0.16,1,0.3,1)",
                          }}>
                            {it.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div style={{ borderTop: "1px solid var(--tl-bone-400)" }} />
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: "var(--tl-ink-900)", color: "var(--tl-fg)", padding: 48, marginTop: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
              <div>
                <Eyebrow>STILL CURIOUS?</Eyebrow>
                <h2 className="tl-h2" style={{ marginTop: 8 }}>EMAIL US DIRECTLY.</h2>
                <div style={{ fontFamily: "var(--tl-font-mono)", fontSize: 14, color: "var(--tl-fg-muted)", letterSpacing: "0.08em", marginTop: 8 }}>
                  Hi@tattoolab.ca · avg. response 23h
                </div>
              </div>
              <Link href="/book">
                <TLButton variant="primary" size="lg" stamped>SUBMIT A BRIEF <span>→</span></TLButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </TattooShell>
  );
}
