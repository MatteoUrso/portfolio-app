import React from "react";

import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"p">;

export function Paragraph({ className, children, ...props }: Props) {
  return (
    <p
      className={cn(
        "text-secondary text-sm font-normal lg:text-base",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
