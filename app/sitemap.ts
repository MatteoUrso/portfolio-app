import { MetadataRoute } from "next";

import { navLinks } from "@/constants/nav-links";
import { getPathname, routing } from "@/i18n/routing";

// Adapt this as necessary
const host = "https://acme.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Adapt this as necessary
  return navLinks.map((link) => getEntries(link.href)).flat();
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
