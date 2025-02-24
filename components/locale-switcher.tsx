"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { routing, usePathname, useRouter } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const handleClick = (locale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale }
      );
    });
  };

  return (
    <ol>
      {routing.locales.map((cur) => (
        <li key={cur} value={cur}>
          <button onClick={() => handleClick(cur)} disabled={isPending}>
            {locale === cur ? <strong>{cur}</strong> : cur}
          </button>
        </li>
      ))}
    </ol>
  );
}
