/**
 * Script to rename product image files and directories to kebab-case.
 * 
 * Converts:
 * - Spaces to hyphens
 * - Accented chars to ASCII equivalents
 * - Uppercase to lowercase
 * - Removes special chars
 * 
 * Run: node scripts/rename-images.js
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'products');

function toKebabCase(name) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .toLowerCase()
    .replace(/\s+/g, '-')           // spaces to hyphens
    .replace(/[^a-z0-9\-\.]/g, '')  // remove special chars (keep dots for extensions)
    .replace(/-+/g, '-')            // collapse multiple hyphens
    .replace(/^-|-$/g, '');         // trim hyphens
}

const renames = [];

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  // First, process files
  for (const entry of entries) {
    if (entry.isFile()) {
      const newName = toKebabCase(entry.name);
      if (newName !== entry.name) {
        const oldPath = path.join(dirPath, entry.name);
        const newPath = path.join(dirPath, newName);
        renames.push({ oldPath, newPath, oldName: entry.name, newName });
        fs.renameSync(oldPath, newPath);
        console.log(`  FILE: "${entry.name}" -> "${newName}"`);
      }
    }
  }

  // Then, recurse into subdirectories
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDir = path.join(dirPath, entry.name);
      processDirectory(subDir);

      // Rename directory itself after processing contents
      const newDirName = toKebabCase(entry.name);
      if (newDirName !== entry.name) {
        const newDirPath = path.join(dirPath, newDirName);
        renames.push({ oldPath: subDir, newPath: newDirPath, oldName: entry.name, newName: newDirName, isDir: true });
        fs.renameSync(subDir, newDirPath);
        console.log(`  DIR:  "${entry.name}" -> "${newDirName}"`);
      }
    }
  }
}

console.log('Renaming images to kebab-case...\n');
processDirectory(IMAGES_DIR);
console.log(`\nDone! ${renames.length} items renamed.`);

// Output JSON mapping for updating code references
const mappingFile = path.join(__dirname, 'rename-mapping.json');
const mapping = {};
for (const r of renames) {
  const relativePath = path.relative(path.join(__dirname, '..', 'public'), r.oldPath).replace(/\\/g, '/');
  const newRelativePath = path.relative(path.join(__dirname, '..', 'public'), r.newPath).replace(/\\/g, '/');
  mapping['/' + relativePath] = '/' + newRelativePath;
}
fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
console.log(`\nMapping saved to ${mappingFile}`);
