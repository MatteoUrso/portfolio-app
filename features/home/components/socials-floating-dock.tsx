import { socials } from "../constants/socials";

import { FloatingDock } from "@/components/ui/floating-dock";

export function SocialsFloatingDock() {
  return <FloatingDock items={socials} />;
}
