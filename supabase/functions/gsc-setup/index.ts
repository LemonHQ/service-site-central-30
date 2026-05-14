// One-off helper to drive Google Search Console verification + sitemap submission via the Lovable connector gateway.
// Actions: "token" -> get META verification token; "verify" -> verify ownership; "add_site" -> add site; "submit_sitemap" -> submit sitemap.

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const GSC = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!LOVABLE_API_KEY) return json({ error: "LOVABLE_API_KEY missing" }, 500);
  if (!GSC) return json({ error: "GOOGLE_SEARCH_CONSOLE_API_KEY missing" }, 500);

  const { action, site } = await req.json().catch(() => ({}));
  const identifier = site || "https://service-site-central-30.lovable.app/";
  const headers = {
    "Authorization": `Bearer ${LOVABLE_API_KEY}`,
    "X-Connection-Api-Key": GSC,
    "Content-Type": "application/json",
  };

  try {
    if (action === "token") {
      const r = await fetch(`${GATEWAY}/siteVerification/v1/token`, {
        method: "POST", headers,
        body: JSON.stringify({ site: { identifier, type: "SITE" }, verificationMethod: "META" }),
      });
      return json({ status: r.status, body: await r.text() });
    }
    if (action === "verify") {
      const r = await fetch(`${GATEWAY}/siteVerification/v1/webResource?verificationMethod=META`, {
        method: "POST", headers,
        body: JSON.stringify({ site: { identifier, type: "SITE" } }),
      });
      return json({ status: r.status, body: await r.text() });
    }
    if (action === "add_site") {
      const r = await fetch(`${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(identifier)}`, {
        method: "PUT", headers,
      });
      return json({ status: r.status, body: await r.text() });
    }
    if (action === "submit_sitemap") {
      const sitemap = `${identifier.replace(/\/$/, "")}/sitemap.xml`;
      const r = await fetch(
        `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(identifier)}/sitemaps/${encodeURIComponent(sitemap)}`,
        { method: "PUT", headers },
      );
      return json({ status: r.status, body: await r.text() });
    }
    return json({ error: "unknown action" }, 400);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(b: unknown, status = 200) {
  return new Response(JSON.stringify(b), {
    status, headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
