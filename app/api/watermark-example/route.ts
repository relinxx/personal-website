import { evaluateExample } from "@/lib/watermark-example";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: "Choose one of the supplied examples." }, { status: 400 }); }
  if (!body || typeof body !== "object" || !("id" in body) || typeof body.id !== "string") {
    return Response.json({ error: "An example identifier is required." }, { status: 400 });
  }
  const result = evaluateExample(body.id);
  if (!result) return Response.json({ error: "Unknown example." }, { status: 404 });
  return Response.json({ ...result, execution: "Deterministic public reconstruction; synthetic records; no client connection or live model." }, { headers: { "Cache-Control": "no-store" } });
}
