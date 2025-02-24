import { LocalizedParams } from "./_types/params";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<LocalizedParams>;
};

export async function generateMetadata({ params }: Readonly<Props>) {
  const locale = (await params).locale;

  const t = await getTranslations({ locale, namespace: "HomePage.Metadata" });

  return {
    title: t("title"),
  };
}

export default function HomePage() {
  return <div></div>;
}
