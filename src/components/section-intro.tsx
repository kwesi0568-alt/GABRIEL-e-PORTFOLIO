type SectionIntroProps = {
  index: string;
  title: string;
  aside?: string;
};

export function SectionIntro({ index, title, aside }: SectionIntroProps) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
      <div>
        <p className="kicker text-muted">{index}</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-fg md:text-5xl">{title}</h2>
      </div>
      {aside ? <p className="hidden text-sm text-muted sm:block">{aside}</p> : null}
    </div>
  );
}
