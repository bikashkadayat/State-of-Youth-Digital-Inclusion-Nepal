import { img } from "./images";
import type { Member } from "@/types";

export const leader: Member = {
  name: "Bikash",
  role: "Chapter Leader",
  isLeader: true,
  image: img.leader,
  bio: "Bikash leads the State of Youth — Digital Inclusion Nepal chapter with a deep belief that access to digital skills is a right, not a privilege. With a background in community education and technology, he coordinates training programs, school workshops and rural outreach across the Kathmandu Valley and beyond — including the chapter's flagship digital literacy program enabling digitalization in the Musahar community. He is building a movement of young people ready to shape Nepal's digital future.",
  socials: [
    { label: "Email", href: "mailto:bikash@digitalinclusionnepal.org" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

/**
 * Role-based team seats. We intentionally do not attach invented personal
 * names to identifiable individuals — real members can be added here as the
 * chapter grows ("future ready for expansion").
 */
export interface TeamRole {
  role: string;
  focus: string;
  initials: string;
  accent: "primary" | "secondary" | "accent";
}

export const teamRoles: TeamRole[] = [
  {
    role: "Training & Curriculum",
    focus: "Designs inclusive, mother-tongue learning materials for beginners.",
    initials: "TC",
    accent: "primary",
  },
  {
    role: "Rural Outreach",
    focus: "Leads offline-first workshops in remote villages.",
    initials: "RO",
    accent: "secondary",
  },
  {
    role: "Gender Inclusion",
    focus: "Mentors cohorts closing the gender digital divide.",
    initials: "GI",
    accent: "accent",
  },
  {
    role: "Youth Innovation",
    focus: "Guides young makers through design thinking and prototyping.",
    initials: "YI",
    accent: "primary",
  },
  {
    role: "School Program",
    focus: "Supports classroom sessions and teacher training.",
    initials: "SP",
    accent: "secondary",
  },
  {
    role: "Awareness & Campaigns",
    focus: "Champions online safety and digital rights in communities.",
    initials: "AC",
    accent: "accent",
  },
];

export type { Member };
