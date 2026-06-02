"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark, TLButton } from "./primitives";

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 961px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const links = [
    { href: "/",        label: "WORK" },
    { href: "/artists", label: "ARTISTS" },
    { href: "/book",    label: "BOOK" },
    { href: "/faq",     label: "FAQ" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className="tl-nav"
        style={{
          background: scrolled ? "rgba(10,9,8,0.92)" : "rgba(10,9,8,0.55)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BrandMark size={26} />
        </Link>

        <div className="tl-nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: isActive(l.href) ? "var(--tl-fg)" : "var(--tl-fg-muted)",
                paddingBottom: 4,
                borderBottom: isActive(l.href) ? "2px solid var(--tl-accent)" : "2px solid transparent",
                transition: "color 160ms",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18 }}>
          <span className="tl-nav-status">
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--tl-data)",
              boxShadow: "0 0 8px var(--tl-data)",
              animation: "tl-pulse 1.6s ease-in-out infinite",
              display: "inline-block",
            }} />
            OPEN · 11–21
          </span>
          <Link href="/book" className="tl-nav-reserve">
            <TLButton variant="primary" size="md">RESERVE <span>→</span></TLButton>
          </Link>
          <button
            type="button"
            className="tl-nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </nav>

      <div
        className={`tl-nav-mobile${open ? " is-open" : ""}`}
        role="dialog"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={isActive(l.href) ? "true" : "false"}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 20 }}>
            <Link href="/book" onClick={() => setOpen(false)}>
              <TLButton variant="primary" size="lg">RESERVE <span>→</span></TLButton>
            </Link>
          </div>
          <div style={{
            marginTop: 24,
            fontFamily: "var(--tl-font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            color: "var(--tl-data)",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--tl-data)",
              boxShadow: "0 0 8px var(--tl-data)",
              display: "inline-block",
            }} />
            OPEN · 11–21
          </div>
      </div>
    </>
  );
}

function FooterCol({
  title,
  items,
  hrefs,
}: {
  title: string;
  items: string[];
  hrefs?: string[];
}) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--tl-font-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "var(--tl-fg-dim)",
        textTransform: "uppercase",
        marginBottom: 14,
      }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((it, i) => {
          const href = hrefs?.[i];
          const inner = (
            <span style={{
              fontFamily: "var(--tl-font-display)",
              fontWeight: 700,
              fontSize: 18,
              color: "var(--tl-fg)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}>{it}</span>
          );
          return href ? (
            <Link key={i} href={href} style={{ textDecoration: "none" }}>{inner}</Link>
          ) : (
            <span key={i}>{inner}</span>
          );
        })}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="tl-footer">
      <div className="tl-footer-wordmark" aria-hidden>
        <span>TATTOO</span>
        <span>LAB</span>
      </div>
      <div className="tl-footer-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="tl-grid-footer">
          <div>
            <BrandMark size={40} />
            <div style={{
              marginTop: 18,
              fontFamily: "var(--tl-font-display)",
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 800,
              lineHeight: 1.15,
              textTransform: "uppercase",
              color: "var(--tl-fg)",
              letterSpacing: "-0.005em",
              maxWidth: 440,
            }}>
              Halifax&rsquo;s Premier Tattoo Artists Creating Your Perfect Custom Body Art
            </div>
          </div>
          <FooterCol
            title="STUDIO"
            items={["221 HERRING COVE RD", "HALIFAX, NS", "EVERYDAY", "11AM – 10PM"]}
          />
          <FooterCol
            title="VISIT"
            items={["WORK", "ARTISTS", "BOOK A SESSION", "FAQ"]}
            hrefs={["/", "/artists", "/book", "/faq"]}
          />
          <FooterCol
            title="CONTACT"
            items={["HI@TATTOOLAB.CA", "+1 902 448 2211"]}
          />
        </div>

        <hr className="tl-rule" style={{ marginTop: 64 }} />
        <div className="tl-footer-bottom">
          <span>© TATTOO LAB · EST. 2024</span>
          <span>SPECIMEN 04 · OBSERVED 24/05/26</span>
          <span>HUMAN SUBJECTS RESEARCH — VOLUNTARY</span>
        </div>
      </div>
    </footer>
  );
}

export function TattooShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="tl-shell">
      <TopNav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
