import { ArrowDown } from "lucide-react";
import { SITE } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col justify-end px-gutter pb-10 pt-28 md:pb-14"
    >
      <div className="flex items-end justify-between gap-6">
        <p className="rise-in rise-in-1 kicker text-muted">{SITE.role}</p>
        <p className="rise-in rise-in-2 hidden text-right text-sm text-muted sm:block">
          {SITE.location}
          <span className="mx-2 text-border">/</span>
          Since 2022
        </p>
      </div>

      <h1 className="rise-in rise-in-2 mt-6 font-serif text-display text-fg">
        {SITE.firstName}
        <br />
        {SITE.lastName}
      </h1>

      <div className="rise-in rise-in-3 mt-8 flex max-w-3xl flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
        <p className="max-w-lg text-lg leading-snug text-fg/85 md:text-xl">{SITE.tagline}</p>
        <a
          href="#work"
          className="inline-flex h-12 shrink-0 items-center gap-2 self-start border-b border-fg pb-1 text-sm font-medium text-fg transition-opacity duration-150 hover:opacity-70"
        >
          Selected work
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </div>

      <div className="rise-in rise-in-4 mt-16 flex items-center justify-between gap-4 border-t border-border pt-5 text-sm text-muted">
        <p>Zero LTIs · 24+ months</p>
        <p className="hidden sm:block">ISO 45001 · PTW · RAMS · RCA</p>
      </div>
    </section>
  );
}
