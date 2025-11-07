import { NextResponse } from "next/server";

const locales = ["en", "id"];

export function proxy(request: Request) {
  const { pathname } = new URL(request.url);
  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}`));

  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
