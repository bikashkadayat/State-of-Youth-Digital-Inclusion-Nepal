import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { EventsList } from "@/components/sections/EventsList";
import { Gallery } from "@/components/sections/Gallery";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events from State of Youth — Digital Inclusion Nepal: training camps, workshops, outreach and digital inclusion campaigns.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title={
          <>
            Where <span className="text-gradient">digital inclusion</span>{" "}
            comes to life
          </>
        }
        description="Join our training camps, workshops and community sessions — or revisit the moments we've already shared across Nepal."
      />
      <EventsList />
      <Gallery limit={8} />
      <CTASection />
    </>
  );
}
