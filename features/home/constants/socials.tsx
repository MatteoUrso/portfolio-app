import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const clasNsName = "h-full w-full text-neutral-500 dark:text-neutral-300";

export const socials = [
  {
    href: "https://x.com/MatteoUrso2002",
    title: "X",
    icon: <IconBrandX className={clasNsName} />,
  },
  {
    href: "https://www.linkedin.com/in/matteo-urso/",
    title: "LinkedIn",
    icon: <IconBrandLinkedin className={clasNsName} />,
  },
  {
    href: "https://github.com/MatteoUrso",
    title: "GitHub",
    icon: <IconBrandGithub className={clasNsName} />,
  },
];
