import { describe, expect, it } from "vitest";
import {
  featuredProjects,
  getProjectBySlug,
  routes,
  secondaryProjects,
  type Project,
  type ProjectContribution,
} from "../src/data/projects";
import { links } from "../src/data/links";
import hybridRoutingProof from "../docs/19_HYBRID_ROUTING_PROOF.md?raw";
import hybridBenchmarkResults from "../docs/20_HYBRID_BENCHMARK_RESULTS.md?raw";
import hybridHistoryInsightsEvidence from "../docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md?raw";
import roleContributionEvidence from "../docs/23_ROLE_CONTRIBUTION_EVIDENCE.md?raw";

import mahoragaDashboard from "../public/assets/projects/mahoraga/dashboard_preview.png?url";
import mahoragaScreenshot from "../public/assets/projects/mahoraga/stitch_aero_screenshot.png?url";
import mahoragaTraining from "../public/assets/projects/mahoraga/training_metrics.png?url";
import hybridCategories from "../public/assets/projects/hybrid-categorizer/categories.png?url";
import hybridHistory from "../public/assets/projects/hybrid-categorizer/history.png?url";
import hybridMemory from "../public/assets/projects/hybrid-categorizer/memory.png?url";
import hybridPredict from "../public/assets/projects/hybrid-categorizer/predict.png?url";
import loopInterestSelection from "../public/assets/projects/the-loop/interest_selection.png?url";
import loopLanding from "../public/assets/projects/the-loop/landing_page.jpg?url";
import sdeResume from "../public/resume/atishay-jain-sde-resume.pdf?url";

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

const requireContribution = (project: Project | undefined): ProjectContribution => {
  expect(project).toBeDefined();
  expect(project?.contribution).toBeDefined();
  return project!.contribution!;
};

const rootModelFiles = import.meta.glob("../models/distilbert.onnx", { eager: true, query: "?url" });
const publicHybridModelFiles = import.meta.glob("../public/assets/projects/hybrid-categorizer/distilbert.onnx", {
  eager: true,
  query: "?url",
});
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

  it("exposes only the repo-local SDE resume CTA when the public PDF exists", () => {
    expect(links.resume.status).toBe("Verified");
    expect(links.resume.href).toBe("/resume/atishay-jain-sde-resume.pdf");
    expect(links.resume.label).toBe("SDE Resume");
    expect(sdeResume).toContain("atishay-jain-sde-resume.pdf");
    expect(JSON.stringify(links.resume).toLowerCase()).not.toContain("data_analyst");
    expect(JSON.stringify(links.resume).toLowerCase()).not.toContain("data analyst");
  });

  it("defines static routes for the homepage and featured case-study shells", () => {
    expect(routes).toEqual(["/", ...featuredProjects.map((project) => `/projects/${project.slug}`)]);
    expect(getProjectBySlug("the-loop")?.title).toBe("The Loop");
  });

  it("keeps missing proof explicit for every featured project", () => {
    for (const project of featuredProjects) {
      expect(project.missingProof.length).toBeGreaterThan(0);
      expect(requireContribution(project).stillToVerify.length).toBeGreaterThan(0);
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
      expect(requireContribution(project).status).toContain("Owner-reviewed");
    }
  });

  it("adds owner-reviewed contribution wording without inventing exact module ownership", () => {
    const mahoraga = getProjectBySlug("mahoraga");
    const hybrid = getProjectBySlug("hybrid-categorizer");
    const loop = getProjectBySlug("the-loop");
    const mahoragaContribution = requireContribution(mahoraga);
    const hybridContribution = requireContribution(hybrid);
    const loopContribution = requireContribution(loop);

    expect(mahoragaContribution.roleLabel).toBe("Backend / RL Systems Engineer");
    expect(mahoragaContribution.summary).toContain("adaptive backend/game-system logic");
    expect(mahoragaContribution.summary).toContain("LLM/backend integration");
    expect(mahoragaContribution.bullets.join(" ")).toContain("reward/training constraints");
    expect(mahoragaContribution.collaborativeScope.join(" ")).toContain("frontend aesthetics");
    expect(mahoragaContribution.stillToVerify.join(" ")).toContain("Exact file/module ownership");

    expect(hybridContribution.roleLabel).toBe("Solo Full-Stack AI Systems Builder");
    expect(hybridContribution.summary).toContain("end-to-end");
    expect(hybridContribution.bullets.join(" ")).toContain("merchant memory");
    expect(hybridContribution.bullets.join(" ")).toContain("local ONNX routing");
    expect(hybridContribution.bullets.join(" ")).toContain("AI insights");
    expect(hybridContribution.stillToVerify.join(" ").toLowerCase()).toContain("endpoint latency");
    expect(hybridContribution.stillToVerify.join(" ")).toContain("Qwen fallback latency");

    expect(loopContribution.roleLabel).toBe("Collaborative Full-Stack Contributor");
    expect(loopContribution.summary).toContain("collaborated across product flow and implementation");
    expect(loopContribution.collaborativeScope.join(" ").toLowerCase()).toContain("event discovery");
    expect(loopContribution.collaborativeScope.join(" ")).toContain("admin/event workflows");
    expect(loopContribution.stillToVerify.join(" ")).toContain("Exact module ownership remains collaborative/not separated");
  });

  it("keeps contribution guardrails after owner review", () => {
    const allProjectText = JSON.stringify(featuredProjects).toLowerCase();
    const loop = getProjectBySlug("the-loop");
    const loopText = JSON.stringify(loop).toLowerCase();
    const loopContribution = requireContribution(loop);
    const loopAssertiveText = [loopContribution.summary, ...loopContribution.bullets].join(" ").toLowerCase();

    expect(allProjectText).not.toContain("late youtube");
    expect(allProjectText).not.toContain("failed to qualify");
    expect(allProjectText).not.toMatch(/\b(sla-backed|production sla:|guaranteed)\b/);
    expect(allProjectText).not.toMatch(/\b\d+(\.\d+)?%\s*(accuracy|cost|fallback|win|improvement)\b/);
    expect(loopAssertiveText).not.toMatch(/\baj owned\b.*\b(auth|rsvp|chat|carpool|maps|recommendations|admin|deployment)\b/);
    expect(loopAssertiveText).not.toMatch(/\bsolo\b.*\b(auth|rsvp|chat|carpool|maps|recommendations|admin|deployment)\b/);
    expect(loopText).toContain("do not claim solo ownership");
  });

  it("documents owner-reviewed contribution wording while preserving unsafe wording to avoid", () => {
    expect(roleContributionEvidence).toContain("Owner-reviewed contribution wording available");
    expect(roleContributionEvidence).toContain("Backend / RL Systems Engineer");
    expect(roleContributionEvidence).toContain("Solo Full-Stack AI Systems Builder");
    expect(roleContributionEvidence).toContain("Collaborative Full-Stack Contributor");
    expect(roleContributionEvidence).toContain("Exact file/module ownership remains not documented");
    expect(roleContributionEvidence).toContain("endpoint latency, Qwen fallback latency, cost, fallback-rate, and accuracy");
    expect(roleContributionEvidence).toContain("Unsafe Wording To Avoid");
    expect(roleContributionEvidence).toContain("Do not mention the late YouTube submission");
  });

  it("records Hybrid benchmark proof as a local benchmark, not a production claim", () => {
    const hybrid = getProjectBySlug("hybrid-categorizer");
    expect(hybrid?.caseStudy?.routingProof?.label).toBe("Local benchmark measured");
    expect(hybrid?.caseStudy?.routingProof?.columns).toEqual([
      "Input text",
      "Merchant extracted",
      "Predicted category",
      "Route taken",
      "Confidence",
      "Median local latency",
      "Runs / warmup",
      "Limitation",
    ]);
    expect(hybrid?.caseStudy?.routingProof?.rows).toHaveLength(4);
    expect(hybrid?.caseStudy?.routingProof?.note.toLowerCase()).toContain("local benchmark");
    expect(hybrid?.caseStudy?.routingProof?.note.toLowerCase()).toContain("not a production sla");
    expect(hybrid?.caseStudy?.routingProof?.note.toLowerCase()).toContain("qwen fallback was not called");
  });

  it("keeps the older Hybrid routing proof doc free of measured latency or cost claims", () => {
    const proof = hybridRoutingProof;
    expect(proof).toContain("dominos order 750");
    expect(proof).toContain("bharat petrol payment 500");
    expect(proof).toContain("smart class monthly 899");
    expect(proof).toContain("volvo bus booking 1200");
    expect(proof).toContain("Benchmark status");
    expect(proof).toContain("models/distilbert.onnx");
    expect(proof).toContain("No production, endpoint, or Qwen fallback latency");
    expect(proof).not.toMatch(/\b\d+(\.\d+)?\s*(ms|milliseconds|s|seconds)\b/i);
    expect(proof).not.toMatch(/[$₹]\s*\d/);
  });

  it("keeps measured Hybrid case-study rows local and free of cost or fallback-rate claims", () => {
    const rows = getProjectBySlug("hybrid-categorizer")?.caseStudy?.routingProof?.rows ?? [];
    expect(rows.map((row) => row[0])).toEqual([
      "dominos order 750",
      "bharat petrol payment 500",
      "smart class monthly 899",
      "volvo bus booking 1200",
    ]);
    for (const row of rows) {
      expect(row).not.toContain("sample/unmeasured");
      expect(row.join(" ")).toContain("20 / 5");
      expect(row.join(" ")).not.toMatch(/\b\d+(\.\d+)?%/);
      expect(row.join(" ")).not.toMatch(/[$₹]\s*\d/);
    }
  });

  it("documents the measured Hybrid benchmark result with local scope and limitations", () => {
    const benchmarkDoc = hybridBenchmarkResults;

    expect(benchmarkDoc).toContain("Local benchmark only");
    expect(benchmarkDoc).toContain("D:\\Hybrid-GenAI-Transaction-Categorization\\models\\distilbert.onnx");
    expect(benchmarkDoc).toContain("20 measured runs per sample");
    expect(benchmarkDoc).toContain("5 warmup runs per sample");
    expect(benchmarkDoc).toContain("Qwen fallback was not called");
    expect(benchmarkDoc).toContain("not a production SLA");
    expect(benchmarkDoc).not.toMatch(/[$â‚¹]\s*\d/);
    expect(benchmarkDoc).not.toMatch(/fallback rate\s*[:=]\s*\d/i);
  });

  it("documents the Hybrid model path without copying the ONNX model into the portfolio repo", () => {
    expect(Object.keys(rootModelFiles)).toEqual([]);
    expect(Object.keys(publicHybridModelFiles)).toEqual([]);
  });

  it("keeps Hybrid History AI Insight evidence separate from the list-view screenshot", () => {
    const hybrid = getProjectBySlug("hybrid-categorizer");
    const historyAsset = hybrid?.visual.assets?.find((asset) => asset.src.endsWith("/history.png"));

    expect(historyAsset?.note).toContain("does not show the slide-in AI Insight panel");
    expect(hybrid?.caseStudy?.evidenceStatus.join(" ")).toContain("History AI Insight");
    expect(hybrid?.caseStudy?.evidenceStatus.join(" ")).toContain("POST /transaction-insight");
    expect(hybrid?.caseStudy?.nextEvidenceNeeded.join(" ")).toContain("Replacement History screenshot");
  });

  it("documents how Hybrid History AI insights are generated without inventing insight text", () => {
    const doc = hybridHistoryInsightsEvidence;

    expect(doc).toContain("clicking one History transaction opens `HistoryPanel`");
    expect(doc).toContain("POST http://127.0.0.1:8000/transaction-insight");
    expect(doc).toContain("up to three same-category recent history items");
    expect(doc).toContain("Do not invent an insight");
    expect(doc).toContain("The slide-in `AI Insight` panel is not visible");
    expect(doc).toContain("AI Insight screenshot proof remains Needed");
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
