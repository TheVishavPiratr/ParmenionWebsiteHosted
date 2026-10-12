import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import daySummariseVideo from "../../static/HomePageVIdeos/day summarise search bar.mp4";
import personDetectedVideo from "../../static/HomePageVIdeos/person detected-ezremove.mp4";
import aiChatbotVideo from "../../static/HomePageVIdeos/ai chatbot-ezremove.mp4";

const TEXT_DELAY_MS = 1500;

type Feature = {
  title: string;
  desc: string;
  video: string;
  videoLeft?: boolean;
};

const features: Feature[] = [
  {
    title: "Your Day, Summarised",
    desc: "Don't have time to scrub through footage? Ask for a summary and Parmenion compiles everything that mattered — arrivals, alerts and activity — into one simple report.",
    video: daySummariseVideo,
  },
  {
    title: "Watching After Hours",
    desc: "Once the shop is closed, Parmenion keeps watch. The moment a person or any activity is detected after hours, you get an instant alert on your phone — so nothing goes unnoticed overnight.",
    video: personDetectedVideo,
    videoLeft: true,
  },
  {
    title: "Talk to Your Business",
    desc: "Just ask. Chat with Parmenion's AI like you would a manager on the floor — \"Who came in this morning?\", \"Was anyone near the back door last night?\" — and get clear answers from your cameras in seconds.",
    video: aiChatbotVideo,
  },
];

function FeatureRow({ title, desc, video, videoLeft }: Feature) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { once: true, amount: 0.5 });
  const [showText, setShowText] = useState(false);

  // Start the video once it scrolls into view, then reveal the text a few
  // seconds after playback begins.
  useEffect(() => {
    if (!inView || !videoRef.current) return;
    let timer: ReturnType<typeof setTimeout>;
    videoRef.current
      .play()
      .then(() => {
        timer = setTimeout(() => setShowText(true), TEXT_DELAY_MS);
      })
      .catch(() => setShowText(true));
    return () => clearTimeout(timer);
  }, [inView]);

  // Text slides in from its own side of the page.
  const slideFrom = videoLeft ? 60 : -60;

  const text = (
    <motion.div
      initial={{ opacity: 0, x: slideFrom }}
      animate={showText ? { opacity: 1, x: 0 } : { opacity: 0, x: slideFrom }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
          fontWeight: 600,
          margin: "0 0 12px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "1.05rem",
          fontWeight: 300,
          lineHeight: 1.7,
          maxWidth: 560,
        }}
      >
        {desc}
      </p>
    </motion.div>
  );

  const media = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, borderColor: "var(--gold)" }}
      style={{
        border: "1px solid var(--border)",
        borderRadius: 4,
        overflow: "hidden",
        background: "#000",
        transition: "border-color 0.3s ease",
      }}
    >
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </motion.div>
  );

  return (
    <div
      className="vision-grid"
      style={{
        display: "grid",
        gridTemplateColumns: videoLeft ? "1.25fr 1fr" : "1fr 1.25fr",
        gap: 24,
        alignItems: "center",
        textAlign: "left",
      }}
    >
      {videoLeft ? (
        <>
          {media}
          {text}
        </>
      ) : (
        <>
          {text}
          {media}
        </>
      )}
    </div>
  );
}

export default function AISecurity() {
  return (
    <section
      id="ai-security"
      className="section"
      style={{ overflowX: "clip" }}
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
          Intelligence, Built In
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title"
          style={{ margin: "18px auto 0", maxWidth: 780 }}
        >
          Security Powered by <em>AI</em>
        </motion.h2>

        <div
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            gap: 80,
          }}
        >
          {features.map((f) => (
            <FeatureRow key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
