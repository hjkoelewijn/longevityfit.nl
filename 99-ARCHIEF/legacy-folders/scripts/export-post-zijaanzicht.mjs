#!/usr/bin/env node
import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const JPEG_QUALITY = 92;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "instagram-grid", "export", "single-posts");
const PAGE_URL = `file://${path.join(ROOT, "instagram-grid", "post-zijaanzicht.html")}`;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 1,
  });

  await page.goto(PAGE_URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const el = page.locator("section.post");
  await el.waitFor({ state: "visible" });
  const outPath = path.join(OUT_DIR, "longevity-fit-zijaanzicht-post.jpg");
  await el.screenshot({ path: outPath, type: "jpeg", quality: JPEG_QUALITY });
  console.log(outPath);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
