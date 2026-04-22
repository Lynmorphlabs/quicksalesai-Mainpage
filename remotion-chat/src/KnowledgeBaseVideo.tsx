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

// Cream background like the AI Knowledge Base card
const BG = "#F8EDD8";
const PANEL = "#FFFFFF";
const BORDER = "#E5E9E7";
const GREEN = "#10B981";
const GREEN_DARK = "#0E9E6E";
const GREEN_SOFT = "#E6F7EF";
const TEXT_DARK = "#0F1B19";
const MUTED = "#7B8784";
const SUBTLE = "#9CA8A4";

const ITEMS = [
  { label: "Text Messages", sub: "Quick text snippets", icon: "doc" },
  { label: "Images", sub: "Photo attachments", icon: "img" },
  { label: "Documents", sub: "PDF, Word, sheets...", icon: "doc2", active: true },
  { label: "Videos", sub: "Video clips", icon: "video" },
  { label: "Stickers", sub: "Animated & static", icon: "smile" },
  { label: "Form Flow", sub: "Multi-step interactive flows", icon: "flow" },
  { label: "Sequences", sub: "Scheduled messages", icon: "bolt" },
  { label: "Chatbot", sub: "AI-powered automated replies", icon: "bot" },
];

const FPS = 30;
// Drag animation: pickup -> drag to dropzone -> drop -> appear in list -> reset
const PICKUP_START = 20;
const PICKUP_DUR = 18;
const DRAG_START = PICKUP_START + PICKUP_DUR;
const DRAG_DUR = 60;
const DROP_FRAME = DRAG_START + DRAG_DUR;
const SETTLE_DUR = 18;
const HOLD = 90;
export const KB_DURATION = DROP_FRAME + SETTLE_DUR + HOLD;

// Source position of doc (e.g. coming from outside)
const SRC_X = 1080; // right side, off-canvas-ish
const SRC_Y = 900;
// Destination: center of drop zone
const DST_X = 980;
const DST_Y = 540;

export const KnowledgeBaseVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pickup spring (scale up)
  const pickup = spring({
    frame: frame - PICKUP_START,
    fps,
    config: { damping: 18, stiffness: 200 },
  });

  // Drag progress with eased motion
  const dragProg = interpolate(
    frame,
    [DRAG_START, DROP_FRAME],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const dragEased = interpolate(
    spring({ frame: frame - DRAG_START, fps, config: { damping: 24, stiffness: 90 } }),
    [0, 1],
    [0, 1]
  );
  const t = Math.max(dragProg, 0) > 0 ? dragEased : 0;

  // Position of dragging doc
  const docX = SRC_X + (DST_X - SRC_X) * t;
  const docY = SRC_Y + (DST_Y - SRC_Y) * t - Math.sin(t * Math.PI) * 30; // slight arc

  // Settle (shrink + fade)
  const settle = interpolate(frame, [DROP_FRAME, DROP_FRAME + SETTLE_DUR], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dragScale = 0.9 + pickup * 0.15 - settle * 0.4;
  const dragOpacity = 1 - settle;

  // Dropzone highlight when doc hovers near it
  const nearDrop = t > 0.6 && settle < 1;
  const dropHighlight = nearDrop ? Math.min(1, (t - 0.6) / 0.4) : settle > 0 ? 1 - settle : 0;

  // Document appears in dropzone after settle
  const showDropped = frame > DROP_FRAME + SETTLE_DUR * 0.4;
  const droppedSpring = spring({
    frame: frame - (DROP_FRAME + SETTLE_DUR * 0.4),
    fps,
    config: { damping: 18, stiffness: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        fontFamily,
        padding: 60,
      }}
    >
      <div
        style={{
          background: PANEL,
          width: "100%",
          height: "100%",
          borderRadius: 36,
          boxShadow: "0 20px 50px rgba(20,40,30,0.06)",
          display: "flex",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: 480,
            borderRight: `1px solid ${BORDER}`,
            padding: "44px 24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 32 }}>
            <div
              style={{
                width: 92,
                height: 92,
                borderRadius: 22,
                background: GREEN_SOFT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1.5px solid ${GREEN}33`,
              }}
            >
              <DocIcon color={GREEN} size={46} />
            </div>
            <div style={{ marginTop: 18, fontSize: 32, fontWeight: 700, color: TEXT_DARK }}>
              Reply Materials
            </div>
            <div style={{ marginTop: 6, fontSize: 20, color: MUTED }}>
              Manage your quick-reply content
            </div>
          </div>

          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: SUBTLE,
              letterSpacing: 2,
              padding: "0 14px",
              marginBottom: 12,
            }}
          >
            CONTENT TYPES
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {ITEMS.map((it) => (
              <div
                key={it.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: it.active ? GREEN_SOFT : "transparent",
                  border: it.active ? `1px solid ${GREEN}33` : "1px solid transparent",
                  position: "relative",
                }}
              >
                {it.active && (
                  <div
                    style={{
                      position: "absolute",
                      right: -2,
                      top: 12,
                      bottom: 12,
                      width: 4,
                      borderRadius: 2,
                      background: GREEN,
                    }}
                  />
                )}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: it.active ? "#FFFFFF" : "#F1F4F3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SidebarIcon name={it.icon} color={it.active ? GREEN : "#7B8784"} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: it.active ? GREEN : TEXT_DARK,
                    }}
                  >
                    {it.label}
                  </span>
                  <span style={{ fontSize: 16, color: MUTED, marginTop: 2 }}>
                    {it.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main panel */}
        <div style={{ flex: 1, padding: "44px 56px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 40, fontWeight: 700, color: GREEN }}>Documents</div>
              <div style={{ fontSize: 22, color: MUTED, marginTop: 6 }}>PDF, Word, sheets...</div>
            </div>
            <button
              style={{
                background: GREEN,
                color: "#FFFFFF",
                border: "none",
                fontSize: 22,
                fontWeight: 600,
                padding: "16px 26px",
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily,
                boxShadow: `0 8px 20px ${GREEN}33`,
              }}
            >
              <PlusIcon /> Add Documents
            </button>
          </div>

          {/* Search */}
          <div
            style={{
              marginTop: 30,
              border: `1.5px solid ${GREEN}55`,
              borderRadius: 22,
              padding: "20px 26px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 22,
              color: SUBTLE,
            }}
          >
            <SearchIcon />
            <span>Search...</span>
          </div>

          {/* Empty state / drop zone */}
          <div
            style={{
              marginTop: 50,
              border: `2.5px dashed ${dropHighlight > 0 ? GREEN : "#E5E9E7"}`,
              background: dropHighlight > 0 ? `${GREEN}0E` : "transparent",
              borderRadius: 28,
              padding: "70px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 22,
              transition: "none",
            }}
          >
            <div
              style={{
                width: 110,
                height: 110,
                borderRadius: 24,
                background: GREEN_SOFT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DocIcon color={GREEN} size={52} />
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: TEXT_DARK }}>
              {showDropped ? "Document added" : "No documents yet"}
            </div>
            <div style={{ fontSize: 20, color: MUTED, textAlign: "center", maxWidth: 560 }}>
              Add your first documents so agents can quickly reply without typing from scratch.
            </div>

            {showDropped && (
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "#FFFFFF",
                  border: `1.5px solid ${GREEN}55`,
                  padding: "18px 24px",
                  borderRadius: 18,
                  boxShadow: "0 6px 18px rgba(16,185,129,0.12)",
                  transform: `scale(${interpolate(droppedSpring, [0, 1], [0.8, 1])})`,
                  opacity: interpolate(droppedSpring, [0, 1], [0, 1]),
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 60,
                    borderRadius: 8,
                    background: GREEN_SOFT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    color: GREEN_DARK,
                  }}
                >
                  PDF
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 22, fontWeight: 600, color: TEXT_DARK }}>
                    Product-Catalog.pdf
                  </span>
                  <span style={{ fontSize: 16, color: MUTED, marginTop: 2 }}>2.4 MB · Just now</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating dragging document */}
        {dragOpacity > 0.02 && (
          <div
            style={{
              position: "absolute",
              left: docX,
              top: docY,
              transform: `translate(-50%, -50%) scale(${dragScale}) rotate(${interpolate(t, [0, 1], [-6, 2])}deg)`,
              opacity: dragOpacity,
              filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.18))",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 18,
                padding: "20px 26px",
                display: "flex",
                alignItems: "center",
                gap: 18,
                border: `1.5px solid ${GREEN}55`,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 64,
                  borderRadius: 8,
                  background: GREEN_SOFT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  color: GREEN_DARK,
                }}
              >
                PDF
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 24, fontWeight: 600, color: TEXT_DARK }}>
                  Product-Catalog.pdf
                </span>
                <span style={{ fontSize: 16, color: MUTED, marginTop: 2 }}>2.4 MB</span>
              </div>
            </div>
          </div>
        )}

        {/* Cursor following the dragging doc */}
        {dragOpacity > 0.02 && (
          <div
            style={{
              position: "absolute",
              left: docX + 50,
              top: docY - 30,
              opacity: dragOpacity,
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.18))",
              pointerEvents: "none",
            }}
          >
            <svg width="56" height="64" viewBox="0 0 32 36" fill="none">
              <path
                d="M12 4c0-1.1.9-2 2-2s2 .9 2 2v12h1V8c0-1.1.9-2 2-2s2 .9 2 2v8h1v-3c0-1.1.9-2 2-2s2 .9 2 2v3h1v-2c0-1.1.9-2 2-2s2 .9 2 2v8c0 5-4 9-9 9h-3c-3 0-5-1-7-3l-6-7c-.7-.8-.6-2 .2-2.6.9-.7 2.1-.5 2.8.4L12 22V4z"
                fill="#FFFFFF"
                stroke="#0E1F1B"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

const PlusIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const SearchIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

const DocIcon: React.FC<{ color: string; size: number }> = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="9" cy="14" r="1" fill={color} />
  </svg>
);

const SidebarIcon: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "doc":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="14" y2="17" />
        </svg>
      );
    case "img":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      );
    case "doc2":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    case "video":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3z" />
        </svg>
      );
    case "smile":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    case "flow":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M6 8v6a4 4 0 0 0 4 4h6" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "bot":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="12" rx="3" />
          <path d="M12 7V3" />
          <circle cx="9" cy="13" r="1" fill={color} />
          <circle cx="15" cy="13" r="1" fill={color} />
        </svg>
      );
    default:
      return null;
  }
};
