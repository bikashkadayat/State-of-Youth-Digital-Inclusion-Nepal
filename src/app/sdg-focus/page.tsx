import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { SDGGrid } from "@/components/sections/SDGGrid";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "SDG Focus",
  description:
    "How State of Youth — Digital Inclusion Nepal advances UN Sustainable Development Goals 4, 8, 9 and 10 through digital inclusion.",
};

export default function SDGPage() {
  return (
    <>
      <PageHeader
        eyebrow="SDG Focus"
        title={
          <>
            Advancing the{" "}
            <span className="text-gradient">Global Goals</span> in Nepal
          </>
        }
        description="Digital inclusion is a catalyst for sustainable development. Our work directly contributes to four United Nations Sustainable Development Goals."
      />
      <SDGGrid detailed />
      <ImpactMetrics />
      <CTASection />
    </>
  );
}
