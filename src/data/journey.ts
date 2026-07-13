export type JourneyStop = {
  index: number;
  id: string;
  navLabel: string;
  sectionLabel: string;
  sceneLabel: string;
  sceneSummary: string;
};

export const journeyStops = [
  {
    index: 0,
    id: "top",
    navLabel: "Signal",
    sectionLabel: "Signal",
    sceneLabel: "Identity / direction",
    sceneSummary: "What I build, how I think, and the proof behind the work.",
  },
  {
    index: 1,
    id: "about",
    navLabel: "About",
    sectionLabel: "About",
    sceneLabel: "Operating model / constraints",
    sceneSummary: "The principles and constraints that shape my engineering decisions.",
  },
  {
    index: 2,
    id: "featured-projects",
    navLabel: "Builds",
    sectionLabel: "Featured builds",
    sceneLabel: "Build / test / refine",
    sceneSummary: "Three complete systems, each connected to architecture and evidence.",
  },
  {
    index: 3,
    id: "signal-evolution",
    navLabel: "Evolution",
    sectionLabel: "Evolution",
    sceneLabel: "Lessons / trajectory",
    sceneSummary: "How each project changed the way I design and deliver systems.",
  },
  {
    index: 4,
    id: "toolkit",
    navLabel: "Toolkit",
    sectionLabel: "Toolkit",
    sceneLabel: "Evidence-derived toolkit",
    sceneSummary: "Tools grouped by the work they enable, not as a keyword wall.",
  },
  {
    index: 5,
    id: "systems-map",
    navLabel: "Systems",
    sectionLabel: "Systems map",
    sceneLabel: "Systems / architecture",
    sceneSummary: "Capabilities traced back to the projects that made them real.",
  },
  {
    index: 6,
    id: "contact",
    navLabel: "Contact",
    sectionLabel: "Contact",
    sceneLabel: "Inspect / collaborate",
    sceneSummary: "Inspect the evidence, open the repositories, or start a conversation.",
  },
] as const satisfies readonly JourneyStop[];

export const journeyStopCount = journeyStops.length;
