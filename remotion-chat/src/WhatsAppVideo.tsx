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

// WhatsApp colors
const CHAT_BG = "#ECE5DD"; // classic whatsapp wallpaper beige
const HEADER_BG = "#075E54";
const HEADER_TEXT = "#FFFFFF";
const HEADER_SUB = "#D9F5EC";
const OUT_BUBBLE = "#DCF8C6"; // outgoing (green) — Aden's AI
const IN_BUBBLE = "#FFFFFF"; // incoming (white) — Gavin
const TEXT_DARK = "#111B21";
const META = "#667781";
const TICK = "#53BDEB";

type Msg = {
  side: "in" | "out"; // in = Gavin (left, white). out = Aden's AI (right, green)
  text: string;
  time: string;
  showTail: boolean; // first bubble of a group
};

// Build the conversation as individual bubbles (each "..." line = its own bubble).
const conversation: Msg[] = [
  { side: "in", text: "oi", time: "3:02 AM", showTail: true },
  { side: "in", text: "oi", time: "3:02 AM", showTail: false },
  { side: "in", text: "oi", time: "3:02 AM", showTail: false },
  { side: "in", text: "oi", time: "3:02 AM", showTail: false },
  { side: "in", text: "oi", time: "3:02 AM", showTail: false },

  { side: "out", text: "Hi Gavin! 😄 Sorry ah, got a bit overwhelmed just now...", time: "3:05 AM", showTail: true },
  { side: "out", text: "You keep saying \u201Coi\u201D — are you trying to get my attention for something?", time: "3:05 AM", showTail: false },
  { side: "out", text: "What can I help you with? 🙂", time: "3:05 AM", showTail: false },

  { side: "in", text: "where u", time: "3:06 AM", showTail: true },

  { side: "out", text: "what time liao walao no need sleep ah?", time: "3:06 AM", showTail: true },

  { side: "in", text: "wake up I got new idea", time: "3:07 AM", showTail: true },

  { side: "out", text: "I think maybe we both tired lah... it's quite late already right?", time: "3:07 AM", showTail: true },
  { side: "out", text: "Otherwise maybe get some rest first? 🙂", time: "3:07 AM", showTail: false },
  { side: "out", text: "Really don't want to misunderstand what you trying to say...", time: "3:07 AM", showTail: false },
];

// Timing: how long between each bubble appearing
const BUBBLE_GAP = 22; // frames between consecutive bubbles in a burst
const GROUP_PAUSE = 14; // extra pause when sender switches
const TYPING_DURATION = 35; // typing dots before an "out" group
const HOLD_END = 60;

type BubbleTiming = {
  appearAt: number;
  typingStart?: number; // for out groups, dots show before first bubble
  typingEnd?: number;
};

const timings: BubbleTiming[] = [];
let cursor = 20;
conversation.forEach((m, i) => {
  const prev = conversation[i - 1];
  const switchedSender = !prev || prev.side !== m.side;
  if (switchedSender && i > 0) cursor += GROUP_PAUSE;

  if (m.side === "out" && switchedSender) {
    const typingStart = cursor;
    const typingEnd = cursor + TYPING_DURATION;
    cursor = typingEnd + 4;
    timings.push({ appearAt: cursor, typingStart, typingEnd });
  } else {
    timings.push({ appearAt: cursor });
  }
  cursor += BUBBLE_GAP;
});

export const WHATSAPP_DURATION = Math.ceil(cursor + HOLD_END);

export const WhatsAppVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();

  // Determine whether to show typing dots right now (find the next out group whose typing window contains frame)
  const activeTyping = timings.find(
    (t) => t.typingStart !== undefined && frame >= t.typingStart && frame < (t.typingEnd ?? 0),
  );

  // Build list of currently visible bubbles
  const visibleIdxs = conversation
    .map((_, i) => i)
    .filter((i) => frame >= timings[i].appearAt);

  // Auto-scroll: keep latest bubbles visible. We just align to bottom always.
  return (
    <AbsoluteFill style={{ background: CHAT_BG, fontFamily }}>
      <DoodleBackground />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 110,
          background: HEADER_BG,
          display: "flex",
          alignItems: "center",
          padding: "0 28px",
          gap: 18,
          zIndex: 10,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          G
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: HEADER_TEXT, fontSize: 26, fontWeight: 600, lineHeight: 1.1 }}>
            Gavin
          </div>
          <div style={{ color: HEADER_SUB, fontSize: 16, marginTop: 4 }}>
            {activeTyping ? "typing…" : "online"}
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, color: "white" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M15.5 3a6.5 6.5 0 1 0 4.62 11.07l4.41 4.41 1.41-1.41-4.41-4.41A6.5 6.5 0 0 0 15.5 3zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" /></svg>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg>
        </div>
      </div>

      {/* Chat area */}
      <div
        style={{
          position: "absolute",
          top: 110,
          bottom: 90,
          left: 0,
          right: 0,
          padding: "20px 18px 10px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 4,
          overflow: "hidden",
        }}
      >
        {visibleIdxs.map((i) => {
          const m = conversation[i];
          const t = timings[i];
          const sp = spring({
            frame: frame - t.appearAt,
            fps,
            config: { damping: 18, stiffness: 220, mass: 0.6 },
          });
          const opacity = interpolate(sp, [0, 1], [0, 1]);
          const y = interpolate(sp, [0, 1], [14, 0]);
          const scale = interpolate(sp, [0, 1], [0.94, 1]);

          // group spacing
          const prev = conversation[i - 1];
          const switched = !prev || prev.side !== m.side;
          const marginTop = switched && i > 0 ? 10 : 2;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: m.side === "out" ? "flex-end" : "flex-start",
                marginTop,
                opacity,
                transform: `translateY(${y}px) scale(${scale})`,
                transformOrigin: m.side === "out" ? "bottom right" : "bottom left",
              }}
            >
              <Bubble msg={m} />
            </div>
          );
        })}

        {/* Typing indicator */}
        {activeTyping && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
            <TypingBubble />
          </div>
        )}
      </div>

      {/* Input bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          background: "#F0F0F0",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          gap: 12,
          zIndex: 10,
        }}
      >
        <div
          style={{
            flex: 1,
            height: 56,
            borderRadius: 28,
            background: "white",
            display: "flex",
            alignItems: "center",
            padding: "0 22px",
            color: "#9AA0A6",
            fontSize: 22,
            boxShadow: "0 1px 1px rgba(0,0,0,0.06)",
          }}
        >
          😊  Message
        </div>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: HEADER_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Bubble: React.FC<{ msg: Msg }> = ({ msg }) => {
  const isOut = msg.side === "out";
  return (
    <div
      style={{
        position: "relative",
        background: isOut ? OUT_BUBBLE : IN_BUBBLE,
        color: TEXT_DARK,
        maxWidth: "78%",
        padding: "9px 14px 8px 14px",
        borderRadius: 12,
        borderTopLeftRadius: !isOut && msg.showTail ? 2 : 12,
        borderTopRightRadius: isOut && msg.showTail ? 2 : 12,
        boxShadow: "0 1px 1px rgba(0,0,0,0.13)",
        fontSize: 26,
        lineHeight: 1.32,
        letterSpacing: -0.2,
        wordBreak: "break-word",
      }}
    >
      {msg.showTail && (
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          style={{
            position: "absolute",
            top: 0,
            [isOut ? "right" : "left"]: -7,
            transform: isOut ? "scaleX(-1)" : "none",
          } as React.CSSProperties}
        >
          <path
            d="M14 0 L0 0 C4 4 6 8 14 8 Z"
            fill={isOut ? OUT_BUBBLE : IN_BUBBLE}
          />
        </svg>
      )}
      <div style={{ paddingRight: isOut ? 84 : 56 }}>{msg.text}</div>
      <div
        style={{
          position: "absolute",
          bottom: 6,
          right: 12,
          fontSize: 14,
          color: META,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        {msg.time}
        {isOut && (
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M1 7 L5 11 L13 2" stroke={TICK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M7 7 L11 11 L19 2" stroke={TICK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        )}
      </div>
    </div>
  );
};

const TypingBubble: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        background: OUT_BUBBLE,
        borderRadius: 14,
        borderTopRightRadius: 2,
        padding: "14px 20px",
        display: "flex",
        gap: 8,
        alignItems: "center",
        boxShadow: "0 1px 1px rgba(0,0,0,0.13)",
      }}
    >
      {[0, 1, 2].map((i) => {
        const cycle = (frame + i * 6) % 30;
        const opacity = interpolate(cycle, [0, 7, 14, 30], [0.3, 1, 0.3, 0.3], {
          extrapolateRight: "clamp",
        });
        const scale = interpolate(cycle, [0, 7, 14, 30], [0.7, 1.1, 0.7, 0.7], {
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#5C6B73",
              opacity,
              transform: `scale(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
};

// Subtle WhatsApp-style doodle wallpaper using inline SVG pattern
const DoodleBackground: React.FC = () => {
  const pattern = `
    <svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'>
      <g fill='none' stroke='%23B8AE9C' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' opacity='0.55'>
        <path d='M20 30 q10 -12 22 0 t22 0' />
        <circle cx='90' cy='25' r='8' />
        <path d='M86 25 l3 3 6 -7' />
        <path d='M130 18 l8 0 0 14 -8 0 z M132 22 l4 0 M132 26 l4 0' />
        <path d='M170 25 q-6 -10 0 -18 q6 8 0 18 z' />
        <circle cx='200' cy='28' r='6' />
        <path d='M196 28 l3 3 5 -6' />

        <path d='M30 70 c-6 0 -10 5 -10 10 0 6 6 11 14 11 l4 4 0 -4 c8 0 14 -5 14 -11 0 -5 -4 -10 -10 -10 z' />
        <path d='M80 80 l8 -16 8 16 -16 0 z' />
        <circle cx='130' cy='75' r='12' />
        <path d='M125 75 l4 4 8 -10' />
        <path d='M170 65 q12 5 0 22 q-12 -17 0 -22 z' />

        <rect x='15' y='115' width='28' height='20' rx='3' />
        <path d='M15 119 l14 9 14 -9' />
        <path d='M70 130 a10 10 0 1 1 0 -0.1' />
        <path d='M65 128 l4 4 8 -8' />
        <circle cx='120' cy='125' r='10' />
        <path d='M120 119 l0 6 4 3' />
        <path d='M160 115 q10 12 0 22 q-10 -10 0 -22 z' />
        <path d='M196 120 l8 0 0 14 -8 0 z M198 124 l4 0 M198 128 l4 0' />

        <path d='M25 175 q12 -8 22 0 t22 0' />
        <circle cx='90' cy='175' r='9' />
        <path d='M86 175 l3 3 6 -7' />
        <path d='M130 168 l16 0 0 14 -16 0 z' />
        <circle cx='180' cy='178' r='10' />
        <path d='M175 178 l4 4 8 -8' />
      </g>
    </svg>
  `;
  const url = `url("data:image/svg+xml;utf8,${pattern.replace(/\n/g, "").replace(/#/g, "%23").replace(/"/g, "'")}")`;
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: url,
        backgroundRepeat: "repeat",
        opacity: 0.6,
      }}
    />
  );
};