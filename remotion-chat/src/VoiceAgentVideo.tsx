import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", { weights: ["400", "500", "600", "700"], subsets: ["latin"] });

const BG = "#F4F8F2";
const PANEL = "#FFFFFF";
const BORDER = "#E2EBE5";
const BORDER_ACTIVE = "#10B981";
const TEXT_DARK = "#0F1B19";
const MUTED = "#7B8784";
const SUBTLE = "#9CA8A4";
const GREEN = "#10B981";
const GREEN_DARK = "#0E9E6E";
const GREEN_SOFT = "#E6F7EF";

const FPS = 30;

// Steps for stepper
const STEPS = ["Identification", "AI Intelligence", "Functions / Tools", "Voice & STT", "Connectivity"];

// Field timeline: Assistant Name typed, Welcome Greeting typed, toggle flip, then advance step
const FIELDS = [
  { key: "name", value: "Real Estate Concierge" },
  { key: "greeting", value: "Hello, I'm your AI assistant. How can I help you today?" },
];
const INTRO = 24;
const FIELD_DELAY = 16;
const FIELD_TYPE_BASE = 12;
const CHAR_FRAMES = 0.5;

const startFrame = (i: number) => {
  let f = INTRO;
  for (let k = 0; k < i; k++) {
    f += FIELD_DELAY + FIELD_TYPE_BASE + Math.ceil(FIELDS[k].value.length * CHAR_FRAMES);
  }
  return f;
};
const fieldEndFrame = (i: number) => startFrame(i) + FIELD_TYPE_BASE + Math.ceil(FIELDS[i].value.length * CHAR_FRAMES);

const TOGGLE_FRAME = fieldEndFrame(FIELDS.length - 1) + 18;
const NEXT_FRAME = TOGGLE_FRAME + 36;
const STEP_ADVANCE_FRAME = NEXT_FRAME + 24;
const SUCCESS_FRAME = STEP_ADVANCE_FRAME + 30;
const HOLD = 60;
export const VA_DURATION = SUCCESS_FRAME + HOLD;

const typedValue = (i: number, frame: number) => {
  const start = startFrame(i) + FIELD_TYPE_BASE;
  const v = FIELDS[i].value;
  const charsShown = Math.max(0, Math.min(v.length, Math.floor((frame - start) / CHAR_FRAMES)));
  return v.slice(0, charsShown);
};

const isFieldActive = (i: number, frame: number) => {
  const s = startFrame(i);
  const e = fieldEndFrame(i) + 6;
  return frame >= s && frame <= e;
};

const UserSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

const ArrowLeftSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
  </svg>
);
const ArrowRightSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
  </svg>
);

const Stepper: React.FC<{ activeStep: number }> = ({ activeStep }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: PANEL,
        border: `1px solid ${BORDER}`,
        borderRadius: 24,
        padding: "26px 36px",
        boxShadow: "0 14px 30px -22px rgba(15,27,25,0.15)",
        marginBottom: 28,
        gap: 12,
      }}
    >
      {STEPS.map((label, i) => {
        const isActive = i === activeStep;
        const isDone = i < activeStep;
        const circleBg = isActive || isDone ? GREEN : "#E8EEEB";
        const circleColor = isActive || isDone ? "#fff" : "#A6B0AD";
        const labelColor = isActive ? GREEN : isDone ? TEXT_DARK : "#9AA5A1";
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: i === STEPS.length - 1 ? "0 0 auto" : 1, gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  background: circleBg,
                  color: circleColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                  boxShadow: isActive ? `0 0 0 6px ${GREEN}26` : "none",
                }}
              >
                {i + 1}
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: isActive ? GREEN : "#A6B0AD" }}>STEP {i + 1}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: labelColor, marginTop: 2 }}>{label}</div>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: 2, background: isDone ? GREEN : "#E2EBE5", borderRadius: 2, margin: "0 6px" }} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export const VoiceAgentVideo = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const headerOp = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const headerY = interpolate(frame, [0, 18], [-12, 0], { extrapolateRight: "clamp" });

  // Step advances near end
  const activeStep = frame >= STEP_ADVANCE_FRAME ? 1 : 0;

  // Toggle
  const toggleT = interpolate(frame, [TOGGLE_FRAME, TOGGLE_FRAME + 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const knobX = interpolate(toggleT, [0, 1], [4, 30]);
  const togBg = `rgba(16,185,129,${interpolate(toggleT, [0, 1], [0.18, 1])})`;

  // Cursor: moves to Next button before STEP_ADVANCE_FRAME
  const cursorAppear = interpolate(frame, [NEXT_FRAME - 30, NEXT_FRAME - 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cursorTo = interpolate(frame, [NEXT_FRAME - 30, NEXT_FRAME], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cursorX = interpolate(cursorTo, [0, 1], [width / 2, width - 230]);
  const cursorY = interpolate(cursorTo, [0, 1], [800, 1080]);

  const clickPulse = spring({ frame: frame - NEXT_FRAME, fps, config: { damping: 12, stiffness: 200 } });
  const buttonScale = interpolate(clickPulse, [0, 0.5, 1], [1, 0.96, 1]);

  // Success toast on step advance
  const successAppear = spring({ frame: frame - STEP_ADVANCE_FRAME, fps, config: { damping: 18, stiffness: 180 } });

  const nameVal = typedValue(0, frame);
  const greetVal = typedValue(1, frame);
  const nameActive = isFieldActive(0, frame);
  const greetActive = isFieldActive(1, frame);
  const cursorBlink = Math.floor(frame / 8) % 2 === 0;

  return (
    <AbsoluteFill style={{ background: BG, fontFamily, padding: 56 }}>
      {/* dot grid */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
        <defs>
          <pattern id="dots-va" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="#D5DCD7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-va)" />
      </svg>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: headerOp,
          transform: `translateY(${headerY}px)`,
          marginBottom: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 14,
              background: PANEL,
              border: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: TEXT_DARK,
              boxShadow: "0 4px 12px -8px rgba(15,27,25,0.25)",
            }}
          >
            <ArrowLeftSvg />
          </div>
          <div>
            <div style={{ fontSize: 38, fontWeight: 800, color: TEXT_DARK, letterSpacing: -1 }}>New AI Call Agent</div>
            <div style={{ fontSize: 16, color: MUTED, fontWeight: 500, marginTop: 4 }}>Follow the steps to configure your voice assistant</div>
          </div>
        </div>
        <div
          style={{
            padding: "14px 28px",
            borderRadius: 14,
            background: PANEL,
            border: `1px solid ${BORDER}`,
            fontSize: 16,
            fontWeight: 600,
            color: TEXT_DARK,
          }}
        >
          Cancel
        </div>
      </div>

      <Stepper activeStep={activeStep} />

      {/* Main panel */}
      <div
        style={{
          background: PANEL,
          border: `1px solid ${BORDER}`,
          borderRadius: 28,
          padding: 40,
          boxShadow: "0 24px 50px -28px rgba(15,27,25,0.18)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: GREEN, marginBottom: 8 }}>
          <UserSvg />
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>Identification</div>
        </div>
        <div style={{ fontSize: 16, color: MUTED, marginBottom: 28 }}>
          Basic details about how your agent is identified within the system.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, flex: 1 }}>
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 600, color: TEXT_DARK, marginBottom: 10 }}>Assistant Name</div>
              <div
                style={{
                  height: 64,
                  borderRadius: 16,
                  border: `1.5px solid ${nameActive ? BORDER_ACTIVE : BORDER}`,
                  boxShadow: nameActive ? `0 0 0 4px ${GREEN}1A` : "none",
                  padding: "0 20px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  color: TEXT_DARK,
                  fontWeight: 500,
                }}
              >
                {nameVal || <span style={{ color: SUBTLE, fontWeight: 400 }}>e.g. Real Estate Concierge</span>}
                {nameActive && (
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: 2,
                      width: 2,
                      height: 22,
                      background: GREEN,
                      opacity: cursorBlink ? 1 : 0,
                    }}
                  />
                )}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 17, fontWeight: 600, color: TEXT_DARK, marginBottom: 10 }}>Internal Status</div>
              <div
                style={{
                  height: 72,
                  borderRadius: 16,
                  border: `1.5px solid ${BORDER}`,
                  padding: "0 22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: PANEL,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 999, background: GREEN }} />
                  <div style={{ fontSize: 18, fontWeight: 700, color: TEXT_DARK }}>Live & Ready</div>
                </div>
                <div
                  style={{
                    width: 60,
                    height: 32,
                    borderRadius: 999,
                    background: togBg,
                    position: "relative",
                    border: `1.5px solid ${BORDER}`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 2,
                      left: knobX,
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      background: PANEL,
                      boxShadow: "0 2px 6px rgba(15,27,25,0.2)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: TEXT_DARK }}>Welcome Greeting</div>
            <div
              style={{
                flex: 1,
                minHeight: 220,
                borderRadius: 16,
                border: `1.5px solid ${greetActive ? BORDER_ACTIVE : BORDER}`,
                boxShadow: greetActive ? `0 0 0 4px ${GREEN}1A` : "none",
                padding: "20px 22px",
                fontSize: 18,
                color: TEXT_DARK,
                fontWeight: 500,
                lineHeight: "1.6",
              }}
            >
              {greetVal || <span style={{ color: SUBTLE, fontWeight: 400 }}>Hello, I'm your AI assistant. How can I help you today?</span>}
              {greetActive && (
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: 2,
                    width: 2,
                    height: 22,
                    background: GREEN,
                    verticalAlign: "middle",
                    opacity: cursorBlink ? 1 : 0,
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div
            style={{
              padding: "14px 28px",
              borderRadius: 14,
              background: PANEL,
              border: `1px solid ${BORDER}`,
              fontSize: 16,
              fontWeight: 600,
              color: SUBTLE,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            ‹ Previous
          </div>
          <div
            style={{
              padding: "16px 32px",
              borderRadius: 16,
              background: `linear-gradient(180deg, ${GREEN} 0%, ${GREEN_DARK} 100%)`,
              color: "#fff",
              fontSize: 17,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: `0 14px 30px -14px ${GREEN}AA`,
              transform: `scale(${buttonScale})`,
            }}
          >
            Next Step <ArrowRightSvg />
          </div>
        </div>
      </div>

      {/* Cursor */}
      {cursorAppear > 0 && (
        <div
          style={{
            position: "absolute",
            left: cursorX,
            top: cursorY,
            opacity: cursorAppear,
            pointerEvents: "none",
            transform: "translate(-4px,-4px)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#0F1B19" stroke="#fff" strokeWidth="1.5">
            <path d="M5 3l14 8-6 2-2 6L5 3z" />
          </svg>
        </div>
      )}

      {/* Success toast */}
      {frame >= STEP_ADVANCE_FRAME && (
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            background: PANEL,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GREEN}`,
            borderRadius: 14,
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 14px 40px -10px rgba(15,27,25,0.25)",
            transform: `translateY(${interpolate(successAppear, [0, 1], [-20, 0])}px)`,
            opacity: successAppear,
          }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 999, background: GREEN_SOFT, color: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>✓</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: TEXT_DARK }}>Step 1 saved</div>
            <div style={{ fontSize: 13, color: MUTED }}>Configuring AI Intelligence…</div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
