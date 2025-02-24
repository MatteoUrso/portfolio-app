import { JSX } from "react";

import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren & {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

// TODO: Add CalSans font

export function Heading({ children, className, as: Tag = "h1" }: Props) {
  return (
    <Tag
      className={cn(
        // CalSans.className,
        "from-primary to-secondary bg-gradient-to-r bg-clip-text text-base font-semibold text-transparent md:text-xl lg:text-4xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
