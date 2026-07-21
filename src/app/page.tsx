import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { MissionIntro } from "@/components/sections/MissionIntro";
import { ProgramGrid } from "@/components/sections/ProgramGrid";
import { SDGGrid } from "@/components/sections/SDGGrid";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { Testimonials } from "@/components/sections/Testimonials";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { Gallery } from "@/components/sections/Gallery";
import { CTASection } from "@/components/sections/CTASection";
import { stats } from "@/data/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand data={stats} />
      <MissionIntro />
      <PartnersStrip />
      <ProgramGrid limit={6} />
      <SDGGrid />
      <ImpactMetrics />
      <Testimonials />
      <Gallery limit={6} />
      <CTASection />
    </>
  );
}
