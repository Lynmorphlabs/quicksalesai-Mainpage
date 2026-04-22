import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", { weights: ["400","500","600","700","800"], subsets: ["latin"] });

export const BC_DURATION = 420;
const BG = "#F8EDD8";
const GREEN = "#16A34A";
const GREEN_SOFT = "#DCFCE7";
const DARK = "#0F172A";
const MUTED = "#64748B";
const BORDER = "#E2E8F0";

const typed = (text: string, frame: number, start: number, cps = 1.6) => {
  const e = Math.max(0, frame - start);
  return text.slice(0, Math.min(text.length, Math.floor(e * cps)));
};

// Scene timings
const S1_END = 130; // line scene
const S2_END = 280; // recipients

export const BroadcastVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const cardY = interpolate(cardSpring, [0, 1], [30, 0]);
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

  const slide1 = spring({ frame: frame - S1_END, fps, config: { damping: 20, stiffness: 100 } });
  const slide2 = spring({ frame: frame - S2_END, fps, config: { damping: 20, stiffness: 100 } });

  const x1 = interpolate(slide1, [0, 1], [0, -1700]);
  const x2 = interpolate(slide1, [0, 1], [1700, 0]) + interpolate(slide2, [0, 1], [0, -1700]);
  const x3 = interpolate(slide2, [0, 1], [1700, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: BG, fontFamily, padding: 60, justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "relative", width: 1480, height: 1080, opacity: cardOpacity, transform: `translateY(${cardY}px)` }}>
        <div style={{ position: "absolute", inset: 0, transform: `translateX(${x1}px)` }}>
          <Step1 frame={frame} />
        </div>
        {frame >= S1_END - 10 && (
          <div style={{ position: "absolute", inset: 0, transform: `translateX(${x2}px)` }}>
            <Step2 frame={frame - S1_END} />
          </div>
        )}
        {frame >= S2_END - 10 && (
          <div style={{ position: "absolute", inset: 0, transform: `translateX(${x3}px)` }}>
            <Step3 frame={frame - S2_END} />
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

const Header: React.FC = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
    <div style={{ width: 70, height: 70, borderRadius: 18, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>←</div>
    <div>
      <div style={{ fontSize: 64, fontWeight: 800, color: GREEN, letterSpacing: -1.5, lineHeight: 1.05 }}>Bulk Message</div>
      <div style={{ fontSize: 26, color: MUTED, marginTop: 6 }}>Send WhatsApp session messages to selected contacts (one line per batch)</div>
    </div>
  </div>
);

const Tabs: React.FC<{ active: 1 | 2 | 3 | 4 }> = ({ active }) => {
  const tabs = ["1. WhatsApp line", "2. Recipients", "3. Message", "4. Review"];
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {tabs.map((t, i) => {
        const isActive = i + 1 === active;
        return (
          <div key={t} style={{
            padding: "16px 28px",
            borderRadius: 999,
            background: isActive ? GREEN : GREEN_SOFT,
            color: isActive ? "#FFF" : GREEN,
            fontWeight: 700,
            fontSize: 24,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            {t} <span style={{ opacity: 0.7 }}>›</span>
          </div>
        );
      })}
    </div>
  );
};

const Footer: React.FC<{ leftLabel?: string; rightLabel?: string; rightActive?: boolean }> = ({ leftLabel = "Cancel", rightLabel = "Next", rightActive = true }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
    <div style={{ padding: "20px 36px", borderRadius: 14, border: `1px solid ${BORDER}`, fontSize: 26, fontWeight: 700, color: DARK }}>{leftLabel}</div>
    <div style={{ background: rightActive ? GREEN : "#94A3B8", color: "#FFF", padding: "22px 48px", borderRadius: 14, fontSize: 28, fontWeight: 800, boxShadow: rightActive ? "0 8px 20px rgba(22,163,74,0.3)" : "none" }}>{rightLabel}</div>
  </div>
);

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ width: "100%", height: "100%", background: "#FFF", borderRadius: 32, border: `1px solid ${BORDER}`, padding: 48, boxShadow: "0 10px 40px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 28 }}>
    {children}
  </div>
);

const Step1: React.FC<{ frame: number }> = ({ frame }) => {
  const selected = frame > 50;
  return (
    <Card>
      <Header />
      <Tabs active={1} />
      <div style={{ flex: 1, padding: 40, border: `1px solid ${BORDER}`, borderRadius: 20 }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: DARK, marginBottom: 24 }}>Choose sending line</div>
        <div style={{ border: `2px solid ${selected ? GREEN : BORDER}`, borderRadius: 16, padding: 28, transition: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 54, height: 54, borderRadius: 12, background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: 28, fontWeight: 800 }}>B</div>
            <div>
              <div style={{ fontSize: 30, fontWeight: 800, color: DARK }}>Baileys</div>
              <div style={{ fontSize: 20, color: MUTED, marginTop: 2 }}>+65 9123 4567 · Connected</div>
            </div>
            {selected && (
              <div style={{ marginLeft: "auto", width: 44, height: 44, borderRadius: "50%", background: GREEN, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800 }}>✓</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Card>
  );
};

const Step2: React.FC<{ frame: number }> = ({ frame }) => {
  const searchStart = 20;
  const searchText = "lead";
  const searchTyped = typed(searchText, frame, searchStart);

  const checkOrder = [0, 1, 2, 3, 4];
  const checks = checkOrder.map((i) => frame > 60 + i * 10);

  const rows = [
    "111425074806949",
    "114340971724950",
    "120363046726989989",
    "120363047519029361",
    "120363169975121665",
    "120363304138546080",
    "120363329731871770",
  ];

  return (
    <Card>
      <Header />
      <Tabs active={2} />
      <div style={{ flex: 1, padding: 36, border: `1px solid ${BORDER}`, borderRadius: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: DARK, marginBottom: 10 }}>Search</div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "18px 22px", fontSize: 24, color: "#94A3B8" }}>Name or phone</div>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: DARK, marginBottom: 10 }}>Tags</div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "18px 22px", fontSize: 24, color: "#94A3B8" }}>Filter by tags...</div>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: DARK, marginBottom: 10 }}>Status (optional)</div>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "16px 20px", fontSize: 22, color: searchTyped ? DARK : "#94A3B8", maxWidth: 480 }}>
            {searchTyped || "e.g. lead"}{frame >= searchStart && searchTyped.length < searchText.length && <span style={{ display: "inline-block", width: 3, height: 24, background: DARK, marginLeft: 2, verticalAlign: "middle" }} />}
          </div>
        </div>
        <div style={{ marginTop: 20, padding: "14px 22px", border: `1px solid ${BORDER}`, borderRadius: 999, display: "inline-block", fontSize: 20, fontWeight: 600, color: DARK }}>Use all matching filter (1340)</div>

        <div style={{ marginTop: 20, border: `2px solid ${GREEN}`, borderRadius: 18, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 1fr", padding: "18px 24px", background: "#F8FAFC", fontSize: 22, fontWeight: 800, color: DARK }}>
            <div></div><div>Name</div><div>Phone</div>
          </div>
          {rows.map((r, i) => {
            const checked = i < 5 && checks[i];
            return (
              <div key={r} style={{ display: "grid", gridTemplateColumns: "70px 1fr 1fr", padding: "16px 24px", borderTop: `1px solid ${BORDER}`, fontSize: 22, alignItems: "center", color: i < 5 ? DARK : MUTED }}>
                <div>
                  <div style={{ width: 30, height: 30, borderRadius: 6, background: checked ? GREEN : "transparent", border: `2px solid ${checked ? GREEN : "#CBD5E1"}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontWeight: 800 }}>{checked ? "✓" : ""}</div>
                </div>
                <div style={{ fontWeight: 600 }}>{r}</div>
                <div>{r}</div>
              </div>
            );
          })}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 24px", borderTop: `1px solid ${BORDER}`, fontSize: 20, color: MUTED }}>
            <div>Page 1 — Selected: {checks.filter(Boolean).length}</div>
            <div style={{ display: "flex", gap: 24 }}><span>Prev</span><span style={{ color: DARK, fontWeight: 700 }}>Next</span></div>
          </div>
        </div>
      </div>
      <Footer leftLabel="Back" />
    </Card>
  );
};

const Step3: React.FC<{ frame: number }> = ({ frame }) => {
  const msgStart = 25;
  const msgText = "Hi {{name}}! 🎉 Our biggest sale of the year starts today — 30% off everything. Reply YES to get your code.";
  const msgTyped = typed(msgText, frame, msgStart, 1.8);

  return (
    <Card>
      <Header />
      <Tabs active={3} />
      <div style={{ flex: 1, padding: 40, border: `1px solid ${BORDER}`, borderRadius: 20 }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: DARK, marginBottom: 18 }}>Message</div>
        <div style={{ border: `2px solid ${GREEN}`, borderRadius: 16, padding: "28px 30px", fontSize: 28, color: DARK, minHeight: 280, lineHeight: 1.4 }}>
          {msgTyped}{frame >= msgStart && msgTyped.length < msgText.length && <span style={{ display: "inline-block", width: 3, height: 30, background: DARK, marginLeft: 2, verticalAlign: "middle" }} />}
        </div>
        <div style={{ marginTop: 22, padding: "16px 28px", border: `1px solid ${BORDER}`, borderRadius: 14, display: "inline-flex", alignItems: "center", gap: 12, fontSize: 22, fontWeight: 700, color: DARK }}>
          🖼️ Add media from library
        </div>
      </div>
      <Footer leftLabel="Back" rightLabel="Send →" />
    </Card>
  );
};
