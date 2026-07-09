import { describe, expect, it } from "vitest";
import {
  featuredProjects,
  getProjectBySlug,
  labProjects,
  routes,
  secondaryProjects,
  type Project,
  type ProjectContribution,
} from "../src/data/projects";
import { links } from "../src/data/links";
import evidenceDataSource from "../src/data/evidence.ts?raw";
import projectsDataSource from "../src/data/projects.ts?raw";
import featuredProjectsSource from "../src/components/sections/FeaturedProjects.astro?raw";
import heroSource from "../src/components/sections/Hero.astro?raw";
import indexPageSource from "../src/pages/index.astro?raw";
import labProjectsSource from "../src/components/sections/LabProjects.astro?raw";
import projectModuleSource from "../src/components/project/ProjectModule.astro?raw";
import projectPageSource from "../src/pages/projects/[slug].astro?raw";
import secondaryWorkSource from "../src/components/sections/SecondaryWork.astro?raw";
import timelineSource from "../src/components/sections/Timeline.astro?raw";
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
import loopEventDetailLive from "../public/assets/projects/the-loop/the-loop-event-detail-live.png?url";
import loopEventsListAltLive from "../public/assets/projects/the-loop/the-loop-events-list-alt-live.png?url";
import loopEventsListLive from "../public/assets/projects/the-loop/the-loop-events-list-live.png?url";
import loopLandingLive from "../public/assets/projects/the-loop/the-loop-landing-live.png?url";
import loopMapViewLive from "../public/assets/projects/the-loop/the-loop-map-view-live.png?url";
import loopFriendsLiveRedacted from "../public/assets/projects/the-loop/the-loop-friends-live-redacted.png?url";
import loopProfileLiveRedacted from "../public/assets/projects/the-loop/the-loop-profile-live-redacted.png?url";
import loopSystemDiagram from "../public/assets/projects/the-loop/the-loop-system-diagram.svg?url";
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
  loopEventDetailLive,
  loopEventsListAltLive,
  loopEventsListLive,
  loopLandingLive,
  loopMapViewLive,
  loopFriendsLiveRedacted,
  loopProfileLiveRedacted,
  loopSystemDiagram,
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
const pendingEvidenceDocs = import.meta.glob("../docs/*PENDING_FEATURES_AND_EVIDENCE.md", {
  eager: true,
  query: "?raw",
  import: "default",
});
const techEvidenceDocs = import.meta.glob("../docs/*TECH_STACK_EVIDENCE.md", {
  eager: true,
  query: "?raw",
  import: "default",
});
const toolkitModules = import.meta.glob("../src/data/toolkit.ts", { eager: true });

const publicFacingSourceText = [
  evidenceDataSource,
  projectsDataSource,
  featuredProjectsSource,
  heroSource,
  indexPageSource,
  labProjectsSource,
  projectModuleSource,
  projectPageSource,
  secondaryWorkSource,
  timelineSource,
].join("\n");

const forbiddenPublicPhrases = [
  "Text-only until",
  "until real links",
  "candidate visual",
  "candidate visuals",
  "missing proof",
  "still need",
  "still needs",
  "partially public-ready",
  "public-ready",
  "evidence-bound",
  "static shell",
  "proof requires",
  "artifact is provided",
  "launch selection",
  "diagram QA",
  "blocked",
  "needs final",
  "final launch selection",
  "current evidence docs",
  "portfolio-local demo",
  "notebook/repo",
  "unredacted private",
  "Case study shell",
];

describe("portfolio scaffold data", () => {
  it("keeps internal backlog wording out of public-facing source text", () => {
    for (const phrase of forbiddenPublicPhrases) {
      expect(publicFacingSourceText, `public source should not contain '${phrase}'`).not.toContain(phrase);
    }
    expect(publicFacingSourceText).not.toMatch(/\bMissing proof\b/i);
  });

  it("moves pending evidence detail into an internal tracker doc", () => {
    expect(Object.keys(pendingEvidenceDocs)).toHaveLength(1);
    const pendingDoc = String(Object.values(pendingEvidenceDocs)[0]);

    expect(pendingDoc).toContain("internal pending proof tracker");
    expect(pendingDoc).toContain("Mahoraga");
    expect(pendingDoc).toContain("Hybrid GenAI Transaction Categorizer");
    expect(pendingDoc).toContain("The Loop");
    expect(pendingDoc).toContain("private screenshots");
    expect(pendingDoc).toContain("unverified deployment links");
    expect(pendingDoc).toContain("Remaining real blockers");
  });

  it("keeps the homepage journey order aligned with the approved story", () => {
    expect(indexPageSource).toContain('href="#about" data-journey-nav="1"');
    expect(indexPageSource).toContain('href="#proof-strip" data-journey-nav="2"');
    expect(indexPageSource).toContain('href="#featured-projects" data-journey-nav="3"');
    expect(indexPageSource).toContain('href="#signal-evolution" data-journey-nav="4"');
    expect(indexPageSource).toContain('href="#systems-map" data-journey-nav="6"');
    expect(indexPageSource).toContain('href="#contact" data-journey-nav="7"');
    expect(indexPageSource.indexOf("<About")).toBeGreaterThan(indexPageSource.indexOf("<Hero"));
    expect(indexPageSource.indexOf("<About")).toBeLessThan(indexPageSource.indexOf("<ProofStrip"));
  });

  it("keeps the hero Signal Path as a static visual, not a duplicate scroll tracker", () => {
    expect(heroSource).toContain("Model");
    expect(heroSource).toContain("API");
    expect(heroSource).toContain("Memory");
    expect(heroSource).toContain("UI");
    expect(heroSource).toContain("Proof");
    expect(heroSource).not.toContain("scroll-linked proof chain");
    expect(heroSource).not.toContain("signal-cursor");
  });

  it("keeps lab projects concise without public apology copy", () => {
    expect(labProjectsSource).toContain("Lab Projects");
    for (const project of labProjects) {
      expect(project.status).not.toMatch(/text-only|until|provided|missing|pending/i);
      expect(project.purpose.length).toBeLessThanOrEqual(90);
    }
  });

  it("keeps the locked featured project order", () => {
    expect(featuredProjects.map((project) => project.slug)).toEqual([
      "mahoraga",
      "hybrid-categorizer",
      "the-loop",
    ]);
  });

  it("keeps visual labels public-ready while allowing verified Loop workflow screenshots", () => {
    for (const project of featuredProjects.filter((project) => project.slug !== "the-loop")) {
      expect(project.visual.status).not.toBe("Verified");
      expect(project.visual.kind).toBe("evidence-panel");
      expect(project.visual.detail).not.toMatch(/candidate|pending|missing|launch selection|diagram QA/i);
    }

    const loop = getProjectBySlug("the-loop");
    expect(loop?.visual.status).toBe("Verified");
    expect(loop?.visual.detail.toLowerCase()).toContain("live-deployment workflow screenshots");
    expect(loop?.visual.detail).not.toMatch(/pending|missing|private screenshots/i);
  });

  it("renders only verified public project links as enabled CTAs", () => {
    for (const project of [...featuredProjects, ...secondaryProjects]) {
      expect(project.links.every((link) => link.status === "Verified")).toBe(true);
      expect(project.links.every((link) => link.href.startsWith("https://"))).toBe(true);
    }
  });

  it("exposes only owner-approved personal CTAs with exact public destinations", () => {
    expect(links.github.status).toBe("Verified");
    expect(links.github.href).toBe("https://github.com/Atishay9828/");
    expect(links.linkedin.status).toBe("Verified");
    expect(links.linkedin.href).toBe("https://www.linkedin.com/in/atishay9828/");
    expect(links.email.status).toBe("Verified");
    expect(links.email.href).toBe("mailto:ajain8_be23@thapar.edu");
    expect(links.resume.status).toBe("Verified");
    expect(links.resume.href).toBe("/resume/atishay-jain-sde-resume.pdf");
  });

  it("keeps active personal links well-formed and public-safe", () => {
    for (const [key, link] of Object.entries(links)) {
      if (!link.href) {
        continue;
      }

      const allowedPersonalLink =
        link.href.startsWith("https://") ||
        link.href.startsWith("mailto:") ||
        link.href.startsWith("/resume/");

      expect(allowedPersonalLink, `${key} has malformed href ${link.href}`).toBe(true);
      expect(link.href, `${key} should not contain whitespace`).not.toMatch(/\s/);
      expect(link.status, `${key} active href must be Verified`).toBe("Verified");
    }
  });

  it("exposes only the repo-local SDE resume CTA when the public PDF exists", () => {
    expect(links.resume.status).toBe("Verified");
    expect(links.resume.href).toBe("/resume/atishay-jain-sde-resume.pdf");
    expect(links.resume.label).toBe("SDE Resume");
    expect(sdeResume).toContain("atishay-jain-sde-resume.pdf");
    expect(JSON.stringify(links).toLowerCase()).not.toContain("data_analyst");
    expect(JSON.stringify(links).toLowerCase()).not.toContain("data analyst");
  });

  it("defines static routes for the homepage and featured case-study shells", () => {
    expect(routes).toEqual(["/", ...featuredProjects.map((project) => `/projects/${project.slug}`)]);
    expect(getProjectBySlug("the-loop")?.title).toBe("The Loop");
  });

  it("keeps remaining proof gaps in structured data for docs without rendering a public missing-proof block", () => {
    for (const project of featuredProjects) {
      expect(project.missingProof.length).toBeGreaterThan(0);
      expect(requireContribution(project).stillToVerify.length).toBeGreaterThan(0);
    }
    expect(projectModuleSource).not.toContain("Missing proof");
    expect(projectModuleSource).not.toContain("project.missingProof.map");
  });

  it("references only imported visual assets that exist in public", () => {
    for (const project of featuredProjects) {
      for (const asset of project.visual.assets ?? []) {
        expect(asset.src.startsWith("/assets/projects/")).toBe(true);
        expect(importedProjectAssets.some((importedAsset) => importedAsset.includes(asset.src))).toBe(true);
        if (project.slug === "the-loop") {
          expect(asset.status).toBe("Verified");
          if (asset.src.endsWith(".svg")) {
            expect(asset.source).toContain("docs/diagrams/the-loop-system.md");
            continue;
          }
          expect(asset.source).toContain("Owner-provided clean live-deployment screenshot");
          continue;
        }

        expect(asset.status).not.toBe("Verified");
      }
    }
  });

  it("uses approved alt text for public The Loop workflow screenshots", () => {
    const loopAssets = getProjectBySlug("the-loop")?.visual.assets ?? [];

    expect(loopAssets.map((asset) => asset.alt)).toEqual([
      "The Loop events list showing dated campus events and category tags",
      "The Loop event detail page showing event actions and location map",
      "The Loop map view showing event pins near Thapar Institute",
      "The Loop landing/login screen",
      "The Loop profile page with personal contact details redacted",
      "The Loop friends page with sent-request username redacted",
      "The Loop system diagram showing React, FastAPI, database, auth, realtime, maps, and carpool layers",
    ]);
  });

  it("exposes only redacted Loop profile and friends screenshots", () => {
    const loopAssetText = JSON.stringify(getProjectBySlug("the-loop")?.visual.assets ?? []).toLowerCase();

    expect(loopAssetText).toContain("profile-live-redacted");
    expect(loopAssetText).toContain("friends-live-redacted");
    expect(loopAssetText).not.toContain("private-review");
    expect(loopAssetText).not.toContain("gmail.com");
    expect(loopAssetText).not.toContain("negimridul2005");
    expect(loopAssetText).not.toContain("adishfab");
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

  it("records Hybrid endpoint and fallback proof as local evidence, not a production claim", () => {
    const hybrid = getProjectBySlug("hybrid-categorizer");
    expect(hybrid?.caseStudy?.routingProof?.label).toBe("Endpoint and fallback proof captured");
    expect(hybrid?.caseStudy?.routingProof?.columns).toEqual([
      "Input",
      "Category",
      "Used",
      "Confidence",
      "Time",
    ]);
    expect(hybrid?.caseStudy?.routingProof?.rows).toHaveLength(6);
    expect(hybrid?.caseStudy?.routingProof?.note.toLowerCase()).toContain("local cpu-only");
    expect(hybrid?.caseStudy?.routingProof?.note.toLowerCase()).toContain("not a production sla");
    expect(hybrid?.caseStudy?.routingProof?.note.toLowerCase()).toContain("offline qwen fallback");
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
      "zomato order 500",
      "bittu coaching 500",
      "random unclear transaction xyz 729",
      "upi transfer to kavya trip snacks 730",
      "uber ride 240",
      "airtel bill 999",
    ]);
    for (const row of rows) {
      expect(row).not.toContain("sample/unmeasured");
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

  it("updates Hybrid proof status so stale missing-proof items are no longer listed publicly or structurally", () => {
    const hybrid = getProjectBySlug("hybrid-categorizer");
    const hybridText = JSON.stringify(hybrid);
    const missingText = hybrid?.missingProof.join(" ") ?? "";

    expect(hybrid?.caseStudy?.routingProof?.rows.map((row) => row[0])).toEqual([
      "zomato order 500",
      "bittu coaching 500",
      "random unclear transaction xyz 729",
      "upi transfer to kavya trip snacks 730",
      "uber ride 240",
      "airtel bill 999",
    ]);
    expect(hybridText).toContain("Owner-observed local CPU-only/offline testing");
    expect(hybridText).toContain("~60-80s to ~5-13s");
    expect(hybridText).toContain("not a formal benchmark or production SLA");
    expect(missingText).not.toMatch(/endpoint|qwen|cost|fallback-rate|backend\/model-output/i);
    expect(hybridText).not.toContain("Endpoint latency remains blocked");
    expect(hybridText).not.toContain("Qwen fallback latency remains blocked");
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

  it("documents The Loop workflow with verified public screenshots and without private data", () => {
    const loop = getProjectBySlug("the-loop");
    expect(loop?.caseStudy?.workflow?.map((step) => step.label)).toEqual([
      "Discovery",
      "Interest matching",
      "RSVP / join",
      "Friends, chat, and carpool",
      "Admin / event management",
      "Operational boundaries",
    ]);
    expect(loop?.visual.detail.toLowerCase()).toContain("live-deployment workflow screenshots");
    expect(loop?.missingProof.join(" ")).not.toMatch(/unredacted private|private screenshots/i);
    expect(JSON.stringify(loop).toLowerCase()).not.toContain("gmail.com");
  });

  it("stores evidence-derived toolkit entries in a source-of-truth module and doc", () => {
    expect(Object.keys(toolkitModules)).toHaveLength(1);
    const toolkit = toolkitModules[Object.keys(toolkitModules)[0]] as {
      toolkit: Array<{ name: string; category: string; sourceRepo: string; proofFile: string; proofType: string }>;
    };

    expect(toolkit.toolkit.length).toBeGreaterThan(6);
    for (const item of toolkit.toolkit) {
      expect(item.name).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(item.sourceRepo).toMatch(/portfolio|meta_Mahoraga|Hybrid-GenAI|TIET-LOOP|ReceiptSplit/);
      expect(item.proofFile).toBeTruthy();
      expect(item.proofType).toMatch(/dependency|config|import|docs/i);
    }

    expect(Object.keys(techEvidenceDocs)).toHaveLength(1);
    expect(String(Object.values(techEvidenceDocs)[0])).toContain("Evidence source");
  });
});
