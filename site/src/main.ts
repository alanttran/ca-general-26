import './styles/main.scss';
import { resolveBallotZip } from './data/ballot-profiles';
import { renderApp } from './render-app.ts';

const root = document.querySelector<HTMLDivElement>('#app');
if (!root) throw new Error('#app missing');

function mount(): void {
  const zip = resolveBallotZip(location.search);
  renderApp(root, zip);
}

mount();
window.addEventListener('popstate', mount);
