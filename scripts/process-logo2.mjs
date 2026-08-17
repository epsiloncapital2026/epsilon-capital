import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/logo2.jpeg");
const output = path.join(__dirname, "../public/logo2.png");

/** Matches footer bg-brand-gray-900 (#171717) */
const BG = { r: 23, g: 23, b: 23 };

function isBackground(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max < 55 && max - min < 20) return true;
  return false;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  if (isBackground(r, g, b)) {
    data[i] = BG.r;
    data[i + 1] = BG.g;
    data[i + 2] = BG.b;
    data[i + 3] = 255;
  }
}

const processed = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toBuffer();

const trimmed = await sharp(processed).trim().png().toBuffer();
await sharp(trimmed).toFile(output);

const meta = await sharp(output).metadata();
console.log(`logo2.png: ${meta.width}x${meta.height}`);
