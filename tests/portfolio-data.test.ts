import { describe, expect, it } from "vitest";
import { featuredProjects, getProjectBySlug, routes, secondaryProjects } from "../src/data/projects";
import { links } from "../src/data/links";
import hybridRoutingProof from "../docs/19_HYBRID_ROUTING_PROOF.md?raw";

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
      "Input text",
      "Expected merchant extraction",
      "Expected category if documented",
      "Expected route if documented",
      "Confidence status",
      "Evidence status",
    ]);
    expect(hybrid?.caseStudy?.routingProof?.rows).toHaveLength(4);
    expect(hybrid?.caseStudy?.routingProof?.note.toLowerCase()).toContain("no measured latency");
    expect(hybrid?.caseStudy?.routingProof?.note.toLowerCase()).toContain("onnx model/runtime asset missing");
  });

  it("records the Hybrid routing proof doc without measured latency or cost claims", () => {
    const proof = hybridRoutingProof;
    expect(proof).toContain("dominos order 750");
    expect(proof).toContain("bharat petrol payment 500");
    expect(proof).toContain("smart class monthly 899");
    expect(proof).toContain("volvo bus booking 1200");
    expect(proof).toContain("Benchmark status");
    expect(proof).toContain("models/distilbert.onnx");
    expect(proof).toContain("No measured latency");
    expect(proof).not.toMatch(/\b\d+(\.\d+)?\s*(ms|milliseconds|s|seconds)\b/i);
    expect(proof).not.toMatch(/[$₹]\s*\d/);
  });

  it("keeps Hybrid routing rows sample/unmeasured and free of latency or cost values", () => {
    const rows = getProjectBySlug("hybrid-categorizer")?.caseStudy?.routingProof?.rows ?? [];
    expect(rows.map((row) => row[0])).toEqual([
      "dominos order 750",
      "bharat petrol payment 500",
      "smart class monthly 899",
      "volvo bus booking 1200",
    ]);
    for (const row of rows) {
      expect(row).toContain("sample/unmeasured");
      expect(row.join(" ")).not.toMatch(/\b\d+(\.\d+)?\s*(ms|milliseconds|s|seconds)\b/i);
      expect(row.join(" ")).not.toMatch(/[$₹]\s*\d/);
    }
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
    expect(loop?.visual.detail.toLowerCase()).toContain("deployment/server access issue");
    expect(loop?.missingProof).toContain("workflow screenshots blocked by deployment/server access issue");
  });
});
