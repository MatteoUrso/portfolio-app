import { LocalizedParams } from "./_types/params";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";

import { cn } from "@/lib/utils";

import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";

import "@/app/globals.css";

import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Enable static rendering
// https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<LocalizedParams>;
};

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const locale = (await params).locale;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  // https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Get the direction of the language
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body
        className={cn(
          inter.className,
          "flex h-screen overflow-hidden bg-gray-100 antialiased"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Sidebar />
          <div className="flex-1 overflow-y-auto bg-gray-100 lg:pl-2 lg:pt-2">
            <div className="min-h-screen flex-1 overflow-y-auto border border-transparent bg-white lg:rounded-tl-xl lg:border-neutral-200">
              {children}
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
