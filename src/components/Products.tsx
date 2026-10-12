import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { useSearchParams } from "react-router-dom";
import {
  SEGMENTS,
  ServiceIcon,
  type Segment,
  type ServiceFeature,
} from "./servicesData";

const BUSINESS_FEATURES = [
  {
    label: "AI CCTV Monitoring",
    icon: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    label: "Real-Time Alerts",
    icon: (
      <>
        <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 12 6 8Z" />
        <path d="M10 19a2 2 0 0 0 4 0" />
      </>
    ),
  },
  {
    label: "Remote Monitoring",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    label: "Staff Management",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.5 3-6 7-6" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M14.5 20c.3-2.7 2.2-4.6 4.7-5" />
      </>
    ),
  },
  {
    label: "Cash Drawer Monitoring",
    icon: (
      <>
        <rect x="2" y="6" width="20" height="13" rx="1.5" />
        <circle cx="12" cy="12.5" r="2.6" />
        <path d="M6 6V4h12v2" />
      </>
    ),
  },
  {
    label: "Suspicious Activity",
    icon: (
      <>
        <path d="M12 3 2 21h20L12 3Z" />
        <path d="M12 10v5" />
        <path d="M12 18.2h.01" />
      </>
    ),
  },
  {
    label: "Night Activity",
    icon: (
      <>
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
      </>
    ),
  },
];

function BusinessDiagram() {
  const total = BUSINESS_FEATURES.length;
  const radius = 40;

  return (
    <div
      className="business-diagram"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 640,
        aspectRatio: "1 / 1",
        margin: "8px auto 0",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        {BUSINESS_FEATURES.map((f, i) => {
          const angle = (-90 + i * (360 / total)) * (Math.PI / 180);
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <motion.line
              key={f.label}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="var(--border-strong)"
              strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          width: 148,
          padding: "16px 14px",
          borderRadius: 14,
          border: "1px solid var(--gold)",
          background:
            "linear-gradient(160deg, var(--gold-dim) 0%, var(--bg-panel) 100%)",
          textAlign: "center",
          boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
          zIndex: 2,
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold-light)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ margin: "0 auto 8px" }}
        >
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
        </svg>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.02rem",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.15,
          }}
        >
          One Platform
        </div>
        <div
          style={{
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            marginTop: 4,
            fontWeight: 300,
          }}
        >
          Every tool, one app
        </div>
      </motion.div>

      {BUSINESS_FEATURES.map((f, i) => {
        const angle = (-90 + i * (360 / total)) * (Math.PI / 180);
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        return (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
            className="diagram-node"
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              x: "-50%",
              y: "-50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              width: 108,
            }}
          >
            <div
              className="diagram-node-circle"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: "1px solid var(--border-strong)",
                background: "var(--bg-panel)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.28)",
                flexShrink: 0,
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold-light)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {f.icon}
              </svg>
            </div>
            <span
              className="diagram-node-label"
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--text)",
                textAlign: "center",
                lineHeight: 1.25,
                background: "var(--bg-panel)",
                padding: "1px 4px",
                borderRadius: 3,
              }}
            >
              {f.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function PointCards({ points }: { points: string[] }) {
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
        gap: 14,
      }}
    >
      {points.map((point, i) => (
        <motion.li
          key={point}
          initial={{ opacity: 0, y: 18, scale: 0.92, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.45,
            delay: 0.15 + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -4, borderColor: "var(--gold)" }}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "18px 18px 20px",
            border: "1px solid var(--border)",
            borderRadius: 10,
            background:
              "linear-gradient(160deg, var(--gold-dim) 0%, transparent 70%)",
            overflow: "hidden",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "linear-gradient(90deg, var(--gold), transparent 80%)",
            }}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1px solid var(--border-strong)",
                background: "var(--bg-panel)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold-light)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "var(--border-strong)",
                lineHeight: 1,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </span>
          <span
            style={{
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "var(--text)",
              lineHeight: 1.4,
            }}
          >
            {point}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

// Reveals text word by word as it scrolls into view.
function RevealText({
  text,
  as: Tag = "p",
  style,
  delay = 0,
}: {
  text: string;
  as?: "p" | "h4";
  style?: React.CSSProperties;
  delay?: number;
}) {
  const MotionTag = Tag === "h4" ? motion.h4 : motion.p;
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.025, delayChildren: delay }}
      style={style}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {word + " "}
        </motion.span>
      ))}
    </MotionTag>
  );
}

function FeatureShowcase({
  features,
  large = false,
}: {
  features: ServiceFeature[];
  // Gives the video most of the row for a bigger frame.
  large?: boolean;
}) {
  const videoFeatures = features.filter((f) => f.video);
  const rest = features.filter((f) => !f.video);
  return (
    <div style={{ display: "grid", gap: 56 }}>
      {videoFeatures.map((f, i) => {
        // Alternate sides: video left, then video right, and so on.
        const videoRight = i % 2 === 1;
        return (
          <div
            key={f.title}
            className="service-feature-row"
            style={{
              display: "grid",
              gridTemplateColumns: large
                ? videoRight
                  ? "1fr 1.8fr"
                  : "1.8fr 1fr"
                : videoRight
                  ? "1fr 1.15fr"
                  : "1.15fr 1fr",
              gap: 32,
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: videoRight ? 40 : -40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                order: videoRight ? 2 : 1,
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid var(--border-strong)",
                background: "#000",
              }}
            >
              <video
                src={f.video}
                autoPlay
                muted
                loop
                playsInline
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </motion.div>
            <div style={{ order: videoRight ? 1 : 2 }}>
              <motion.span
                initial={{ opacity: 0, x: videoRight ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="eyebrow"
              >
                {f.label ?? "Featured"}
              </motion.span>
              <RevealText
                as="h4"
                text={f.title}
                delay={0.1}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.7rem",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: "14px 0 12px",
                }}
              />
              <RevealText
                text={f.desc}
                delay={0.3}
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              />
            </div>
          </div>
        );
      })}

      {rest.length > 0 && (
        <div style={{ display: "grid", gap: 0 }}>
          {rest.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                gap: 22,
                padding: "24px 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--gold)",
                  minWidth: 36,
                  lineHeight: 1.2,
                }}
              >
                {String(videoFeatures.length + i + 1).padStart(2, "0")}
              </motion.span>
              <div>
                <RevealText
                  as="h4"
                  text={f.title}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                />
                <RevealText
                  text={f.desc}
                  delay={0.15}
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.93rem",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    maxWidth: 640,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

const MORPH = { type: "spring", stiffness: 260, damping: 30 } as const;

function ServiceTile({
  segment,
  index,
  onSelect,
}: {
  segment: Segment;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.li
      layoutId={`service-${segment.id}`}
      transition={MORPH}
      className="service-tile"
      style={{ listStyle: "none", borderRadius: 6, overflow: "hidden" }}
    >
      <motion.button
        type="button"
        onClick={onSelect}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "24px 22px",
          border: "none",
          background: "transparent",
          color: "inherit",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <motion.span
          layoutId={`service-icon-${segment.id}`}
          transition={MORPH}
          style={{ display: "flex", flexShrink: 0 }}
        >
          <ServiceIcon icon={segment.icon} size={30} />
        </motion.span>
        <motion.span
          layoutId={`service-title-${segment.id}`}
          layout="position"
          transition={MORPH}
          style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text)" }}
        >
          {segment.title}
        </motion.span>
      </motion.button>
    </motion.li>
  );
}

function ServiceDetail({
  segment,
  onClose,
}: {
  segment: Segment;
  onClose: () => void;
}) {
  return (
    <motion.div
      layoutId={`service-${segment.id}`}
      transition={MORPH}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <motion.span
            layoutId={`service-icon-${segment.id}`}
            transition={MORPH}
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "1px solid var(--border-strong)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ServiceIcon icon={segment.icon} size={28} />
          </motion.span>
          <motion.h3
            layoutId={`service-title-${segment.id}`}
            layout="position"
            transition={MORPH}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.9rem",
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            {segment.title}
          </motion.h3>
        </div>

        <motion.button
          type="button"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="btn btn-ghost"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          All services
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.4, delay: 0.18 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        style={{ marginTop: 22 }}
      >
        <span className="eyebrow">{segment.tagline}</span>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.98rem",
            fontWeight: 300,
            maxWidth: 620,
            margin: "14px 0 28px",
          }}
        >
          {segment.description}
        </p>
        {segment.id === "business" ? (
          <>
            {segment.features && (
              <div style={{ marginBottom: 72 }}>
                <FeatureShowcase features={segment.features} large />
              </div>
            )}
            <BusinessDiagram />
          </>
        ) : segment.features ? (
          <FeatureShowcase features={segment.features} />
        ) : (
          <PointCards points={segment.points} />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSegment = SEGMENTS.find(
    (s) => s.id === searchParams.get("service"),
  );
  const setSelected = (id: string | null) => {
    setSearchParams(id ? { service: id } : {}, { replace: true });
    // Bring the new panel's top into view when switching from far down the page.
    if (window.scrollY > 200) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="products" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="services-grid-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
          }}
        >
          <div style={{ borderRight: "1px solid var(--border)", paddingRight: 24 }}>
            <div style={{ position: "sticky", top: 110 }}>
              <button
                type="button"
                onClick={() => setSelected(null)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--gold)",
                  lineHeight: 1.2,
                  textAlign: "left",
                }}
              >
                Our Services
              </button>

              <ul
                className="services-sidebar-list"
                style={{
                  marginTop: 18,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {SEGMENTS.map((s) => {
                  const isActive = s.id === selectedSegment?.id;
                  return (
                    <li key={s.id} style={{ flexShrink: 0 }}>
                      <button
                        type="button"
                        onClick={() => setSelected(s.id)}
                        style={{
                          position: "relative",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 12px",
                          background: "none",
                          border: "none",
                          textAlign: "left",
                          fontSize: "0.9rem",
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? "var(--gold-light)" : "var(--text-muted)",
                          transition: "color 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="services-sidebar-active"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "var(--gold-dim)",
                              borderLeft: "2px solid var(--gold)",
                              borderRadius: 2,
                            }}
                          />
                        )}
                        <span style={{ position: "relative", display: "flex" }}>
                          <ServiceIcon icon={s.icon} size={16} />
                        </span>
                        <span style={{ position: "relative" }}>{s.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div style={{ position: "relative", paddingLeft: 32 }}>
            <LayoutGroup>
              <AnimatePresence mode="popLayout" initial={false}>
                {selectedSegment ? (
                  <ServiceDetail
                    key={selectedSegment.id}
                    segment={selectedSegment}
                    onClose={() => setSelected(null)}
                  />
                ) : (
                  <motion.ul
                    key="tiles"
                    className="services-tiles"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 14,
                    }}
                  >
                    {SEGMENTS.map((s, i) => (
                      <ServiceTile
                        key={s.id}
                        segment={s}
                        index={i}
                        onSelect={() => setSelected(s.id)}
                      />
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </LayoutGroup>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
