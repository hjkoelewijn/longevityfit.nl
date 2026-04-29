#!/usr/bin/env node
import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "presentation", "export");
const PAGE_URL = `file://${path.join(ROOT, "presentation", "achtergrond-spreekslide.html")}`;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });
  await page.goto(PAGE_URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const el = page.locator("section.slide");
  await el.waitFor({ state: "visible" });

  const pngPath = path.join(OUT_DIR, "longevity-fit-spreekslide-achtergrond.png");
  const jpgPath = path.join(OUT_DIR, "longevity-fit-spreekslide-achtergrond.jpg");

  await el.screenshot({ path: pngPath, type: "png" });
  await el.screenshot({ path: jpgPath, type: "jpeg", quality: 92 });
  console.log(pngPath);
  console.log(jpgPath);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
