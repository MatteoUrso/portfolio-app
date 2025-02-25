import { LocalizedParams } from "./_types/params";

import { ModeToggle } from "@/components/mode-toggle";

// import type { Metadata } from "next";
// import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<LocalizedParams>;
};

// export async function generateMetadata({
//   params,
// }: Readonly<Props>): Promise<Metadata> {
//   const locale = (await params).locale;

//   const t = await getTranslations({ locale, namespace: "HomePage.Metadata" });

//   return {
//     title: t("title"),
//     description: t("description"),
//   };
// }

export default async function HomePage({ params }: Readonly<Props>) {
  const locale = (await params).locale;
  console.log(locale);

  return (
    <main>
      <div className="text-black-500 h-[56px] w-[160px] bg-orange-50">
        {"PROVA"}
      </div>
      <ModeToggle />
    </main>
  );
}
