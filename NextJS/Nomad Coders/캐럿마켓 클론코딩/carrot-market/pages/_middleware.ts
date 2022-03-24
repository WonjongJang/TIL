import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // 봇 막기
  if (req.ua?.isBot) {
    return new Response("Plz don't be a bot. Be human.", { status: 403 });
  }
  // console.log(req.cookies);
  // if (req.cookies.carrotsession) {
  //   return NextResponse.redirect("/enter");
  // }
  // console.log(req.url);

  // 로그인 처리
  if (!req.url.includes("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.carrotsession) {
      return NextResponse.redirect("/enter");
    }
  }

  // console.log(req.geo);  // 로컬에선 안되지만 위치 정보 알 수 있음
  // return NextResponse.json({ ok: true });
}
