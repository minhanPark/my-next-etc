import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { unfurl } from "unfurl.js";

/**
 * rest client로 확인해보니
 * Accept: text/html, application/xhtml+xml
 * User-Agent: facebookexternalhit
 * 을 붙이면 네이버도 공유할 수 있게 메타태그가 존재한다.
 * 해당 부분을 사용해서 미리보기 형태로 만들 수 있을 것 같다.
 */

export async function POST(request: Request) {
  const body = await request.json();
  const { url } = body;
  // const { error, html, result, response } = await ogs({ url });
  // console.log({ error, result, response });
  const result = await unfurl(url);
  console.log(result.open_graph.images);

  // const res = await fetch(url);
  // const html = await res.text();
  // const $ = cheerio.load(html);
  //console.log($.html());
  //const meta = $("meta");
  // 타이틀, 설명, 사이트 url, 이미지
  //og:title, og:description, og:url, og:image
  //rel="shortcut icon"이걸 먼저 찾고, 혹시 없다면 link rel=icon
  // 디자인은 노션
  // 네이버 블로그, 네이버 카페, 유튜브, 티스토리
  //console.log(meta.length);
  return NextResponse.json({
    ok: true,
  });
}
