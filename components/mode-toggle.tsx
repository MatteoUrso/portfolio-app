"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setTheme("light")} className="text-foreground">
        {"Light"}
      </button>
      <button onClick={() => setTheme("dark")} className="text-foreground">
        {"Dark"}
      </button>
    </div>
  );
}
