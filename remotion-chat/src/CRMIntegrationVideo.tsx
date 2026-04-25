import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", { weights: ["400", "500", "600", "700", "800"], subsets: ["latin"] });

const BG = "#FFFFFF";
const PANEL = "#FFFFFF";
const BORDER = "#E5EFE7";
const TEXT_DARK = "#0F1B19";
const MUTED = "#6B7975";
const GREEN = "#10B981";
const GREEN_DARK = "#0E9E6E";
const GREEN_SOFT = "#E6F7EF";
const GREEN_FAINT = "#F1FAF4";
const RED = "#EF4444";
const RED_SOFT = "#FEE2E2";

const FPS = 30;

type Integration = {
  name: string;
  desc: string;
};

const INTEGRATIONS: Integration[] = [
  { name: "Google Calendar + Meet", desc: "Schedule events, generate Meet links, manage bookings." },
  { name: "HubSpot CRM", desc: "Sync contacts and activities with HubSpot." },
  { name: "Salesforce CRM", desc: "Connect Salesforce for enterprise lead and account sync." },
  { name: "Mailchimp", desc: "Sync audiences and campaign events." },
  { name: "Zendesk", desc: "Send tickets from inbox interactions." },
  { name: "Shopify", desc: "Connect orders and customer activity." },
];

// Timing
const INTRO = 18;
const TAB_FRAME = 24;
const CONNECT_DELAY = 22; // delay between each integration toggle
const CONNECT_DURATION = 18;

const connectStartFrame = (i: number) => INTRO + 30 + i * CONNECT_DELAY;
const connectEndFrame = (i: number) => connectStartFrame(i) + CONNECT_DURATION;

const LAST_CONNECT = connectEndFrame(INTEGRATIONS.length - 1);
const HOLD = 60;
export const CRM_DURATION = LAST_CONNECT + HOLD;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export const CRMIntegrationVideo = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const introT = Math.min(1, frame / INTRO);

  return (
    <AbsoluteFill style={{ background: BG, fontFamily, color: TEXT_DARK }}>
      {/* Card frame */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: 56,
          opacity: easeOut(introT),
          transform: `translateY(${(1 - easeOut(introT)) * 16}px)`,
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: GREEN, letterSpacing: -0.5 }}>
            CRM Integration
          </div>
          <div style={{ fontSize: 20, color: MUTED, marginTop: 8 }}>
            View connected providers, configure booking preferences, and manage integrations in one place.
          </div>
        </div>

        {/* Outer container */}
        <div
          style={{
            border: `1px solid ${BORDER}`,
            borderRadius: 24,
            padding: 28,
            background: "#FCFEFD",
          }}
        >
          {/* Tabs */}
          <div style={{ display: "flex", gap: 12, marginBottom: 22, flexWrap: "wrap" }}>
            {["All Integrations", "BI & Analytics", "Communication Channels", "CRM", "E-Commerce", "Marketing Automation"].map(
              (t, i) => (
                <div
                  key={t}
                  style={{
                    padding: "12px 22px",
                    borderRadius: 999,
                    background: i === 0 ? GREEN : GREEN_FAINT,
                    color: i === 0 ? "#fff" : GREEN_DARK,
                    fontWeight: 600,
                    fontSize: 16,
                    border: i === 0 ? "none" : `1px solid ${BORDER}`,
                  }}
                >
                  {t}
                </div>
              )
            )}
          </div>

          {/* Search + actions row */}
          <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
            <div
              style={{
                flex: 1,
                background: "#fff",
                border: `1px solid ${BORDER}`,
                borderRadius: 999,
                padding: "14px 22px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: MUTED,
                fontSize: 16,
              }}
            >
              <div style={{ width: 18, height: 18, borderRadius: 999, border: `2px solid ${MUTED}` }} />
              Search integrations…
            </div>
            <div
              style={{
                background: "#fff",
                border: `1px solid ${BORDER}`,
                borderRadius: 999,
                padding: "14px 22px",
                color: TEXT_DARK,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              ⟳ Refresh
            </div>
            <div
              style={{
                background: GREEN,
                color: "#fff",
                borderRadius: 999,
                padding: "14px 24px",
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Submit a request
            </div>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 18,
            }}
          >
            {INTEGRATIONS.map((it, i) => {
              const start = connectStartFrame(i);
              const end = connectEndFrame(i);
              const t = interpolate(frame, [start, end], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
              const connected = t > 0.5;
              const togglePos = easeOut(t);

              const cardScale = spring({
                frame: frame - start,
                fps: FPS,
                config: { damping: 14, stiffness: 120 },
                from: 1,
                to: 1.02,
              });
              const cardScaleBack = spring({
                frame: frame - end,
                fps: FPS,
                config: { damping: 14, stiffness: 120 },
                from: 1.02,
                to: 1,
              });
              const scale = frame >= end ? cardScaleBack : (frame >= start ? cardScale : 1);

              return (
                <div
                  key={it.name}
                  style={{
                    background: PANEL,
                    border: `1.5px solid ${connected ? GREEN : BORDER}`,
                    borderRadius: 18,
                    padding: 18,
                    transform: `scale(${scale})`,
                    transition: "all 0.2s",
                    boxShadow: connected ? `0 4px 18px ${GREEN}22` : "none",
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: GREEN_FAINT,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 20,
                          color: GREEN_DARK,
                        }}
                      >
                        🔌
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 17, color: TEXT_DARK, lineHeight: 1.2 }}>
                          {it.name}
                        </div>
                        <div style={{ fontSize: 12.5, color: MUTED, marginTop: 6, lineHeight: 1.35 }}>
                          {it.desc}
                        </div>
                      </div>
                    </div>

                    {/* Toggle */}
                    <div
                      style={{
                        width: 46,
                        height: 26,
                        borderRadius: 999,
                        background: connected ? GREEN : "#E5E7EB",
                        position: "relative",
                        transition: "background 0.2s",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 3,
                          left: 3 + togglePos * 20,
                          width: 20,
                          height: 20,
                          borderRadius: 999,
                          background: "#fff",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Status row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
                    <div
                      style={{
                        padding: "6px 12px",
                        borderRadius: 999,
                        background: connected ? GREEN_SOFT : "#F1F2F4",
                        color: connected ? GREEN_DARK : "#6B7280",
                        fontSize: 12,
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 999,
                          background: connected ? GREEN : "#9CA3AF",
                        }}
                      />
                      {connected ? "Connected" : "Not connected"}
                    </div>
                    <div style={{ fontSize: 12, color: MUTED }}>
                      {connected ? "1 account · synced" : "0 account(s) · 0 calendars"}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                    <div
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "10px 0",
                        borderRadius: 999,
                        background: connected ? GREEN_SOFT : GREEN,
                        color: connected ? GREEN_DARK : "#fff",
                        fontWeight: 600,
                        fontSize: 13,
                      }}
                    >
                      {connected ? "Integrated ✓" : "Integrate"}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "10px 0",
                        borderRadius: 999,
                        background: "#fff",
                        border: `1px solid ${BORDER}`,
                        color: TEXT_DARK,
                        fontWeight: 600,
                        fontSize: 13,
                      }}
                    >
                      Manage
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success toast at end */}
      {frame > LAST_CONNECT - 6 && (
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 36,
            background: "#0F1B19",
            color: "#fff",
            padding: "14px 22px",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontWeight: 600,
            fontSize: 15,
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            opacity: Math.min(1, (frame - (LAST_CONNECT - 6)) / 10),
            transform: `translateY(${(1 - Math.min(1, (frame - (LAST_CONNECT - 6)) / 10)) * 12}px)`,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 999,
              background: GREEN,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 14,
            }}
          >
            ✓
          </div>
          All CRMs connected & syncing
        </div>
      )}
    </AbsoluteFill>
  );
};
