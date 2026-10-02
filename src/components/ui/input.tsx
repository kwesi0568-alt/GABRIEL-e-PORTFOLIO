import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full border-0 border-b border-border bg-transparent px-0 py-2 text-base text-fg placeholder:text-muted focus-visible:border-fg focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
}
