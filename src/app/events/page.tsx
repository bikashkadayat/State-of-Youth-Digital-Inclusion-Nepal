import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { EventsList } from "@/components/sections/EventsList";
import { Gallery } from "@/components/sections/Gallery";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Past activities from State of Youth — Digital Inclusion Nepal, including our Mental Health Awareness Program on youth wellbeing and healthy technology use.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Activities"
        title={
          <>
            The work behind our{" "}
            <span className="text-gradient">community impact</span>
          </>
        }
        description="A record of the programs and sessions our chapter has delivered to support youth wellbeing, learning and digital confidence across Nepal."
      />
      <EventsList />
      <Gallery limit={8} />
      <CTASection />
    </>
  );
}
