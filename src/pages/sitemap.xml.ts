import type { APIRoute } from "astro";
import { routes } from "../data/projects";

export const prerender = true;

export const GET: APIRoute = ({ site, url }) => {
  const base = site ?? url;
  const entries = routes
    .map((route) => `  <url><loc>${new URL(route, base).href}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
