import type { BallotProfile } from './ballot-profiles';

/**
 * One-off Colorado ballot by request: Denver ZIP 80204 (see docs/denver-80204-scope.md).
 * `state: 'CO'` drops California’s statewide races; Colorado’s statewide offices and measures are listed here.
 */
export const COLORADO_PROFILES: Record<string, BallotProfile> = {
  '80204': {
    zip: '80204',
    scopeLabel: 'West Denver, Colorado',
    state: 'CO',
    verificationNote:
      'Built from Colorado’s certified candidate list, the Blue Book and Denver’s ballot booklet for this ZIP (West Colfax, Sun Valley, Villa Park, La Alma/Lincoln Park, Auraria). All of 80204 is in Denver and Denver Public Schools. Legislative and RTD seats depend on your address: about 89% vote for State Senate District 34 and 11% for District 31; about 64% for State House District 4 and 36% for District 5; about 89% for RTD District C (the rest are in District A, which isn’t up). Trust your official sample ballot over us.',
    registrarLabel: 'Denver Elections Division',
    registrarUrl: 'https://www.denvergov.org/elections',
    localRaceIds: [
      'co-us-senate', 'co-us-rep-cd1',
      'co-governor', 'co-secretary-of-state', 'co-treasurer', 'co-attorney-general', 'co-state-board-ed-cd1',
      'co-senate-sd34', 'co-senate-sd31', 'co-house-hd4', 'co-house-hd5',
      'denver-council-at-large-b', 'co-rtd-district-c',
      'co-retention-supreme', 'co-retention-appeals', 'co-retention-denver-district', 'co-retention-denver-county',
      'co-amendment-81', 'co-amendment-82', 'co-amendment-83', 'co-amendment-84', 'co-amendment-85', 'co-amendment-86', 'co-amendment-87',
      'co-prop-nn', 'co-prop-132', 'co-prop-133', 'co-prop-134', 'co-prop-135', 'co-prop-136', 'co-prop-137',
      'denver-measure-2h', 'denver-measure-2i', 'denver-measure-2j', 'denver-measure-2k', 'denver-measure-311', 'dps-measure-4a',
    ],
    partialShares: {
      'co-senate-sd34': 89, 'co-senate-sd31': 11, 'co-house-hd4': 64, 'co-house-hd5': 36, 'co-rtd-district-c': 89,
    },
  },
};
