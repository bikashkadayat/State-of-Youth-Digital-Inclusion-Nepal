import { UserPlus } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { teamRoles } from "@/data/members";
import { cn } from "@/lib/utils";

const accent = {
  primary: "from-primary to-secondary",
  secondary: "from-secondary to-accent",
  accent: "from-accent to-primary",
} as const;

export function TeamGrid() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the movement"
          subtitle="A growing team of facilitators, mentors and volunteers driving digital inclusion across Nepal."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((m) => (
            <StaggerItem key={m.role}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                <span
                  className={cn(
                    "grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br text-xl font-extrabold text-white shadow-soft",
                    accent[m.accent],
                  )}
                >
                  {m.initials}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-ink">
                  {m.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {m.focus}
                </p>
              </div>
            </StaggerItem>
          ))}

          {/* Join CTA card */}
          <StaggerItem>
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-primary/25 bg-primary-50/40 p-8 text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white text-primary shadow-soft">
                <UserPlus className="h-9 w-9" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-ink">
                This could be you
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We&apos;re growing our team of volunteers and facilitators.
              </p>
              <Button href="/contact" size="sm" className="mt-5">
                Join the Chapter
              </Button>
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
