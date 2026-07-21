import {
  BookOpen,
  School,
  Globe2,
  Mountain,
  Lightbulb,
  Users,
} from "lucide-react";
import type { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "digital-literacy-workshops",
    title: "Digital Literacy Workshops",
    icon: BookOpen,
    accent: "primary",
    summary:
      "Hands-on sessions covering devices, the internet, online safety and everyday digital tools for beginners.",
    details:
      "Our flagship workshops meet learners exactly where they are. From switching on a device for the first time to navigating email, search, digital payments and online safety, participants build practical confidence step by step in their own language.",
    highlights: [
      "Beginner-friendly, mother-tongue facilitation",
      "Online safety & privacy fundamentals",
      "Certificates of completion",
    ],
  },
  {
    slug: "school-outreach-program",
    title: "School Outreach Program",
    icon: School,
    accent: "secondary",
    summary:
      "Bringing structured digital learning directly into classrooms across urban and rural schools.",
    details:
      "We partner with schools to embed digital skills into the student experience, training teachers and equipping classrooms so that digital learning continues long after our facilitators leave.",
    highlights: [
      "Teacher capacity building",
      "Age-appropriate curriculum",
      "Sustainable in-school programs",
    ],
  },
  {
    slug: "future-internet-awareness",
    title: "Future Internet Awareness",
    icon: Globe2,
    accent: "accent",
    summary:
      "Preparing young people for an inclusive, open and safe internet — AI, data rights and digital citizenship.",
    details:
      "The internet is evolving fast. We help youth understand emerging technologies, artificial intelligence, data rights and their role as active, responsible digital citizens shaping Nepal's connected future.",
    highlights: [
      "AI & emerging tech literacy",
      "Data rights & digital citizenship",
      "Critical thinking online",
    ],
  },
  {
    slug: "rural-technology-training",
    title: "Rural Technology Training",
    icon: Mountain,
    accent: "primary",
    summary:
      "Taking technology training to remote villages where connectivity and access are limited.",
    details:
      "Distance should never decide opportunity. Our mobile teams travel to remote communities with offline-first materials and low-bandwidth tools, ensuring rural learners are not left behind.",
    highlights: [
      "Offline-first learning kits",
      "Community learning hubs",
      "Local facilitator networks",
    ],
  },
  {
    slug: "youth-innovation-labs",
    title: "Youth Innovation Labs",
    icon: Lightbulb,
    accent: "secondary",
    summary:
      "Creative spaces where young people prototype digital solutions to real community challenges.",
    details:
      "In our innovation labs, youth move from users to makers — learning design thinking, basic coding and problem-solving as they build projects that respond to challenges in their own communities.",
    highlights: [
      "Design thinking & prototyping",
      "Intro to coding & no-code tools",
      "Mentorship & showcases",
    ],
  },
  {
    slug: "women-in-digital-skills",
    title: "Women in Digital Skills",
    icon: Users,
    accent: "accent",
    summary:
      "Focused programs closing the gender digital divide and opening economic pathways for women.",
    details:
      "We create safe, supportive learning environments designed for women and girls — building not just digital skills but the confidence and networks needed to access online work and entrepreneurship.",
    highlights: [
      "Women-only cohorts & mentors",
      "Freelancing & online income skills",
      "Flexible community scheduling",
    ],
  },
];
