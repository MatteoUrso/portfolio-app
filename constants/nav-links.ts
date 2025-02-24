import {
  // IconArticle,
  IconBolt,
  IconBriefcase2,
  IconMail,
  IconMessage2,
} from "@tabler/icons-react";

export const navLinks = [
  {
    href: "/",
    translationKey: "home",
    icon: IconBolt,
  },
  {
    href: "/about",
    translationKey: "about",
    icon: IconMessage2,
  },
  {
    href: "/projects",
    translationKey: "projects",
    icon: IconBriefcase2,
  },
  // {
  //   href: "/blog",
  //   label: "Articles",
  //   icon: IconArticle,
  // },
  {
    href: "/contact",
    translationKey: "contact",
    icon: IconMail,
  },
];

export type NavLink = (typeof navLinks)[number];
