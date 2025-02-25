import { LocalizedParams } from "./_types/params";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<LocalizedParams>;
};

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const locale = (await params).locale;

  const t = await getTranslations({ locale, namespace: "HomePage.Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage() {
  return <main></main>;
}
