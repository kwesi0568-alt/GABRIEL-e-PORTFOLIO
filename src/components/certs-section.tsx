import { CREDENTIALS } from "@/data/portfolio";
import { SectionIntro } from "@/components/section-intro";

export function CertsSection() {
  return (
    <section id="credentials" className="scroll-mt-20 px-gutter py-section">
      <SectionIntro index="04" title="Credentials" aside="Does not expire" />

      <ol className="mt-4">
        {CREDENTIALS.map((item, i) => (
          <li
            key={item.title}
            className="grid grid-cols-1 gap-2 border-b border-border py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6"
          >
            <span className="kicker text-muted sm:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="sm:col-span-8">
              <h3 className="font-serif text-2xl tracking-tight text-fg md:text-3xl">{item.title}</h3>
              <p className="mt-1 text-base text-muted">{item.issuer}</p>
            </div>
            <p className="text-sm text-muted sm:col-span-3 sm:text-right">{item.year}</p>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted">
        Education in progress: Bachelor of Science in Psychology, O.P. Jindal Global University,
        India — expected 2029.
      </p>
    </section>
  );
}
