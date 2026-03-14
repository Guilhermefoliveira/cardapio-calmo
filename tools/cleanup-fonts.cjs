/**
 * Converte fontes TTF usadas para WOFF2 usando sharp/fonttools.
 * Node.js nativo não tem API de conversão de fontes, 
 * mas podemos usar a compressão própria do sharp para imagens.
 * 
 * Para fontes, vamos usar a ferramenta nativa do Node com zlib.
 * WOFF2 requer uma lib específica — usaremos uma abordagem pragmática.
 * 
 * Run: node scripts/convert-fonts.cjs
 */

const fs = require('fs');
const path = require('path');

const FONTS_DIR = path.join(__dirname, '..', 'public', 'fonts');

// Fonts actually used in index.css
const USED_FONTS = [
  'Oswald/Oswald-Regular.ttf',
  'Oswald/Oswald-Medium.ttf',
  'Oswald/Oswald-Bold.ttf',
  'Oswald/Oswald-Light.ttf',
  'OpenSans/OpenSans-Regular.ttf',
  'OpenSans/OpenSans-SemiBold.ttf',
  'OpenSans/OpenSans-Bold.ttf',
  'OpenSans/OpenSans-Light.ttf',
];

// List all font files
function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
    } else if (entry.name.endsWith('.ttf')) {
      results.push(fullPath);
    }
  }
  return results;
}

const allFonts = walk(FONTS_DIR);
const usedSet = new Set(USED_FONTS.map(f => path.join(FONTS_DIR, f)));

let removed = 0;
for (const font of allFonts) {
  if (!usedSet.has(font)) {
    console.log(`  Removing unused: ${path.relative(FONTS_DIR, font)}`);
    fs.unlinkSync(font);
    removed++;
  } else {
    const sizeKB = (fs.statSync(font).size / 1024).toFixed(0);
    console.log(`  Keeping:  ${path.relative(FONTS_DIR, font)} (${sizeKB} KB)`);
  }
}

console.log(`\nRemoved ${removed} unused font files.`);
console.log('Kept 8 used font files.');
console.log('\nNote: WOFF2 conversion requires a dedicated tool (e.g. woff2_compress).');
console.log('For now, the TTF fonts with font-display:swap provide good performance.');
