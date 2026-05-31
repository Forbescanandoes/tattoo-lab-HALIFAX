"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow, SpecimenTag, RegisterFrame, TLButton } from "./primitives";
import { TattooShell } from "./chrome";

export default function ScreenBooking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    idea: "",
    placement: "",
    style: "",
    flexibility: "",
    budget: "",
    references: [] as string[],
    availability: "",
    birthday: "",
    contactMethod: "Text",
    hearAbout: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: false,
  });

  const update = (k: string, v: string | boolean | string[]) =>
    setData((d) => ({ ...d, [k]: v }));

  if (step === 4) {
    return (
      <TattooShell>
        <BookingConfirmed data={data} />
      </TattooShell>
    );
  }

  return (
    <TattooShell>
      <div className="tl-screen" style={{ paddingTop: 96, paddingBottom: 96, background: "var(--tl-ink-900)", minHeight: "100vh" }}>
        <div className="tl-page tl-grid-booking">
          <div className="tl-booking-sidebar">
            <Eyebrow>04 · BOOKING</Eyebrow>
            <h1 className="tl-h1" style={{ fontSize: "clamp(56px, 6vw, 96px)", marginTop: 12, lineHeight: 0.86 }}>
              SUBMIT A<br />BRIEF.
            </h1>

            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
              {([
                { n: 1, t: "THE IDEA" },
                { n: 2, t: "LOGISTICS" },
                { n: 3, t: "YOUR DETAILS" },
              ] as const).map((s) => (
                <div key={s.n} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  fontFamily: "var(--tl-font-mono)", fontSize: 11,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: step === s.n ? "var(--tl-fg)" : step > s.n ? "var(--tl-data)" : "var(--tl-fg-dim)",
                }}>
                  <span style={{
                    width: 24, height: 24, border: "1px solid currentColor",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11,
                    background: step === s.n ? "var(--tl-fg)" : "transparent",
                    color: step === s.n ? "var(--tl-ink-900)" : "currentColor",
                  }}>
                    {step > s.n ? "✓" : s.n.toString().padStart(2, "0")}
                  </span>
                  {s.t}
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 48, fontFamily: "var(--tl-font-mono)", fontSize: 11,
              letterSpacing: "0.14em", color: "var(--tl-fg-dim)", lineHeight: 1.9,
              textTransform: "uppercase", borderTop: "1px solid var(--tl-line)", paddingTop: 16,
            }}>
              AVG. RESPONSE 23H<br />
              <span style={{ color: "var(--tl-data)" }}>FREE CONSULTATION</span><br />
              18+ ONLY
            </div>
          </div>

          <div>
            {step === 1 && <StepIdea data={data} update={update} onNext={() => setStep(2)} />}
            {step === 2 && <StepLogistics data={data} update={update} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
            {step === 3 && <StepDetails data={data} update={update} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
          </div>
        </div>
      </div>
    </TattooShell>
  );
}

function FormCard({ children }: { children: React.ReactNode }) {
  return (
    <RegisterFrame style={{ padding: 32, border: "1px solid var(--tl-line)", background: "var(--tl-ink-800)" }}>
      {children}
    </RegisterFrame>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "var(--tl-font-mono)", fontSize: 10,
      letterSpacing: "0.18em", color: "var(--tl-fg-dim)",
      textTransform: "uppercase", marginBottom: 6,
    }}>{children}</div>
  );
}

const fieldStyle: React.CSSProperties = {
  width: "100%", padding: "14px 16px",
  background: "var(--tl-ink-700)", color: "var(--tl-fg)",
  border: "1px solid var(--tl-line)", borderRadius: 0,
  fontFamily: "var(--tl-font-body)", fontSize: 16,
  boxSizing: "border-box", outline: "none",
};

type BookingData = {
  idea: string; placement: string; style: string;
  flexibility: string; budget: string; references: string[];
  availability: string; birthday: string;
  contactMethod: string; hearAbout: string;
  firstName: string; lastName: string;
  email: string; phone: string; consent: boolean;
};

type Updater = (k: string, v: string | boolean | string[]) => void;

const TATTOO_STYLES = [
  "Linework / Fine Line",
  "Black & Grey",
  "Traditional / American",
  "Neo-Traditional",
  "Japanese",
  "Realism",
  "Watercolor",
  "Illustrative",
  "Geometric",
  "Lettering / Script",
  "Other / Not sure",
];

const FLEXIBILITY_OPTIONS = [
  "Very flexible — open to the artist's interpretation",
  "Somewhat flexible — I have a general vision",
  "Specific — I have a clear design in mind",
];

const BUDGET_OPTIONS = [
  "Under $200",
  "$200 – $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
  "Not sure yet",
];

function StepIdea({
  data, update, onNext,
}: {
  data: BookingData;
  update: Updater;
  onNext: () => void;
}) {
  return (
    <FormCard>
      <h2 className="tl-h3" style={{ fontSize: 32, marginTop: 0 }}>01 · THE IDEA</h2>
      <p className="tl-p" style={{ marginTop: 4 }}>Start here. What do you want on your skin? Reference artists, eras, vibe.</p>

      <div style={{ marginTop: 24 }}>
        <FieldLabel>DESCRIBE YOUR IDEA</FieldLabel>
        <textarea
          style={{ ...fieldStyle, minHeight: 160, resize: "vertical" }}
          value={data.idea}
          onChange={(e) => update("idea", e.target.value)}
          placeholder="What it is, what it isn't. Size, mood, references. Keep it under 200 words."
        />
      </div>

      <div style={{ marginTop: 16 }}>
        <FieldLabel>PLACEMENT OF TATTOO / PIERCING</FieldLabel>
        <input
          style={fieldStyle}
          value={data.placement}
          onChange={(e) => update("placement", e.target.value)}
          placeholder="e.g. Inner forearm, upper chest, or behind the ear"
        />
      </div>

      <div className="tl-grid-form-2" style={{ marginTop: 16 }}>
        <div>
          <FieldLabel>WHAT TATTOO STYLE ARE YOU LOOKING FOR?</FieldLabel>
          <select
            style={fieldStyle}
            value={data.style}
            onChange={(e) => update("style", e.target.value)}
          >
            <option value="">Select…</option>
            {TATTOO_STYLES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <FieldLabel>DO YOU HAVE A BUDGET IN MIND?</FieldLabel>
          <select
            style={fieldStyle}
            value={data.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="">Select…</option>
            {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <FieldLabel>HOW FLEXIBLE ARE YOU WITH THE DESIGN?</FieldLabel>
        <select
          style={fieldStyle}
          value={data.flexibility}
          onChange={(e) => update("flexibility", e.target.value)}
        >
          <option value="">Select…</option>
          {FLEXIBILITY_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>

      <div style={{ marginTop: 16 }}>
        <FieldLabel>UPLOAD YOUR REFERENCE IMAGE(S)</FieldLabel>
        <input
          type="file"
          multiple
          accept="image/*"
          style={{ ...fieldStyle, padding: "10px 12px", cursor: "pointer" }}
          onChange={(e) => {
            const names = Array.from(e.target.files ?? []).map((f) => f.name);
            update("references", names);
          }}
        />
        {data.references.length > 0 && (
          <div style={{
            marginTop: 8, fontFamily: "var(--tl-font-mono)", fontSize: 11,
            letterSpacing: "0.14em", color: "var(--tl-fg-dim)", textTransform: "uppercase",
          }}>
            {data.references.length} FILE{data.references.length === 1 ? "" : "S"} SELECTED
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
        <TLButton variant="primary" size="lg" onClick={onNext}>CONTINUE <span>→</span></TLButton>
      </div>
    </FormCard>
  );
}

function StepLogistics({
  data, update, onNext, onBack,
}: {
  data: BookingData;
  update: Updater;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <FormCard>
      <h2 className="tl-h3" style={{ fontSize: 32, marginTop: 0 }}>02 · LOGISTICS</h2>
      <p className="tl-p" style={{ marginTop: 4 }}>A few quick details so we can reach you the right way.</p>

      <div className="tl-grid-form-2" style={{ marginTop: 24 }}>
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
          <FieldLabel>PREFERRED CONTACT METHOD</FieldLabel>
          <select
            style={fieldStyle}
            value={data.contactMethod}
            onChange={(e) => update("contactMethod", e.target.value)}
          >
            <option value="Text">Text (Recommended)</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone Call</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <FieldLabel>YOUR AVAILABILITY OR PREFERRED DATES</FieldLabel>
        <input
          style={fieldStyle}
          value={data.availability}
          onChange={(e) => update("availability", e.target.value)}
          placeholder="e.g. Weekdays after 3 PM or weekend"
        />
      </div>

      <div style={{ marginTop: 16 }}>
        <FieldLabel>HOW DID YOU HEAR ABOUT US?</FieldLabel>
        <select
          style={fieldStyle}
          value={data.hearAbout}
          onChange={(e) => update("hearAbout", e.target.value)}
        >
          <option value="">Select one…</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend / Word of Mouth">Friend / Word of Mouth</option>
          <option value="Search Engine">Search Engine</option>
          <option value="Walk-by">Walk-by</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
        <TLButton variant="ghost" onClick={onBack}>← BACK</TLButton>
        <TLButton variant="primary" size="lg" onClick={onNext}>CONTINUE <span>→</span></TLButton>
      </div>
    </FormCard>
  );
}

function StepDetails({
  data, update, onNext, onBack,
}: {
  data: BookingData;
  update: Updater;
  onNext: () => void;
  onBack: () => void;
}) {
  const valid = data.firstName && data.lastName && data.email && data.phone && data.consent;
  return (
    <FormCard>
      <h2 className="tl-h3" style={{ fontSize: 32, marginTop: 0 }}>03 · YOUR DETAILS</h2>
      <p className="tl-p" style={{ marginTop: 4 }}>We use these to confirm and not much else.</p>

      <div className="tl-grid-form-2" style={{ marginTop: 24 }}>
        <div>
          <FieldLabel>FIRST NAME</FieldLabel>
          <input style={fieldStyle} value={data.firstName} onChange={(e) => update("firstName", e.target.value)} />
        </div>
        <div>
          <FieldLabel>LAST NAME</FieldLabel>
          <input style={fieldStyle} value={data.lastName} onChange={(e) => update("lastName", e.target.value)} />
        </div>
        <div>
          <FieldLabel>EMAIL</FieldLabel>
          <input style={fieldStyle} value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@domain" type="email" />
        </div>
        <div>
          <FieldLabel>PHONE</FieldLabel>
          <input style={fieldStyle} value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Starting with +1 or Country code" />
        </div>
      </div>

      <hr className="tl-rule" />

      <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
        <span style={{
          width: 18, height: 18, border: "1.5px solid var(--tl-fg)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: data.consent ? "var(--tl-fg)" : "transparent",
          color: "var(--tl-accent)", fontSize: 13, marginTop: 2, flexShrink: 0,
        }} onClick={() => update("consent", !data.consent)}>
          {data.consent ? "✕" : ""}
        </span>
        <span style={{ fontSize: 14, color: "var(--tl-fg-muted)", lineHeight: 1.5 }}>
          I&apos;m 18 or older. I&apos;ve read the <a style={{ color: "var(--tl-accent)", borderBottom: "1px solid currentColor" }} href="#">aftercare consent</a> and acknowledge that booking is a request, not a confirmation.
        </span>
      </label>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32 }}>
        <TLButton variant="ghost" onClick={onBack}>← BACK</TLButton>
        <TLButton variant="primary" size="lg" stamped onClick={() => valid && onNext()} disabled={!valid}>
          {valid ? <>SUBMIT BRIEF <span>→</span></> : "FILL REQUIRED FIELDS"}
        </TLButton>
      </div>
    </FormCard>
  );
}

function BookingConfirmed({ data }: { data: BookingData }) {
  const ref = Math.floor(Math.random() * 9000 + 1000);
  const time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
  const ideaPreview = data.idea.length > 80 ? data.idea.slice(0, 80) + "…" : data.idea;

  return (
    <div className="tl-screen" style={{ paddingTop: 140, paddingBottom: 96, background: "var(--tl-ink-900)", minHeight: "100vh" }}>
      <div className="tl-page" style={{ maxWidth: 760 }}>
        <SpecimenTag variant="serum">LOGGED · {time}</SpecimenTag>
        <h1 className="tl-h1" style={{ fontSize: "clamp(64px, 8vw, 120px)", marginTop: 16, lineHeight: 0.86 }}>
          BRIEF<br />RECEIVED.
        </h1>
        <p className="tl-lede" style={{ marginTop: 24, maxWidth: 580 }}>
          We&apos;ll reach out within 48 hours with a quote, a session length, and a confirmed date. If you don&apos;t hear back, check your spam — then reach out directly.
        </p>

        <RegisterFrame style={{ padding: 24, marginTop: 40, border: "1px solid var(--tl-line)", background: "var(--tl-ink-800)" }}>
          <div style={{ fontFamily: "var(--tl-font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--tl-fg-dim)", textTransform: "uppercase", lineHeight: 1.9 }}>
            <div style={{ color: "var(--tl-fg)" }}>BRIEF SUMMARY</div>
            <div>NAME: {data.firstName} {data.lastName}</div>
            <div>CONTACT: {data.email} · {data.phone}</div>
            <div>PREFERRED: {data.contactMethod}</div>
            <div>PLACEMENT: {data.placement || "—"}</div>
            <div>STYLE: {data.style || "—"}</div>
            <div>BUDGET: {data.budget || "—"}</div>
            <div>FLEXIBILITY: {data.flexibility || "—"}</div>
            <div>AVAILABILITY: {data.availability || "—"}</div>
            <div>REFERENCES: {data.references.length > 0 ? `${data.references.length} FILE(S)` : "—"}</div>
            <div>IDEA: {ideaPreview || "—"}</div>
            <div style={{ color: "var(--tl-data)", marginTop: 8 }}>REF #SP-{ref}</div>
          </div>
        </RegisterFrame>

        <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
          <Link href="/">
            <TLButton variant="secondary" size="lg">BACK TO HOME</TLButton>
          </Link>
          <Link href="/faq">
            <TLButton variant="ghost">READ THE FAQ →</TLButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
