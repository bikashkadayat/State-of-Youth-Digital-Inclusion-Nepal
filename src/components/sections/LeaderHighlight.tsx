import Image from "next/image";
import { Mail, Quote, BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Reveal } from "@/components/motion/Reveal";
import { leader } from "@/data/members";

export function LeaderHighlight() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Photo */}
            <div className="relative min-h-[360px] bg-gradient-to-br from-primary to-secondary lg:min-h-full">
              {leader.image ? (
                <Image
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              ) : (
                <div className="grid h-full place-items-center text-white/70">
                  Photo
                </div>
              )}
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-primary shadow-soft backdrop-blur">
                <BadgeCheck className="h-4 w-4 text-accent" />
                Chapter Leader
              </span>
            </div>

            {/* Bio */}
            <div className="p-8 sm:p-12">
              <Badge>Leadership</Badge>
              <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink">
                {leader.name}
              </h2>
              <p className="mt-1 font-semibold text-secondary-600">
                {leader.role}
              </p>

              {leader.focusAreas && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {leader.focusAreas.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-slate-200 bg-light px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <Quote className="h-8 w-8 shrink-0 text-primary/20" />
                <p className="leading-relaxed text-slate-600">{leader.bio}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {leader.email && (
                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-600"
                  >
                    <Mail className="h-4 w-4" /> Email {leader.name.split(" ")[0]}
                  </a>
                )}
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary/15 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary-50"
                  >
                    <SocialIcon name="Linkedin" className="h-4 w-4" /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
