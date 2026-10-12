import { motion } from "motion/react";

const points = [
  {
    title: "Encrypted, End to End",
    desc: "Every frame and alert is encrypted in transit and at rest, so what your cameras see stays between you and your app — never exposed in the open.",
    icon: (
      <path d="M12 2 4 5v6c0 5.2 3.4 9 8 11 4.6-2 8-5.8 8-11V5l-8-3Zm-1.2 13.4L7 11.6l1.4-1.4 2.4 2.4 5.4-5.4 1.4 1.4-6.8 6.8Z" />
    ),
  },
  {
    title: "Your Data Stays Yours",
    desc: "We never sell, share or train on your footage. You own it outright, and you decide who can view it, for how long, and when it's deleted.",
    icon: (
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Zm0 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 7.5c2.5 0 5 1.25 5 3v1H7v-1c0-1.75 2.5-3 5-3Z" />
    ),
  },
  {
    title: "Built to Standard",
    desc: "Access controls, audit trails and secure cloud infrastructure keep your spaces protected against tampering, breaches and unauthorised access alike.",
    icon: (
      <path d="M12 2a4 4 0 0 0-4 4v3H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a4 4 0 0 0-4-4Zm0 2a2 2 0 0 1 2 2v3h-4V6a2 2 0 0 1 2-2Zm0 10a1.5 1.5 0 0 1 1.5 1.5c0 .66-.4 1.22-1 1.44V19h-1v-2.06a1.5 1.5 0 0 1 .5-2.94Z" />
    ),
  },
];

export default function DataPrivacy() {
  return (
    <section
      id="privacy"
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
          Trust, By Design
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title"
          style={{ margin: "18px auto 0", maxWidth: 780 }}
        >
          PRIVACY <em>&amp; SECURITY</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="section-sub"
          style={{ margin: "20px auto 0" }}
        >
          Watching over your space means we're trusted with something
          personal. That trust is never taken lightly — every recording,
          alert and insight is handled with the same care we'd want for our
          own home.
        </motion.p>

        <div
          className="vision-grid"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            textAlign: "left",
          }}
        >
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
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
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.92rem",
                  fontWeight: 300,
                  lineHeight: 1.65,
                }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
