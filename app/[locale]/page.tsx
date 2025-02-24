/* eslint-disable react/jsx-no-literals */
import { LocalizedParams } from "./_types/params";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Heading } from "@/components/heading";
import { Highlight } from "@/components/highlight";
import { Paragraph } from "@/components/paragraph";

import { TechStack } from "@/features/home/components/tech-stack";

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

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-20 md:px-10">
      <span className="text-4xl">{"👋"}</span>
      <Heading className="font-black">Hello there! I&apos;m John</Heading>
      <Paragraph className="mt-4 max-w-xl">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="mt-4 max-w-xl">
        I&apos;m a senior software engineer with{" "}
        <Highlight>7 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      {/* <section className="mt-20">
        <Heading
          as="h2"
          className="mb-4 text-lg font-black md:text-lg lg:text-lg"
        >
          What I&apos;ve been working on
        </Heading>
      </section> */}

      <section className="mt-20">
        <Heading
          as="h2"
          className="mb-4 text-lg font-black md:text-lg lg:text-lg"
        >
          Tech Stack
        </Heading>
        <TechStack />
      </section>
    </main>
  );
}
