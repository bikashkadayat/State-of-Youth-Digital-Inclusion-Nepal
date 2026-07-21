import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProgramGrid } from "@/components/sections/ProgramGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our digital inclusion programs: literacy workshops, school outreach, rural technology training, youth innovation labs, women in digital skills and future internet awareness.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title={
          <>
            Programs that build{" "}
            <span className="text-gradient">digital confidence</span>
          </>
        }
        description="Practical, inclusive programs designed for youth, students, teachers, women and remote communities across Nepal. Tap any program to learn more."
      />
      <ProgramGrid showHeading={false} />
      <CTASection />
    </>
  );
}
