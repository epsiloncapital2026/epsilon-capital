import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/logo1.png");
const darkOutput = path.join(__dirname, "../public/logo1-dark.png");

function isOrange(r, g, b) {
  return r > 160 && g > 50 && g < 180 && b < 120 && r > g && g > b;
}

function isDark(r, g, b) {
  return r < 120 && g < 120 && b < 120;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const darkData = Buffer.from(data);

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];

  if (a === 0) continue;

  if (isOrange(r, g, b)) {
    darkData[i] = 255;
    darkData[i + 1] = 107;
    darkData[i + 2] = 0;
    darkData[i + 3] = 255;
  } else if (isDark(r, g, b)) {
    darkData[i] = 255;
    darkData[i + 1] = 255;
    darkData[i + 2] = 255;
    darkData[i + 3] = 255;
  }
}

await sharp(darkData, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(darkOutput);

console.log("Dark logo created:", darkOutput);
