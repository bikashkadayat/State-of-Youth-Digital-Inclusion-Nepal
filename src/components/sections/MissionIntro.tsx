import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { img } from "@/data/images";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Help young people and underserved communities gain digital skills, confidence and opportunities through literacy, training and inclusive innovation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "A Nepal where every young person — in every village and valley — can participate fully and safely in the digital world.",
  },
  {
    icon: HeartHandshake,
    title: "Our Approach",
    text: "Community-led, mother-tongue and practical — meeting learners where they are and training local facilitators to sustain the impact.",
  },
];

export function MissionIntro() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5">
            <Image
              src={img.aboutGroup}
              alt="Group of students from a digital literacy program in Nepal"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-6 rounded-2xl bg-gradient-to-br from-primary to-secondary p-5 text-white shadow-hover">
            <p className="text-3xl font-extrabold leading-none">4</p>
            <p className="text-xs font-medium text-white/80">SDGs supported</p>
          </div>
        </Reveal>

        <div>
          <Badge>Who We Are</Badge>
          <h2 className="h-section mt-4 font-bold text-ink">
            A youth movement for{" "}
            <span className="text-gradient">digital inclusion</span> in Nepal
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            State of Youth — Digital Inclusion Nepal works with youth, students,
            teachers, women and remote communities to close the digital divide.
            Through training, workshops and inclusive innovation programs, we
            turn digital access into real opportunity.
          </p>

          <div className="mt-8 space-y-5">
            {pillars.map((p) => (
              <Reveal
                key={p.title}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary">
                  <p.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
