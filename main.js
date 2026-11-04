import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes';
import 'reveal.js/reveal.css';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/inter';
import './theme.css';
import { slides } from './slides.js';

document.querySelector('#slides').innerHTML = slides;
const deck = new Reveal({
  width: 1600, height: 900, margin: 0, minScale: 0.15, maxScale: 2,
  hash: true, history: true, center: false, controls: true,
  controlsLayout: 'edges', controlsBackArrows: 'visible', progress: true,
  transition: matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).get('transition') === 'none' ? 'none' : 'fade',
  transitionSpeed: 'fast', backgroundTransition: 'none',
  navigationMode: 'linear', slideNumber: false, showSlideNumber: 'print',
  pdfMaxPagesPerSlide: 1, pdfSeparateFragments: false,
  plugins: [RevealNotes],
});
await deck.initialize();
const updateChrome = () => {
  const current = deck.getCurrentSlide();
  document.body.dataset.surface = current.matches('.hero') ? 'split' : current.matches('.paper, .rose, .lime-field') ? 'light' : 'dark';
  const index = deck.getIndices().h;
  document.querySelector('#current-slide').textContent = String(index + 1).padStart(2, '0');
  document.querySelector('#total-slides').textContent = String(deck.getTotalSlides()).padStart(2, '0');
  document.querySelector('#chapter-label').textContent = deck.getCurrentSlide().dataset.chapter || 'PRESORA';
};
deck.on('slidechanged', updateChrome);
updateChrome();
document.querySelector('#overview').addEventListener('click', () => deck.toggleOverview());
document.querySelector('#notes').addEventListener('click', () => {
  const dialog = document.querySelector('#slide-notes');
  const current = deck.getCurrentSlide();
  dialog.querySelector('.note-title').textContent = current.querySelector('h1, h2').textContent;
  dialog.querySelector('.note-copy').textContent = current.querySelector('.notes')?.textContent || 'No notes for this slide.';
  deck.configure({ keyboard: false });
  dialog.showModal();
});
document.querySelector('#fullscreen').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch { document.querySelector('#shortcuts').showModal(); }
});
document.querySelector('#pdf').addEventListener('click', () => {
  const url = new URL(location.href);
  url.searchParams.set('print-pdf', '');
  url.hash = '';
  location.assign(url.href);
});
document.querySelector('#help').addEventListener('click', () => document.querySelector('#shortcuts').showModal());
for (const dialog of document.querySelectorAll('dialog')) {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => deck.configure({ keyboard: true }));
}
document.querySelectorAll('.screenshot-button').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.querySelector('img');
    const viewer = document.querySelector('#image-viewer');
    viewer.querySelector('img').src = source.src;
    viewer.querySelector('img').alt = source.alt;
    viewer.querySelector('p').textContent = button.dataset.caption;
    deck.configure({ keyboard: false });
    viewer.showModal();
  });
});
document.querySelector('#shortcuts').addEventListener('toggle', event => {
  if (event.newState === 'open') deck.configure({ keyboard: false });
});
if (new URLSearchParams(location.search).has('print-pdf')) document.body.classList.add('print-mode');
