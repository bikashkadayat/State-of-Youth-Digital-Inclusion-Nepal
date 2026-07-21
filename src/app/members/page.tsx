import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LeaderHighlight } from "@/components/sections/LeaderHighlight";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the people behind State of Youth — Digital Inclusion Nepal, led by chapter leader Bikash Kadayat, and the growing team driving digital inclusion.",
};

export default function MembersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Members"
        title={
          <>
            The people behind the{" "}
            <span className="text-gradient">movement</span>
          </>
        }
        description="Led by chapter leader Bikash Kadayat, our team of facilitators, mentors and volunteers brings digital confidence to communities across Nepal."
      />
      <LeaderHighlight />
      <TeamGrid />
      <CTASection />
    </>
  );
}
