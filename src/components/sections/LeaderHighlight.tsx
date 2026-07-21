import Image from "next/image";
import { Mail, Quote } from "lucide-react";
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
            <div className="relative min-h-[340px] bg-gradient-to-br from-primary to-secondary lg:min-h-full">
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
            </div>

            {/* Bio */}
            <div className="p-8 sm:p-12">
              <Badge>Chapter Leader Highlight</Badge>
              <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink">
                {leader.name}
              </h2>
              <p className="mt-1 font-semibold text-secondary-600">
                {leader.role}
              </p>

              <div className="mt-6 flex gap-3">
                <Quote className="h-8 w-8 shrink-0 text-primary/20" />
                <p className="text-slate-600">{leader.bio}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${leader.socials?.[0]?.href.replace("mailto:", "") ?? ""}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
                >
                  <Mail className="h-4 w-4" /> Contact Bikash
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/15 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary-50"
                >
                  <SocialIcon name="Linkedin" className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
