/**
 * Builds the web brand assets in src/assets/brand from the brand kit PNGs.
 * Trims the transparent margins, maps illustration colours to the brand
 * manual palette and writes lossless WebP.
 *
 * Run: node tools/prepare-brand-assets.cjs <brand-kit-dir>
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'brand');

const BLUE = [0x34, 0x65, 0x7e];
const ORANGE = [0xfd, 0x94, 0x46];

// source file -> output name. `maxWidth` is 3x the largest rendered width.
const ASSETS = [
  { src: '1.png', out: 'signature-vertical', maxWidth: 720 },
  { src: '6.png', out: 'signature-vertical-beige', maxWidth: 720 },
  { src: '2.png', out: 'signature-horizontal', maxWidth: 1260 },
  { src: '7.png', out: 'signature-horizontal-beige', maxWidth: 1260 },
  { src: '5.png', out: 'comma', maxWidth: 240 },
  { src: '24.png', out: 'illustration-pause', maxWidth: 900, recolor: true },
  { src: '25.png', out: 'illustration-skate', maxWidth: 780, recolor: true },
  { src: '23.png', out: 'illustration-headphones', maxWidth: 780, recolor: true },
];

async function loadTrimmed(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  let left = width, top = height, right = -1, bottom = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > 8) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
  }

  return { data, width, height, box: { left, top, width: right - left + 1, height: bottom - top + 1 } };
}

// Flat two-colour artwork: every visible pixel becomes brand blue or brand orange.
function recolor(data) {
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const target = data[i + 2] > data[i] ? BLUE : ORANGE;
    data[i] = target[0];
    data[i + 1] = target[1];
    data[i + 2] = target[2];
  }
}

async function buildAsset(kitDir, asset) {
  const { data, width, height, box } = await loadTrimmed(path.join(kitDir, asset.src));
  if (asset.recolor) recolor(data);

  const outPath = path.join(OUT_DIR, `${asset.out}.webp`);
  const info = await sharp(data, { raw: { width, height, channels: 4 } })
    .extract(box)
    .resize({ width: asset.maxWidth, withoutEnlargement: true })
    .webp({ lossless: true })
    .toFile(outPath);

  console.log(`  ${asset.out}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)} KB`);
}

// Staggered comma grid from the manual (p. 29): two commas per tile.
async function buildPattern() {
  const commaHeight = 132;
  const comma = await sharp(path.join(OUT_DIR, 'comma.webp')).resize({ height: commaHeight }).toBuffer();
  const { width: commaWidth } = await sharp(comma).metadata();

  const tileWidth = Math.round(commaWidth * 3.9);
  const tileHeight = Math.round(commaHeight * 3.8);
  const at = (cx, cy) => ({
    input: comma,
    left: Math.round(tileWidth * cx - commaWidth / 2),
    top: Math.round(tileHeight * cy - commaHeight / 2),
  });

  const info = await sharp({
    create: { width: tileWidth, height: tileHeight, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([at(0.25, 0.25), at(0.75, 0.75)])
    .webp({ lossless: true })
    .toFile(path.join(OUT_DIR, 'comma-pattern.webp'));

  console.log(`  comma-pattern.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)} KB`);
}

async function main() {
  const kitDir = process.argv[2];
  if (!kitDir || !fs.existsSync(kitDir)) {
    console.error('Usage: node tools/prepare-brand-assets.cjs <brand-kit-dir>');
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log('Brand assets:');
  for (const asset of ASSETS) await buildAsset(kitDir, asset);
  await buildPattern();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
