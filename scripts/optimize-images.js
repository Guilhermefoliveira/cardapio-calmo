import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public/images');

// Configuração
const MAX_WIDTH = 1200; // Largura máxima para desktop retina
const QUALITY = 80;     // Qualidade WebP (80 é excelente e leve)

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const outputName = file.replace(ext, '.webp');
        const outputPath = path.join(directory, outputName);

        // Pular se já existe versão webp
        // if (fs.existsSync(outputPath)) continue;

        console.log(`Processing: ${file} ...`);
        
        try {
          await sharp(filePath)
            .resize({ 
              width: MAX_WIDTH, 
              withoutEnlargement: true, // Não aumenta se for menor
              fit: 'inside' 
            })
            .webp({ quality: QUALITY })
            .toFile(outputPath);

          const originalSize = (stat.size / 1024 / 1024).toFixed(2);
          const newSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
          
          console.log(`✅ Converted: ${outputName} (${originalSize}MB -> ${newSize}MB)`);
          
          // Opcional: Remover original para economizar espaço
          // fs.unlinkSync(filePath); 
        } catch (error) {
          console.error(`❌ Error processing ${file}:`, error);
        }
      }
    }
  }
}

console.log('🚀 Starting Image Optimization...');
await processDirectory(PUBLIC_DIR);
console.log('✨ All done!');
