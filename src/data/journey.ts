export type JourneyStop = {
  index: number;
  id: string;
  navLabel: string;
  sectionLabel: string;
  sceneLabel: string;
};

export const journeyStops = [
  {
    index: 0,
    id: "top",
    navLabel: "Signal",
    sectionLabel: "Signal",
    sceneLabel: "Identity / direction",
  },
  {
    index: 1,
    id: "about",
    navLabel: "About",
    sectionLabel: "About",
    sceneLabel: "Operating model / constraints",
  },
  {
    index: 2,
    id: "featured-projects",
    navLabel: "Builds",
    sectionLabel: "Featured builds",
    sceneLabel: "Build / test / refine",
  },
  {
    index: 3,
    id: "signal-evolution",
    navLabel: "Evolution",
    sectionLabel: "Evolution",
    sceneLabel: "Lessons / trajectory",
  },
  {
    index: 4,
    id: "toolkit",
    navLabel: "Toolkit",
    sectionLabel: "Toolkit",
    sceneLabel: "Evidence-derived toolkit",
  },
  {
    index: 5,
    id: "systems-map",
    navLabel: "Systems",
    sectionLabel: "Systems map",
    sceneLabel: "Systems / architecture",
  },
  {
    index: 6,
    id: "contact",
    navLabel: "Contact",
    sectionLabel: "Contact",
    sceneLabel: "Inspect / collaborate",
  },
] as const satisfies readonly JourneyStop[];

export const journeyStopCount = journeyStops.length;
