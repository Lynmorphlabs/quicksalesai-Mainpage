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

const BG = "#E8E5DE";
const DARK = "#1F1F1F";
const BRAND = "#2A2A1F";
const CREAM = "#EFE9D8";
const MUTED = "#7F7B73";
const MENTION = "#1F6FEB";

type Msg = { mention: string; body: string };

const messages: Msg[] = [
  {
    mention: "@Jason",
    body: ", as requested Supplier B has fresh salmon available.\nEarliest delivery slot is tomorrow before 10am.\nWant me to reserve?",
  },
  {
    mention: "@May",
    body: " shall I place the order with the lowest price option?",
  },
  {
    mention: "@Sarah",
    body: ", your order is out for delivery since 2:15pm.\nEstimated arrival is between 3:00–3:15pm.\n\nLet me know if you need to contact the driver.",
  },
];

const TYPING_FRAMES = 22;
const GAP = 22;

const SCHEDULE = (() => {
  const out: { dotsStart: number; bubbleStart: number; hold: number }[] = [];
  let cursor = 12;
  for (const m of messages) {
    const dotsStart = cursor;
    const bubbleStart = dotsStart + TYPING_FRAMES;
    const hold = 80 + Math.min(180, Math.round((m.mention.length + m.body.length) * 1.6));
    out.push({ dotsStart, bubbleStart, hold });
    cursor = bubbleStart + hold + GAP;
  }
  return out;
})();

export const GROUP_AI_DURATION =
  SCHEDULE[SCHEDULE.length - 1].bubbleStart +
  SCHEDULE[SCHEDULE.length - 1].hold +
  40;

export const GroupAIVideo = () => {
  const frame = useCurrentFrame();

  let typingIndex: number | null = null;
  for (let i = 0; i < messages.length; i++) {
    const s = SCHEDULE[i];
    if (frame >= s.dotsStart && frame < s.bubbleStart) {
      typingIndex = i;
      break;
    }
  }

  const visible = messages
    .map((m, i) => ({ ...m, i, ...SCHEDULE[i] }))
    .filter((m) => frame >= m.bubbleStart);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        fontFamily,
        padding: "70px 60px",
        overflow: "hidden",
      }}
    >
      {/* Group header */}
      <GroupHeader />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 22,
          marginTop: 30,
        }}
      >
        {visible.map((m) => (
          <BubbleEntry key={m.i} message={m} startFrame={m.bubbleStart} />
        ))}
        {typingIndex !== null && (
          <TypingBubble startFrame={SCHEDULE[typingIndex].dotsStart} />
        )}
      </div>
    </AbsoluteFill>
  );
};

const GroupHeader: React.FC = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 20,
      padding: "18px 24px",
      background: "#FFFFFF",
      borderRadius: 22,
      boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
    }}
  >
    <div style={{ display: "flex" }}>
      {["#F4A261", "#2A9D8F", "#E76F51", "#264653"].map((c, i) => (
        <div
          key={i}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: c,
            border: "3px solid #FFFFFF",
            marginLeft: i === 0 ? 0 : -18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFF",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          {["J", "M", "S", "K"][i]}
        </div>
      ))}
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: 28, fontWeight: 700, color: DARK, letterSpacing: -0.3 }}>
        Cafe Supplier
      </span>
      <span style={{ fontSize: 20, color: MUTED, fontWeight: 500 }}>
        Jason, May, Sarah, Kai, QuickSales AI
      </span>
    </div>
  </div>
);

const BubbleEntry: React.FC<{
  message: Msg & { i: number };
  startFrame: number;
}> = ({ message, startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;
  const s = spring({ frame: local, fps, config: { damping: 18, stiffness: 200 } });
  const y = interpolate(s, [0, 1], [30, 0]);
  const opacity = interpolate(s, [0, 1], [0, 1]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <Bubble mention={message.mention} body={message.body} />
    </div>
  );
};

const TypingBubble: React.FC<{ startFrame: number }> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - startFrame, fps, config: { damping: 18, stiffness: 220 } });
  const y = interpolate(s, [0, 1], [20, 0]);
  const opacity = interpolate(s, [0, 1], [0, 1]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <Bubble dots />
    </div>
  );
};

const Bubble: React.FC<{ mention?: string; body?: string; dots?: boolean }> = ({
  mention,
  body,
  dots,
}) => (
  <div
    style={{
      background: "#FFFFFF",
      borderRadius: 26,
      padding: "26px 32px",
      display: "flex",
      gap: 22,
      alignItems: "flex-start",
      boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
      width: "100%",
    }}
  >
    <AgentLogo />
    <div style={{ flex: 1, paddingTop: 2 }}>
      <div
        style={{
          fontSize: 26,
          fontWeight: 500,
          color: MUTED,
          marginBottom: 6,
          letterSpacing: -0.2,
        }}
      >
        QuickSales AI
      </div>
      {dots ? (
        <TypingDots />
      ) : (
        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: DARK,
            lineHeight: 1.35,
            letterSpacing: -0.3,
            whiteSpace: "pre-wrap",
          }}
        >
          <span style={{ color: MENTION, fontWeight: 600 }}>{mention}</span>
          {body}
        </div>
      )}
    </div>
  </div>
);

const TypingDots: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", height: 36 }}>
      {[0, 1, 2].map((i) => {
        const cycle = (frame + i * 6) % 30;
        const scale = interpolate(cycle, [0, 7, 14, 30], [0.6, 1.1, 0.6, 0.6], {
          extrapolateRight: "clamp",
        });
        const opacity = interpolate(cycle, [0, 7, 14, 30], [0.4, 1, 0.4, 0.4], {
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: MUTED,
              transform: `scale(${scale})`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

const AgentLogo: React.FC = () => (
  <div
    style={{
      width: 84,
      height: 84,
      borderRadius: 16,
      background: BRAND,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={CREAM} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 7V3" />
      <circle cx="12" cy="3" r="1" fill={CREAM} />
      <circle cx="9" cy="12" r="1.3" fill={CREAM} stroke="none" />
      <circle cx="15" cy="12" r="1.3" fill={CREAM} stroke="none" />
      <path d="M9 16h6" />
      <path d="M2 12v2" />
      <path d="M22 12v2" />
    </svg>
  </div>
);