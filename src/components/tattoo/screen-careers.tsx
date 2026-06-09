"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow, SpecimenTag, RegisterFrame, TLButton } from "./primitives";
import { TattooShell } from "./chrome";

export default function ScreenCareers() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    birthday: "",
    city: "",
    portfolio: "",
    path: "",
    about: "",
    consent: false,
  });

  const update = (k: string, v: string | boolean) =>
    setData((d) => ({ ...d, [k]: v }));

  if (submitted) {
    return (
      <TattooShell>
        <CareersConfirmed data={data} />
      </TattooShell>
    );
  }

  return (
    <TattooShell>
      <div
        className="tl-screen"
        style={{
          paddingTop: 120,
          paddingBottom: 96,
          background: "var(--tl-ink-900)",
          minHeight: "100vh",
        }}
      >
        {/* HERO */}
        <div className="tl-page" style={{ maxWidth: 1180 }}>
          <Eyebrow>06 · CAREERS</Eyebrow>
          <h1
            className="tl-h1"
            style={{
              fontSize: "clamp(64px, 9vw, 152px)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              marginTop: 16,
            }}
          >
            <div style={{ whiteSpace: "nowrap" }}>JOIN</div>
            <div style={{ whiteSpace: "nowrap" }}>THE</div>
            <div style={{ whiteSpace: "nowrap", color: "var(--tl-accent)" }}>LAB.</div>
          </h1>

          <p className="tl-lede" style={{ marginTop: 28, maxWidth: 580 }}>
            Halifax studio. Quality first. Steady chair time, clear standards, and a team that helps you sharpen.
          </p>

          <div style={{ marginTop: 28, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <SpecimenTag variant="bone" shape="square">HALIFAX, NS</SpecimenTag>
            <SpecimenTag variant="blood" shape="square">NOW HIRING · 2026</SpecimenTag>
            <SpecimenTag variant="serum" shape="square">2 OPEN PATHS</SpecimenTag>
          </div>
        </div>

        {/* POSITION / WHAT WE ARE */}
        <div className="tl-page" style={{ maxWidth: 1180, marginTop: 96 }}>
          <hr className="tl-rule" style={{ width: 96, border: 0, borderTop: "2px solid var(--tl-accent)", margin: "0 0 32px" }} />
          <div className="tl-grid-manifesto">
            <div>
              <Eyebrow>06.1 · POSITION</Eyebrow>
              <div
                style={{
                  marginTop: 16,
                  fontFamily: "var(--tl-font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--tl-iodine-300)",
                  lineHeight: 1.8,
                }}
              >
                FILED 2026.06.03<br />
                AUTHOR: TATTOO LAB<br />
                STATUS: OPEN<br />
                LOC: HALIFAX, NS
              </div>
            </div>
            <div>
              <h2
                className="tl-h2"
                style={{
                  color: "var(--tl-fg)",
                  maxWidth: 820,
                  lineHeight: 0.92,
                  letterSpacing: "-0.014em",
                  textWrap: "balance",
                  margin: 0,
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                }}
              >
                A quality focused studio in the heart of Halifax.
              </h2>
              <div style={{ maxWidth: 620, marginTop: 28 }}>
                <p
                  style={{
                    fontFamily: "var(--tl-font-body)",
                    fontSize: 21,
                    lineHeight: 1.5,
                    color: "var(--tl-fg)",
                    margin: 0,
                    textWrap: "pretty",
                  }}
                >
                  We hold a clean room, safe technique, and honest client care. If you want steady work, clear standards, and a team that pushes your craft, keep reading.
                </p>
                <p
                  style={{
                    fontFamily: "var(--tl-font-body)",
                    fontSize: 17,
                    lineHeight: 1.7,
                    color: "var(--tl-fg-dim)",
                    marginTop: 18,
                    marginBottom: 0,
                    textWrap: "pretty",
                  }}
                >
                  We&apos;re always growing. Two paths in: established tattooers looking for a professional bench, and disciplined artists from illustration, fine art, or digital design who want to learn tattooing the right way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TWO PATHS */}
        <div className="tl-page" style={{ maxWidth: 1180, marginTop: 96 }}>
          <Eyebrow>06.2 · PATHS</Eyebrow>
          <h2
            className="tl-h2"
            style={{
              marginTop: 12,
              fontSize: "clamp(40px, 4.6vw, 64px)",
              lineHeight: 0.92,
              letterSpacing: "-0.014em",
            }}
          >
            Two ways in.
          </h2>
          <hr className="tl-rule" style={{ marginTop: 24 }} />

          <div className="tl-grid-2" style={{ marginTop: 32 }}>
            <PathCard
              tag="PATH · A"
              title="ESTABLISHED ARTIST"
              blurb="A professional bench for working tattooers."
              items={[
                "Clean, high traffic studio in central Halifax",
                "Flexible scheduling, professional environment",
                "Access to premium equipment and supplies",
                "Established client base + steady online traffic",
              ]}
            />
            <PathCard
              tag="PATH · B"
              title="APPRENTICESHIP"
              blurb="For disciplined artists ready to learn the craft."
              items={[
                "Learn chair side under experienced professionals",
                "Real world training: design, technique, safety",
                "Health Canada approved standards",
                "Background in illustration, fine art, or digital design",
              ]}
            />
          </div>
        </div>

        {/* VALUES STRIP */}
        <div className="tl-page" style={{ maxWidth: 1180, marginTop: 96 }}>
          <RegisterFrame style={{ padding: 32, border: "1px solid var(--tl-line)", background: "var(--tl-ink-800)" }}>
            <Eyebrow>06.3 · VALUES</Eyebrow>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
                fontFamily: "var(--tl-font-display)",
                fontWeight: 800,
                fontSize: "clamp(40px, 5vw, 72px)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              <span>AUTHENTICITY.</span>
              <span style={{ color: "var(--tl-accent)" }}>PRECISION.</span>
              <span>ARTISTRY.</span>
            </div>
            <p
              style={{
                marginTop: 24,
                maxWidth: 720,
                fontFamily: "var(--tl-font-body)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--tl-fg-dim)",
                textWrap: "pretty",
              }}
            >
              Our team is built on collaboration and craft. Every artist here contributes to a culture that pushes the work forward. A licensed, hygienic, supportive studio where your career can grow.
            </p>
          </RegisterFrame>
        </div>

        {/* APPLICATION FORM */}
        <div className="tl-page" style={{ maxWidth: 1180, marginTop: 96 }}>
          <div className="tl-grid-booking">
            <div>
              <Eyebrow>06.4 · APPLICATION</Eyebrow>
              <h2
                className="tl-h2"
                style={{
                  marginTop: 12,
                  fontSize: "clamp(40px, 5vw, 72px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.014em",
                }}
              >
                Apply to the<br />bench.
              </h2>
              <div
                style={{
                  marginTop: 28,
                  fontFamily: "var(--tl-font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--tl-fg-dim)",
                  lineHeight: 1.9,
                  borderTop: "1px solid var(--tl-line)",
                  paddingTop: 16,
                }}
              >
                AVG. RESPONSE 5 DAYS<br />
                <span style={{ color: "var(--tl-data)" }}>PORTFOLIO REQUIRED</span><br />
                ALL APPLICATIONS REVIEWED
              </div>
            </div>

            <FormCard>
              <h2 className="tl-h3" style={{ fontSize: 32, marginTop: 0 }}>SUBMIT YOUR INTEREST</h2>
              <p className="tl-p" style={{ marginTop: 4 }}>
                Real names, real work. We review every application.
              </p>

              <div className="tl-grid-form-2" style={{ marginTop: 24 }}>
                <div>
                  <FieldLabel>FULL NAME</FieldLabel>
                  <input
                    style={fieldStyle}
                    value={data.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="First and last"
                  />
                </div>
                <div>
                  <FieldLabel>PHONE</FieldLabel>
                  <input
                    style={fieldStyle}
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="Starting with +1"
                  />
                </div>
                <div>
                  <FieldLabel>EMAIL</FieldLabel>
                  <input
                    style={fieldStyle}
                    type="email"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@domain"
                  />
                </div>
                <div>
                  <FieldLabel>BIRTHDAY</FieldLabel>
                  <input
                    style={fieldStyle}
                    type="date"
                    value={data.birthday}
                    onChange={(e) => update("birthday", e.target.value)}
                  />
                </div>
                <div>
                  <FieldLabel>CITY &amp; PROVINCE</FieldLabel>
                  <input
                    style={fieldStyle}
                    value={data.city}
                    onChange={(e) => update("city", e.target.value)}
                    placeholder="Halifax, NS"
                  />
                </div>
                <div>
                  <FieldLabel>WHICH PATH?</FieldLabel>
                  <select
                    style={fieldStyle}
                    value={data.path}
                    onChange={(e) => update("path", e.target.value)}
                  >
                    <option value="">Select…</option>
                    <option value="Established Artist">Established Artist</option>
                    <option value="Apprenticeship">Apprenticeship</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <FieldLabel>PORTFOLIO OR INSTAGRAM LINK</FieldLabel>
                <input
                  style={fieldStyle}
                  value={data.portfolio}
                  onChange={(e) => update("portfolio", e.target.value)}
                  placeholder="instagram.com/yourhandle  ·  yourportfolio.com"
                />
              </div>

              <div style={{ marginTop: 16 }}>
                <FieldLabel>TELL US ABOUT YOURSELF</FieldLabel>
                <textarea
                  style={{ ...fieldStyle, minHeight: 140, resize: "vertical" }}
                  value={data.about}
                  onChange={(e) => update("about", e.target.value)}
                  placeholder="Your background, your style, where you want to go. Keep it under 200 words."
                />
              </div>

              <hr className="tl-rule" />

              <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
                <span
                  style={{
                    width: 18,
                    height: 18,
                    border: "1.5px solid var(--tl-fg)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: data.consent ? "var(--tl-fg)" : "transparent",
                    color: "var(--tl-accent)",
                    fontSize: 13,
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                  onClick={() => update("consent", !data.consent)}
                >
                  {data.consent ? "✕" : ""}
                </span>
                <span style={{ fontSize: 14, color: "var(--tl-fg-muted)", lineHeight: 1.5 }}>
                  I&apos;m 18 or older. I consent to being contacted about this application.
                </span>
              </label>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32 }}>
                <Link href="/">
                  <TLButton variant="ghost">← BACK</TLButton>
                </Link>
                <TLButton
                  variant="primary"
                  size="lg"
                  stamped
                  onClick={() => {
                    const valid =
                      data.name && data.email && data.phone && data.portfolio && data.consent;
                    if (valid) setSubmitted(true);
                  }}
                  disabled={
                    !(data.name && data.email && data.phone && data.portfolio && data.consent)
                  }
                >
                  {data.name && data.email && data.phone && data.portfolio && data.consent ? (
                    <>SUBMIT APPLICATION <span>→</span></>
                  ) : (
                    "FILL REQUIRED FIELDS"
                  )}
                </TLButton>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </TattooShell>
  );
}

function PathCard({
  tag,
  title,
  blurb,
  items,
}: {
  tag: string;
  title: string;
  blurb: string;
  items: string[];
}) {
  return (
    <RegisterFrame style={{ padding: 28, border: "1px solid var(--tl-line)", background: "var(--tl-ink-800)" }}>
      <SpecimenTag variant="bone" shape="square">{tag}</SpecimenTag>
      <h3
        className="tl-h3"
        style={{
          marginTop: 16,
          fontSize: 36,
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          marginTop: 8,
          fontFamily: "var(--tl-font-body)",
          fontSize: 17,
          lineHeight: 1.55,
          color: "var(--tl-fg-dim)",
        }}
      >
        {blurb}
      </p>
      <ul
        style={{
          marginTop: 20,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {items.map((it) => (
          <li
            key={it}
            style={{
              display: "grid",
              gridTemplateColumns: "16px 1fr",
              gap: 12,
              alignItems: "start",
              fontFamily: "var(--tl-font-body)",
              fontSize: 15,
              color: "var(--tl-fg)",
              lineHeight: 1.55,
            }}
          >
            <span
              style={{
                fontFamily: "var(--tl-font-mono)",
                color: "var(--tl-accent)",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              +
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </RegisterFrame>
  );
}

function FormCard({ children }: { children: React.ReactNode }) {
  return (
    <RegisterFrame
      style={{
        padding: 32,
        border: "1px solid var(--tl-line)",
        background: "var(--tl-ink-800)",
      }}
    >
      {children}
    </RegisterFrame>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--tl-font-mono)",
        fontSize: 10,
        letterSpacing: "0.18em",
        color: "var(--tl-fg-dim)",
        textTransform: "uppercase",
        marginBottom: 6,
      }}
    >
      {children}
    </div>
  );
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: "var(--tl-ink-700)",
  color: "var(--tl-fg)",
  border: "1px solid var(--tl-line)",
  borderRadius: 0,
  fontFamily: "var(--tl-font-body)",
  fontSize: 16,
  boxSizing: "border-box",
  outline: "none",
};

type CareersData = {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  city: string;
  portfolio: string;
  path: string;
  about: string;
  consent: boolean;
};

function CareersConfirmed({ data }: { data: CareersData }) {
  const ref = Math.floor(Math.random() * 9000 + 1000);
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const aboutPreview =
    data.about.length > 80 ? data.about.slice(0, 80) + "…" : data.about;

  return (
    <div
      className="tl-screen"
      style={{
        paddingTop: 140,
        paddingBottom: 96,
        background: "var(--tl-ink-900)",
        minHeight: "100vh",
      }}
    >
      <div className="tl-page" style={{ maxWidth: 760 }}>
        <SpecimenTag variant="serum">LOGGED · {time}</SpecimenTag>
        <h1
          className="tl-h1"
          style={{
            fontSize: "clamp(64px, 8vw, 120px)",
            marginTop: 16,
            lineHeight: 0.86,
          }}
        >
          APPLICATION<br />RECEIVED.
        </h1>
        <p className="tl-lede" style={{ marginTop: 24, maxWidth: 580 }}>
          We review every application. Expect a reply within 5 business days. If you don&apos;t hear back, check spam, then reach out directly.
        </p>

        <RegisterFrame
          style={{
            padding: 24,
            marginTop: 40,
            border: "1px solid var(--tl-line)",
            background: "var(--tl-ink-800)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--tl-font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--tl-fg-dim)",
              textTransform: "uppercase",
              lineHeight: 1.9,
            }}
          >
            <div style={{ color: "var(--tl-fg)" }}>APPLICATION SUMMARY</div>
            <div>NAME: {data.name}</div>
            <div>CONTACT: {data.email} · {data.phone}</div>
            <div>CITY: {data.city || "N/A"}</div>
            <div>PATH: {data.path || "N/A"}</div>
            <div>PORTFOLIO: {data.portfolio || "N/A"}</div>
            <div>BIRTHDAY: {data.birthday || "N/A"}</div>
            <div>ABOUT: {aboutPreview || "N/A"}</div>
            <div style={{ color: "var(--tl-data)", marginTop: 8 }}>REF #TL.{ref}</div>
          </div>
        </RegisterFrame>

        <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
          <Link href="/">
            <TLButton variant="secondary" size="lg">BACK TO HOME</TLButton>
          </Link>
          <Link href="/artists">
            <TLButton variant="ghost">MEET THE TEAM →</TLButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
