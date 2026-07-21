import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { timeline } from "@/data/timeline";

export function Timeline() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Journey"
          title="A timeline of activities"
          subtitle="From a founding idea to a growing movement for digital inclusion."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <span
            className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2"
            aria-hidden
          />
          <div className="space-y-10">
            {timeline.map((entry, i) => (
              <Reveal
                key={entry.title}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* dot */}
                <span
                  className="absolute left-4 top-1.5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-light sm:left-1/2"
                  aria-hidden
                />
                <div className="sm:w-1/2" />
                <div
                  className={`ml-10 sm:ml-0 sm:w-1/2 ${
                    i % 2 === 1 ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                  }`}
                >
                  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary-600">
                      {entry.period}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-ink">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
