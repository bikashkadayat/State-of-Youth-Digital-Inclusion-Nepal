import { MapPin, Calendar, Check, Tag } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { activities } from "@/data/events";

export function EventsList() {
  const featured = activities.find((a) => a.featured) ?? activities[0];
  const rest = activities.filter((a) => a.id !== featured.id);
  const Icon = featured.icon;

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Past Activities"
          title="Programs we've delivered with our community"
          subtitle="A look at the initiatives our chapter has led to support youth wellbeing, learning and digital confidence."
        />

        {/* Featured activity — image-free gradient + iconography card */}
        <Reveal className="mx-auto mt-14 max-w-5xl">
          <article className="group grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-hover lg:grid-cols-[0.9fr_1.1fr]">
            {/* Visual panel */}
            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-600 to-secondary-600 p-10">
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-12 right-0 h-44 w-44 rounded-full bg-accent/25 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:22px_22px]" />
              <div className="relative flex flex-col items-center text-center">
                <span className="grid h-24 w-24 place-items-center rounded-3xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-11 w-11" />
                </span>
                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20">
                  <Tag className="h-3.5 w-3.5" />
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Content panel */}
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" />
                  {featured.dateLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" />
                  {featured.location}
                </span>
              </div>

              <h3 className="mt-3 font-heading text-2xl font-bold text-ink">
                {featured.title}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                {featured.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        {rest.length > 0 && (
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2">
            {rest.map((a) => {
              const AIcon = a.icon;
              return (
                <Reveal key={a.id}>
                  <article className="flex h-full gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary">
                      <AIcon className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary-600">
                        {a.category}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-bold text-ink">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {a.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
