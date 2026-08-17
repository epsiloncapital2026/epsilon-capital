import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function trimLogo(file) {
  const input = path.join(__dirname, "../public", file);
  const buffer = await sharp(input).trim().png().toBuffer();
  await sharp(buffer).toFile(input);
  const meta = await sharp(input).metadata();
  console.log(`${file}: ${meta.width}x${meta.height}`);
}

await trimLogo("logo1.png");
await trimLogo("logo1-dark.png");
