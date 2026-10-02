import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-250",
          scrolled || open
            ? "border-b border-border bg-bg"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="flex h-16 items-center justify-between px-gutter md:h-20">
          <a
            href="#top"
            className="font-serif text-lg tracking-tight text-fg md:text-xl"
            onClick={() => setOpen(false)}
          >
            {SITE.monogram}
            <span className="sr-only"> {SITE.name}</span>
          </a>

          <nav className="site-nav-desktop" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-fg/80 transition-opacity duration-150 hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="site-menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <nav className="site-nav-mobile" data-open={open ? "true" : "false"} aria-label="Mobile">
        <ul className="space-y-4">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-serif text-4xl tracking-tight text-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-muted">{SITE.location}</p>
      </nav>
    </>
  );
}
