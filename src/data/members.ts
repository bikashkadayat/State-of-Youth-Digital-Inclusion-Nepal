import { img } from "./images";
import type { Member } from "@/types";

export const leader: Member = {
  name: "Bikash Kadayat",
  role: "Chapter Leader & Digital Literacy Trainer",
  isLeader: true,
  image: img.leader,
  email: "kadayatxbikash2008@gmail.com",
  linkedin: "https://www.linkedin.com/in/bikash-kadayat-978852273/",
  bio: "Bikash Kadayat leads State of Youth — Digital Inclusion Nepal with a conviction that digital access and wellbeing are rights, not privileges. As a digital literacy trainer, he designs and delivers hands-on programs — from classroom workshops to rural outreach and the chapter's flagship digital literacy program in the Musahar community. He also champions youth wellbeing, having led the chapter's Mental Health Awareness Program on healthy technology use and resilience. His focus is simple: equip young people with the skills, confidence and support to thrive in a connected world.",
  focusAreas: [
    "Digital literacy training",
    "Community & rural outreach",
    "Youth wellbeing & resilience",
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
