import { describe, expect, it } from "vitest";
import {
  featuredProjects,
  getProjectBySlug,
  labProjects,
  routes,
  secondaryProjects,
  timelineProjectLinks,
  timelineStages,
  yearlyProgress,
  type Project,
  type ProjectContribution,
} from "../src/data/projects";
import { links } from "../src/data/links";
import { journeyStops } from "../src/data/journey";
import { toolkit } from "../src/data/toolkit";
import evidenceDataSource from "../src/data/evidence.ts?raw";
import projectsDataSource from "../src/data/projects.ts?raw";
import featuredProjectsSource from "../src/components/sections/FeaturedProjects.astro?raw";
import aboutSource from "../src/components/sections/About.astro?raw";
import contactSource from "../src/components/sections/Contact.astro?raw";
import heroSource from "../src/components/sections/Hero.astro?raw";
import gymCoderSource from "../src/components/ui/GymCoderMascot.astro?raw";
import journeyDepthSceneSource from "../src/components/ui/JourneyDepthScene.astro?raw";
import indexPageSource from "../src/pages/index.astro?raw";
import baseLayoutSource from "../src/layouts/BaseLayout.astro?raw";
import notFoundPageSource from "../src/pages/404.astro?raw";
import robotsSource from "../src/pages/robots.txt.ts?raw";
import sitemapSource from "../src/pages/sitemap.xml.ts?raw";
import vercelConfigSource from "../vercel.json?raw";
import systemsMapSource from "../src/components/sections/SystemsMap.astro?raw";
import toolkitSource from "../src/components/sections/Toolkit.astro?raw";
import labProjectsSource from "../src/components/sections/LabProjects.astro?raw";
import projectModuleSource from "../src/components/project/ProjectModule.astro?raw";
import projectPageSource from "../src/pages/projects/[slug].astro?raw";
import secondaryWorkSource from "../src/components/sections/SecondaryWork.astro?raw";
import timelineSource from "../src/components/sections/Timeline.astro?raw";
import hybridRoutingProof from "../docs/19_HYBRID_ROUTING_PROOF.md?raw";
import hybridBenchmarkResults from "../docs/20_HYBRID_BENCHMARK_RESULTS.md?raw";
import hybridHistoryInsightsEvidence from "../docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md?raw";
import roleContributionEvidence from "../docs/23_ROLE_CONTRIBUTION_EVIDENCE.md?raw";
import storyLearningPlan from "../docs/34_PORTFOLIO_STORY_AND_LEARNING_PLAN.md?raw";

import mahoragaDashboard from "../public/assets/projects/mahoraga/dashboard_preview.png?url";
import mahoragaRewardLoopDiagram from "../public/assets/projects/mahoraga/mahoraga-reward-loop-diagram.svg?url";
import mahoragaSystemDiagram from "../public/assets/projects/mahoraga/mahoraga-system-diagram.svg?url";
import mahoragaScreenshot from "../public/assets/projects/mahoraga/stitch_aero_screenshot.png?url";
import hybridCategories from "../public/assets/projects/hybrid-categorizer/categories.png?url";
import hybridHistory from "../public/assets/projects/hybrid-categorizer/history.png?url";
import hybridMemoryFeedbackDiagram from "../public/assets/projects/hybrid-categorizer/hybrid-memory-feedback-diagram.svg?url";
import hybridMemory from "../public/assets/projects/hybrid-categorizer/memory.png?url";
import hybridPredict from "../public/assets/projects/hybrid-categorizer/predict.png?url";
import hybridRoutingDiagram from "../public/assets/projects/hybrid-categorizer/hybrid-routing-diagram.svg?url";
import loopCarpoolChatFlow from "../public/assets/projects/the-loop/the-loop-carpool-chat-flow.svg?url";
import loopDeploymentDiagram from "../public/assets/projects/the-loop/the-loop-deployment-diagram.svg?url";
import loopEventDetailLive from "../public/assets/projects/the-loop/the-loop-event-detail-live.webp?url";
import loopEventsListLive from "../public/assets/projects/the-loop/the-loop-events-list-live.png?url";
import loopLandingLive from "../public/assets/projects/the-loop/the-loop-landing-live.png?url";
import loopMapViewLive from "../public/assets/projects/the-loop/the-loop-map-view-live.webp?url";
import loopFriendsLiveRedacted from "../public/assets/projects/the-loop/the-loop-friends-live-redacted.png?url";
import loopProfileLiveRedacted from "../public/assets/projects/the-loop/the-loop-profile-live-redacted.png?url";
import loopRecommendationFlow from "../public/assets/projects/the-loop/the-loop-recommendation-flow.svg?url";
import loopSystemDiagram from "../public/assets/projects/the-loop/the-loop-system-diagram.svg?url";
import bsercCertificate from "../public/certificates/bserc-def-space-2026.pdf?url";
import sdeResume from "../public/resume/atishay-jain-sde-resume.pdf?url";

const importedProjectAssets = [
  mahoragaDashboard,
  mahoragaRewardLoopDiagram,
  mahoragaSystemDiagram,
  mahoragaScreenshot,
  hybridCategories,
  hybridHistory,
  hybridMemoryFeedbackDiagram,
  hybridMemory,
  hybridPredict,
  hybridRoutingDiagram,
  loopCarpoolChatFlow,
  loopDeploymentDiagram,
  loopEventDetailLive,
  loopEventsListLive,
  loopLandingLive,
  loopMapViewLive,
  loopFriendsLiveRedacted,
  loopProfileLiveRedacted,
  loopRecommendationFlow,
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
const publicProjectAssetModules = import.meta.glob("../public/assets/projects/**/*", {
  eager: true,
  query: "?url",
  import: "default",
});
const publicMascotAssetModules = import.meta.glob("../public/assets/mascot/gym-coder/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});
const publicFacingSourceText = [
  evidenceDataSource,
  projectsDataSource,
  featuredProjectsSource,
  heroSource,
  gymCoderSource,
  indexPageSource,
  labProjectsSource,
  projectModuleSource,
  projectPageSource,
  secondaryWorkSource,
  toolkitSource,
  timelineSource,
].join("\n");

const journeySectionSourceText = [
  heroSource,
  aboutSource,
  featuredProjectsSource,
  timelineSource,
  toolkitSource,
  systemsMapSource,
  contactSource,
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
  "Project names lead",
  "Small builds that show foundations",
  "Technologies listed here come from",
  "Evidence, links, and boundaries",
  "without turning the UI into a backlog",
  "support the featured systems story",
];

const publicAssetExists = (src: string) =>
  Object.values(publicProjectAssetModules).some((asset) => String(asset).includes(src));

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
    expect(journeyStops.map((stop) => stop.navLabel)).toEqual([
      "Signal",
      "About",
      "Builds",
      "Evolution",
      "Toolkit",
      "Systems",
      "Contact",
    ]);
    expect(journeyStops.map((stop) => stop.index)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(indexPageSource).toContain("journeyStops.map");
    expect(indexPageSource).toContain("href={`#${stop.id}`}");
    expect(indexPageSource).toContain("data-journey-nav={stop.index}");
    expect(indexPageSource).not.toContain("<ProofStrip");
    expect(indexPageSource).not.toContain('href="#proof-strip"');
    expect(indexPageSource.indexOf("<About")).toBeGreaterThan(indexPageSource.indexOf("<Hero"));
    expect(indexPageSource.indexOf("<About")).toBeLessThan(indexPageSource.indexOf("<FeaturedProjects"));
  });

  it("keeps Signal Journey marker position derived from active station index", () => {
    for (const stop of journeyStops) {
      expect(journeySectionSourceText).toContain(`id="${stop.id}"`);
      expect(journeySectionSourceText).toContain(`data-journey-index="${stop.index}"`);
      expect(journeySectionSourceText).toContain(`data-journey-label="${stop.sectionLabel}"`);
    }

    expect(journeySectionSourceText.match(/data-journey-section/g) ?? []).toHaveLength(journeyStops.length);
    expect(indexPageSource).toContain("const journeySectionByIndex = new Map");
    expect(indexPageSource).toContain("const journeyPositionByIndex = new Map");
    expect(indexPageSource).toContain("const progress = activePosition / Math.max(journeySections.length - 1, 1)");
    expect(indexPageSource).toContain("scrollMarginTop");
    expect(indexPageSource).toContain("Select a stop");
    expect(indexPageSource).toContain('station.setAttribute("aria-current", "location")');
    expect(indexPageSource).not.toContain("rawProgress");
    expect(indexPageSource).not.toContain("journeyEnd");
  });

  it("adds a compact identity lockup and a section-specific Signal Core", () => {
    expect(baseLayoutSource).toContain('class="brand-mark"');
    expect(baseLayoutSource).toContain("Systems × Product");
    expect(indexPageSource).toContain("<JourneyDepthScene />");
    expect(indexPageSource).toContain('setProperty("--journey-scroll"');
    expect(indexPageSource).toContain("requestAnimationFrame(updateJourney)");
    expect(journeyDepthSceneSource).toContain('class="journey-depth-scene"');
    expect(journeyDepthSceneSource).toContain("journeyStops.map");
    expect(journeyDepthSceneSource).toContain("data-scene-state={stop.index}");
    expect(journeyDepthSceneSource).toContain("data-scene-count={stop.index}");
    expect(journeyDepthSceneSource.match(/data-scene-glyph=/g) ?? []).toHaveLength(7);
    expect(journeyDepthSceneSource).toContain("Signal journey");
    expect(journeyDepthSceneSource).toContain("Section in view");
    expect(journeyDepthSceneSource).toContain("Tracks the page beside it");
    expect(journeyDepthSceneSource).toContain("data-scene-detail={stop.index}");
    expect(journeyDepthSceneSource).toContain("data-scene-marker={stop.index}");
    expect(journeyStops.every((stop) => stop.sceneSummary.length >= 48)).toBe(true);
  });

  it("keeps the learning journey progressively enhanced and landmark-safe", () => {
    expect(baseLayoutSource).toContain('class="skip-link" href="#main-content"');
    expect(baseLayoutSource).toContain('<main id="main-content">');
    expect(indexPageSource).not.toContain('<main class="journey-content">');
    expect(indexPageSource).toContain('<div class="journey-content">');
    expect(indexPageSource).toContain('journeyRoot.classList.add("is-journey-ready")');
    expect(indexPageSource).toContain('"IntersectionObserver" in window');
  });

  it("keeps the hero right side focused on proof anchors, not a duplicate Signal Path", () => {
    expect(heroSource).toContain("Proof anchors");
    expect(heroSource).toContain("/assets/profile/atishay-jain-portrait.webp");
    expect(heroSource.match(/atishay-jain-portrait\.webp/g) ?? []).toHaveLength(1);
    expect(heroSource).toContain("Builder profile");
    expect(heroSource).toContain('alt="Atishay Jain in a black shirt, smiling with his arms crossed"');
    expect(heroSource).not.toContain("Signal path");
    expect(heroSource).not.toContain("Model to proof chain");
    expect(heroSource).not.toContain("signal-cursor");
  });

  it("provides compact mobile navigation and a distinct end-of-page return path", () => {
    expect(baseLayoutSource).toContain('class="primary-nav-links"');
    expect(baseLayoutSource).toContain('class="utility-nav-links"');
    expect(baseLayoutSource).toContain('class="footer-label">End of signal');
    expect(baseLayoutSource).toContain('const footerReturnHref = Astro.url.pathname === "/" ? "#top" : "/#top"');
    expect(baseLayoutSource).toContain('class="footer-return" href={footerReturnHref}');
    expect(baseLayoutSource).toContain('const duration = Math.min(1600, Math.max(850, Math.abs(distance) * 0.22))');
    expect(baseLayoutSource).toContain('const easeInOutCubic = (progress: number) =>');
    expect(baseLayoutSource).toContain('root.style.scrollBehavior = "auto"');
    expect(baseLayoutSource).toContain('portfolioScrollTo = scrollPortfolioTo');
    expect(indexPageSource).toContain('scrollPortfolioTo(destination, reducedMotion.matches)');
    expect(indexPageSource).toContain('class="journey-menu-toggle"');
    expect(indexPageSource).toContain('aria-controls="homepage-signal-path"');
    expect(indexPageSource).toContain('setJourneyMenuOpen(false)');
    expect(indexPageSource).toContain('event.key === "Escape"');
    expect(indexPageSource).toContain('window.history.pushState(null, "", href)');
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

  it("makes the learning progression explicit without changing project evidence status", () => {
    const lessons = featuredProjects.map((project) => project.homepageLesson);

    expect(lessons.every(Boolean)).toBe(true);
    expect(new Set(lessons).size).toBe(featuredProjects.length);
    expect(projectModuleSource).toContain("What I learned");
    expect(aboutSource).toContain("Each project added a harder problem");
    expect(timelineStages.every((stage) => /^(Learned|Applying)/.test(stage.capability))).toBe(true);
    expect(storyLearningPlan).toContain("## What AJ Learned");
    expect(storyLearningPlan).toContain("## Audience Reading Paths");
    expect(storyLearningPlan).toContain("## Evidence-Safe Boundaries");
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
      expect(project.links.every((link) => link.href.startsWith("https://") || link.href.startsWith("/resume/"))).toBe(true);
    }
  });

  it("makes featured project cards and titles route to internal case studies", () => {
    expect(projectModuleSource).toContain("project-card-link");
    expect(projectModuleSource).toContain("project-title-link");

    for (const project of featuredProjects) {
      expect(projectModuleSource).toContain('href={caseStudyHref}');
      expect(projectModuleSource).toContain('class="project-action project-card-link"');
      expect(`/projects/${project.slug}/`).toMatch(/^\/projects\/[a-z0-9-]+\/$/);
    }

    expect(projectModuleSource).toContain('class="project-action-row"');
    expect(projectModuleSource).toContain('target={link.isExternal ? "_blank" : undefined}');
    expect(projectModuleSource).toContain('rel={link.isExternal ? "noreferrer" : undefined}');
  });

  it("keeps lab project cards intentionally linked only when repos are verified", () => {
    const labLinks = new Map(
      (labProjects as Array<{ title: string; repoHref?: string }>).map((project) => [project.title, project.repoHref]),
    );

    expect(labLinks.get("Minimal RAG Implementation")).toBe("https://github.com/Atishay9828/RAG");
    expect(labLinks.get("Music Web Scraper")).toBe("https://github.com/Atishay9828/app10--web-scrape-music");
    expect(labLinks.get("Global Super Store Database Project")).toBe(
      "https://github.com/Atishay9828/Global-Super-Store-Database",
    );
    expect(labLinks.get("Fast and Curious Car Analysis")).toBe(
      "https://github.com/Atishay9828/Fast-and-Curious_Car-Analysis",
    );

    expect(labProjectsSource).toContain("lab-card-link");
    expect(labProjectsSource).toContain("project.repoHref");
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

  it("exposes the repo-local Full-Stack Software Engineer resume CTA when the public PDF exists", () => {
    expect(links.resume.status).toBe("Verified");
    expect(links.resume.href).toBe("/resume/atishay-jain-sde-resume.pdf");
    expect(links.resume.label).toBe("Full-Stack Software Engineer Resume");
    expect(sdeResume).toContain("atishay-jain-sde-resume.pdf");
    expect(JSON.stringify(links).toLowerCase()).not.toContain("data_analyst");
    expect(JSON.stringify(links).toLowerCase()).not.toContain("data analyst");
  });

  it("publishes the Def-Space certificate at the stable path embedded in the Full-Stack Software Engineer resume", () => {
    expect(bsercCertificate).toContain("certificates/bserc-def-space-2026.pdf");
    expect(sdeResume).toContain("resume/atishay-jain-sde-resume.pdf");
  });

  it("defines static routes for the homepage and featured case-study shells", () => {
    expect(routes).toEqual(["/", ...featuredProjects.map((project) => `/projects/${project.slug}/`)]);
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
        expect(publicAssetExists(asset.src), `${asset.src} should exist under public`).toBe(true);
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

  it("ships diagram assets for all main project visual panels", () => {
    const expectedDiagrams = [
      "/assets/projects/mahoraga/mahoraga-system-diagram.svg",
      "/assets/projects/mahoraga/mahoraga-reward-loop-diagram.svg",
      "/assets/projects/hybrid-categorizer/hybrid-routing-diagram.svg",
      "/assets/projects/hybrid-categorizer/hybrid-memory-feedback-diagram.svg",
      "/assets/projects/the-loop/the-loop-system-diagram.svg",
      "/assets/projects/the-loop/the-loop-recommendation-flow.svg",
      "/assets/projects/the-loop/the-loop-carpool-chat-flow.svg",
      "/assets/projects/the-loop/the-loop-deployment-diagram.svg",
    ];

    const allVisualSrcs = featuredProjects.flatMap((project) => project.visual.assets?.map((asset) => asset.src) ?? []);

    for (const diagram of expectedDiagrams) {
      expect(allVisualSrcs).toContain(diagram);
      expect(publicAssetExists(diagram), `${diagram} should exist under public`).toBe(true);
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
      "The Loop recommendation flow diagram showing interests, event tags, cosine similarity, joins, and updated user interests",
      "The Loop carpool and chat flow showing join, carpool request, friend request, chat history, and WebSocket delivery",
      "The Loop deployment diagram showing React Vite frontend, FastAPI Uvicorn backend, database, Google OAuth, Maps, and Render services",
    ]);
  });

  it("keeps unvalidated training metrics out of the public Mahoraga page", () => {
    const mahoragaAssets = getProjectBySlug("mahoraga")?.visual.assets ?? [];

    expect(mahoragaAssets.map((asset) => asset.src)).not.toContain(
      "/assets/projects/mahoraga/training_metrics.png",
    );
    expect(projectsDataSource).not.toContain("training_metrics.png");
  });

  it("ships production discovery metadata and browser security headers", () => {
    expect(baseLayoutSource).toContain('rel="canonical"');
    expect(baseLayoutSource).toContain('property="og:url"');
    expect(baseLayoutSource).toContain('/og-image.png');
    expect(notFoundPageSource).toContain("404 / SIGNAL LOST");
    expect(notFoundPageSource).toContain('robots="noindex, follow"');
    expect(robotsSource).toContain("Sitemap:");
    expect(sitemapSource).toContain("routes");
    expect(vercelConfigSource).toContain("Content-Security-Policy");
    expect(vercelConfigSource).toContain("frame-ancestors 'none'");
    expect(vercelConfigSource).toContain("X-Content-Type-Options");
    expect(vercelConfigSource).toContain("Permissions-Policy");
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
    expect(loopText).not.toContain("do not claim solo ownership");
    expect(loopText).toContain("collaborative/not separated");
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
      expect(item.sourceRepo).toMatch(
        /portfolio|meta_Mahoraga|Hybrid-GenAI|TIET-LOOP|ReceiptSplit|Global-Super-Store-Database/,
      );
      expect(item.proofFile).toBeTruthy();
      expect(item.proofType).toMatch(/dependency|config|import|docs/i);
    }

    expect(Object.keys(techEvidenceDocs)).toHaveLength(1);
    expect(String(Object.values(techEvidenceDocs)[0])).toContain("Evidence source");
  });

  it("renders grouped toolkit chips with clean labels and evidence for broad project stack", () => {
    const requiredToolkit = [
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "SQL",
      "React",
      "Next.js",
      "Astro",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "WebSockets",
      "Uvicorn",
      "ONNX Runtime",
      "DistilBERT",
      "Qwen2.5 GGUF",
      "llama.cpp",
      "PyTorch",
      "Gymnasium",
      "LoRA",
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "SQLAlchemy",
      "Docker",
      "GitHub Actions",
      "Render",
      "Auth/JWT",
      "Realtime",
      "OCR pipelines",
      "UPI deep links",
      "Maps",
      "Recommendations",
    ];

    for (const name of requiredToolkit) {
      expect(toolkit.map((item) => item.name)).toContain(name);
    }

    for (const item of toolkit) {
      expect(item.evidenceSource).toBeTruthy();
      expect(item.proofFile).toBeTruthy();
      expect(item.iconKey).toBeTruthy();
      expect(item.evidenceSource.toLowerCase()).not.toContain("guessed");
    }

    expect(toolkitSource).toContain("toolkit-chip");
    expect(toolkitSource).not.toContain("toolkit-chip-icon");
    expect(toolkitSource).not.toContain("slice(0, 2).toUpperCase()");
    expect(toolkitSource).not.toContain("proficiency");
    expect(String(Object.values(techEvidenceDocs)[0])).toContain("| Python |");
    expect(String(Object.values(techEvidenceDocs)[0])).toContain("| C++ |");
    expect(String(Object.values(techEvidenceDocs)[0])).toContain("| Docker |");
  });

  it("keeps featured homepage cards concise and lesson-led", () => {
    expect(featuredProjects.map((project) => project.statusLabel)).toEqual([
      "Prototype",
      "Local AI system",
      "Product system",
    ]);

    for (const project of featuredProjects) {
      expect(project.homepageHighlights).toHaveLength(3);
      expect(project.homepageBoundary).toBeTruthy();
    }

    expect(projectModuleSource).toContain('project.problem');
    expect(projectModuleSource).toContain('project.stack.slice(0, compact ? 4 : 3)');
    expect(projectModuleSource).toContain("Proof on file");
    expect(projectModuleSource).not.toContain("project-highlight-list");
    expect(projectModuleSource).not.toContain("project-boundary");
    expect(projectModuleSource).not.toContain("Portfolio role");
    expect(projectModuleSource).not.toContain("Key engineering decision");
    expect(projectModuleSource).not.toContain("action.description");
  });

  it("uses the full public name while preserving AJ as a visual mark", () => {
    expect(baseLayoutSource).toContain('aria-label="Atishay Jain portfolio home"');
    expect(baseLayoutSource).toContain('<strong>Atishay Jain</strong>');
    expect(baseLayoutSource).toContain('<span class="brand-mark">AJ</span>');
    expect(heroSource).toContain("Atishay Jain / Computer Engineering");
    expect(indexPageSource).toContain("Atishay Jain | AI Systems Engineer + Product Engineer");
    expect(projectPageSource).toContain("| Atishay Jain");
  });

  it("uses an editorial case-study hierarchy without repeating the homepage module", () => {
    expect(projectPageSource).not.toContain("ProjectModule");
    expect(projectPageSource).toContain("case-signal");
    expect(projectPageSource).toContain("See the system before the explanation.");
    expect(projectPageSource.indexOf("Visual proof")).toBeLessThan(projectPageSource.indexOf("01 / Build"));
    expect(projectPageSource).toContain("What this evidence does not claim");
  });

  it("keeps featured homepage cards focused on project details without cover thumbnails", () => {
    expect(projectsDataSource).not.toContain("homepageCover");
    expect(projectModuleSource).not.toContain('class="project-cover"');
    expect(projectModuleSource).not.toContain("project.homepageCover");
  });

  it("uses real draggable and resizable Gym Coder sprite frames", () => {
    const expectedMascotFrames = [
      "idle-1.webp",
      "idle-2.webp",
      "idle-3.webp",
      "idle-4.webp",
      "lift-1.webp",
      "lift-2.webp",
      "lift-3.webp",
      "lift-4.webp",
      "pump-1.webp",
      "pump-2.webp",
      "pump-3.webp",
      "pump-4.webp",
    ];
    const mascotAssets = Object.values(publicMascotAssetModules).map((asset) => String(asset));

    expect(indexPageSource).toContain('import GymCoderMascot from "../components/ui/GymCoderMascot.astro"');
    expect(indexPageSource).toContain("<GymCoderMascot />");
    expect(indexPageSource).not.toContain('class="site-buddy"');
    expect(indexPageSource).not.toContain("hey what up");
    expect(gymCoderSource).toContain('class="gym-coder"');
    expect(gymCoderSource).toContain('aria-label="Play Gym Coder mascot animation. Drag to move."');
    expect(gymCoderSource).toContain("data-gym-coder");
    expect(gymCoderSource).toContain("data-gym-drag-handle");
    expect(gymCoderSource).toContain("data-gym-resize");
    expect(gymCoderSource).not.toContain("data-gym-size-slider");
    expect(gymCoderSource).not.toContain('type="range"');
    expect(gymCoderSource).not.toContain('data-gym-size="up"');
    expect(gymCoderSource).not.toContain('data-gym-size="down"');
    expect(gymCoderSource).toContain("resizeHandle.setPointerCapture");
    expect(gymCoderSource).toContain("setPointerCapture");
    expect(gymCoderSource).toContain('resizeHandle?.addEventListener("keydown"');
    expect(gymCoderSource).toContain('event.key === "Home"');
    expect(gymCoderSource).toContain("localStorage");
    expect(gymCoderSource).toContain("--gym-scale");
    expect(gymCoderSource).toContain("<img");
    expect(gymCoderSource).toContain("/assets/mascot/gym-coder");
    expect(gymCoderSource).toContain("npm run glowup");
    expect(gymCoderSource).toContain("commit. learn. repeat.");
    for (const frame of expectedMascotFrames) {
      expect(gymCoderSource).toContain(frame);
      expect(mascotAssets.some((asset) => asset.includes(frame))).toBe(true);
    }
  });

  it("keeps Signal Evolution as a hierarchy instead of repeating Lab projects", () => {
    const timelineText = JSON.stringify(timelineStages);
    const labTitles = labProjects.map((project) => project.title);

    expect(timelineStages.map((stage) => stage.label)).toEqual([
      "Foundations",
      "Product Engineering",
      "AI Systems",
      "Adaptive Systems",
      "Current Direction",
    ]);
    expect(timelineText).toContain("The Loop");
    expect(timelineText).toContain("Hybrid GenAI Transaction Categorizer");
    expect(timelineText).toContain("Mahoraga");

    for (const labTitle of labTitles) {
      expect(timelineText).not.toContain(labTitle);
    }
  });

  it("keeps Evolution links consistent and explicit", () => {
    expect(timelineProjectLinks).toMatchObject({
      "The Loop": { href: "/projects/the-loop/", external: false },
      "Hybrid GenAI Transaction Categorizer": { href: "/projects/hybrid-categorizer/", external: false },
      Mahoraga: { href: "/projects/mahoraga/", external: false },
      ReceiptSplit: { href: "https://github.com/Atishay9828/ReceiptSplit", external: true },
    });
    expect(timelineSource).toContain('class:list={["timeline-project-link", link.external && "is-external"]}');
    expect(timelineSource).toContain('aria-label={link.external ? `${projectName} GitHub repo` : undefined}');
    expect(timelineSource).toContain('Icon name="github"');
  });

  it("grounds the About timeline in dated projects and explicit growth", () => {
    expect(yearlyProgress.map((step) => step.year)).toEqual([2025, 2025, 2026, 2026]);
    expect(yearlyProgress.every((step) => step.projects.length >= 2)).toBe(true);
    expect(yearlyProgress.every((step) => step.improvement.includes("→"))).toBe(true);

    const progressText = JSON.stringify(yearlyProgress);
    for (const project of ["The Loop", "Hybrid GenAI Categorizer", "Mahoraga", "ReceiptSplit", "PlantBrain (team)"]) {
      expect(progressText).toContain(project);
    }

    expect(aboutSource).toContain("Projects (&amp;)");
    expect(aboutSource).toContain("about-card__projects");
    expect(aboutSource).toContain("Improvement");
  });
});
