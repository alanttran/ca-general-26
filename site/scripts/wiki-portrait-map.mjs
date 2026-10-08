/** Candidate id → English Wikipedia REST title (underscore form). Add entries as race files land. */
export const WIKI_BY_CANDIDATE_ID = {
  'xavier-becerra': 'Xavier_Becerra',
  'steve-hilton': 'Steve_Hilton',
  'fiona-ma': 'Fiona_Ma',
  'gloria-romero': 'Gloria_Romero_(politician)',
  'shirley-weber': 'Shirley_Weber',
  'don-wagner': 'Donald_P._Wagner',
  'malia-cohen': 'Malia_Cohen',
  'eleni-kounalakis': 'Eleni_Kounalakis',
  'rob-bonta': 'Rob_Bonta',
  'ben-allen': 'Ben_Allen_(California_politician)',
  'jane-kim': 'Jane_Kim',
  'tom-umberg': 'Tom_Umberg',
  'scott-peters': 'Scott_Peters_(politician)',
  'mara-elliott': 'Mara_Elliott',
  'chris-ward': 'Chris_Ward_(California_politician)',
  'kent-lee': 'Kent_Lee_(politician)',
};

export function wikiSummaryUrl(title) {
  return `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
}
