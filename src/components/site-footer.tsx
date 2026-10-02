import { NAV, SITE } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-fg text-bg">
      <div className="px-gutter py-section">
        <p className="kicker text-bg/55">{SITE.availability}</p>
        <p className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
          Let’s keep people going home.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex h-12 items-center border-b border-bg/40 pb-1 text-sm font-medium text-bg transition-opacity duration-150 hover:opacity-70"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex h-12 items-center border-b border-bg/40 pb-1 text-sm font-medium text-bg transition-opacity duration-150 hover:opacity-70"
          >
            {SITE.phone}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-bg/15 pt-10 md:grid-cols-4">
          <div>
            <p className="kicker text-bg/45">Index</p>
            <ul className="mt-3 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-bg/85 hover:text-bg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker text-bg/45">Practice</p>
            <ul className="mt-3 space-y-2 text-sm text-bg/85">
              <li>Governance</li>
              <li>High-rise</li>
              <li>Digital</li>
              <li>Systems</li>
            </ul>
          </div>
          <div>
            <p className="kicker text-bg/45">Studio</p>
            <ul className="mt-3 space-y-2 text-sm text-bg/85">
              <li>{SITE.location}</li>
              <li>{SITE.role}</li>
              <li>
                <a href={SITE.cvHref} download className="hover:text-bg">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker text-bg/45">Colophon</p>
            <p className="mt-3 text-sm leading-relaxed text-bg/85">
              Set in Fraunces and Figtree. Built as a record of site work, not a brochure.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-bg/15 pt-6 text-sm text-bg/55 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}
          </p>
          <a href="#top" className="hover:text-bg">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
