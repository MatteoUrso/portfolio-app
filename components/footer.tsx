"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  // Get the current year from the browser on the client side
  const currentYear = new Date().getFullYear();

  return (
    <div className="justify-center border-t border-neutral-100 p-4 text-center text-neutral-500">
      <span className="text-xs font-semibold">
        {t("buildBy", { year: currentYear })}
      </span>
    </div>
  );
}
