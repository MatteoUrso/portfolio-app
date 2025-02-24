"use client";

import Error from "next/error";

import { routing } from "@/i18n/routing";

export default function NotFound() {
  return (
    <html lang={routing.defaultLocale} suppressHydrationWarning>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
