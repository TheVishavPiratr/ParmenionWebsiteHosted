import { useState, type FormEvent, type CSSProperties, type ReactNode } from "react";
import { motion } from "motion/react";

const contactInfo = [
  {
    label: "Email",
    value: "hello@parmenion.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "Phone",
    value: "+1 (555) 012-3456",
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
    ),
  },
  {
    label: "Headquarters",
    value: "Innovation District, San Francisco, CA",
    icon: (
      <>
        <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
            style={{ justifyContent: "center" }}
          >
            Contact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
            style={{ margin: "18px auto 0" }}
          >
            Let's secure your <em>next chapter</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="section-sub"
            style={{ margin: "20px auto 0" }}
          >
            Tell us about your space and what you'd like to protect. Our team
            will get back to you within one business day.
          </motion.p>
        </div>

        <div
          className="contact-grid"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 56,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            {contactInfo.map((c) => (
              <div key={c.label} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    flexShrink: 0,
                    borderRadius: "50%",
                    border: "1px solid var(--border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {c.icon}
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </div>
                  <div style={{ fontSize: "1.02rem", color: "var(--text)" }}>{c.value}</div>
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: 12,
                padding: "24px 26px",
                border: "1px solid var(--border)",
                borderRadius: 4,
                background: "var(--bg-panel)",
              }}
            >
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 300 }}>
                Prefer a walkthrough? Request a live demo and see the Parmenion
                platform monitoring a sample environment in real time.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              display: "grid",
              gap: 20,
              padding: 40,
              border: "1px solid var(--border)",
              borderRadius: 4,
              background: "var(--bg-panel)",
            }}
          >
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="Full Name">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  style={inputStyle}
                />
              </Field>
              <Field label="Email Address">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  style={inputStyle}
                />
              </Field>
            </div>

            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you'd like to secure..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </Field>

            <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }}>
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: "var(--gold-light)", fontSize: "0.9rem", textAlign: "center" }}
              >
                Thank you — our team will be in touch shortly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label style={{ display: "grid", gap: 8 }}>
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-faint)",
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

const inputStyle: CSSProperties = {
  width: "100%",
  background: "var(--bg)",
  border: "1px solid var(--border)",
  borderRadius: 3,
  padding: "13px 14px",
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: "0.95rem",
  outline: "none",
};
