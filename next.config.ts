import type { NextConfig } from "next";

/**
 * Static-export configuration for GitHub Pages.
 *
 * - output: "export"      → emits a fully static site to ./out (no Node server).
 * - images.unoptimized    → GitHub Pages has no Next image-optimization server;
 *                           images are served as-is (all assets are local).
 * - trailingSlash: true   → each route becomes /path/index.html, which GitHub
 *                           Pages resolves cleanly (e.g. /about/ → /about/index.html).
 *
 * No basePath/assetPrefix is needed: the site is served from the ROOT of the
 * custom domain (stateofyouth-din.bikashkadayat.com.np), not a project subpath.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
