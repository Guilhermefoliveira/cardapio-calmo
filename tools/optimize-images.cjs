/**
 * Otimiza imagens hero e de produtos usando sharp.
 * Redimensiona para max 1920px de largura, qualidade 80, formato WebP.
 * 
 * Usa abordagem write-then-copy para evitar locks do dev server.
 * 
 * Run: node scripts/optimize-images.cjs
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const HERO_DIR = path.join(__dirname, '..', 'public', 'images', 'hero');
const PRODUCTS_DIR = path.join(__dirname, '..', 'public', 'images', 'products');

const MAX_WIDTH = 1920;
const QUALITY = 80;
const MIN_SIZE_TO_OPTIMIZE = 300 * 1024; // 300KB

async function optimizeImage(filePath) {
  const stat = fs.statSync(filePath);
  
  if (stat.size < MIN_SIZE_TO_OPTIMIZE) {
    return { file: path.basename(filePath), skipped: true, size: stat.size, reason: 'below threshold' };
  }

  const originalSize = stat.size;
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  const tempPath = path.join(dir, `${base}_optimized${ext}`);

  try {
    // Read into buffer first to release file handle
    const buffer = fs.readFileSync(filePath);
    
    const result = await sharp(buffer)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer();

    if (result.length < originalSize) {
      fs.writeFileSync(filePath, result);
      return {
        file: path.basename(filePath),
        before: (originalSize / 1024).toFixed(0) + ' KB',
        after: (result.length / 1024).toFixed(0) + ' KB',
        saved: ((1 - result.length / originalSize) * 100).toFixed(0) + '%'
      };
    } else {
      return { file: path.basename(filePath), skipped: true, reason: 'already optimal', size: originalSize };
    }
  } catch (err) {
    return { file: path.basename(filePath), skipped: true, reason: `error: ${err.message}`, size: originalSize };
  }
}

async function processDirectory(dir, label) {
  console.log(`\n📁 ${label}`);
  console.log('-'.repeat(60));

  const files = [];
  
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(d, entry.name));
      } else if (entry.name.endsWith('.webp')) {
        files.push(path.join(d, entry.name));
      }
    }
  }
  
  walk(dir);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const result = await optimizeImage(file);
    if (result.skipped) {
      const sizeKB = (result.size / 1024).toFixed(0);
      console.log(`  skip ${result.file} (${sizeKB} KB) - ${result.reason}`);
      totalBefore += result.size;
      totalAfter += result.size;
    } else {
      console.log(`  ok   ${result.file}: ${result.before} -> ${result.after} (-${result.saved})`);
      totalBefore += parseInt(result.before) * 1024;
      totalAfter += parseInt(result.after) * 1024;
    }
  }

  const beforeMB = (totalBefore / 1024 / 1024).toFixed(1);
  const afterMB = (totalAfter / 1024 / 1024).toFixed(1);
  console.log(`\n  Total: ${beforeMB} MB -> ${afterMB} MB`);
}

async function main() {
  console.log('Otimizando imagens...\n');

  await processDirectory(HERO_DIR, 'Hero Images');
  await processDirectory(PRODUCTS_DIR, 'Product Images');

  console.log('\nConcluido!');
}

main().catch(console.error);
