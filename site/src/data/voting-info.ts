/**
 * “How and when to vote” for the Nov 3, 2026 general: key dates and lookup links per county (or Denver).
 * Checked Oct 13, 2026 against the CA Secretary of State key-dates page, each county registrar’s
 * 2026 election pages and Denver Elections; a county we haven’t checked gets the statewide rules.
 */
export interface VoteDate {
  /** ISO date, so past dates can be dimmed. */
  iso: string;
  label: string;
  text: string;
}

export interface VotingInfo {
  where: string;
  dates: VoteDate[];
  links: { label: string; url: string }[];
  /** One-line warning that matters most for this place. */
  heads?: string;
}

const CA_REGISTER = { label: 'Register to vote or update your address', url: 'https://registertovote.ca.gov/' };
const CA_STATUS = { label: 'Check your registration status', url: 'https://voterstatus.sos.ca.gov/' };
const CA_TRACK = { label: 'Track your ballot (Where’s My Ballot?)', url: 'https://wheresmyballot.sos.ca.gov/' };

const caDates = (opts: { early: string; centers?: [string, string] }): VoteDate[] => [
  {
    iso: '2026-10-05',
    label: 'Oct 5',
    text: `Mail ballots go out and drop boxes open. ${opts.early}`,
  },
  {
    iso: '2026-10-19',
    label: 'Oct 19',
    text: 'Last day to register the usual way. After that you can still register and vote the same day at a vote center or the county elections office (your ballot is counted once your registration is confirmed).',
  },
  ...(opts.centers
    ? [
        { iso: '2026-10-24', label: 'Oct 24', text: opts.centers[0] },
        { iso: '2026-10-31', label: 'Oct 31', text: opts.centers[1] },
      ]
    : [
        {
          iso: '2026-10-24',
          label: 'Oct 24',
          text: 'Vote centers open in counties that use them. Check your county for in-person locations and hours.',
        },
      ]),
  {
    iso: '2026-11-03',
    label: 'Nov 3',
    text: 'Election Day: vote in person 7 a.m.–8 p.m. Drop boxes close at 8 p.m. Mailed ballots must be postmarked by Nov 3 and arrive by Nov 10.',
  },
];

const VC_OPEN: [string, string] = [
  'The first vote centers open for in-person voting, same-day registration and ballot drop-off.',
  'All vote centers open through Election Day. You can vote at any vote center in the county.',
];

const CA_COUNTIES: Record<string, VotingInfo> = {
  'San Diego': {
    where: 'San Diego County',
    dates: caDates({ early: 'You can also vote in person at the Registrar’s office, 5600 Overland Ave (weekdays 8–5).', centers: VC_OPEN }),
    links: [
      { label: 'Vote center locations', url: 'https://www.sdvote.com/content/rov/en/elections/vote-center-locations.html' },
      { label: 'Ballot drop box locations', url: 'https://www.sdvote.com/content/rov/en/elections/ballot-drop-box-locations.html' },
      { label: 'Important dates (Registrar)', url: 'https://www.sdvote.com/content/rov/en/elections/election-information/important-dates.html' },
      CA_TRACK,
      CA_REGISTER,
    ],
  },
  'Los Angeles': {
    where: 'Los Angeles County',
    dates: caDates({
      early: 'Return yours at any of 400+ drop boxes.',
      centers: [
        'Vote centers open for in-person voting, same-day registration and ballot drop-off (10 a.m.–7 p.m. until Election Day).',
        'More vote centers open through Election Day. You can vote at any vote center in the county.',
      ],
    }),
    links: [
      { label: 'Find a vote center', url: 'https://locator.lavote.gov/locations/vc?culture=en' },
      { label: 'Find a drop box', url: 'https://locator.lavote.gov/locations/vbm?culture=en' },
      { label: 'Your election information (LA County)', url: 'https://www.lavote.gov/home/voting-elections/current-elections/find-my-election-information' },
      CA_TRACK,
      CA_REGISTER,
    ],
  },
  Orange: {
    where: 'Orange County',
    dates: caDates({
      early: 'You can also vote in person at the Registrar’s office, 1300 S. Grand Ave, Bldg. C, Santa Ana.',
      centers: [
        'The first vote centers open (10 a.m.–6 p.m.) for in-person voting, same-day registration and drop-off.',
        'All vote centers open through Election Day. You can vote at any vote center in the county.',
      ],
    }),
    links: [
      { label: 'Find a vote center or drop box', url: 'https://ocvote.gov/locate' },
      { label: 'Track your ballot (OC)', url: 'https://ocvote.gov/track' },
      { label: '2026 general election (Registrar)', url: 'https://ocvote.gov/elections/2026-general-election' },
      CA_REGISTER,
    ],
  },
  Riverside: {
    where: 'Riverside County',
    dates: caDates({ early: 'You can also vote in person at the Registrar’s office, 2720 Gateway Dr., Riverside (weekdays 8–5).', centers: VC_OPEN }),
    links: [
      { label: 'Vote centers and drop boxes (statewide lookup)', url: 'https://caearlyvoting.sos.ca.gov/' },
      { label: 'Riverside County Registrar', url: 'https://www.voteinfo.net/' },
      CA_TRACK,
      CA_REGISTER,
    ],
  },
  Placer: {
    where: 'Placer County',
    dates: caDates({
      early: 'The Elections Office is at 3715 Atherton Rd., Rocklin.',
      centers: [
        'Seven vote centers open (8 a.m.–4 p.m.) for in-person voting, same-day registration and drop-off.',
        'All 30 vote centers open through Election Day. You can vote at any of them.',
      ],
    }),
    links: [
      { label: 'Vote center locations', url: 'https://www.placercountyelections.gov/vote-center-locations/' },
      { label: 'Drop box locations', url: 'https://www.placercountyelections.gov/drop-box-locations/' },
      { label: 'Current elections (Placer)', url: 'https://www.placercountyelections.gov/current-elections/' },
      CA_TRACK,
      CA_REGISTER,
    ],
  },
  Alameda: {
    where: 'Alameda County',
    dates: caDates({
      early: 'You can also vote in person at the Registrar’s office, 1225 Fallon St., Oakland.',
      centers: [
        'About 20 vote centers open (9 a.m.–5 p.m.) for in-person voting, same-day registration and drop-off.',
        'About 80 more vote centers open through Election Day. You can vote at any of them.',
      ],
    }),
    links: [
      { label: 'Vote center list', url: 'https://alamedacountyca.gov/rov_app/vcalist?electionid=260' },
      { label: 'Drop box map', url: 'https://alamedacountyca.gov/rovapps/maps/ballotdropbox_map.htm' },
      { label: 'Election calendar (Alameda)', url: 'https://acvote.alamedacountyca.gov/election-information/calendar' },
      CA_TRACK,
      CA_REGISTER,
    ],
  },
  'Santa Clara': {
    where: 'Santa Clara County',
    dates: caDates({
      early: 'You can also vote in person at the Registrar’s office, 1555 Berger Dr., San José (weekdays 8–5).',
      centers: [
        'The first vote centers open (9 a.m.–5 p.m.) for in-person voting, same-day registration and drop-off.',
        'All vote centers open through Election Day. You can vote at any vote center in the county.',
      ],
    }),
    links: [
      { label: 'Find a vote center', url: 'https://vote.santaclaracounty.gov/find-vote-center' },
      { label: 'Drop boxes and early voting', url: 'https://vote.santaclaracounty.gov/vote-mail/official-ballot-drop-box-sites-and-early-voting-information' },
      { label: 'Track your ballot (Santa Clara)', url: 'https://vote.santaclaracounty.gov/track-your-ballot' },
      CA_REGISTER,
    ],
  },
};

const CA_GENERIC: VotingInfo = {
  where: 'California',
  dates: caDates({ early: 'Many county elections offices also open for in-person voting.' }),
  links: [
    { label: 'Early voting, vote centers and drop boxes', url: 'https://caearlyvoting.sos.ca.gov/' },
    { label: 'Your county’s polling place lookup', url: 'https://www.sos.ca.gov/elections/polling-place' },
    CA_TRACK,
    CA_STATUS,
    CA_REGISTER,
  ],
};

const DENVER: VotingInfo = {
  where: 'Denver',
  heads: 'In Colorado, postmarks don’t count: your ballot has to reach a drop box, a voter center or the clerk by 7 p.m. on Nov 3.',
  dates: [
    { iso: '2026-10-05', label: 'Oct 5', text: 'Denver mails ballots and its 24-hour drop boxes open.' },
    { iso: '2026-10-12', label: 'Oct 12', text: 'The main voter center at the Denver Central Library opens.' },
    { iso: '2026-10-19', label: 'Oct 19', text: 'More voter service and polling centers open, with more added Oct 26, Oct 30 and Nov 2.' },
    {
      iso: '2026-10-26',
      label: 'Oct 26',
      text: 'Last day to register and still get a ballot by mail. After this, mailing your ballot back is risky. Use a drop box instead.',
    },
    {
      iso: '2026-11-03',
      label: 'Nov 3',
      text: 'Election Day: ballots must be received by 7 p.m. You can register and vote in person at any voter center until 7 p.m. (bring ID).',
    },
  ],
  links: [
    {
      label: 'Where to vote in Denver',
      url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Denver-Clerk-and-Recorder/Elections-Division/Where-to-Vote-in-Denver',
    },
    { label: 'Voter center and drop box map', url: 'https://www.denvergov.org/Maps/map/electionservices' },
    { label: 'Track your ballot (BallotTrax)', url: 'https://denver.ballottrax.net' },
    { label: 'Register or check your registration', url: 'https://www.govotecolorado.gov' },
  ],
};

/** Picks the county from the registrar name or the ZIP’s county label; unknown counties get the statewide rules. */
export function votingInfoFor(state: 'CA' | 'CO' | undefined, registrarLabel: string, scopeLabel: string): VotingInfo {
  if (state === 'CO') return DENVER;
  const text = `${registrarLabel} ${scopeLabel}`;
  const county = Object.keys(CA_COUNTIES).find((name) => text.includes(`${name} County`));
  return county ? CA_COUNTIES[county] : CA_GENERIC;
}
