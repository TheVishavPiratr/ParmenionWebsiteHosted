import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import daySummarise from "../../static/HomePageVIdeos/day summarise search bar.mp4";
import va from "../../static/HomePageVIdeos/Va.mp4";
import multipleOutletAlerts from "../../static/HomePageVIdeos/multiple outlet alerts.mp4";
import parking from "../../static/HomePageVIdeos/parking.mp4";

const VIDEOS = [daySummarise, va, multipleOutletAlerts, parking];
const HAS_MULTIPLE = VIDEOS.length > 1;

const arrowStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  [side]: 16,
  transform: "translateY(-50%)",
  zIndex: 2,
  width: 44,
  height: 44,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.6)",
  background: "rgba(247,241,230,0.9)",
  color: "#5a4632",
  boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: 0,
});

const slideVariants = {
  enter: (direction: number) => ({ x: `${direction * 100}%` }),
  center: { x: "0%" },
  exit: (direction: number) => ({ x: `${direction * -100}%` }),
};

export default function Hero() {
  const [[active, direction], setSlide] = useState<[number, number]>([0, 1]);

  const goTo = (index: number, dir: number) =>
    setSlide([(index + VIDEOS.length) % VIDEOS.length, dir]);
  const next = () => goTo(active + 1, 1);
  const prev = () => goTo(active - 1, -1);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        paddingTop: 92,
        paddingBottom: 24,
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "85%",
          maxWidth: 1280,
          margin: "24px auto 0",
          aspectRatio: "16 / 9",
          maxHeight: "80vh",
          overflow: "hidden",
          borderRadius: 12,
          border: "1px solid var(--border-strong)",
          background: "#000",
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.video
            key={VIDEOS[active]}
            src={VIDEOS[active]}
            className="hero-video"
            autoPlay
            muted
            playsInline
            loop={!HAS_MULTIPLE}
            onEnded={HAS_MULTIPLE ? next : undefined}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </AnimatePresence>

        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.2)",
          }}
        />

        {HAS_MULTIPLE && (
          <>
            <button
              aria-label="Previous video"
              onClick={prev}
              style={arrowStyle("left")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              aria-label="Next video"
              onClick={next}
              style={arrowStyle("right")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: 24,
                transform: "translateX(-50%)",
                display: "flex",
                gap: 12,
                zIndex: 2,
              }}
            >
              {VIDEOS.map((video, i) => (
                <button
                  key={video}
                  aria-label={`Show video ${i + 1}`}
                  onClick={() => i !== active && goTo(i, i > active ? 1 : -1)}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: "1px solid var(--border-strong)",
                    background:
                      i === active ? "var(--gold)" : "rgba(255,255,255,0.35)",
                    transition: "width 0.3s ease, background 0.3s ease",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
