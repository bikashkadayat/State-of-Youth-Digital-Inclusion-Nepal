import { Brain, HeartPulse, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Past activities the chapter has delivered. Image-free by design —
 * each activity is presented as a clean gradient + iconography card.
 */
export interface Activity {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  dateLabel: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  featured?: boolean;
}

export const activities: Activity[] = [
  {
    id: "mental-health-awareness",
    title: "Mental Health Awareness Program",
    category: "Digital Health & Community Wellbeing",
    location: "Kathmandu, Nepal",
    date: "2026-06-14",
    dateLabel: "June 2026",
    description:
      "A community-focused awareness session on mental wellbeing, digital wellbeing and youth resilience. The program encouraged open conversations around mental health, emotional wellness and healthy technology use among young people.",
    icon: Brain,
    highlights: [
      "Open conversations on mental & emotional wellness",
      "Guidance on healthy, balanced technology use",
      "Building youth resilience and peer support",
    ],
    featured: true,
  },
];

// Secondary iconography used in the activity card accent cluster.
export const activityAccentIcons: LucideIcon[] = [HeartPulse, Users];
