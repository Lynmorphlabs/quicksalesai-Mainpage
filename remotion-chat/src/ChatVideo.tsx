import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const BG = "#E8E5DE";
const MUTED = "#A8A39A";
const DARK = "#1F1F1F";
const BRAND = "#2A2A1F";
const CREAM = "#EFE9D8";

const CHARS_PER_FRAME = 1.4;

type Msg = {
  sender: "user" | "agent";
  name: string;
  text: string;
};

const messages: Msg[] = [
  {
    sender: "user",
    name: "Zen",
    text: "Hi, please recommend me suitable savings insurance",
  },
  {
    sender: "agent",
    name: "QuickSales AI",
    text: "Sure 😊 I can help with that.\nMay I know your monthly budget and how long you're planning to save?",
  },
  {
    sender: "user",
    name: "Zen",
    text: "Around $300/month, maybe long term like 15–20 years",
  },
  {
    sender: "agent",
    name: "QuickSales AI",
    text: "Got it 👍 Based on that, here are a couple of options you might consider:\n• Endowment Plan – Stable returns, suitable for medium-term goals (10–20 years)\n• Investment-Linked Plan (ILP) – Higher potential returns, with some market exposure\nWould you like me to walk you through the differences in more detail?",
  },
];

// Compute timing per message
const GAP_BEFORE = 18;
const TYPING_DOTS_DURATION = 22;
const HOLD_AFTER = 20;

type Timing = {
  bubbleStart: number;
  typingDotsStart: number; // only for agent
  typeStart: number;
  typeDuration: number;
  end: number;
};

const timings: Timing[] = [];
let cursor = 10;
messages.forEach((m, i) => {
  const bubbleStart = cursor;
  const isAgent = m.sender === "agent";
  const typingDotsStart = bubbleStart + 6;
  const typeStart = isAgent ? typingDotsStart + TYPING_DOTS_DURATION : bubbleStart + 8;
  const typeDuration = m.text.length / CHARS_PER_FRAME;
  const end = typeStart + typeDuration + HOLD_AFTER;
  timings.push({ bubbleStart, typingDotsStart, typeStart, typeDuration, end });
  cursor = end + GAP_BEFORE;
});

export const CHAT_TOTAL = Math.ceil(cursor + 30);

const typed = (text: string, frame: number, startFrame: number) => {
  const elapsed = Math.max(0, frame - startFrame);
  const count = Math.min(text.length, Math.floor(elapsed * CHARS_PER_FRAME));
  return text.slice(0, count);
};

export const ChatVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find last visible message to anchor the stack
  const visibleCount = messages.filter((_, i) => frame >= timings[i].bubbleStart).length;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        fontFamily,
        padding: 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 1000,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {messages.map((m, i) => {
          const t = timings[i];
          if (frame < t.bubbleStart) return null;

          const sp = spring({
            frame: frame - t.bubbleStart,
            fps,
            config: { damping: 18, stiffness: 180 },
          });
          const y = interpolate(sp, [0, 1], [40, 0]);
          const opacity = interpolate(sp, [0, 1], [0, 1]);

          const isAgent = m.sender === "agent";
          const showTypingDots =
            isAgent && frame >= t.typingDotsStart && frame < t.typeStart;
          const text = isAgent
            ? showTypingDots
              ? ""
              : typed(m.text, frame, t.typeStart)
            : typed(m.text, frame, t.typeStart);
          const showCaret =
            !showTypingDots &&
            frame >= t.typeStart &&
            text.length < m.text.length;

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateY(${y}px)`,
              }}
            >
              <Bubble
                variant={isAgent ? "white" : "muted"}
                avatar={
                  isAgent ? (
                    <AgentLogo />
                  ) : (
                    <Img
                      src={staticFile("customer.jpg")}
                      style={{
                        width: 88,
                        height: 88,
                        borderRadius: 18,
                        objectFit: "cover",
                      }}
                    />
                  )
                }
                name={m.name}
                text={text}
                typingDots={showTypingDots}
                showCaret={showCaret}
              />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const Bubble: React.FC<{
  variant: "muted" | "white";
  avatar: React.ReactNode;
  name: string;
  text: string;
  typingDots?: boolean;
  showCaret?: boolean;
}> = ({ variant, avatar, name, text, typingDots, showCaret }) => {
  const isMuted = variant === "muted";
  return (
    <div
      style={{
        background: isMuted ? "#DCD8D0" : "#FFFFFF",
        borderRadius: 28,
        padding: "24px 32px",
        display: "flex",
        gap: 22,
        alignItems: "flex-start",
        boxShadow: isMuted ? "none" : "0 6px 20px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ flexShrink: 0 }}>{avatar}</div>
      <div style={{ flex: 1, paddingTop: 4, minWidth: 0 }}>
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: isMuted ? MUTED : "#7F7B73",
            marginBottom: 6,
            letterSpacing: -0.2,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: isMuted ? "#3A3A35" : DARK,
            lineHeight: 1.3,
            letterSpacing: -0.4,
            minHeight: 42,
            display: "flex",
            alignItems: "center",
            gap: 4,
            whiteSpace: "pre-wrap",
          }}
        >
          {typingDots ? <TypingDots /> : (
            <span>
              {text}
              {showCaret && <Caret color={isMuted ? "#3A3A35" : DARK} />}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Caret: React.FC<{ color: string }> = ({ color }) => {
  const frame = useCurrentFrame();
  const visible = Math.floor(frame / 8) % 2 === 0;
  return (
    <span
      style={{
        display: "inline-block",
        width: 3,
        height: 30,
        background: color,
        marginLeft: 2,
        opacity: visible ? 1 : 0,
        verticalAlign: "middle",
      }}
    />
  );
};

const TypingDots: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", height: 40 }}>
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
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#7F7B73",
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
      width: 88,
      height: 88,
      borderRadius: 18,
      background: BRAND,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: CREAM,
    }}
  >
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={CREAM} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
