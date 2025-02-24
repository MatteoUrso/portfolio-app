import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"span">;

export function Highlight({ className, children, ...props }: Props) {
  return (
    <span className={cn("bg-neutral-100 px-1 py-0.5", className)} {...props}>
      {children}
    </span>
  );
}
