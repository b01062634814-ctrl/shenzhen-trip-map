const hosts: Record<string, string> = {
  "v4/map/styles": "https://webapi.amap.com",
  "v3/vectormap": "https://fmap01.amap.com",
};

export async function GET(
  request: Request,
  context: { params: Promise<{ path: string[] }> },
) {
  const jsCode = process.env.AMAP_JS_CODE;
  if (!jsCode) {
    return Response.json({ error: "AMap proxy is not configured." }, { status: 503 });
  }

  const { path } = await context.params;
  const route = path.join("/");
  const source = new URL(request.url);
  const host = Object.entries(hosts).find(([prefix]) => route.startsWith(prefix))?.[1] ??
    "https://restapi.amap.com";
  const target = new URL("/" + route, host);
  source.searchParams.forEach((value, key) => target.searchParams.append(key, value));
  target.searchParams.set("jscode", jsCode);

  const response = await fetch(target, {
    headers: { Accept: request.headers.get("Accept") ?? "*/*" },
  });
  const headers = new Headers(response.headers);
  headers.delete("set-cookie");
  headers.set("Cache-Control", "public, max-age=60");
  return new Response(response.body, { status: response.status, headers });
}
