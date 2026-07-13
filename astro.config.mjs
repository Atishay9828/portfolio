import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.PUBLIC_SITE_URL ??
  (vercelProductionUrl ? `https://${vercelProductionUrl}` : "https://atishay-jain-portfolio.vercel.app");

export default defineConfig({
  site,
  integrations: [mdx(), tailwind()],
});
