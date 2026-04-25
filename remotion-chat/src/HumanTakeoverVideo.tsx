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
const PURPLE = "#7C5CFF";
const PURPLE_SOFT = "#EFEBFF";

const FPS = 30;

// Per-field timeline (each field: focus -> type)
const FIELDS: Array<{ key: string; value: string; placeholder: string }> = [
  { key: "name", value: "Sara", placeholder: "Agent name" },
  { key: "email", value: "sarah@quicksales.ai", placeholder: "name@quicksales.ai" },
  { key: "password", value: "••••••••", placeholder: "Secure password" },
  { key: "phone", value: "93872305", placeholder: "Phone" },
  {
    key: "role",
    value:
      "Follows up with prospects who have shown interest, answers additional questions after initial discussions, and re-engages leads who have gone quiet.",
    placeholder: "Describe what this agent does…",
  },
];

const FIELD_DELAY = 18;
const FIELD_TYPE_BASE = 14;
const CHAR_FRAMES = 0.6;

const startFrame = (i: number) => {
  let f = 30; // intro
  for (let k = 0; k < i; k++) {
    const v = FIELDS[k].value;
    f += FIELD_DELAY + FIELD_TYPE_BASE + Math.ceil(v.length * CHAR_FRAMES);
  }
  return f;
};
const fieldEndFrame = (i: number) => {
  const v = FIELDS[i].value;
  return startFrame(i) + FIELD_TYPE_BASE + Math.ceil(v.length * CHAR_FRAMES);
};

const TOGGLE1_FRAME = fieldEndFrame(FIELDS.length - 1) + 24;
const TOGGLE2_FRAME = TOGGLE1_FRAME + 30;
const ACTIVATE_FRAME = TOGGLE2_FRAME + 36;
const SUCCESS_FRAME = ACTIVATE_FRAME + 30;
const HOLD = 80;
export const HT_DURATION = SUCCESS_FRAME + HOLD;

const typedValue = (i: number, frame: number) => {
  const start = startFrame(i) + FIELD_TYPE_BASE;
  const v = FIELDS[i].value;
  const charsShown = Math.max(
    0,
    Math.min(v.length, Math.floor((frame - start) / CHAR_FRAMES))
  );
  return v.slice(0, charsShown);
};

const isFieldActive = (i: number, frame: number) => {
  const s = startFrame(i);
  const e = fieldEndFrame(i) + 8;
  return frame >= s && frame <= e;
};

const Field: React.FC<{
  label: string;
  icon: React.ReactNode;
  width?: number | string;
  index: number;
  multiline?: boolean;
  prefix?: string;
}> = ({ label, icon, width = "100%", index, multiline, prefix }) => {
  const frame = useCurrentFrame();
  const v = typedValue(index, frame);
  const active = isFieldActive(index, frame);
  const cursorBlink = Math.floor(frame / 8) % 2 === 0;
  const isPwd = FIELDS[index].key === "password";

  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, color: TEXT_DARK, fontWeight: 500 }}>{label}</div>
      <div
        style={{
          display: "flex",
          alignItems: multiline ? "flex-start" : "center",
          gap: 14,
          padding: multiline ? "18px 20px" : "0 20px",
          height: multiline ? "auto" : 64,
          minHeight: multiline ? 200 : 64,
          background: PANEL,
          border: `1.5px solid ${active ? BORDER_ACTIVE : BORDER}`,
          borderRadius: 18,
          boxShadow: active ? `0 0 0 4px ${GREEN}1A` : "none",
          transition: "none",
        }}
      >
        <div style={{ color: SUBTLE, display: "flex", alignItems: multiline ? "flex-start" : "center", paddingTop: multiline ? 4 : 0 }}>
          {icon}
        </div>
        {prefix && <span style={{ color: TEXT_DARK, fontSize: 18 }}>{prefix}</span>}
        <div
          style={{
            flex: 1,
            color: TEXT_DARK,
            fontSize: 18,
            fontWeight: 500,
            lineHeight: multiline ? "1.55" : "normal",
            letterSpacing: isPwd ? 4 : 0,
            wordBreak: "break-word",
          }}
        >
          {v || (
            <span style={{ color: SUBTLE, fontWeight: 400 }}>{FIELDS[index].placeholder}</span>
          )}
          {active && (
            <span
              style={{
                display: "inline-block",
                marginLeft: 2,
                width: 2,
                height: multiline ? 22 : 22,
                background: GREEN,
                verticalAlign: "middle",
                opacity: cursorBlink ? 1 : 0,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Toggle: React.FC<{ on: boolean; flipFrame: number }> = ({ on, flipFrame }) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [flipFrame, flipFrame + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const progress = on ? t : 1 - t;
  const knobX = interpolate(progress, [0, 1], [4, 30]);
  const bg = `rgba(16,185,129,${interpolate(progress, [0, 1], [0.15, 1])})`;
  return (
    <div
      style={{
        width: 60,
        height: 32,
        borderRadius: 999,
        background: bg,
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
  );
};

const Icon: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = SUBTLE }) => (
  <div style={{ width: 22, height: 22, color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
    {children}
  </div>
);

export const HumanTakeoverVideo = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Header reveal
  const headerOp = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const headerY = interpolate(frame, [0, 18], [-12, 0], { extrapolateRight: "clamp" });

  // Activate button: cursor moves into button then click pulse
  const cursorAppear = interpolate(frame, [ACTIVATE_FRAME - 30, ACTIVATE_FRAME - 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cursorTo = interpolate(frame, [ACTIVATE_FRAME - 30, ACTIVATE_FRAME], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  // cursor travels from bottom-left to button
  const cursorX = interpolate(cursorTo, [0, 1], [width / 2 - 200, width - 230]);
  const cursorY = interpolate(cursorTo, [0, 1], [height - 240, 110]);

  const clickPulse = spring({
    frame: frame - ACTIVATE_FRAME,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const buttonScale = interpolate(clickPulse, [0, 0.5, 1], [1, 0.96, 1]);

  // Success card slide-in
  const successAppear = spring({
    frame: frame - SUCCESS_FRAME,
    fps,
    config: { damping: 18, stiffness: 180 },
  });

  return (
    <AbsoluteFill style={{ background: BG, fontFamily, padding: 56 }}>
      {/* subtle dot grid */}
      <svg width={width} height={height} style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
        <defs>
          <pattern id="dots-ht" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="#D5DCD7" />
          </pattern>
        </defs>
        <rect width={width} height={height} fill="url(#dots-ht)" />
      </svg>

      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: headerOp,
          transform: `translateY(${headerY}px)`,
          marginBottom: 36,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: PANEL,
              border: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: TEXT_DARK,
              fontSize: 20,
              boxShadow: "0 4px 12px -8px rgba(15,27,25,0.25)",
            }}
          >
            ‹
          </div>
          <div>
            <div style={{ fontSize: 38, fontWeight: 700, color: GREEN, letterSpacing: -1 }}>Agent Management</div>
            <div style={{ fontSize: 16, color: MUTED, fontWeight: 500, marginTop: 4 }}>Onboarding a new agent</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <div
            style={{
              padding: "16px 30px",
              borderRadius: 16,
              background: PANEL,
              border: `1px solid ${BORDER}`,
              fontSize: 17,
              fontWeight: 600,
              color: TEXT_DARK,
            }}
          >
            Cancel
          </div>
          <div
            style={{
              padding: "16px 28px",
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
            <span style={{ fontSize: 18 }}>💾</span> Activate Agent
          </div>
        </div>
      </div>

      {/* Main content: 2 columns */}
      <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
        {/* Left form panel */}
        <div
          style={{
            flex: 1,
            background: PANEL,
            border: `1px solid ${BORDER}`,
            borderRadius: 28,
            padding: 36,
            boxShadow: "0 24px 50px -28px rgba(15,27,25,0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <Field index={0} label="Agent Name" icon={<Icon>👤</Icon>} />
            <Field index={1} label="Digital Access ID (Email)" icon={<Icon>✉</Icon>} />
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <Field index={2} label="Secure Access Token (Password)" icon={<Icon>🔒</Icon>} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 16, color: TEXT_DARK, fontWeight: 500 }}>Direct Contact (WhatsApp)</div>
              <div style={{ display: "flex", gap: 12 }}>
                <div
                  style={{
                    width: 110,
                    height: 64,
                    borderRadius: 18,
                    border: `1.5px solid ${BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    color: TEXT_DARK,
                    background: PANEL,
                    gap: 6,
                  }}
                >
                  +65 <span style={{ color: SUBTLE, fontSize: 12 }}>▾</span>
                </div>
                <div style={{ flex: 1 }}>
                  <Field index={3} label="" icon={<Icon>📞</Icon>} />
                </div>
              </div>
            </div>
          </div>
          <Field
            index={4}
            label="Internal Context / Role Description"
            icon={<Icon>📄</Icon>}
            multiline
          />
        </div>

        {/* Right deployment panel */}
        <div
          style={{
            width: 380,
            background: PANEL,
            border: `1px solid ${BORDER}`,
            borderRadius: 28,
            padding: 28,
            boxShadow: "0 24px 50px -28px rgba(15,27,25,0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: GREEN_SOFT,
                color: GREEN,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              💾
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, color: TEXT_DARK, letterSpacing: -0.5 }}>Deployment</div>
          </div>

          {/* Toggle row 1: Access Level */}
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 18,
              padding: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: PANEL,
            }}
          >
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: TEXT_DARK }}>Access Level</div>
              <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, letterSpacing: 1.4, marginTop: 4 }}>GLOBAL PLATFORM ENTRY</div>
            </div>
            <Toggle on={true} flipFrame={TOGGLE1_FRAME} />
          </div>

          {/* Toggle row 2: Hide Phone */}
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 18,
              padding: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: PANEL,
            }}
          >
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: TEXT_DARK }}>Hide Phone Number</div>
              <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, letterSpacing: 1.4, marginTop: 4 }}>PRIVACY PROTECTION</div>
            </div>
            <Toggle on={false} flipFrame={TOGGLE2_FRAME} />
          </div>

          <div style={{ marginTop: 4 }}>
            <div style={{ fontSize: 16, color: TEXT_DARK, fontWeight: 500, marginBottom: 8 }}>Assign Team</div>
            <div
              style={{
                height: 56,
                borderRadius: 16,
                border: `1.5px solid ${BORDER}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 18px",
                color: SUBTLE,
                fontSize: 16,
              }}
            >
              Select a team… <span>▾</span>
            </div>
          </div>

          <div
            style={{
              background: PURPLE_SOFT,
              borderRadius: 16,
              padding: 16,
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: PURPLE,
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              i
            </div>
            <div style={{ fontSize: 14, color: PURPLE, fontWeight: 600, lineHeight: 1.45 }}>
              Upon deployment, a specialized onboarding link will be dispatched to the provided email identity.
            </div>
          </div>
        </div>
      </div>

      {/* Cursor approaching Activate button */}
      {cursorAppear > 0 && (
        <div
          style={{
            position: "absolute",
            left: cursorX,
            top: cursorY,
            opacity: cursorAppear,
            pointerEvents: "none",
            transform: "translate(-4px, -4px)",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path d="M3 2 L3 18 L7 14 L10 21 L13 19 L10 12 L18 12 Z" fill="#0F1B19" stroke="#fff" strokeWidth="1.2" />
          </svg>
        </div>
      )}

      {/* Success toast */}
      {successAppear > 0 && (
        <div
          style={{
            position: "absolute",
            top: 36,
            right: 56,
            background: TEXT_DARK,
            color: "#fff",
            padding: "14px 22px",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            fontWeight: 600,
            boxShadow: "0 18px 40px -18px rgba(15,27,25,0.5)",
            opacity: successAppear,
            transform: `translateY(${interpolate(successAppear, [0, 1], [-20, 0])}px)`,
          }}
        >
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: GREEN,
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✓
          </span>
          Sara is now live · onboarding link sent
        </div>
      )}
    </AbsoluteFill>
  );
};
