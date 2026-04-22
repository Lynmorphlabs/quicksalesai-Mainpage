import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", { weights: ["400","500","600","700"], subsets: ["latin"] });

export const LS_DURATION = 300;
const BG = "#FCF4A8";
const GREEN = "#16A34A";
const DARK = "#0F172A";
const MUTED = "#64748B";
const BORDER = "#E2E8F0";

const typed = (text: string, frame: number, start: number, cps = 1.2) => {
  const e = Math.max(0, frame - start);
  return text.slice(0, Math.min(text.length, Math.floor(e * cps)));
};

// Scene timings
const SCENE2_END = 170; // form scene
const TRANSITION = 12;

export const LeadScraperVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const showResults = frame >= SCENE2_END;

  // Card entry
  const cardSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const cardY = interpolate(cardSpring, [0, 1], [30, 0]);
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

  // Slide transition
  const slide = spring({
    frame: frame - SCENE2_END,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  const formX = interpolate(slide, [0, 1], [0, -1700]);
  const resultsX = interpolate(slide, [0, 1], [1700, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: BG, fontFamily, padding: 60, justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "relative", width: 1480, height: 1080, opacity: cardOpacity, transform: `translateY(${cardY}px)` }}>
        {/* Form (Scene 2) */}
        <div style={{ position: "absolute", inset: 0, transform: `translateX(${formX}px)` }}>
          <FormCard frame={frame} />
        </div>
        {/* Results (Scene 3) */}
        {showResults && (
          <div style={{ position: "absolute", inset: 0, transform: `translateX(${resultsX}px)` }}>
            <ResultsCard frame={frame - SCENE2_END} />
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

const FormCard: React.FC<{ frame: number }> = ({ frame }) => {
  const queryStart = 20;
  const queryText = "preschool singapore phone";
  const queryTyped = typed(queryText, frame, queryStart);

  const cityStart = 70;
  const cityText = "Jurong West";
  const cityTyped = typed(cityText, frame, cityStart);

  const step2Done = frame > 130;

  return (
    <div style={{ width: "100%", height: "100%", background: "#FFF", borderRadius: 32, border: `1px solid ${BORDER}`, padding: 48, boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 8 }}>
        <div style={{ width: 70, height: 70, borderRadius: 18, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, color: DARK }}>←</div>
        <div>
          <div style={{ fontSize: 64, fontWeight: 800, color: GREEN, letterSpacing: -1.5, lineHeight: 1.05 }}>New Lead Scrape</div>
          <div style={{ fontSize: 28, color: MUTED, marginTop: 6 }}>Configure your target market and run a lead scraping job.</div>
        </div>
      </div>

      {/* Stepper */}
      <div style={{ marginTop: 24, padding: 28, border: `1px solid ${BORDER}`, borderRadius: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}>
          <Step n={1} active done />
          <div style={{ width: 70, height: 3, background: GREEN }} />
          <Step n={2} active={!step2Done} done={step2Done} />
          <div style={{ width: 70, height: 3, background: step2Done ? GREEN : "#E2E8F0" }} />
          <Step n={3} active={step2Done} />
        </div>

        <div style={{ marginTop: 24, fontSize: 38, fontWeight: 700, color: DARK }}>Target configuration</div>

        <Field label="Business query" value={queryTyped} caret={frame >= queryStart && queryTyped.length < queryText.length} placeholder="e.g. dentist hanoi email, spa ho chi minh phone number" />

        <Field label="Country filter" value="Singapore" select hint="Results will be focused on the selected country." />

        <Field label="City" value={cityTyped} caret={frame >= cityStart && cityTyped.length < cityText.length} placeholder="e.g. Ho Chi Minh City, Da Nang, Hanoi" hint="Used for Apify location and to filter rows when coordinates are missing." />

        {/* Run button appears */}
        {frame > 130 && (
          <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
            <div style={{ background: GREEN, color: "#FFF", padding: "22px 48px", borderRadius: 16, fontWeight: 700, fontSize: 30, boxShadow: "0 8px 20px rgba(22,163,74,0.3)" }}>
              Run Scrape →
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Step: React.FC<{ n: number; active?: boolean; done?: boolean }> = ({ n, active, done }) => (
  <div style={{
    width: 64, height: 64, borderRadius: "50%",
    background: done || active ? GREEN : "#E2E8F0",
    color: done || active ? "#FFF" : "#64748B",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 700, fontSize: 28,
  }}>
    {done ? "✓" : n}
  </div>
);

const Field: React.FC<{ label: string; value: string; caret?: boolean; placeholder?: string; hint?: string; select?: boolean }> = ({ label, value, caret, placeholder, hint, select }) => (
  <div style={{ marginTop: 18 }}>
    <div style={{ fontSize: 24, fontWeight: 600, color: DARK, marginBottom: 10 }}>{label}</div>
    <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", fontSize: 28, color: value ? DARK : "#94A3B8", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span>{value || placeholder}{caret && <span style={{ display: "inline-block", width: 3, height: 30, background: DARK, marginLeft: 2, verticalAlign: "middle" }} />}</span>
      {select && <span style={{ color: MUTED, fontSize: 28 }}>⌄</span>}
    </div>
    {hint && <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 8 }}>{hint}</div>}
  </div>
);

const ResultsCard: React.FC<{ frame: number }> = ({ frame }) => {
  const rows = [
    { name: "Little Footprints Preschool @ Jurong West 976", phone: "+65 6817 1393", email: "—" },
    { name: "7oaks Preschool Jurong St 91", phone: "+65 6817 6270", email: "hello@7oa…" },
    { name: "Star Learners @ Jurong West | Preschool & Childcare", phone: "+65 6250 0173", email: "—" },
    { name: "MindChamps PreSchool @ Jurong West", phone: "+65 6790 8878", email: "—" },
  ];

  // Stat counter animation
  const count = Math.min(100, Math.floor(interpolate(frame, [10, 60], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })));

  return (
    <div style={{ width: "100%", height: "100%", background: "#FFF", borderRadius: 32, border: `1px solid ${BORDER}`, padding: 44, boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ width: 70, height: 70, borderRadius: 18, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>←</div>
          <div>
            <div style={{ fontSize: 60, fontWeight: 800, color: GREEN, letterSpacing: -1.5, lineHeight: 1.05 }}>Lead Scrape Detail</div>
            <div style={{ fontSize: 26, color: MUTED, marginTop: 6 }}>Review run status and collected leads.</div>
          </div>
        </div>
        <div style={{ background: DARK, color: "#FFF", padding: "20px 36px", borderRadius: 14, fontSize: 26, fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}>
          ↓ Export CSV
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginTop: 24 }}>
        <Stat label="STATUS" value="succeeded" green />
        <Stat label="QUERY" value="Pre School" />
        <Stat label="RESULT COUNT" value={String(count)} />
        <Stat label="COUNTRY" value="Singapore" />
        <Stat label="ROWS AFTER DEDUPE" value={String(count)} />
      </div>

      {/* Table */}
      <div style={{ marginTop: 24, fontSize: 30, fontWeight: 700, color: DARK }}>
        Rows with phone (transfer eligible)
      </div>
      <div style={{ marginTop: 14, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 260px 260px", padding: "20px 24px", background: "#F8FAFC", fontSize: 22, color: MUTED, fontWeight: 700 }}>
          <div>☐</div><div>Business</div><div>Phone</div><div>Email</div>
        </div>
        {rows.map((r, i) => {
          const rowDelay = 30 + i * 14;
          const o = interpolate(frame, [rowDelay, rowDelay + 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const ty = interpolate(frame, [rowDelay, rowDelay + 18], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 1fr 260px 260px", padding: "26px 24px", borderTop: `1px solid ${BORDER}`, fontSize: 24, color: DARK, alignItems: "center", opacity: o, transform: `translateY(${ty}px)` }}>
              <div style={{ color: MUTED }}>☐</div>
              <div style={{ fontWeight: 600 }}>{r.name}</div>
              <div>{r.phone}</div>
              <div style={{ color: r.email === "—" ? MUTED : DARK }}>{r.email}</div>
            </div>
          );
        })}
      </div>

      {/* Transfer button appears */}
      {frame > 110 && (
        <div style={{ marginTop: 22, display: "flex", justifyContent: "flex-end" }}>
          <div style={{ background: GREEN, color: "#FFF", padding: "20px 40px", borderRadius: 14, fontWeight: 700, fontSize: 28, boxShadow: "0 8px 20px rgba(22,163,74,0.3)" }}>
            ⇄ Transfer to Contacts
          </div>
        </div>
      )}
    </div>
  );
};

const Stat: React.FC<{ label: string; value: string; green?: boolean }> = ({ label, value, green }) => (
  <div style={{ border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px 22px" }}>
    <div style={{ fontSize: 17, color: MUTED, fontWeight: 700, letterSpacing: 1.2 }}>{label}</div>
    <div style={{ fontSize: 32, fontWeight: 800, color: green ? GREEN : DARK, marginTop: 8 }}>{value}</div>
  </div>
);
