import { GraduationCap, Briefcase, Cpu, Scale } from "lucide-react";
import type { SDG } from "@/types";

export const sdgs: SDG[] = [
  {
    number: 4,
    title: "Quality Education",
    short: "Inclusive, equitable digital learning for all.",
    description:
      "We expand access to quality digital education, ensuring youth, students and teachers gain the foundational skills to learn and lead in a connected world.",
    color: "var(--color-sdg4)",
    icon: GraduationCap,
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    short: "Digital skills that unlock opportunity.",
    description:
      "By equipping young people with market-relevant digital and online-income skills, we open pathways to decent work, freelancing and entrepreneurship.",
    color: "var(--color-sdg8)",
    icon: Briefcase,
  },
  {
    number: 9,
    title: "Industry, Innovation & Infrastructure",
    short: "Building capacity for an inclusive digital economy.",
    description:
      "Our innovation labs and technology training nurture the local talent and creativity that strengthen Nepal's digital infrastructure and innovation ecosystem.",
    color: "var(--color-sdg9)",
    icon: Cpu,
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    short: "Closing the digital divide, everywhere.",
    description:
      "We reach women, rural communities and digital beginners first — reducing inequalities in access, skills and opportunity across every corner of Nepal.",
    color: "var(--color-sdg10)",
    icon: Scale,
  },
];
