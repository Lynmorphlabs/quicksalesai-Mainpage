import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const BG = "#D7EDE3";
const CARD = "#FFFFFF";
const TEXT_DARK = "#0E1F1B";
const MUTED = "#6B7A75";
const ACCENT = "#0E6B53";
const ACCENT_SOFT = "#E3F4EC";
const HOVER_BG = "#E8F5EE";
const BORDER = "#E5EBE8";

const OPTIONS = [
  { label: "WABA default (no override)", italic: true, checked: true },
  { label: "Quicksales Tech Support" },
  { label: "Quicksales Sales Support" },
  { label: "Quicksales" },
];

// Cursor visits indices over time (in frames)
// Stay frames at each row + travel between them
const STAY = 55;
const TRAVEL = 22;
const SEQUENCE: number[] = [1, 2, 3, 1, 2]; // option indices

const ROW_HEIGHT = 130;
const LIST_TOP = 470; // y of first row center within canvas
const CURSOR_X_REST = 1240;

const totalFrames = SEQUENCE.length * (STAY + TRAVEL) + 30;

export const AGENT_SELECT_DURATION = totalFrames;

export const AgentSelectVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Compute cursor target
  let phaseStart = 0;
  let currentIdx = SEQUENCE[0];
  let nextIdx = SEQUENCE[0];
  let progress = 1;

  for (let i = 0; i < SEQUENCE.length; i++) {
    const segStart = i * (STAY + TRAVEL);
    const stayEnd = segStart + STAY;
    const travelEnd = stayEnd + TRAVEL;
    if (frame >= segStart && frame < stayEnd) {
      currentIdx = SEQUENCE[i];
      nextIdx = SEQUENCE[i];
      progress = 1;
      phaseStart = segStart;
      break;
    }
    if (frame >= stayEnd && frame < travelEnd) {
      currentIdx = SEQUENCE[i];
      nextIdx = SEQUENCE[(i + 1) % SEQUENCE.length];
      progress = (frame - stayEnd) / TRAVEL;
      phaseStart = stayEnd;
      break;
    }
  }
  if (frame >= SEQUENCE.length * (STAY + TRAVEL)) {
    currentIdx = SEQUENCE[SEQUENCE.length - 1];
    nextIdx = currentIdx;
    progress = 1;
  }

  const easedProgress = interpolate(
    spring({ frame: frame - phaseStart, fps, config: { damping: 22, stiffness: 120 } }),
    [0, 1],
    [0, 1]
  );

  const fromY = LIST_TOP + currentIdx * ROW_HEIGHT;
  const toY = LIST_TOP + nextIdx * ROW_HEIGHT;
  const cursorY = fromY + (toY - fromY) * easedProgress;
  const hoveredIdx = easedProgress > 0.5 ? nextIdx : currentIdx;

  // Click pulse on arrival
  const arrivedFrames = frame - phaseStart - TRAVEL;
  const clickPulse =
    arrivedFrames >= 0 && arrivedFrames < 14
      ? interpolate(arrivedFrames, [0, 4, 14], [0, 0.35, 0], { extrapolateRight: "clamp" })
      : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        fontFamily,
        padding: "70px 70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Card hoveredIdx={hoveredIdx} clickPulse={clickPulse} cursorY={cursorY} />
      <Cursor y={cursorY} pulse={clickPulse} />
    </AbsoluteFill>
  );
};

const Card: React.FC<{ hoveredIdx: number; clickPulse: number; cursorY: number }> = ({
  hoveredIdx,
}) => {
  return (
    <div
      style={{
        background: "transparent",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 32, marginBottom: 48 }}>
        <div
          style={{
            width: 116,
            height: 116,
            borderRadius: 28,
            background: ACCENT_SOFT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SparkleIcon />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: TEXT_DARK,
              letterSpacing: -1,
              lineHeight: 1.05,
            }}
          >
            Assign AI Chat Agent
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: TEXT_DARK,
            fontSize: 36,
            fontWeight: 500,
          }}
        >
          <HistoryIcon />
          <span>History</span>
        </div>
      </div>

      {/* Dropdown card */}
      <div
        style={{
          background: CARD,
          borderRadius: 36,
          padding: "28px 12px 28px",
          boxShadow: "0 14px 40px rgba(13,40,32,0.08)",
          border: `1px solid ${BORDER}`,
          position: "relative",
        }}
      >
        {/* "Chatbots" floating label */}
        <div
          style={{
            position: "absolute",
            top: -16,
            left: 28,
            background: CARD,
            padding: "4px 12px",
            borderRadius: 8,
            fontSize: 22,
            color: ACCENT,
            fontWeight: 500,
            border: `1px solid ${BORDER}`,
          }}
        >
          Chatbots
        </div>

        {OPTIONS.map((opt, i) => {
          const isHovered = i === hoveredIdx;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "30px 36px",
                margin: "0 18px",
                borderRadius: 20,
                background: isHovered ? HOVER_BG : "transparent",
                transition: "none",
                height: ROW_HEIGHT - 12,
              }}
            >
              <span
                style={{
                  fontSize: 40,
                  fontWeight: 500,
                  color: opt.italic ? MUTED : TEXT_DARK,
                  fontStyle: opt.italic ? "italic" : "normal",
                  letterSpacing: -0.3,
                }}
              >
                {opt.label}
              </span>
              {opt.checked && (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={TEXT_DARK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Cursor: React.FC<{ y: number; pulse: number }> = ({ y, pulse }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: CURSOR_X_REST,
        top: y - 18,
        transform: `scale(${1 - pulse * 0.15})`,
        transformOrigin: "20% 20%",
        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.18))",
      }}
    >
      <svg width="72" height="84" viewBox="0 0 32 36" fill="none">
        {/* hand pointer */}
        <path
          d="M12 4c0-1.1.9-2 2-2s2 .9 2 2v12h1V8c0-1.1.9-2 2-2s2 .9 2 2v8h1v-3c0-1.1.9-2 2-2s2 .9 2 2v3h1v-2c0-1.1.9-2 2-2s2 .9 2 2v8c0 5-4 9-9 9h-3c-3 0-5-1-7-3l-6-7c-.7-.8-.6-2 .2-2.6.9-.7 2.1-.5 2.8.4L12 22V4z"
          fill="#FFFFFF"
          stroke="#0E1F1B"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const SparkleIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3z" />
    <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" />
  </svg>
);

const HistoryIcon: React.FC = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={TEXT_DARK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 3-6.7" />
    <polyline points="3 4 3 9 8 9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);
