import { motion } from "motion/react";

const missionPoints = [
  {
    number: "01",
    title: "Expanding Access, Everywhere",
    desc: "We're taking enterprise-grade AI security beyond the big metros — into mid-sized cities and less-developed areas — so advanced protection isn't a privilege reserved for the few.",
  },
  {
    number: "02",
    title: "Built for Today's Real Threats",
    desc: "Every system we design responds to the security problems and activity patterns of today's world — not theoretical risks from a decade ago.",
  },
  {
    number: "03",
    title: "Easy to Deploy, Cost-Efficient",
    desc: "No complex installs, no bloated pricing. Parmenion is built to go live fast and stay affordable, so protection scales with you — not against you.",
  },
];

const pillars = [
  {
    title: "Vigilance",
    desc: "Continuous, intelligent watchfulness across every camera, sensor and endpoint.",
    icon: (
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
    ),
  },
  {
    title: "Innovation",
    desc: "We push AI and computer vision forward so protection stays ahead of risk.",
    icon: (
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    ),
  },
  {
    title: "Integrity",
    desc: "Honest data, private by design, and systems that do exactly what we promise.",
    icon: (
      <path d="M12 2 4 5v6c0 5.2 3.4 9 8 11 4.6-2 8-5.8 8-11V5l-8-3Zm-1.2 13.4L7 11.6l1.4-1.4 2.4 2.4 5.4-5.4 1.4 1.4-6.8 6.8Z" />
    ),
  },
  {
    title: "Foresight",
    desc: "Predictive analytics that flag what matters before it becomes a problem.",
    icon: (
      <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
    ),
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="section"
      style={{
        background:
          "linear-gradient(180deg, rgba(201,168,118,0.04) 0%, transparent 12%, transparent 88%, rgba(201,168,118,0.04) 100%)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
          style={{ justifyContent: "center" }}
        >
          Our Vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title"
          style={{ margin: "18px auto 0", maxWidth: 780 }}
        >
          A future where every space is{" "}
          <em>seen, understood and protected</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="section-sub"
          style={{ margin: "20px auto 0" }}
        >
          We imagine a world where businesses never have to choose between
          security and simplicity. Parmenion's vision is to become the quiet
          intelligence layer behind every safe, well-run space — turning raw
          footage and data into clarity and confidence.
        </motion.p>

        <div
          className="vision-grid"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            textAlign: "left",
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, borderColor: "var(--gold)" }}
              style={{
                padding: "32px 26px",
                border: "1px solid var(--border)",
                borderRadius: 4,
                background: "var(--bg-panel)",
                transition: "border-color 0.3s ease",
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {p.icon}
              </svg>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  margin: "18px 0 8px",
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", fontWeight: 300 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 88 }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
            style={{ justifyContent: "center" }}
          >
            Why Parmenion
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", margin: "18px auto 0", maxWidth: 640 }}
          >
            The mission behind <em>every install</em>
          </motion.h3>

          <div
            className="vision-mission-grid"
            style={{
              marginTop: 56,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              textAlign: "left",
              position: "relative",
            }}
          >
            {missionPoints.map((m, i) => (
              <motion.div
                key={m.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                style={{
                  padding: "0 32px",
                  borderLeft: i === 0 ? "none" : "1px solid var(--border)",
                }}
                className="vision-mission-item"
              >
                <span
                  aria-hidden
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "3.4rem",
                    lineHeight: 1,
                    color: "var(--gold-dim)",
                    WebkitTextStroke: "1.5px var(--gold)",
                    marginBottom: 18,
                  }}
                >
                  {m.number}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.28rem",
                    fontWeight: 600,
                    marginBottom: 12,
                    lineHeight: 1.25,
                  }}
                >
                  {m.title}
                </h4>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.92rem",
                    fontWeight: 300,
                    lineHeight: 1.65,
                  }}
                >
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
