export async function GET() {
  const ipRes = await fetch("https://api.ipify.org?format=json");
  const { ip } = await ipRes.json();

  const REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL;
  const start = Date.now();

  try {
    const res = await fetch(`${REST_URL}/pages?slug=tu-van`, {
      cache: "no-store",
    });

    return Response.json({
      egressIp: ip,
      status: res.status,
      durationMs: Date.now() - start,
      time: new Date().toISOString(),
    });
  } catch (error) {
    return Response.json({
      egressIp: ip,
      error: String(error),
      durationMs: Date.now() - start,
      time: new Date().toISOString(),
    });
  }
}
