import './styles/main.scss';
import { BALLOT_PROFILES, resolveBallotZip } from './data/ballot-profiles';
import { loadZipDistricts } from './data/zip-lookup';
import { ensureLocalRaces } from './data/build-ballot-data';
import { renderApp } from './render-app.ts';

const root = document.querySelector<HTMLDivElement>('#app');
if (!root) throw new Error('#app missing');

async function mount(): Promise<void> {
  const zip = resolveBallotZip(location.search);
  if (!BALLOT_PROFILES[zip]) await loadZipDistricts();
  await ensureLocalRaces(zip);
  renderApp(root!, zip);
}

void mount();
// Back/forward between ZIPs re-renders; in-page #race links only change the hash, so the page (and open races) stays put.
window.addEventListener('popstate', () => {
  if (resolveBallotZip(location.search) !== root!.dataset.zip) void mount();
});
