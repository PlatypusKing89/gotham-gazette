import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function rebuildImage(name, outputFile) {
  const dir = path.join(root, 'image-data', name);
  const chunks = fs.readdirSync(dir)
    .filter((file) => file.endsWith('.txt'))
    .sort()
    .map((file) => fs.readFileSync(path.join(dir, file), 'utf8').trim());

  if (!chunks.length) throw new Error(`No image chunks found for ${name}`);

  const buffer = Buffer.from(chunks.join(''), 'base64');
  fs.mkdirSync(path.join(root, 'public'), { recursive: true });
  fs.writeFileSync(path.join(root, 'public', outputFile), buffer);
  console.log(`Rebuilt ${outputFile}: ${buffer.length} bytes`);
}

rebuildImage('hero', 'chaos-city.webp');
rebuildImage('cartoon', 'optimist-reality.webp');
