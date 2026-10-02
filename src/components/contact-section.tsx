import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionIntro } from "@/components/section-intro";
import { cn } from "@/lib/utils";

const INTENTS = [
  { id: "role", label: "A role" },
  { id: "project", label: "A project" },
  { id: "hello", label: "A hello" },
] as const;

type Intent = (typeof INTENTS)[number]["id"];

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validate(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {};
  if (name.trim().length < 2) errors.name = "A name helps me reply.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "That email does not look quite right.";
  }
  if (message.trim().length < 16) errors.message = "A little more context, if you would.";
  return errors;
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState<Intent>("role");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(name, email, message);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const payload = {
      name: name.trim(),
      email: email.trim(),
      intent,
      message: message.trim(),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("atta-notes") || "[]") as unknown[];
      localStorage.setItem("atta-notes", JSON.stringify([...prev, payload]));
    } catch {
      /* ignore quota / private mode */
    }
    setSent(payload.name);
  }

  return (
    <section id="contact" className="scroll-mt-20 px-gutter py-section">
      <SectionIntro index="05" title="A note" aside={SITE.availability} />

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="max-w-sm text-lg leading-snug text-fg/85">
            Roles, project HSE, and introductions. I read everything — replies within a few days.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="kicker text-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-1 text-lg text-fg transition-opacity duration-150 hover:opacity-70"
                >
                  {SITE.email}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker text-muted">Phone</dt>
              <dd className="mt-1">
                <a
                  href={SITE.phoneHref}
                  className="text-lg text-fg transition-opacity duration-150 hover:opacity-70"
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker text-muted">Where</dt>
              <dd className="mt-1 text-lg">{SITE.location}</dd>
            </div>
            <div>
              <dt className="kicker text-muted">Now</dt>
              <dd className="mt-1 text-lg">{SITE.availability}</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="border border-border bg-surface px-6 py-10 md:px-10">
              <p className="kicker text-muted">Sent</p>
              <h3 className="mt-3 font-serif text-4xl tracking-tight text-fg">
                Thank you, {sent}.
              </h3>
              <p className="mt-4 max-w-md text-base text-muted">
                Your note is with me. I will write back within a few days.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-8"
                onClick={() => {
                  setSent(null);
                  setName("");
                  setEmail("");
                  setMessage("");
                  setIntent("role");
                  setErrors({});
                }}
              >
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="name-error" className="text-sm text-primary">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="text-sm text-primary">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <fieldset className="space-y-3">
                <legend className="kicker text-muted">Regarding</legend>
                <div className="flex flex-wrap gap-2">
                  {INTENTS.map((item) => {
                    const active = intent === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setIntent(item.id)}
                        aria-pressed={active}
                        className={cn(
                          "h-11 px-4 text-sm font-medium transition-[background-color,color,border-color] duration-150",
                          active
                            ? "bg-fg text-bg"
                            : "border border-border text-fg hover:border-fg",
                        )}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="text-sm text-primary">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" variant="ink" size="lg" className="min-w-40">
                Send note
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
