#!/usr/bin/env node
import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "presentation", "export", "logos");
const PAGE_URL = `file://${path.join(ROOT, "presentation", "logo-transparant.html")}`;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 2000, height: 700 },
    deviceScaleFactor: 1,
  });
  await page.goto(PAGE_URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const whiteLogo = page.locator('[data-logo="white"]');
  const blackLogo = page.locator('[data-logo="black"]');
  await whiteLogo.waitFor({ state: "visible" });
  await blackLogo.waitFor({ state: "visible" });

  const whitePath = path.join(OUT_DIR, "longevity-fit-logo-longevity-wit-fit-goud.png");
  const blackPath = path.join(OUT_DIR, "longevity-fit-logo-longevity-zwart-fit-goud.png");

  await whiteLogo.screenshot({ path: whitePath, type: "png", omitBackground: true });
  await blackLogo.screenshot({ path: blackPath, type: "png", omitBackground: true });

  console.log(whitePath);
  console.log(blackPath);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
