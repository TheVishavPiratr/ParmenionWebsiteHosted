import { motion } from "motion/react";
import aboutImage from "../../static/HomePageVIdeos/ChatGPT Image Oct 8, 2026, 05_40_54 PM.png";

const values = [
  {
    title: "Precision",
    desc: "Every alert, insight and frame is filtered through AI models tuned for accuracy over noise.",
  },
  {
    title: "Transparency",
    desc: "Clear dashboards and honest reporting — you always know exactly what's happening.",
  },
  {
    title: "Reliability",
    desc: "Built on resilient infrastructure so your security never blinks, day or night.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: 92 }}>
      {/* Full-bleed landscape image directly under the navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          maxHeight: "calc(100vh - 92px)",
          overflow: "hidden",
          marginBottom: 96,
        }}
      >
        <img
          src={aboutImage}
          alt="Parmenion AI recognising staff, customers and unusual activity in a café"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </motion.div>

      <div
        className="container about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Built on the discipline of a{" "}
            <em>trusted lookout</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="section-sub"
            style={{ maxWidth: 560 }}
          >
            Parmenion was founded on a simple idea: security and business
            intelligence shouldn't live in separate, clunky systems. We build
            a single AI-powered platform that watches over your spaces,
            understands what it sees, and translates it into decisions you
            can act on — instantly.
          </motion.p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 26,
          }}
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              style={{
                display: "flex",
                gap: 20,
                paddingBottom: 24,
                borderBottom:
                  i !== values.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  color: "var(--gold)",
                  minWidth: 40,
                }}
              >
                0{i + 1}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 300 }}>
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
