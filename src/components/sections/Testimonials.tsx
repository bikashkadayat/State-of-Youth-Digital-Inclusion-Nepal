import { Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { testimonials } from "@/data/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Voices of Change"
          title="Stories from our community"
          subtitle="The impact of digital inclusion, in the words of the people we serve."
        />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.quote}>
              <figure className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
                <Quote className="h-9 w-9 text-primary/20" />
                <blockquote className="mt-4 flex-1 text-slate-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
