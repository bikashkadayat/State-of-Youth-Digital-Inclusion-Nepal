import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string;
  highlights: string[];
  accent: "primary" | "secondary" | "accent";
}

export interface SDG {
  number: number;
  title: string;
  short: string;
  description: string;
  color: string; // css var reference
  icon: LucideIcon;
}

export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO
  dateLabel: string;
  location: string;
  description: string;
  image: string;
  status: "upcoming" | "past";
  tag: string;
}

export interface Member {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  linkedin?: string;
  focusAreas?: string[];
  socials?: { label: string; href: string }[];
  isLeader?: boolean;
}

export interface Resource {
  title: string;
  description: string;
  type: "download" | "link" | "guide";
  meta: string; // e.g. "PDF · 2.4 MB" or "External"
  href: string;
  icon: LucideIcon;
  category: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

export interface Partner {
  name: string;
  abbr: string;
}
