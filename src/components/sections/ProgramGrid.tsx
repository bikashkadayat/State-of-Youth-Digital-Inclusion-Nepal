"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "./ProgramCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { programs } from "@/data/programs";

export function ProgramGrid({
  limit,
  showHeading = true,
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const list = limit ? programs.slice(0, limit) : programs;
  return (
    <section className="bg-light py-20 lg:py-28">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="What We Do"
            title="Programs that build digital confidence"
            subtitle="Practical, inclusive programs designed for youth, women and underserved communities across Nepal."
          />
        )}
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <StaggerItem key={p.slug}>
              <ProgramCard program={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
