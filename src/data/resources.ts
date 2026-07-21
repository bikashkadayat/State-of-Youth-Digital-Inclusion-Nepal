import {
  FileText,
  Download,
  BookOpen,
  Link2,
  ShieldCheck,
  Presentation,
} from "lucide-react";
import type { Resource } from "@/types";

export const resources: Resource[] = [
  {
    title: "Digital Literacy Starter Handbook",
    description:
      "A beginner-friendly guide covering devices, the internet and everyday digital tools.",
    type: "download",
    meta: "PDF · 2.4 MB",
    href: "#",
    icon: FileText,
    category: "Training Materials",
  },
  {
    title: "Facilitator's Workshop Toolkit",
    description:
      "Session plans, activities and facilitation tips for running community workshops.",
    type: "download",
    meta: "ZIP · 8.1 MB",
    href: "#",
    icon: Presentation,
    category: "Training Materials",
  },
  {
    title: "Online Safety & Privacy Guide",
    description:
      "Practical steps to stay safe online — passwords, scams, privacy and digital wellbeing.",
    type: "guide",
    meta: "Guide · Web",
    href: "#",
    icon: ShieldCheck,
    category: "Digital Literacy Resources",
  },
  {
    title: "Mother-Tongue Learning Cards",
    description:
      "Printable visual cards for teaching digital basics in local languages.",
    type: "download",
    meta: "PDF · 5.6 MB",
    href: "#",
    icon: Download,
    category: "Digital Literacy Resources",
  },
  {
    title: "Youth Innovation Lab Playbook",
    description:
      "Design-thinking framework and project templates for youth innovation sessions.",
    type: "guide",
    meta: "Guide · Web",
    href: "#",
    icon: BookOpen,
    category: "Downloads",
  },
  {
    title: "Nepal Digital Framework",
    description:
      "Reference to Nepal's national digital strategy and inclusion priorities.",
    type: "link",
    meta: "External",
    href: "#",
    icon: Link2,
    category: "External Links",
  },
  {
    title: "Internet Society Resources",
    description:
      "Global learning materials on an open, secure and trustworthy internet.",
    type: "link",
    meta: "External",
    href: "#",
    icon: Link2,
    category: "External Links",
  },
  {
    title: "SDG Learning Resources",
    description:
      "United Nations materials on the Sustainable Development Goals for educators.",
    type: "link",
    meta: "External",
    href: "#",
    icon: Link2,
    category: "External Links",
  },
];

export const resourceCategories = [
  "Training Materials",
  "Digital Literacy Resources",
  "Downloads",
  "External Links",
] as const;
