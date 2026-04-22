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

const BG = "#F8EDD8";
const SITE_BG = "#F2C6C0";
const DARK = "#1A1A1A";
const WA_GREEN = "#25D366";
const WA_HEADER = "#075E54";
const WA_BG = "#ECE5DD";

export const CW_DURATION = 240;

export const ChatWidgetVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase timings
  const cursorAppear = 10;
  const cursorMoveStart = 20;
  const cursorMoveEnd = 70;
  const clickFrame = 75;
  const waOpenStart = 85;
  const msg1Start = 130;
  const typingStart = 165;
  const msg2Start = 195;

  // Cursor path: from top-left of website to widget
  const cursorProgress = interpolate(
    frame,
    [cursorMoveStart, cursorMoveEnd],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const cursorX = interpolate(cursorProgress, [0, 1], [200, 1080]);
  const cursorY = interpolate(cursorProgress, [0, 1], [180, 880]);
  const cursorOpacity = interpolate(frame, [cursorAppear, cursorAppear + 8], [0, 1], { extrapolateRight: "clamp" });

  // Click pulse
  const clickPulse = spring({
    frame: frame - clickFrame,
    fps,
    config: { damping: 12, stiffness: 200 },
    durationInFrames: 20,
  });
  const clickScale = interpolate(clickPulse, [0, 1], [0, 2.5]);
  const clickFade = interpolate(frame - clickFrame, [0, 20], [0.6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Widget pulse on click
  const widgetClickSpring = spring({
    frame: frame - clickFrame,
    fps,
    config: { damping: 10, stiffness: 250 },
  });
  const widgetScale = frame >= clickFrame ? interpolate(widgetClickSpring, [0, 0.5, 1], [1, 0.92, 1]) : 1;

  // WhatsApp panel slide-in
  const waSpring = spring({
    frame: frame - waOpenStart,
    fps,
    config: { damping: 18, stiffness: 140 },
  });
  const waY = interpolate(waSpring, [0, 1], [800, 0]);
  const waOpacity = interpolate(waSpring, [0, 1], [0, 1]);

  // Messages
  const msg1Spring = spring({ frame: frame - msg1Start, fps, config: { damping: 16, stiffness: 180 } });
  const msg1Y = interpolate(msg1Spring, [0, 1], [20, 0]);
  const msg1Opacity = interpolate(msg1Spring, [0, 1], [0, 1]);

  const showTyping = frame >= typingStart && frame < msg2Start;

  const msg2Spring = spring({ frame: frame - msg2Start, fps, config: { damping: 16, stiffness: 180 } });
  const msg2Y = interpolate(msg2Spring, [0, 1], [20, 0]);
  const msg2Opacity = interpolate(msg2Spring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        fontFamily,
        padding: 28,
      }}
    >
      {/* Browser/website mockup */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 28,
          background: "#fff",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            height: 56,
            background: "#F4F2EE",
            borderBottom: "1px solid #E5E1DA",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            gap: 10,
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FF5F56" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#27C93F" }} />
          <div
            style={{
              flex: 1,
              marginLeft: 24,
              height: 32,
              borderRadius: 16,
              background: "#fff",
              border: "1px solid #E5E1DA",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              fontSize: 16,
              color: "#8C887F",
            }}
          >
            yourbeautystore.com
          </div>
        </div>

        {/* Website content */}
        <div
          style={{
            flex: 1,
            background: SITE_BG,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#3A1F1C",
              letterSpacing: -1.5,
              textAlign: "center",
            }}
          >
            Glow Beauty
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#5A3A36",
              fontWeight: 500,
            }}
          >
            Skincare made simple.
          </div>

          {/* Chat widget bubble - BIG */}
          <div
            style={{
              position: "absolute",
              right: 80,
              bottom: 80,
              transform: `scale(${widgetScale})`,
              transformOrigin: "bottom right",
            }}
          >
            <div
              style={{
                background: DARK,
                color: "#fff",
                borderRadius: 28,
                padding: "32px 44px",
                display: "flex",
                alignItems: "center",
                gap: 28,
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 42, fontWeight: 700, letterSpacing: 0.5 }}>
                  CHAT WITH OUR EXPERT
                </div>
                <div style={{ fontSize: 24, color: "#BFBFBF", letterSpacing: 1 }}>
                  MON-FRI 11AM-6PM
                </div>
              </div>
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  background: WA_GREEN,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <WhatsAppIcon size={56} color="#fff" />
              </div>

              {/* Click pulse */}
              {frame >= clickFrame && frame < clickFrame + 25 && (
                <div
                  style={{
                    position: "absolute",
                    right: 8,
                    bottom: 8,
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    border: `4px solid ${WA_GREEN}`,
                    transform: `scale(${clickScale})`,
                    opacity: clickFade,
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Phone WhatsApp pop-up */}
        {frame >= waOpenStart && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 480,
              height: 940,
              marginLeft: -240,
              marginTop: -470,
              borderRadius: 56,
              overflow: "hidden",
              background: "#000",
              padding: 14,
              transform: `translateY(${waY}px)`,
              opacity: waOpacity,
              boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
            }}
          >
          <div style={{
            width: "100%",
            height: "100%",
            borderRadius: 44,
            overflow: "hidden",
            background: WA_BG,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}>
            {/* Phone notch */}
            <div style={{
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 130,
              height: 28,
              background: "#000",
              borderRadius: 16,
              zIndex: 10,
            }} />
            {/* WA Header */}
            <div
              style={{
                background: WA_HEADER,
                padding: "44px 20px 16px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F2C6C0, #E89B92)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#3A1F1C",
                }}
              >
                ✨
              </div>
              <div style={{ display: "flex", flexDirection: "column", color: "#fff" }}>
                <div style={{ fontSize: 18, fontWeight: 600 }}>Beauty Expert AI</div>
                <div style={{ fontSize: 12, opacity: 0.85 }}>online</div>
              </div>
            </div>

            {/* WA Body */}
            <div
              style={{
                flex: 1,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                justifyContent: "flex-end",
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 40%)",
              }}
            >
              {/* Incoming msg 1 */}
              {frame >= msg1Start && (
                <div
                  style={{
                    alignSelf: "flex-start",
                    maxWidth: "82%",
                    background: "#fff",
                    borderRadius: "12px 12px 12px 2px",
                    padding: "10px 14px",
                    fontSize: 15,
                    color: DARK,
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    transform: `translateY(${msg1Y}px)`,
                    opacity: msg1Opacity,
                  }}
                >
                  Hi! ✨ I'm your Beauty Expert AI.
                  <br />
                  What's your skin type?
                  <div style={{ fontSize: 10, color: "#999", textAlign: "right", marginTop: 4 }}>
                    11:42
                  </div>
                </div>
              )}

              {/* Typing */}
              {showTyping && (
                <div
                  style={{
                    alignSelf: "flex-start",
                    background: "#fff",
                    borderRadius: 12,
                    padding: "14px 18px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  <TypingDots />
                </div>
              )}

              {/* Incoming msg 2 */}
              {frame >= msg2Start && (
                <div
                  style={{
                    alignSelf: "flex-start",
                    maxWidth: "82%",
                    background: "#fff",
                    borderRadius: "12px 12px 12px 2px",
                    padding: "10px 14px",
                    fontSize: 15,
                    color: DARK,
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    transform: `translateY(${msg2Y}px)`,
                    opacity: msg2Opacity,
                  }}
                >
                  I can recommend the perfect routine 💕
                  <div style={{ fontSize: 10, color: "#999", textAlign: "right", marginTop: 4 }}>
                    11:42
                  </div>
                </div>
              )}
            </div>

            {/* WA Input */}
            <div
              style={{
                background: "#F0F0F0",
                padding: "10px 14px 24px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: 22,
                  padding: "10px 16px",
                  fontSize: 13,
                  color: "#999",
                }}
              >
                Type a message
              </div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: WA_HEADER,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 18,
                }}
              >
                ➤
              </div>
            </div>
          </div>
          </div>
        )}

        {/* Cursor */}
        {frame >= cursorAppear && frame < waOpenStart + 10 && (
          <div
            style={{
              position: "absolute",
              left: cursorX,
              top: cursorY,
              opacity: cursorOpacity,
              pointerEvents: "none",
              transform: frame >= clickFrame && frame < clickFrame + 8 ? "scale(0.85)" : "scale(1)",
            }}
          >
            <CursorIcon />
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

const WhatsAppIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CursorIcon: React.FC = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
    <path
      d="M5.5 3.5L19 12L12 13L9 20L5.5 3.5Z"
      fill="#1A1A1A"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const TypingDots: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center", height: 16 }}>
      {[0, 1, 2].map((i) => {
        const cycle = (frame + i * 6) % 30;
        const opacity = interpolate(cycle, [0, 7, 14, 30], [0.3, 1, 0.3, 0.3], {
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#7F7B73",
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};