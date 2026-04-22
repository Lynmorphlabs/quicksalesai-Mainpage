import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  Sequence,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const BG = "#E8E5DE";
const MUTED_TEXT = "#A8A39A";
const DARK = "#1F1F1F";
const BRAND = "#2A2A1F";
const CREAM = "#EFE9D8";
const LINK = "#2563EB";

type Msg = {
  sender: "agent" | "user";
  text: string;
  // optional rich extra rendered after the text (e.g. meet link block)
  extra?: "meet";
};

const messages: Msg[] = [
  {
    sender: "agent",
    text: "Would you like to arrange a consultation call with our specialist to discuss your options?",
  },
  { sender: "user", text: "Yes" },
  {
    sender: "agent",
    text: "May I have your email, and which day and time would you prefer for the session so I can send you the meeting invitation?",
  },
  { sender: "user", text: "zen@gmail.com, Next Wednesday 3pm" },
  {
    sender: "agent",
    text: "Thank you. Your demo session has been scheduled for Wednesday 3pm.\n\nGoogle Meet: https://meet.google.com/zfb-mtuh-orz\n\nA calendar invitation has been sent to your email. We will walk you through the full setup during the 15 minute session, see you very soon, Zen!",
  },
];

// Per-message timing (in frames at 30fps)
const FPS = 30;
const TYPING_DOTS_FRAMES = 22; // dots before message appears
const GAP_BETWEEN = 18; // gap after a message lands before next dots

// Compute start frame of each message (when it pops in)
const computeSchedule = () => {
  const schedule: { dotsStart: number; bubbleStart: number; hold: number }[] =
    [];
  let cursor = 12; // initial pause
  for (const m of messages) {
    const dotsStart = cursor;
    const bubbleStart = dotsStart + TYPING_DOTS_FRAMES;
    // Reading time proportional to length
    const baseHold = 55;
    const readHold = Math.min(180, Math.round(m.text.length * 1.6));
    const extraHold = m.extra === "meet" ? 60 : 0;
    const hold = baseHold + readHold + extraHold;
    schedule.push({ dotsStart, bubbleStart, hold });
    cursor = bubbleStart + 8 + GAP_BETWEEN; // dots disappear when bubble appears
  }
  return schedule;
};

export const SCHEDULE = computeSchedule();
export const SCHEDULE_TOTAL =
  SCHEDULE[SCHEDULE.length - 1].bubbleStart +
  SCHEDULE[SCHEDULE.length - 1].hold +
  30;

export const SchedulingVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Determine which message is currently "typing" (showing dots)
  let typingIndex: number | null = null;
  for (let i = 0; i < messages.length; i++) {
    const s = SCHEDULE[i];
    if (frame >= s.dotsStart && frame < s.bubbleStart) {
      typingIndex = i;
      break;
    }
  }

  // Build list of visible bubbles (those whose bubbleStart <= frame)
  const visible = messages
    .map((m, i) => ({ ...m, i, ...SCHEDULE[i] }))
    .filter((m) => frame >= m.bubbleStart);

  // Auto-scroll: keep newest bubble in view. We translate the stack upward
  // when content would exceed the viewport.
  const VIEWPORT_H = 1200 - 160; // padding top/bottom

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        fontFamily,
        padding: "80px 60px",
        overflow: "hidden",
      }}
    >
      <ScrollingStack frame={frame} fps={fps} viewportH={VIEWPORT_H}>
        {visible.map((m) => (
          <BubbleEntry key={m.i} message={m} startFrame={m.bubbleStart} />
        ))}
        {typingIndex !== null && (
          <TypingBubble
            sender={messages[typingIndex].sender}
            startFrame={SCHEDULE[typingIndex].dotsStart}
          />
        )}
      </ScrollingStack>
    </AbsoluteFill>
  );
};

const ScrollingStack: React.FC<{
  frame: number;
  fps: number;
  viewportH: number;
  children: React.ReactNode;
}> = ({ children }) => {
  // Use measured stack height via CSS — translate from the bottom so newest
  // content sits near the bottom of the viewport. Simpler approach: use
  // flex column-reverse so new items push older up. But to keep code
  // straightforward, we just bottom-anchor.
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 18,
      }}
    >
      {children}
    </div>
  );
};

const BubbleEntry: React.FC<{ message: Msg & { i: number }; startFrame: number }> = ({
  message,
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;
  const s = spring({
    frame: local,
    fps,
    config: { damping: 18, stiffness: 200 },
  });
  const y = interpolate(s, [0, 1], [30, 0]);
  const opacity = interpolate(s, [0, 1], [0, 1]);

  const isUser = message.sender === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <ChatBubble sender={message.sender} text={message.text} extra={message.extra} />
    </div>
  );
};

const TypingBubble: React.FC<{ sender: "agent" | "user"; startFrame: number }> = ({
  sender,
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 18, stiffness: 220 },
  });
  const y = interpolate(s, [0, 1], [20, 0]);
  const opacity = interpolate(s, [0, 1], [0, 1]);
  const isUser = sender === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <ChatBubble sender={sender} dots />
    </div>
  );
};

const ChatBubble: React.FC<{
  sender: "agent" | "user";
  text?: string;
  dots?: boolean;
  extra?: "meet";
}> = ({ sender, text, dots, extra }) => {
  const isUser = sender === "user";
  const bg = isUser ? "#DCD8D0" : "#FFFFFF";
  const nameColor = isUser ? MUTED_TEXT : "#7F7B73";
  const textColor = isUser ? MUTED_TEXT : DARK;
  const name = isUser ? "Zen" : "QuickSales AI";

  return (
    <div
      style={{
        background: bg,
        borderRadius: 26,
        padding: "26px 32px",
        display: "flex",
        gap: 22,
        alignItems: "flex-start",
        boxShadow: isUser ? "none" : "0 6px 20px rgba(0,0,0,0.04)",
        maxWidth: 1120,
        flexDirection: isUser ? "row-reverse" : "row",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        {isUser ? (
          <Img
            src={staticFile("customer.jpg")}
            style={{ width: 84, height: 84, borderRadius: 18, objectFit: "cover" }}
          />
        ) : (
          <AgentLogo />
        )}
      </div>
      <div style={{ flex: 1, paddingTop: 2, textAlign: isUser ? "right" : "left" }}>
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: nameColor,
            marginBottom: 6,
            letterSpacing: -0.2,
          }}
        >
          {name}
        </div>
        {dots ? (
          <TypingDots />
        ) : (
          <>
            <div
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: textColor,
                lineHeight: 1.35,
                letterSpacing: -0.3,
                whiteSpace: "pre-wrap",
              }}
            >
              {text}
            </div>
            {extra === "meet" && <MeetBlock />}
          </>
        )}
      </div>
    </div>
  );
};

const MeetBlock: React.FC = () => (
  <div
    style={{
      marginTop: 14,
      padding: "14px 18px",
      background: "#F4F2EC",
      borderRadius: 14,
      display: "flex",
      alignItems: "center",
      gap: 12,
      textAlign: "left",
    }}
  >
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="13" height="12" rx="2" fill="#00897B" />
        <path d="M16 10l5-3v10l-5-3z" fill="#FBBC04" />
        <rect x="3" y="6" width="4" height="12" rx="2" fill="#1A73E8" />
        <rect x="12" y="6" width="4" height="12" rx="2" fill="#34A853" />
      </svg>
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: 18, color: "#7F7B73", fontWeight: 500 }}>
        Google Meet
      </span>
      <span style={{ fontSize: 22, color: LINK, fontWeight: 500 }}>
        meet.google.com/zfb-mtuh-orz
      </span>
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
      width: 84,
      height: 84,
      borderRadius: 16,
      background: BRAND,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: CREAM,
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
