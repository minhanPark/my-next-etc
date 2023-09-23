import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(request: Request) {
  const body = await request.json();
  const { url } = body;
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  console.log($.html());
  return NextResponse.json({
    ok: true,
  });
}
