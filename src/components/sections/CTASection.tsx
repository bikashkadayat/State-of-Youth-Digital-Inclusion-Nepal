import { ArrowRight, HandHeart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <HandHeart className="h-4 w-4 text-accent-100" />
              Get Involved
            </span>
            <h2 className="h-section mt-6 font-bold text-white">
              Be part of Nepal&apos;s digital inclusion movement
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Volunteer, partner or join the chapter — together we can bring
              digital confidence to every community.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" variant="white">
                Join the Chapter <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/programs"
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
