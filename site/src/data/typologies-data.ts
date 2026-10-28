import type { TypologyCode, TypologyDefinition } from "../types/ballot-types";

const pewTypologyBase = "https://www.pewresearch.org/politics/2026/06/10";

/** Pew’s 2026 political typology (June 10, 2026), left to right. */
export const PEW_TYPOLOGY_URL = `${pewTypologyBase}/beyond-red-vs-blue-the-political-typology/`;

/** Pew’s online typology quiz (2026 groups; 24 of the 30 survey questions). */
export const PEW_QUIZ_URL = "https://www.pewresearch.org/politics/quiz/political-typology";

export const TY_CODES: TypologyCode[] = ["LP", "LL", "LO", "OO", "TM", "PP", "UR", "FC", "NA"];

export const TYPOLOGIES: TypologyDefinition[] = [
  {
    code: "LP",
    name: "Leftward Progressives",
    description: "Young, very liberal, sharpest critics of the economic system",
    pewChapterUrl: `${pewTypologyBase}/leftward-progressives/`,
  },
  {
    code: "LL",
    name: "Loyal Liberals",
    description: "Highly engaged, institution-trusting Democrats",
    pewChapterUrl: `${pewTypologyBase}/loyal-liberals/`,
  },
  {
    code: "LO",
    name: "Left-Out Left",
    description: "Working-class, Democratic-leaning, distrustful of politicians",
    pewChapterUrl: `${pewTypologyBase}/left-out-left/`,
  },
  {
    code: "OO",
    name: "Order and Opportunity Left",
    description: "Diverse, economically liberal, concerned about crime and order",
    pewChapterUrl: `${pewTypologyBase}/order-and-opportunity-left/`,
  },
  {
    code: "TM",
    name: "Tuned-Out Middle",
    description: "Disengaged, financially strained, mixed views",
    pewChapterUrl: `${pewTypologyBase}/tuned-out-middle/`,
  },
  {
    code: "PP",
    name: "Pragmatic and Polite Right",
    description: "Older, civil, economically conservative, cool on Trump",
    pewChapterUrl: `${pewTypologyBase}/pragmatic-and-polite-right/`,
  },
  {
    code: "UR",
    name: "Unconventional Right",
    description: "Younger, less religious, firm on immigration, mixed on social issues",
    pewChapterUrl: `${pewTypologyBase}/unconventional-right/`,
  },
  {
    code: "FC",
    name: "Faith First Conservatives",
    description: "Highly religious social conservatives, strong Trump backers",
    pewChapterUrl: `${pewTypologyBase}/faith-first-conservatives/`,
  },
  {
    code: "NA",
    name: "No Apologies Right",
    description: "Hard-line, combative MAGA conservatives",
    pewChapterUrl: `${pewTypologyBase}/no-apologies-right/`,
  },
];
