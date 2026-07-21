import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-light pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-slate-500"
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-primary">{eyebrow}</span>
          </nav>
          <h1 className="h-display mt-4 max-w-3xl font-extrabold text-ink">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
