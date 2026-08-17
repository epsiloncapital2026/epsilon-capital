import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/logo1.png");
const output = path.join(__dirname, "../public/logo1.png");

function shouldBeTransparent(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const isNeutral = max - min < 18;

  if (isNeutral && max >= 175) return true;
  if (isNeutral && max >= 150 && min >= 130) return true;

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

  if (shouldBeTransparent(r, g, b)) {
    data[i + 3] = 0;
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log("Logo background removed:", output);
