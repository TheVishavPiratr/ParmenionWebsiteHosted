import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import logo from "../../static/logo.jpeg";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Vision", href: "/vision" },
  { label: "Our Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_LINKS = [
  "AI Surveillance",
  "Smart Access Control",
  "Business Analytics",
  "Remote Monitoring",
];

const SOCIALS = [
  {
    label: "LinkedIn",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    ),
  },
  {
    label: "Twitter",
    icon: (
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.6.8-2.5 1a4 4 0 0 0-6.9 3.6 11.3 11.3 0 0 1-8.2-4.1 4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5v.1c0 2 1.4 3.6 3.2 4a4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.4-1.3 1.9-2.1-.7.3-1.5.5-2.3.6Z" />
    ),
  },
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-soft)" }}>
      <div
        className="container footer-grid"
        style={{
          padding: "80px 24px 40px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
          gap: 40,
        }}
      >
        <div>
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}
          >
            <img
              src={logo}
              alt="Parmenion logo"
              style={{
                height: 40,
                width: 40,
                objectFit: "cover",
                borderRadius: "50%",
                border: "1px solid var(--border-strong)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              PARMENION
            </span>
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 300, maxWidth: 300 }}>
            AI-powered smart security &amp; business monitoring — secured vision
            for every space you care about.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                onClick={(e) => e.preventDefault()}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid var(--border-strong)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.25s ease, color 0.25s ease",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "var(--gold)" }}
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={footerHeading}>Navigate</h4>
          <ul style={{ display: "grid", gap: 12 }}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link to={l.href} style={footerLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={footerHeading}>Our Services</h4>
          <ul style={{ display: "grid", gap: 12 }}>
            {PRODUCT_LINKS.map((l) => (
              <li key={l}>
                <Link to="/services" style={footerLink}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={footerHeading}>Stay Informed</h4>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontWeight: 300, marginBottom: 16 }}>
            Occasional updates on new features and security insights. No spam.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", border: "1px solid var(--border-strong)", borderRadius: 3, overflow: "hidden" }}
          >
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                padding: "12px 14px",
                color: "var(--text)",
                fontSize: "0.85rem",
                outline: "none",
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              style={{
                background: "var(--gold)",
                color: "#0a0a0a",
                border: "none",
                padding: "0 18px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="divider-line" />

      <div
        className="container"
        style={{
          padding: "26px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 12, color: "var(--text-faint)" }}>
          &copy; {new Date().getFullYear()} Parmenion. All rights reserved.
        </span>
        <span style={{ fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.08em" }}>
          SECURED VISION
        </span>
      </div>
    </footer>
  );
}

const footerHeading: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--gold-light)",
  marginBottom: 20,
  fontWeight: 600,
};

const footerLink: CSSProperties = {
  color: "var(--text-muted)",
  fontSize: "0.9rem",
  fontWeight: 300,
  transition: "color 0.2s ease",
};
