import { ArrowUpRight } from "lucide-react";
import { SITE, STATS } from "@/data/portfolio";
import { SectionIntro } from "@/components/section-intro";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-gutter py-section">
      <SectionIntro index="02" title="About" aside={SITE.location} />

      <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <figure className="lg:col-span-5">
          <div className="aspect-[3/4] overflow-hidden bg-surface">
            <img
              src="/images/portrait.jpg"
              alt="Portrait of Gabriel Atta, HSE Engineer"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Gabriel Atta · HSE Engineer, Dubai.
          </figcaption>
        </figure>

        <div className="lg:col-span-7 lg:pt-4">
          <blockquote className="font-serif text-3xl leading-snug tracking-tight text-fg italic md:text-4xl">
            Zero lost-time injuries is a system, not a slogan.
          </blockquote>

          <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-fg/85 md:text-lg">
            <p>
              Gabriel Atta is an HSE Engineer working on high-rise, structural steel, and facade
              programmes in the UAE. Four years on live sites — from main-contractor residential
              towers in Dubai to a seven-project steel and facade portfolio in Ajman.
            </p>
            <p>
              The work is governance that holds: ISO 45001, permit-to-work, RAMS for more than 400
              people, and root-cause analysis that cut repeated incidents by 40%. Third-party audits
              have scored 98%. The lost-time record has been zero for more than two years.
            </p>
            <p>
              Ghanaian, based in Dubai, and reading for a BSc in Psychology at O.P. Jindal Global
              University (expected 2029) — human behaviour beside the engineering, because most
              incidents are decided before the tool is picked up.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="kicker text-muted">{stat.label}</dt>
                <dd className="mt-1 font-serif text-2xl tracking-tight">{stat.value}</dd>
                <dd className="text-sm text-muted">{stat.note}</dd>
              </div>
            ))}
          </dl>

          <a
            href={SITE.cvHref}
            download
            className="mt-10 inline-flex h-12 items-center gap-2 border-b border-fg pb-1 text-sm font-medium text-fg transition-opacity duration-150 hover:opacity-70"
          >
            Download CV
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
