import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../static/logo4.jpeg";
import ThemeToggle from "./ThemeToggle";
import { SEGMENTS, ServiceIcon } from "./servicesData";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Vision", href: "/vision" },
  { label: "Our Services", href: "/services" },
];

const SERVICES_HREF = "/services";

function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      className="nav-services-panel"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        background: "var(--bg-panel)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
      }}
    >
      <motion.div
        className="container"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -24, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          padding: "36px 24px 44px",
        }}
      >
        <div style={{ borderRight: "1px solid var(--border)", paddingRight: 24 }}>
          <Link
            to={SERVICES_HREF}
            onClick={onNavigate}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--gold)",
              lineHeight: 1.2,
            }}
          >
            Our Services
          </Link>
        </div>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            paddingLeft: 32,
          }}
        >
          {SEGMENTS.map((s, i) => (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 + i * 0.035 }}
            >
              <Link
                to={`${SERVICES_HREF}?service=${s.id}`}
                onClick={onNavigate}
                className="service-tile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 22px",
                  borderRadius: 6,
                  color: "var(--text)",
                  fontSize: "0.98rem",
                  fontWeight: 500,
                }}
              >
                <ServiceIcon icon={s.icon} size={28} />
                {s.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

function RouteLoader() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    let cancelled = false;
    let finished = false;
    let tracked = false;
    const timers: number[] = [];
    const cleanups: Array<() => void> = [];
    const addTimer = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };

    setVisible(true);
    setProgress(4);

    const finish = () => {
      if (finished || cancelled) return;
      finished = true;
      setProgress(100);
      addTimer(() => setVisible(false), 200);
      addTimer(() => setProgress(0), 450);
    };

    const trackImages = (main: Element) => {
      const images = Array.from(main.querySelectorAll("img"));
      if (images.length === 0) {
        finish();
        return;
      }

      let loaded = 0;
      const update = () => {
        if (cancelled) return;
        loaded += 1;
        setProgress(Math.min(96, Math.round((loaded / images.length) * 100)));
        if (loaded >= images.length) finish();
      };

      images.forEach((img) => {
        if (img.complete) {
          update();
          return;
        }
        const onDone = () => update();
        img.addEventListener("load", onDone);
        img.addEventListener("error", onDone);
        cleanups.push(() => {
          img.removeEventListener("load", onDone);
          img.removeEventListener("error", onDone);
        });
      });
    };

    // The outgoing page's <main> stays mounted during its exit animation, so
    // wait for the new route's <main data-route="..."> to actually appear
    // before measuring its images.
    const selector = `main[data-route="${location.pathname}"]`;
    const tryTrack = () => {
      if (tracked) return;
      const main = document.querySelector(selector);
      if (main) {
        tracked = true;
        observer.disconnect();
        trackImages(main);
      }
    };

    const observer = new MutationObserver(tryTrack);
    observer.observe(document.body, { childList: true, subtree: true });
    tryTrack();

    addTimer(finish, 6000);

    return () => {
      cancelled = true;
      observer.disconnect();
      cleanups.forEach((c) => c());
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [location.pathname]);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 200,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, opacity 0.3s ease",
          boxShadow: "0 0 8px rgba(201,168,118,0.6)",
        }}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen]);

  return (
    <>
    <AnimatePresence>
      {servicesOpen && (
        <motion.div
          aria-hidden
          onClick={() => setServicesOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 99,
          }}
        />
      )}
    </AnimatePresence>
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: "var(--bg)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? 76 : 92,
          transition: "height 0.4s ease",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={logo}
            alt="Parmenion logo"
            style={{
              display: "block",
              height: 56,
              width: 56,
              objectFit: "cover",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <span
            className="brand-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            PARMENION
          </span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
          className="nav-desktop"
        >
          {LINKS.map((link) => {
            const isServices = link.href === SERVICES_HREF;
            const isActive =
              location.pathname === link.href || (isServices && servicesOpen);
            const linkStyle = {
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: isActive ? "var(--gold-light)" : "var(--text-muted)",
              position: "relative" as const,
              padding: "6px 10px",
              borderRadius: 4,
              border: `1px dashed ${isActive ? "var(--gold)" : "transparent"}`,
              transition: "color 0.25s ease, border-color 0.25s ease",
            };

            if (isServices) {
              return (
                <button
                  key={link.href}
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  style={{
                    ...linkStyle,
                    background: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {link.label}
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </button>
              );
            }

            return (
              <Link key={link.href} to={link.href} style={linkStyle}>
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
          <Link to="/contact" className="btn btn-primary" style={{ padding: "11px 24px", fontSize: 12 }}>
            Get in Touch
          </Link>
        </nav>

        <div className="nav-toggle-group" style={{ display: "none", alignItems: "center", gap: 10 }}>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="nav-toggle"
            style={{
              background: "none",
              border: "1px solid var(--border-strong)",
              borderRadius: 4,
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          <div style={{ position: "relative", width: 18, height: 12 }}>
            <motion.span
              animate={{ rotate: open ? 45 : 0, top: open ? 5 : 0 }}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: 1.5,
                background: "var(--gold-light)",
              }}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              style={{
                position: "absolute",
                left: 0,
                top: 5,
                width: "100%",
                height: 1.5,
                background: "var(--gold-light)",
              }}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, top: open ? 5 : 10 }}
              style={{
                position: "absolute",
                left: 0,
                top: 10,
                width: "100%",
                height: 1.5,
                background: "var(--gold-light)",
              }}
            />
          </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              background: "var(--nav-scrim-mobile)",
              borderTop: "1px solid var(--border)",
            }}
            className="nav-mobile"
          >
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "20px 24px 32px",
              }}
            >
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: "14px 4px",
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    borderBottom: "1px solid var(--border)",
                    color: location.pathname === link.href ? "var(--gold-light)" : "var(--text)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 4px 0",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                  }}
                >
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 18, width: "100%" }}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {servicesOpen && (
          <ServicesMenu onNavigate={() => setServicesOpen(false)} />
        )}
      </AnimatePresence>

      <RouteLoader />
    </header>
    </>
  );
}
