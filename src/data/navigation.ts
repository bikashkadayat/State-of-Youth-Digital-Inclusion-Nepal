import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "SDG Focus", href: "/sdg-focus" },
  { label: "Events", href: "/events" },
  { label: "Members", href: "/members" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Explore",
    items: [
      { label: "About Chapter", href: "/about" },
      { label: "Our Programs", href: "/programs" },
      { label: "SDG Focus", href: "/sdg-focus" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Get Involved",
    items: [
      { label: "Members", href: "/members" },
      { label: "Resources", href: "/resources" },
      { label: "Contact Us", href: "/contact" },
      { label: "Join the Chapter", href: "/contact" },
    ],
  },
];
