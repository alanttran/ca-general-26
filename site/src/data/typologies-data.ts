import type { TypologyDefinition } from "../types/ballot-types";

const pewTypologyBase = "https://www.pewresearch.org/politics/2021/11/09";

export const TYPOLOGIES: TypologyDefinition[] = [
  {
    code: "PL",
    name: "Progressive Left",
    description: "Young, secular, very liberal, pro-systemic-change",
    pewChapterUrl: `${pewTypologyBase}/progressive-left/`,
  },
  {
    code: "EL",
    name: "Establishment Liberals",
    description: "Compromise-friendly Biden Democrats",
    pewChapterUrl: `${pewTypologyBase}/establishment-liberals/`,
  },
  {
    code: "DM",
    name: "Democratic Mainstays",
    description: "Older, more religious, racially diverse moderate Dems",
    pewChapterUrl: `${pewTypologyBase}/democratic-mainstays/`,
  },
  {
    code: "OL",
    name: "Outsider Left",
    description: "Young, frustrated, less party-loyal liberals",
    pewChapterUrl: `${pewTypologyBase}/outsider-left/`,
  },
  {
    code: "SS",
    name: "Stressed Sideliners",
    description: "Disengaged, mixed politics, financially anxious",
    pewChapterUrl: `${pewTypologyBase}/stressed-sideliners/`,
  },
  {
    code: "AR",
    name: "Ambivalent Right",
    description: "Moderate Republicans, anti-Trump-leaning",
    pewChapterUrl: `${pewTypologyBase}/ambivalent-right/`,
  },
  {
    code: "PR",
    name: "Populist Right",
    description: "Working-class, anti-elite, MAGA-adjacent",
    pewChapterUrl: `${pewTypologyBase}/populist-right/`,
  },
  {
    code: "CC",
    name: "Committed Conservatives",
    description: "Traditional Reagan-Republican business conservatives",
    pewChapterUrl: `${pewTypologyBase}/committed-conservatives/`,
  },
  {
    code: "FF",
    name: "Faith and Flag Conservatives",
    description: "Religious right, MAGA core",
    pewChapterUrl: `${pewTypologyBase}/faith-and-flag-conservatives/`,
  },
];
