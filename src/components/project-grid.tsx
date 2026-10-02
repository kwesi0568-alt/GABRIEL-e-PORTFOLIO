import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, PROJECTS, type Category } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/section-intro";

export function ProjectGrid() {
  const [filter, setFilter] = useState<Category>("All");

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="scroll-mt-20 px-gutter py-section">
      <SectionIntro index="01" title="Selected work" aside="2022 — 2026" />

      <div
        className="mt-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {CATEGORIES.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(cat)}
              className={cn(
                "h-11 min-w-11 px-4 text-sm font-medium transition-[background-color,color,border-color] duration-150",
                active
                  ? "bg-fg text-bg"
                  : "border border-border bg-transparent text-fg hover:border-fg",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
        {visible.map((project, i) => {
          const featured = i === 0;
          return (
            <li key={project.id} className={cn(featured && "md:col-span-2")}>
              <article className="project-card group">
                <a href="#contact" className="block focus-visible:outline-offset-4">
                  <div
                    className={cn(
                      "relative isolate overflow-hidden bg-surface",
                      featured ? "aspect-[4/5] sm:aspect-[16/9]" : "aspect-[4/3]",
                    )}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="relative z-0 h-full w-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-105 group-hover:brightness-90 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <div
                      className={cn(
                        "project-caption absolute inset-x-0 bottom-0 z-10 flex translate-y-2 flex-col justify-end p-5 text-bg opacity-0 transition-[opacity,transform] duration-250",
                        "max-md:hidden motion-reduce:transition-none",
                      )}
                    >
                      <div className="bg-overlay/90 p-5">
                        <p className="max-w-md text-base leading-snug md:text-lg">{project.summary}</p>
                        <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
                          Talk about this work
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <div className="min-w-0">
                      <p className="kicker text-muted">
                        {String(i + 1).padStart(2, "0")}
                        <span className="mx-2 text-border">/</span>
                        {project.category}
                        <span className="mx-2 text-border">/</span>
                        {project.year}
                      </p>
                      <h3 className="mt-1 font-serif text-3xl tracking-tight text-fg md:text-4xl">
                        {project.title}
                      </h3>
                    </div>
                    <p className="hidden shrink-0 text-sm text-muted sm:block">{project.role}</p>
                  </div>

                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted md:hidden">
                    {project.summary}
                  </p>
                </a>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
