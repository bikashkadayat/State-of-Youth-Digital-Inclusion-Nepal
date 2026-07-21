import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free training materials, digital literacy resources, toolkits, downloads and external links from State of Youth — Digital Inclusion Nepal.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Free <span className="text-gradient">digital literacy</span>{" "}
            resources & toolkits
          </>
        }
        description="Open, practical materials for learners, facilitators and educators — download, share and put digital inclusion into practice."
      />
      <ResourcesSection />
      <CTASection />
    </>
  );
}
