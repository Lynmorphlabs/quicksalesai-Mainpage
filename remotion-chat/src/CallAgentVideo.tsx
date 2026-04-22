import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", { weights: ["400","500","600","700","800"], subsets: ["latin"] });

export const CA_DURATION = 320;
const BG = "#FAF3B8";
const GREEN = "#16A34A";
const DARK = "#0F172A";
const MUTED = "#64748B";
const BORDER = "#E2E8F0";

const typed = (text: string, frame: number, start: number, cps = 1.4) => {
  const e = Math.max(0, frame - start);
  return text.slice(0, Math.min(text.length, Math.floor(e * cps)));
};

const SCENE1_END = 180;

export const CallAgentVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const cardY = interpolate(cardSpring, [0, 1], [30, 0]);
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

  const slide = spring({ frame: frame - SCENE1_END, fps, config: { damping: 20, stiffness: 100 } });
  const aX = interpolate(slide, [0, 1], [0, -1700]);
  const bX = interpolate(slide, [0, 1], [1700, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: BG, fontFamily, padding: 60, justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "relative", width: 1480, height: 1080, opacity: cardOpacity, transform: `translateY(${cardY}px)` }}>
        <div style={{ position: "absolute", inset: 0, transform: `translateX(${aX}px)` }}>
          <Step1 frame={frame} />
        </div>
        {frame >= SCENE1_END && (
          <div style={{ position: "absolute", inset: 0, transform: `translateX(${bX}px)` }}>
            <Step2 frame={frame - SCENE1_END} />
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

const Stepper: React.FC<{ active: number }> = ({ active }) => {
  const steps = [
    { n: 1, label: "STEP 1", title: "Identification" },
    { n: 2, label: "STEP 2", title: "AI Intelligence" },
    { n: 3, label: "STEP 3", title: "Functions / Tools" },
    { n: 4, label: "STEP 4", title: "Voice & STT" },
    { n: 5, label: "STEP 5", title: "Connectivity" },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "20px 28px", border: `1px solid ${BORDER}`, borderRadius: 20 }}>
      {steps.map((s, i) => {
        const done = s.n < active;
        const isActive = s.n === active;
        return (
          <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 8, flex: i === steps.length - 1 ? "0 0 auto" : 1 }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: done || isActive ? GREEN : "#E2E8F0",
              color: done || isActive ? "#FFF" : "#64748B",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: 24, flexShrink: 0,
              boxShadow: isActive ? `0 0 0 6px ${GREEN}22` : "none",
            }}>{done ? "✓" : s.n}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: MUTED, letterSpacing: 1.5 }}>{s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: isActive ? GREEN : (done ? DARK : MUTED) }}>{s.title}</div>
            </div>
            {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: done ? GREEN : "#E2E8F0", marginLeft: 12 }} />}
          </div>
        );
      })}
    </div>
  );
};

const Header: React.FC<{ title: string }> = ({ title }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
      <div style={{ width: 70, height: 70, borderRadius: 18, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>←</div>
      <div>
        <div style={{ fontSize: 56, fontWeight: 800, color: DARK, letterSpacing: -1.5, lineHeight: 1.05 }}>{title}</div>
        <div style={{ fontSize: 24, color: MUTED, marginTop: 6 }}>Follow the steps to configure your voice assistant</div>
      </div>
    </div>
    <div style={{ padding: "16px 30px", borderRadius: 14, border: `1px solid ${BORDER}`, fontSize: 22, fontWeight: 700, color: DARK }}>Cancel</div>
  </div>
);

const Step1: React.FC<{ frame: number }> = ({ frame }) => {
  const nameStart = 25;
  const nameText = "Real estate concierge";
  const nameTyped = typed(nameText, frame, nameStart);

  const greetStart = 80;
  const greetText = "Hello, I am your concierge staff. How can I help you today?";
  const greetTyped = typed(greetText, frame, greetStart);

  return (
    <div style={{ width: "100%", height: "100%", background: "#FFF", borderRadius: 32, border: `1px solid ${BORDER}`, padding: 44, boxShadow: "0 10px 40px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 24 }}>
      <Header title="New AI Call Agent" />
      <Stepper active={1} />

      <div style={{ flex: 1, padding: 40, border: `1px solid ${BORDER}`, borderRadius: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 36, color: GREEN }}>👤</span>
          <span style={{ fontSize: 38, fontWeight: 800, color: GREEN, letterSpacing: -0.5 }}>Identification</span>
        </div>
        <div style={{ fontSize: 22, color: MUTED, marginTop: 8 }}>Basic details about how your agent is identified within the system.</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginTop: 32 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: DARK, marginBottom: 12 }}>Assistant Name</div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 24px", fontSize: 26, color: DARK }}>
              {nameTyped}{frame >= nameStart && nameTyped.length < nameText.length && <span style={{ display: "inline-block", width: 3, height: 28, background: DARK, marginLeft: 2, verticalAlign: "middle" }} />}
            </div>

            <div style={{ fontSize: 24, fontWeight: 700, color: DARK, marginTop: 28, marginBottom: 12 }}>Internal Status</div>
            <div style={{ background: "#F8FAFC", border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#86EFAC" }} />
                <span style={{ fontSize: 26, fontWeight: 700, color: DARK }}>Live & Ready</span>
              </div>
              <div style={{ width: 64, height: 36, borderRadius: 999, background: GREEN, position: "relative" }}>
                <div style={{ position: "absolute", top: 4, right: 4, width: 28, height: 28, borderRadius: "50%", background: "#FFF" }} />
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: DARK, marginBottom: 12 }}>Welcome Greeting</div>
            <div style={{ border: `2px solid ${GREEN}`, borderRadius: 14, padding: "22px 24px", fontSize: 24, color: DARK, minHeight: 220, lineHeight: 1.4 }}>
              {greetTyped}{frame >= greetStart && greetTyped.length < greetText.length && <span style={{ display: "inline-block", width: 3, height: 26, background: DARK, marginLeft: 2, verticalAlign: "middle" }} />}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ padding: "18px 30px", borderRadius: 14, border: `1px solid ${BORDER}`, fontSize: 22, fontWeight: 700, color: MUTED }}>‹ Previous</div>
        <div style={{ background: GREEN, color: "#FFF", padding: "20px 40px", borderRadius: 14, fontSize: 26, fontWeight: 800, boxShadow: "0 8px 20px rgba(22,163,74,0.3)" }}>Next Step ›</div>
      </div>
    </div>
  );
};

const Step2: React.FC<{ frame: number }> = ({ frame }) => {
  const sysStart = 30;
  const sysText = "You are a helpful customer service representative for a luxury hotel...";
  const sysTyped = typed(sysText, frame, sysStart);

  const kbStart = 95;
  const kbText = "https://docs.yourcompany.com";
  const kbTyped = typed(kbText, frame, kbStart);

  return (
    <div style={{ width: "100%", height: "100%", background: "#FFF", borderRadius: 32, border: `1px solid ${BORDER}`, padding: 44, boxShadow: "0 10px 40px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 24 }}>
      <Header title="New AI Call Agent" />
      <Stepper active={2} />

      <div style={{ flex: 1, padding: 40, border: `1px solid ${BORDER}`, borderRadius: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 36, color: GREEN }}>🤖</span>
          <span style={{ fontSize: 38, fontWeight: 800, color: GREEN, letterSpacing: -0.5 }}>AI Intelligence (Gemini)</span>
        </div>
        <div style={{ fontSize: 22, color: MUTED, marginTop: 8 }}>Configure the brain of your assistant using Google's powerful Gemini models.</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginTop: 28 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: DARK, marginBottom: 12 }}>Model Engine</div>
            <div style={{ background: "#F8FAFC", border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 24, color: DARK }}>gemini-2.0-flash-lite</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: GREEN, background: "#DCFCE7", padding: "6px 14px", borderRadius: 999, letterSpacing: 1 }}>FAST LIGHTNING</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: DARK, marginBottom: 12 }}>AI API Key</div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", fontSize: 28, color: DARK, letterSpacing: 4 }}>•••••••••••••••</div>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: DARK, marginBottom: 12 }}>System Instructions / Personality</div>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 24px", fontSize: 24, color: DARK, minHeight: 140, lineHeight: 1.4 }}>
            {sysTyped}{frame >= sysStart && sysTyped.length < sysText.length && <span style={{ display: "inline-block", width: 3, height: 26, background: DARK, marginLeft: 2, verticalAlign: "middle" }} />}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginTop: 24 }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, color: GREEN, marginBottom: 12 }}>🌐 Knowledge Base URL</div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", fontSize: 24, color: DARK }}>
              {kbTyped}{frame >= kbStart && kbTyped.length < kbText.length && <span style={{ display: "inline-block", width: 3, height: 24, background: DARK, marginLeft: 2, verticalAlign: "middle" }} />}
            </div>
          </div>
          <div style={{ background: "#F8FAFC", border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: DARK }}>Natural Conciseness</div>
              <div style={{ fontSize: 16, color: MUTED, marginTop: 4 }}>Optimizes AI for vocal naturalness.</div>
            </div>
            <div style={{ width: 64, height: 36, borderRadius: 999, background: GREEN, position: "relative" }}>
              <div style={{ position: "absolute", top: 4, right: 4, width: 28, height: 28, borderRadius: "50%", background: "#FFF" }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ padding: "18px 30px", borderRadius: 14, border: `1px solid ${BORDER}`, fontSize: 22, fontWeight: 700, color: DARK }}>‹ Previous</div>
        <div style={{ background: GREEN, color: "#FFF", padding: "20px 40px", borderRadius: 14, fontSize: 26, fontWeight: 800, boxShadow: "0 8px 20px rgba(22,163,74,0.3)" }}>Next Step ›</div>
      </div>
    </div>
  );
};
