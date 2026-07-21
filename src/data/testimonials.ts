import type { Testimonial } from "@/types";

/**
 * Illustrative testimonials representing the kind of impact the chapter's
 * programs create. Kept text-only (with initials) — no real individual's
 * photo is paired with an invented name or quote.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Before the workshop I had never used a computer. Now I can search for information, use email and help my family online. It changed what I believe is possible for me.",
    name: "Workshop Graduate",
    role: "Digital Literacy Program",
  },
  {
    quote:
      "The program gave our students confidence with technology and gave our teachers the training to keep it going. It's inclusion in action.",
    name: "Head Teacher",
    role: "Partner School",
  },
  {
    quote:
      "Learning why digital skills matter and how technology helps us opened a new world. I never imagined this kind of opportunity would reach our community.",
    name: "Youth Participant",
    role: "Community Session",
  },
];
