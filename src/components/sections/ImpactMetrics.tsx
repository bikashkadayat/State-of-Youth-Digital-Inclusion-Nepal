import { Container } from "@/components/layout/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { impactMetrics } from "@/data/stats";

export function ImpactMetrics() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-600 to-secondary-600 py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary-100">
            Our Impact
          </p>
          <h2 className="h-section mt-3 font-bold text-white">
            Measurable change, one community at a time
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {impactMetrics.map((m) => (
            <StaggerItem key={m.label} className="text-center">
              <p className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
                <CountUp value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/80">
                {m.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
