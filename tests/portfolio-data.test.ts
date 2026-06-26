import { describe, expect, it } from "vitest";
import { featuredProjects, getProjectBySlug, routes } from "../src/data/projects";
import { links } from "../src/data/links";

describe("portfolio scaffold data", () => {
  it("keeps the locked featured project order", () => {
    expect(featuredProjects.map((project) => project.slug)).toEqual([
      "mahoraga",
      "hybrid-categorizer",
      "the-loop",
    ]);
  });

  it("marks missing media as pending instead of using fake screenshots", () => {
    for (const project of featuredProjects) {
      expect(project.visual.status).not.toBe("Verified");
      expect(project.visual.kind).not.toBe("screenshot");
      expect(project.visual.label.toLowerCase()).toContain("pending");
    }
  });

  it("renders only verified public project links as enabled CTAs", () => {
    for (const project of featuredProjects) {
      expect(project.links.every((link) => link.status === "Verified")).toBe(true);
      expect(project.links.every((link) => link.href.startsWith("https://"))).toBe(true);
    }
  });

  it("does not expose a resume CTA until a repo-local public resume exists", () => {
    expect(links.resume.status).not.toBe("Verified");
    expect(links.resume.href).toBeUndefined();
  });

  it("defines static routes for the homepage and featured case-study shells", () => {
    expect(routes).toEqual([
      "/",
      "/projects/mahoraga",
      "/projects/hybrid-categorizer",
      "/projects/the-loop",
    ]);
    expect(getProjectBySlug("the-loop")?.title).toBe("The Loop");
  });
});
