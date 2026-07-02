import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

interface Payload {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  website?: string;
  country: string;
  type: string;
  audience: string;
  experience?: string;
  motivation?: string;
}

const esc = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      throw new Error("Email service is not configured");
    }

    const data = (await req.json()) as Payload;

    if (!data?.fullName || !data?.email || !data?.company) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const rows: Array<[string, string]> = [
      ["Name", data.fullName],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Company", data.company],
      ["Website", data.website || "—"],
      ["Country", data.country],
      ["Partner type", data.type],
      ["Audience", data.audience],
      ["Experience", data.experience || "—"],
      ["Why partner", data.motivation || "—"],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;color:#0f172a;max-width:640px;">
        <h2 style="margin:0 0 16px;">New Partner Application</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:180px;">${esc(k)}</td>
              <td style="padding:8px 12px;border:1px solid #e2e8f0;white-space:pre-wrap;">${esc(v)}</td>
            </tr>`,
            )
            .join("")}
        </table>
      </div>`;

    const res = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Quicksales Partners <onboarding@resend.dev>",
        to: ["zen@quicksales.ai"],
        reply_to: data.email,
        subject: `Partner Application — ${data.fullName} (${data.company})`,
        html,
      }),
    });

    const body = await res.text();
    if (!res.ok) {
      console.error("Resend error", res.status, body);
      return new Response(JSON.stringify({ error: "Failed to send email", details: body }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Confirmation email to the applicant
    const firstName = (data.fullName || "").split(" ")[0] || "there";
    const confirmHtml = `
      <div style="font-family:Arial,sans-serif;color:#0f172a;max-width:560px;line-height:1.6;">
        <h2 style="margin:0 0 16px;">Thanks for applying, ${esc(firstName)}!</h2>
        <p>We've received your application to the <strong>Quicksales.ai Partner Program</strong>. Our partnerships team typically responds within 2 business days.</p>
        <p style="margin:20px 0 8px;font-weight:600;">Summary of what you submitted:</p>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:160px;">${esc(k)}</td>
              <td style="padding:8px 12px;border:1px solid #e2e8f0;white-space:pre-wrap;">${esc(v)}</td>
            </tr>`,
            )
            .join("")}
        </table>
        <p style="margin-top:24px;">If you need to reach us sooner, just reply to this email or write to <a href="mailto:zen@quicksales.ai">zen@quicksales.ai</a>.</p>
        <p style="margin-top:24px;">— The Quicksales.ai Partnerships Team</p>
      </div>`;

    try {
      const confirmRes = await fetch(`${GATEWAY_URL}/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": RESEND_API_KEY,
        },
        body: JSON.stringify({
          from: "Quicksales.ai <onboarding@resend.dev>",
          to: [data.email],
          reply_to: "zen@quicksales.ai",
          subject: "Your Quicksales.ai partner application has been received",
          html: confirmHtml,
        }),
      });
      if (!confirmRes.ok) {
        console.error("Applicant confirmation email failed", confirmRes.status, await confirmRes.text());
      }
    } catch (e) {
      console.error("Applicant confirmation email threw", e);
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-partner-application error", err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});