import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { sdgs } from "@/data/sdgs";

export function SDGGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Global Goals, Local Impact"
          title="Aligned with the UN Sustainable Development Goals"
          subtitle="Our work directly advances four of the United Nations' Sustainable Development Goals."
        />
        <Stagger
          className={`mt-14 grid gap-6 ${
            detailed ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {sdgs.map((s) => (
            <StaggerItem key={s.number}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                <span
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ backgroundColor: s.color }}
                />
                <div className="flex items-center gap-4">
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    <s.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: s.color }}
                    >
                      SDG {s.number}
                    </p>
                    <h3 className="font-heading text-lg font-bold leading-tight text-ink">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {detailed ? s.description : s.short}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
