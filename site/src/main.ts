import './styles/main.scss';
import { BALLOT_PROFILES, resolveBallotZip } from './data/ballot-profiles';
import { loadZipDistricts } from './data/zip-lookup';
import { renderApp } from './render-app.ts';

const root = document.querySelector<HTMLDivElement>('#app');
if (!root) throw new Error('#app missing');

async function mount(): Promise<void> {
  const zip = resolveBallotZip(location.search);
  if (!BALLOT_PROFILES[zip]) await loadZipDistricts();
  renderApp(root!, zip);
}

void mount();
window.addEventListener('popstate', () => void mount());
