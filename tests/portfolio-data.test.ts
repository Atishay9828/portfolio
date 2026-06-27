import { describe, expect, it } from "vitest";
import { featuredProjects, getProjectBySlug, routes, secondaryProjects } from "../src/data/projects";
import { links } from "../src/data/links";

import mahoragaDashboard from "../public/assets/projects/mahoraga/dashboard_preview.png?url";
import mahoragaScreenshot from "../public/assets/projects/mahoraga/stitch_aero_screenshot.png?url";
import mahoragaTraining from "../public/assets/projects/mahoraga/training_metrics.png?url";
import hybridCategories from "../public/assets/projects/hybrid-categorizer/categories.png?url";
import hybridHistory from "../public/assets/projects/hybrid-categorizer/history.png?url";
import hybridMemory from "../public/assets/projects/hybrid-categorizer/memory.png?url";
import hybridPredict from "../public/assets/projects/hybrid-categorizer/predict.png?url";
import loopInterestSelection from "../public/assets/projects/the-loop/interest_selection.png?url";
import loopLanding from "../public/assets/projects/the-loop/landing_page.jpg?url";

const importedProjectAssets = [
  mahoragaDashboard,
  mahoragaScreenshot,
  mahoragaTraining,
  hybridCategories,
  hybridHistory,
  hybridMemory,
  hybridPredict,
  loopInterestSelection,
  loopLanding,
];

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
      expect(project.visual.detail.toLowerCase()).toContain("candidate");
    }
  });

  it("renders only verified public project links as enabled CTAs", () => {
    for (const project of [...featuredProjects, ...secondaryProjects]) {
      expect(project.links.every((link) => link.status === "Verified")).toBe(true);
      expect(project.links.every((link) => link.href.startsWith("https://"))).toBe(true);
    }
  });

  it("does not expose active personal CTAs until links are verified public-ready", () => {
    expect(links.github.status).toBe("Verified");
    expect(links.github.href).toBe("https://github.com/Atishay9828/");
    expect(links.linkedin.status).toBe("Known");
    expect(links.linkedin.href).toBeUndefined();
    expect(links.email.status).toBe("Known");
    expect(links.email.href).toBeUndefined();
  });

  it("does not expose a resume CTA until a repo-local public resume exists", () => {
    expect(links.resume.status).not.toBe("Verified");
    expect(links.resume.href).toBeUndefined();
  });

  it("defines static routes for the homepage and featured case-study shells", () => {
    expect(routes).toEqual(["/", ...featuredProjects.map((project) => `/projects/${project.slug}`)]);
    expect(getProjectBySlug("the-loop")?.title).toBe("The Loop");
  });

  it("keeps missing proof explicit for every featured project", () => {
    for (const project of featuredProjects) {
      expect(project.missingProof.length).toBeGreaterThan(0);
      expect(project.roleStatus).toBe("Role/contribution details pending verification.");
    }
  });

  it("references only imported visual assets that exist in public", () => {
    for (const project of featuredProjects) {
      for (const asset of project.visual.assets ?? []) {
        expect(asset.src.startsWith("/assets/projects/")).toBe(true);
        expect(importedProjectAssets.some((importedAsset) => importedAsset.includes(asset.src))).toBe(true);
        expect(asset.status).not.toBe("Verified");
      }
    }
  });

  it("has hardened case-study content for every featured project", () => {
    for (const project of featuredProjects) {
      expect(project.caseStudy?.whatWasBuilt).toBeTruthy();
      expect(project.caseStudy?.architectureSummary).toBeTruthy();
      expect(project.caseStudy?.evidenceStatus.length).toBeGreaterThan(0);
      expect(project.caseStudy?.limitations.length).toBeGreaterThan(0);
      expect(project.caseStudy?.nextEvidenceNeeded.length).toBeGreaterThan(0);
      expect(project.roleStatus).toBe("Role/contribution details pending verification.");
    }
  });

  it("keeps Hybrid benchmark proof explicitly pending", () => {
    const hybrid = getProjectBySlug("hybrid-categorizer");
    expect(hybrid?.caseStudy?.routingProof?.label).toBe("Benchmark pending");
    expect(hybrid?.caseStudy?.routingProof?.columns).toEqual([
      "Example",
      "Merchant known?",
      "ONNX category",
      "Confidence",
      "Rule status",
      "Route taken",
      "Final category",
      "Notes",
    ]);
    expect(hybrid?.caseStudy?.routingProof?.rows).toHaveLength(0);
  });

  it("documents The Loop workflow without screenshots or private data", () => {
    const loop = getProjectBySlug("the-loop");
    expect(loop?.caseStudy?.workflow?.map((step) => step.label)).toEqual([
      "Discovery",
      "Interest matching",
      "RSVP / join",
      "Friends, chat, and carpool",
      "Admin / event management",
      "Edge cases / pending evidence",
    ]);
  });
});
