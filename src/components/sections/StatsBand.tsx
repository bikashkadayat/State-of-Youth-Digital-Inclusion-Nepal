import { Container } from "@/components/layout/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Stat } from "@/types";

export function StatsBand({
  data,
  variant = "solid",
}: {
  data: Stat[];
  variant?: "solid" | "plain";
}) {
  const solid = variant === "solid";
  return (
    <section className={solid ? "relative -mt-10 pb-4" : "py-10"}>
      <Container>
        <Stagger
          className={
            solid
              ? "grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-slate-100 shadow-card lg:grid-cols-4"
              : "grid grid-cols-2 gap-6 lg:grid-cols-4"
          }
        >
          {data.map((s) => (
            <StaggerItem
              key={s.label}
              className={
                solid
                  ? "bg-white p-7 text-center sm:p-9"
                  : "rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-soft"
              }
            >
              <p className="font-heading text-4xl font-extrabold text-gradient sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
