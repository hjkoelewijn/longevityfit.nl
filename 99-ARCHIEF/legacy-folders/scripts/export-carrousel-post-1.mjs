#!/usr/bin/env node
/**
 * Exporteert carrousel post 1 (5 slides) als JPG uit instagram-grid/carrousel-post-1.html
 * Gebruik: node scripts/export-carrousel-post-1.mjs
 */
const JPEG_QUALITY = 92;
import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "instagram-grid", "export", "carrousel-post-1");
const PAGE_URL = `file://${path.join(ROOT, "instagram-grid", "carrousel-post-1.html")}`;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 1,
  });
  await page.goto(PAGE_URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  for (let i = 1; i <= 5; i++) {
    const el = page.locator(`section.slide[data-slide="${i}"]`);
    await el.waitFor({ state: "visible" });
    const outPath = path.join(OUT_DIR, `longevity-fit-carrousel-1-slide-${String(i).padStart(2, "0")}.jpg`);
    await el.screenshot({ path: outPath, type: "jpeg", quality: JPEG_QUALITY });
    console.log(outPath);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
