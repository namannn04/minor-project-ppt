import { readFileSync, existsSync } from 'node:fs';
const source = readFileSync(new URL('../slides.js', import.meta.url), 'utf8');
const count = (source.match(/<section\b/g) || []).length;
const notes = (source.match(/\$\{note\(/g) || []).length;
const images = [...source.matchAll(/screenshot\('([^']+)'/g)].map(m => m[1]);
const missing = images.filter(file => !existsSync(new URL(`../assets/${file}`, import.meta.url)));
if (count !== 13 || notes !== count || images.length !== 10 || missing.length) {
  throw new Error(JSON.stringify({ count, notes, images: images.length, missing }));
}
console.log(`Deck structure verified: ${count} slides, ${notes} speaker notes, ${images.length} screenshot placements from ${new Set(images).size} local captures.`);
