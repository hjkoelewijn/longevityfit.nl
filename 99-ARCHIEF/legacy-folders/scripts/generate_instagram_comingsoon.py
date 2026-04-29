#!/usr/bin/env python3
"""1080x1080 Instagram post: identiteitscode.jpg + overlay + brand (FIT in gold)."""
from __future__ import annotations

import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONTS = ROOT / ".generated-fonts"
OUT = ROOT / "longevityfit-comingsoon-foto.png"
BG = ROOT / "images" / "identiteitscode.jpg"

GOLD = (196, 154, 44)  # #c49a2c brand accent
WHITE = (255, 255, 255)

INTER_VAR_URL = (
    "https://raw.githubusercontent.com/google/fonts/main/ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf"
)
BEBAS_URL = (
    "https://raw.githubusercontent.com/google/fonts/main/ofl/bebasneue/BebasNeue-Regular.ttf"
)

BLACK_OVERLAY_ALPHA_CENTER = 0.40
BLACK_OVERLAY_ALPHA_EDGE = 0.52  # subtle vignette for premium readability
SHADOW_OFFSET_Y = 2
SHADOW_ALPHA = 90  # out of 255


def ensure_fonts() -> tuple[Path, Path]:
    FONTS.mkdir(parents=True, exist_ok=True)
    inter = FONTS / "Inter-Variable.ttf"
    bebas = FONTS / "BebasNeue-Regular.ttf"
    if not inter.exists():
        urllib.request.urlretrieve(INTER_VAR_URL, inter)
    if not bebas.exists():
        urllib.request.urlretrieve(BEBAS_URL, bebas)
    return inter, bebas


def inter_font(path: Path, size: int, wght: int) -> ImageFont.FreeTypeFont:
    """Inter variable: axes [opsz, wght], opsz clamped 14–32."""
    opsz = max(14, min(32, size))
    f = ImageFont.truetype(str(path), size)
    f.set_variation_by_axes([opsz, wght])
    return f


def cover_square(img: Image.Image, side: int) -> Image.Image:
    w, h = img.size
    scale = max(side / w, side / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    img = img.convert("RGB").resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - side) // 2
    top = (nh - side) // 2
    return img.crop((left, top, left + side, top + side))


def spaced_width(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, gap: int) -> int:
    if not text:
        return 0
    total = 0
    for i, ch in enumerate(text):
        b = draw.textbbox((0, 0), ch, font=font)
        total += b[2] - b[0]
        if i < len(text) - 1:
            total += gap
    return total


def draw_spaced(
    draw: ImageDraw.ImageDraw,
    x_left: float,
    y_top: float,
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    gap: int,
) -> float:
    """Draw spaced text; y_top = top edge of glyphs. Returns x after last char."""
    x = x_left
    for i, ch in enumerate(text):
        b = draw.textbbox((0, 0), ch, font=font)
        draw.text((x, y_top - b[1]), ch, font=font, fill=fill)
        x += b[2] - b[0]
        if i < len(text) - 1:
            x += gap
    return x


def main() -> None:
    inter_path, bebas_path = ensure_fonts()
    if not BG.exists():
        raise SystemExit(f"Background missing: {BG}")

    base = cover_square(Image.open(BG), 1080)
    # Create a subtle vignette overlay (black) so text stays crisp/readable.
    overlay = Image.new("RGBA", (1080, 1080), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    steps = 38
    cx, cy = 540, 540
    max_r = 540
    # Draw from outer -> inner so the center ends up with the lower alpha.
    for i in range(steps, 0, -1):
        t = i / steps  # radius fraction (0..1)
        r = int(max_r * t)
        a = int(
            255
            * (
                BLACK_OVERLAY_ALPHA_CENTER
                + (t * (BLACK_OVERLAY_ALPHA_EDGE - BLACK_OVERLAY_ALPHA_CENTER))
            )
        )
        od.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(0, 0, 0, a))

    composed = Image.alpha_composite(base.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(composed)

    font_top = inter_font(inter_path, 24, 400)
    font_bottom = inter_font(inter_path, 32, 400)
    font_coming = ImageFont.truetype(str(bebas_path), 120)

    margin_top = 60
    margin_bottom = 60
    gap_top = 2

    # LONGEVITY (white) + space + FIT (gold)
    w_long = spaced_width(draw, "LONGEVITY", font_top, gap_top)
    bs = draw.textbbox((0, 0), " ", font=font_top)
    w_space = bs[2] - bs[0]
    w_fit = spaced_width(draw, "FIT", font_top, gap_top)
    total_top = w_long + w_space + w_fit
    x0 = (1080 - total_top) / 2
    y_line = margin_top
    shadow_fill = (0, 0, 0, SHADOW_ALPHA)
    # Shadow first.
    x1_shadow = draw_spaced(
        draw, x0, y_line + SHADOW_OFFSET_Y, "LONGEVITY", font_top, shadow_fill, gap_top
    )
    draw.text(
        (x1_shadow, (y_line + SHADOW_OFFSET_Y) - bs[1]),
        " ",
        font=font_top,
        fill=shadow_fill,
    )
    draw_spaced(
        draw,
        x1_shadow + w_space,
        y_line + SHADOW_OFFSET_Y,
        "FIT",
        font_top,
        shadow_fill,
        gap_top,
    )

    # Foreground.
    x1 = draw_spaced(draw, x0, y_line, "LONGEVITY", font_top, WHITE, gap_top)
    draw.text((x1, y_line - bs[1]), " ", font=font_top, fill=WHITE)
    draw_spaced(draw, x1 + w_space, y_line, "FIT", font_top, GOLD, gap_top)

    # COMING SOON — letter-spacing 4px, vertically centered
    mid = "COMING SOON"
    gap_mid = 4
    w_mid = spaced_width(draw, mid, font_coming, gap_mid)
    x_mid = (1080 - w_mid) / 2
    b0 = draw.textbbox((0, 0), mid[0], font=font_coming)
    b1 = draw.textbbox((0, 0), mid, font=font_coming)
    line_h = b1[3] - b1[1]
    y_mid = (1080 - line_h) / 2 - b0[1] * 0.15
    draw_spaced(draw, x_mid, y_mid + SHADOW_OFFSET_Y, mid, font_coming, shadow_fill, gap_mid)
    draw_spaced(draw, x_mid, y_mid, mid, font_coming, WHITE, gap_mid)

    # Bottom
    bot = "9 APRIL 2026"
    fb = draw.textbbox((0, 0), bot, font=font_bottom)
    w_bot = fb[2] - fb[0]
    x_bot = (1080 - w_bot) / 2
    y_bot = 1080 - margin_bottom - (fb[3] - fb[1])
    draw.text((x_bot, y_bot - fb[1] + SHADOW_OFFSET_Y), bot, font=font_bottom, fill=shadow_fill)
    draw.text((x_bot, y_bot - fb[1]), bot, font=font_bottom, fill=WHITE)

    composed.save(OUT, format="PNG", dpi=(300, 300))
    print(f"Saved {OUT}")


if __name__ == "__main__":
    main()
