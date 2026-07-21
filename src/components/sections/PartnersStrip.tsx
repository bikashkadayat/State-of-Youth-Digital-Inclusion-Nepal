import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { partners } from "@/data/partners";

export function PartnersStrip() {
  return (
    <section className="border-y border-slate-100 bg-white py-14">
      <Container>
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Working alongside partners & networks
          </p>
        </Reveal>
        <div className="mt-9 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-light px-4 py-5 text-center transition-colors hover:border-primary/20"
              title={p.name}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-xs font-bold text-primary shadow-soft">
                {p.abbr}
              </span>
              <span className="text-sm font-semibold text-slate-600">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
