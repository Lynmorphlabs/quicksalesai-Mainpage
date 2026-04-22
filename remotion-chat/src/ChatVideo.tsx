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

// Typewriter helper
const typed = (text: string, frame: number, startFrame: number, charsPerFrame = 0.9) => {
  const elapsed = Math.max(0, frame - startFrame);
  const count = Math.min(text.length, Math.floor(elapsed * charsPerFrame));
  return text.slice(0, count);
};

export const ChatVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timings
  const customerBubbleStart = 10;
  const customerTypeStart = 25;
  const customerText = "Hi, I need help on the product";
  const customerTypeDuration = customerText.length / 0.9;

  const agentBubbleStart = Math.round(customerTypeStart + customerTypeDuration + 18);
  const typingDotsEnd = agentBubbleStart + 25;
  const agentTypeStart = typingDotsEnd + 4;
  const agentText = "Hi, this is the support team. How can I help you?";

  // Customer bubble spring entry
  const customerSpring = spring({
    frame: frame - customerBubbleStart,
    fps,
    config: { damping: 18, stiffness: 180 },
  });
  const customerY = interpolate(customerSpring, [0, 1], [40, 0]);
  const customerOpacity = interpolate(customerSpring, [0, 1], [0, 1]);

  // Agent bubble spring entry
  const agentSpring = spring({
    frame: frame - agentBubbleStart,
    fps,
    config: { damping: 18, stiffness: 180 },
  });
  const agentY = interpolate(agentSpring, [0, 1], [40, 0]);
  const agentOpacity = interpolate(agentSpring, [0, 1], [0, 1]);

  const customerTyped = typed(customerText, frame, customerTypeStart);
  const agentTyped = typed(agentText, frame, agentTypeStart);

  // Typing dots animation
  const showTypingDots = frame >= agentBubbleStart + 6 && frame < typingDotsEnd;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        fontFamily,
        padding: 80,
        justifyContent: "center",
        alignItems: "center",
        gap: 28,
      }}
    >
      {/* Customer bubble */}
      <div
        style={{
          width: 940,
          opacity: customerOpacity,
          transform: `translateY(${customerY}px)`,
        }}
      >
        <Bubble
          variant="muted"
          avatar={
            <Img
              src={staticFile("customer.jpg")}
              style={{
                width: 88,
                height: 88,
                borderRadius: 18,
                objectFit: "cover",
              }}
            />
          }
          name="Zen"
          text={customerTyped}
          showCaret={frame >= customerTypeStart && customerTyped.length < customerText.length}
        />
      </div>

      {/* Agent bubble */}
      <div
        style={{
          width: 940,
          opacity: agentOpacity,
          transform: `translateY(${agentY}px)`,
        }}
      >
        <Bubble
          variant="white"
          avatar={<AgentLogo />}
          name="QuickSales AI"
          text={showTypingDots ? "" : agentTyped}
          typingDots={showTypingDots}
          showCaret={
            !showTypingDots &&
            frame >= agentTypeStart &&
            agentTyped.length < agentText.length
          }
        />
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
        padding: "26px 34px",
        display: "flex",
        gap: 22,
        alignItems: "flex-start",
        boxShadow: isMuted ? "none" : "0 6px 20px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ flexShrink: 0 }}>{avatar}</div>
      <div style={{ flex: 1, paddingTop: 4 }}>
        <div
          style={{
            fontSize: 28,
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
            fontSize: 38,
            fontWeight: 500,
            color: isMuted ? "#3A3A35" : DARK,
            lineHeight: 1.25,
            letterSpacing: -0.5,
            minHeight: 48,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {typingDots ? <TypingDots /> : (
            <>
              <span>{text}</span>
              {showCaret && <Caret color={isMuted ? "#3A3A35" : DARK} />}
            </>
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
        height: 36,
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