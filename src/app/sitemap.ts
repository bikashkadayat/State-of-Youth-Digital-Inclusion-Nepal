import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { mainNav } from "@/data/navigation";

// Required for `output: "export"` (static GitHub Pages build).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNav.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
