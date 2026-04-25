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

const BG = "#F6F4EE";
const PANEL = "#FFFFFF";
const BORDER = "#E5E9E7";
const TEXT_DARK = "#0F1B19";
const MUTED = "#7B8784";
const GREEN = "#10B981";
const GREEN_SOFT = "#E6F7EF";
const ACCENT = "#7C5CFF";
const ACCENT_SOFT = "#EFEBFF";
const ORANGE = "#F59E0B";
const ORANGE_SOFT = "#FEF3C7";
const PINK = "#EC4899";
const PINK_SOFT = "#FCE7F3";
const BLUE = "#3B82F6";
const BLUE_SOFT = "#DBEAFE";
const LINE = "#CBD5D1";

const FPS = 30;
const NODE_W = 340;
const NODE_H = 84;

type NodeDef = {
  id: string;
  label: string;
  type: string;
  x: number;
  y: number;
  color: string;
  bg: string;
  glyph: string; // simple svg path / emoji-ish letter
};

// Layout: vertical with one diamond split + merge.
// Canvas is 1600x1200. Center column x=820 (node center).
const CX = 820;
const LEFT = CX - 240;
const RIGHT = CX + 240;
const ROW_H = 112;
const TOP = 40;

const NODES: NodeDef[] = [
  { id: "n1", label: "Receive File Upload", type: "Webhook",  x: CX,    y: TOP + 0 * ROW_H, color: PINK,   bg: PINK_SOFT,   glyph: "↧" },
  { id: "n2", label: "Generate Document ID", type: "Action",  x: CX,    y: TOP + 1 * ROW_H, color: GREEN,  bg: GREEN_SOFT,  glyph: "✓" },
  { id: "n3", label: "Is it an Excel file?",  type: "Branch",  x: CX,    y: TOP + 2 * ROW_H, color: ACCENT, bg: ACCENT_SOFT, glyph: "?" },
  { id: "n4a", label: "Parse Excel File",     type: "Action",  x: LEFT,  y: TOP + 3 * ROW_H, color: GREEN,  bg: GREEN_SOFT,  glyph: "▦" },
  { id: "n4b", label: "Extract Text",         type: "Action",  x: RIGHT, y: TOP + 3 * ROW_H, color: BLUE,   bg: BLUE_SOFT,   glyph: "T" },
  { id: "n5", label: "Merge Text Content",    type: "Action",  x: CX,    y: TOP + 4 * ROW_H, color: GREEN,  bg: GREEN_SOFT,  glyph: "⌄" },
  { id: "n6", label: "Chunk Document",        type: "Action",  x: CX,    y: TOP + 5 * ROW_H, color: ORANGE, bg: ORANGE_SOFT, glyph: "≣" },
  { id: "n7", label: "Loop Each Chunk",       type: "Loop",    x: CX,    y: TOP + 6 * ROW_H, color: ACCENT, bg: ACCENT_SOFT, glyph: "⟳" },
  { id: "n8", label: "Generate Embedding",    type: "Action",  x: CX,    y: TOP + 7 * ROW_H, color: GREEN,  bg: GREEN_SOFT,  glyph: "✦" },
  { id: "n9", label: "Insert to Database",    type: "Action",  x: CX,    y: TOP + 8 * ROW_H, color: PINK,   bg: PINK_SOFT,   glyph: "▤" },
];

type EdgeDef = { from: string; to: string };
const EDGES: EdgeDef[] = [
  { from: "n1", to: "n2" },
  { from: "n2", to: "n3" },
  { from: "n3", to: "n4a" },
  { from: "n3", to: "n4b" },
  { from: "n4a", to: "n5" },
  { from: "n4b", to: "n5" },
  { from: "n5", to: "n6" },
  { from: "n6", to: "n7" },
  { from: "n7", to: "n8" },
  { from: "n8", to: "n9" },
];

// Animation timing
const INTRO_END = 25;
const STEP = 22; // frames per node reveal
const FIRST_NODE = INTRO_END + 6;
// For each node i: appears at FIRST_NODE + i*STEP
// Edge to node i (the incoming edges) draws right before node appears
const HOLD = 90;
const TOTAL_NODES = NODES.length;
const LAST_NODE_FRAME = FIRST_NODE + (TOTAL_NODES - 1) * STEP;
export const WFB_DURATION = LAST_NODE_FRAME + 50 + HOLD;

const nodeIndex = (id: string) => NODES.findIndex((n) => n.id === id);

// Curve helper: vertical S-curve / straight diagonal
function buildPath(x1: number, y1: number, x2: number, y2: number) {
  const dy = y2 - y1;
  const cy1 = y1 + dy * 0.5;
  const cy2 = y2 - dy * 0.5;
  return `M ${x1} ${y1} C ${x1} ${cy1}, ${x2} ${cy2}, ${x2} ${y2}`;
}

const NodeCard: React.FC<{ node: NodeDef; appear: number }> = ({ node, appear }) => {
  // appear: 0..1
  const scale = interpolate(appear, [0, 1], [0.85, 1]);
  const opacity = interpolate(appear, [0, 0.5, 1], [0, 1, 1]);
  const ty = interpolate(appear, [0, 1], [10, 0]);
  return (
    <div
      style={{
        position: "absolute",
        left: node.x - NODE_W / 2,
        top: node.y - NODE_H / 2,
        width: NODE_W,
        height: NODE_H,
        background: PANEL,
        borderRadius: 16,
        border: `1px solid ${BORDER}`,
        boxShadow: `0 10px 30px -18px rgba(15,27,25,0.25), 0 2px 6px -2px rgba(15,27,25,0.06)`,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 18px",
        opacity,
        transform: `translateY(${ty}px) scale(${scale})`,
        transformOrigin: "center",
        fontFamily,
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          background: node.bg,
          color: node.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {node.glyph}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: TEXT_DARK, letterSpacing: -0.2 }}>{node.label}</div>
        <div style={{ fontSize: 13, color: MUTED, fontWeight: 500 }}>{node.type}</div>
      </div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: MUTED,
          background: "#F4F6F5",
          padding: "4px 8px",
          borderRadius: 6,
          letterSpacing: 0.4,
        }}
      >
        ⚙︎
      </div>
    </div>
  );
};

export const WorkflowBuilderVideo = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Per-node appear progress (spring)
  const nodeProgress = NODES.map((n, i) => {
    const start = FIRST_NODE + i * STEP;
    return spring({
      frame: frame - start,
      fps,
      config: { damping: 18, stiffness: 180 },
    });
  });

  // Per-edge progress (linear-ish, draws just before destination node)
  const edgeProgress = EDGES.map((e) => {
    const toIdx = nodeIndex(e.to);
    const start = FIRST_NODE + toIdx * STEP - 14;
    const end = start + 18;
    return interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  });

  // Header animations
  const headerOp = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const headerY = interpolate(frame, [0, 18], [-12, 0], { extrapolateRight: "clamp" });

  // AI prompt typing: "Build a RAG file ingestion workflow"
  const promptText = "Build a RAG file ingestion workflow";
  const typeStart = 4;
  const typeDur = INTRO_END - typeStart;
  const charsRevealed = Math.floor(
    interpolate(frame, [typeStart, typeStart + typeDur], [0, promptText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const shownPrompt = promptText.slice(0, charsRevealed);
  const cursorBlink = Math.floor(frame / 8) % 2 === 0;

  // Final "Workflow Ready" badge
  const readyAppear = spring({
    frame: frame - (LAST_NODE_FRAME + 20),
    fps,
    config: { damping: 16, stiffness: 180 },
  });

  return (
    <AbsoluteFill style={{ background: BG, fontFamily }}>
      {/* Subtle dot grid */}
      <svg
        width={width}
        height={height}
        style={{ position: "absolute", inset: 0, opacity: 0.5 }}
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#D9D5C8" />
          </pattern>
        </defs>
        <rect width={width} height={height} fill="url(#dots)" />
      </svg>

      {/* Top header bar with "AI Studio" prompt */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          right: 24,
          display: "flex",
          alignItems: "center",
          gap: 14,
          opacity: headerOp,
          transform: `translateY(${headerY}px)`,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: `linear-gradient(135deg, ${ACCENT} 0%, ${PINK} 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 22,
            fontWeight: 700,
            boxShadow: `0 8px 24px -10px ${ACCENT}80`,
          }}
        >
          ✦
        </div>
        <div
          style={{
            flex: 1,
            background: PANEL,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            boxShadow: `0 8px 24px -16px rgba(15,27,25,0.2)`,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: 1.2, textTransform: "uppercase" }}>
            AI Studio
          </span>
          <span style={{ width: 1, height: 18, background: BORDER }} />
          <span style={{ fontSize: 16, color: TEXT_DARK, fontWeight: 500 }}>
            {shownPrompt}
            <span style={{ opacity: cursorBlink ? 1 : 0, color: ACCENT, marginLeft: 1 }}>▍</span>
          </span>
        </div>
        <div
          style={{
            background: TEXT_DARK,
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Generate
        </div>
      </div>

      {/* Workflow canvas */}
      <div style={{ position: "absolute", inset: 0, marginTop: 90 }}>
        {/* Edges (SVG behind nodes) */}
        <svg
          width={width}
          height={height}
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={LINE} />
            </marker>
          </defs>
          {EDGES.map((e, i) => {
            const a = NODES.find((n) => n.id === e.from)!;
            const b = NODES.find((n) => n.id === e.to)!;
            const x1 = a.x;
            const y1 = a.y + NODE_H / 2;
            const x2 = b.x;
            const y2 = b.y - NODE_H / 2;
            const d = buildPath(x1, y1, x2, y2);
            const prog = edgeProgress[i];
            return (
              <g key={e.from + "-" + e.to}>
                {/* faded background path */}
                <path d={d} fill="none" stroke={LINE} strokeOpacity={0.18} strokeWidth={2} />
                {/* animated foreground */}
                <path
                  d={d}
                  fill="none"
                  stroke={LINE}
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1 - prog}
                />
              </g>
            );
          })}

          {/* Animated pulse traveling along each completed edge */}
          {EDGES.map((e, i) => {
            const prog = edgeProgress[i];
            if (prog < 1) return null;
            const a = NODES.find((n) => n.id === e.from)!;
            const b = NODES.find((n) => n.id === e.to)!;
            const local = (frame % 60) / 60;
            const px = a.x + (b.x - a.x) * local;
            const py = (a.y + NODE_H / 2) + ((b.y - NODE_H / 2) - (a.y + NODE_H / 2)) * local;
            return <circle key={"pulse-" + i} cx={px} cy={py} r={3} fill={GREEN} opacity={0.85} />;
          })}
        </svg>

        {/* Nodes */}
        {NODES.map((n, i) => (
          <NodeCard key={n.id} node={n} appear={nodeProgress[i]} />
        ))}
      </div>

      {/* Bottom "Workflow Ready" badge */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: readyAppear,
          transform: `translateY(${interpolate(readyAppear, [0, 1], [16, 0])}px) scale(${interpolate(readyAppear, [0, 1], [0.9, 1])})`,
        }}
      >
        <div
          style={{
            background: TEXT_DARK,
            color: "#fff",
            padding: "12px 22px",
            borderRadius: 999,
            fontSize: 15,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 10,
            boxShadow: `0 16px 40px -16px rgba(15,27,25,0.35)`,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: GREEN,
              boxShadow: `0 0 0 4px ${GREEN}33`,
            }}
          />
          Workflow generated · 10 nodes connected
        </div>
      </div>
    </AbsoluteFill>
  );
};
