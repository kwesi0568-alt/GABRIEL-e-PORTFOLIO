import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full resize-y border-0 border-b border-border bg-transparent px-0 py-2 text-base text-fg placeholder:text-muted focus-visible:border-fg focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
}
