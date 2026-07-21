import { Compass, Users2, Wrench, Rocket } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { approach } from "@/data/timeline";

const icons = [Compass, Users2, Wrench, Rocket];

export function ApproachGrid() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="How we create lasting change"
          subtitle="Four principles guide every workshop, camp and outreach we run."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={a.title}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 text-primary">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {a.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
