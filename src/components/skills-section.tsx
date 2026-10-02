import { SKILLS } from "@/data/portfolio";
import { SectionIntro } from "@/components/section-intro";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 px-gutter py-section">
      <SectionIntro index="03" title="Capabilities" aside="Eight disciplines" />

      <ol className="mt-4">
        {SKILLS.map((skill) => (
          <li
            key={skill.name}
            className="grid grid-cols-1 gap-2 border-b border-border py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6"
          >
            <span className="kicker text-muted sm:col-span-1">{skill.index}</span>
            <h3 className="font-serif text-3xl tracking-tight text-fg sm:col-span-4 md:text-4xl">
              {skill.name}
            </h3>
            <p className="text-base leading-relaxed text-muted sm:col-span-7">{skill.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
