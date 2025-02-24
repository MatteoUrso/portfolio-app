"use client";

import { Badge } from "./badge";
import { Heading } from "./heading";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { NavLink, navLinks } from "@/constants/nav-links";
import { socials } from "@/constants/socials";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, usePathname } from "@/i18n/routing";

export function Sidebar() {
  const isMobile = useIsMobile();
  const t = useTranslations("Sidebar");

  const [open, setOpen] = useState<boolean>(!isMobile);

  // Is the sidebar is was been closed on mobile, and the device width changes to desktop, open the sidebar
  useEffect(() => {
    if (open || isMobile) return;

    setOpen(true);
  }, [open, isMobile]);

  const handleClick = () => {
    if (!isMobile) return;

    setOpen(!open);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="fixed left-0 z-[100] flex h-screen max-w-[14rem] flex-col justify-between bg-neutral-100 px-4 py-10 lg:relative lg:w-fit"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation onClick={handleClick} />
            </div>
            <div onClick={handleClick}>
              <Badge href="/resume" text={t("readResume")} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SidebarTrigger onClick={handleClick} />
    </>
  );
}

function SidebarTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="fixed bottom-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 backdrop-blur-sm lg:hidden"
      onClick={onClick}
    >
      <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
    </button>
  );
}

function SidebarHeader() {
  const t = useTranslations("Sidebar");
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/avatar.jpg"
        alt="Avatar"
        height="40"
        width="40"
        className="flex-shrink-0 rounded-full object-cover object-top"
      />
      <div className="flex flex-col text-sm">
        <p className="font-bold text-primary">{"Matteo Urso"}</p>
        <p className="font-light text-secondary">{t("job")}</p>
      </div>
    </div>
  );
}

function Navigation({ onClick }: { onClick: () => void }) {
  const pathname = usePathname();
  const t = useTranslations("Sidebar.Links");

  return (
    <div className="relative z-[100] my-10 flex flex-col space-y-1">
      {navLinks.map((link: NavLink) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={cn(
              "flex items-center space-x-2 rounded-md px-2 py-2 text-sm text-secondary transition duration-200 hover:text-primary",
              {
                "bg-white text-primary shadow-lg": isActive,
              }
            )}
          >
            <link.icon
              className={cn("h-4 w-4 flex-shrink-0", {
                "text-sky-500": isActive,
              })}
            />
            <span>{t(link.translationKey)}</span>
          </Link>
        );
      })}
      <Heading as="p" className="px-2 pt-10 text-sm md:text-sm lg:text-sm">
        {"Socials"}
      </Heading>
      {socials.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex items-center space-x-2 rounded-md px-2 py-2 text-sm text-secondary transition duration-200 hover:text-primary"
          )}
        >
          <link.icon className={cn("h-4 w-4 flex-shrink-0")} />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
