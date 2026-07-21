import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { MissionIntro } from "@/components/sections/MissionIntro";
import { ApproachGrid } from "@/components/sections/ApproachGrid";
import { Timeline } from "@/components/sections/Timeline";
import { StatsBand } from "@/components/sections/StatsBand";
import { CTASection } from "@/components/sections/CTASection";
import { stats } from "@/data/stats";

export const metadata: Metadata = {
  title: "About the Chapter",
  description:
    "Learn about State of Youth — Digital Inclusion Nepal: our mission, vision, approach and journey closing the digital divide for youth and underserved communities.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A youth movement closing Nepal&apos;s{" "}
            <span className="text-gradient">digital divide</span>
          </>
        }
        description="State of Youth — Digital Inclusion Nepal is a community-driven chapter helping young people and underserved communities gain digital skills, confidence and opportunity."
      />
      <div className="py-6">
        <StatsBand data={stats} variant="plain" />
      </div>
      <MissionIntro />
      <ApproachGrid />
      <Timeline />
      <CTASection />
    </>
  );
}
