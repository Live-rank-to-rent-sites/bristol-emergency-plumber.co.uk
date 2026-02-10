#!/usr/bin/env python3
"""Generate WebP images for Bristol Emergency Plumber website.

Creates visually distinct hero and location card images with high contrast
elements that remain visible through a semi-transparent CSS gradient overlay.
"""

import math
import os
import random

from PIL import Image, ImageDraw

# Brighter palette for images (NOT the same as the CSS overlay)
DARK_NAVY = (8, 35, 55)
MID_BLUE = (20, 70, 100)
TEAL = (30, 130, 150)
LIGHT_TEAL = (60, 180, 200)
LIGHT_BLUE = (100, 200, 230)
SKY_BLUE = (140, 210, 240)
WARM_ORANGE = (244, 162, 97)
RED = (230, 57, 70)
WHITE = (255, 255, 255)
SOFT_WHITE = (200, 220, 230)
YELLOW_GLOW = (255, 220, 120)

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'assets', 'images')


def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))


def draw_gradient_fast(img, color1, color2, angle=135):
    width, height = img.size
    draw = ImageDraw.Draw(img)
    rad = math.radians(angle)
    cos_a, sin_a = math.cos(rad), math.sin(rad)
    max_d = abs(width * cos_a) + abs(height * sin_a)
    for y in range(height):
        t_left = max(0, min(1, (y * sin_a) / max_d + 0.5))
        t_right = max(0, min(1, (width * cos_a + y * sin_a) / max_d + 0.5))
        c_left = lerp_color(color1, color2, t_left)
        c_right = lerp_color(color1, color2, t_right)
        for x in range(0, width, 4):
            t = x / width
            color = lerp_color(c_left, c_right, t)
            draw.rectangle([x, y, x + 3, y], fill=color)
    return draw


def generate_hero_home(filepath):
    """Home hero — bright, high-contrast plumbing-themed image."""
    w, h = 1920, 800
    img = Image.new('RGB', (w, h))
    # Use a LIGHTER gradient so details show through the CSS overlay
    draw_gradient_fast(img, (15, 55, 80), (40, 100, 130), angle=135)
    draw = ImageDraw.Draw(img)

    # Bold pipe network - fully opaque, bright colours
    pipe_color = TEAL
    pipe_highlight = LIGHT_TEAL
    joint_color = LIGHT_BLUE

    # Horizontal pipes — thick and visible
    h_pipes = [100, 250, 420, 580, 720]
    for yp in h_pipes:
        draw.rectangle([0, yp, w, yp + 30], fill=pipe_color)
        draw.rectangle([0, yp + 3, w, yp + 8], fill=pipe_highlight)
        draw.rectangle([0, yp + 27, w, yp + 30], fill=MID_BLUE)

    # Vertical pipes
    v_pipes = [150, 400, 700, 1000, 1300, 1600, 1850]
    for xp in v_pipes:
        draw.rectangle([xp, 0, xp + 30, h], fill=pipe_color)
        draw.rectangle([xp + 3, 0, xp + 8, h], fill=pipe_highlight)
        draw.rectangle([xp + 27, 0, xp + 30, h], fill=MID_BLUE)

    # Bright elbow joints at intersections
    for xp in v_pipes:
        for yp in h_pipes:
            draw.ellipse([xp - 10, yp - 10, xp + 40, yp + 40], fill=joint_color)
            draw.ellipse([xp - 2, yp - 2, xp + 32, yp + 32], fill=pipe_color)
            # Bolt detail
            draw.ellipse([xp + 8, yp + 8, xp + 22, yp + 22], fill=LIGHT_TEAL)

    # Large water drops — fully opaque, bright
    random.seed(42)
    for _ in range(35):
        dx = random.randint(30, w - 30)
        dy = random.randint(30, h - 30)
        ds = random.randint(20, 50)
        r = ds // 2
        drop_col = lerp_color(LIGHT_BLUE, SKY_BLUE, random.random())
        # Teardrop
        draw.ellipse([dx - r, dy, dx + r, dy + ds], fill=drop_col)
        draw.polygon([(dx, dy - ds + 5), (dx - r + 3, dy + 5), (dx + r - 3, dy + 5)], fill=drop_col)
        # Highlight
        draw.ellipse([dx - r // 3, dy + r // 2, dx + r // 3, dy + r], fill=WHITE)

    # Wrench silhouettes — large, bright white
    for wx, wy, scale in [(80, 300, 3.0), (1200, 100, 3.5), (600, 500, 2.5)]:
        s = scale
        wrench_col = SOFT_WHITE
        # Handle
        draw.rectangle([wx, wy, wx + int(90 * s), wy + int(20 * s)], fill=wrench_col)
        draw.rectangle([wx, wy + 2, wx + int(90 * s), wy + int(6 * s)], fill=WHITE)
        # Head
        draw.rectangle([wx + int(80 * s), wy - int(15 * s),
                        wx + int(115 * s), wy + int(35 * s)], fill=wrench_col)
        # Jaw gap
        draw.rectangle([wx + int(88 * s), wy + int(2 * s),
                        wx + int(108 * s), wy + int(18 * s)], fill=MID_BLUE)

    # Glowing accent circles
    for cx, cy, cr in [(1650, 180, 200), (250, 620, 170), (950, 80, 140)]:
        for i in range(5):
            r = cr - i * 15
            opacity_color = lerp_color(LIGHT_BLUE, WHITE, i / 5)
            draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=opacity_color, width=2)

    # Bright diagonal texture lines
    for i in range(-h, w + h, 60):
        draw.line([(i, 0), (i + h, h)], fill=lerp_color(TEAL, LIGHT_TEAL, 0.5), width=1)

    img.save(filepath, 'WEBP', quality=82)
    print(f"  Created: {filepath} ({os.path.getsize(filepath)} bytes)")


def generate_hero_locations(filepath):
    """Locations hero — Bristol cityscape with map elements."""
    w, h = 1920, 600
    img = Image.new('RGB', (w, h))
    draw_gradient_fast(img, (12, 45, 70), (35, 90, 120), angle=150)
    draw = ImageDraw.Draw(img)

    # Visible grid lines (map-like)
    grid_color = lerp_color(TEAL, LIGHT_TEAL, 0.3)
    for x in range(0, w, 60):
        draw.line([(x, 0), (x, h)], fill=grid_color, width=1)
    for y in range(0, h, 60):
        draw.line([(0, y), (w, y)], fill=grid_color, width=1)

    # Bristol skyline — solid, bright silhouettes
    base_y = h - 10
    random.seed(99)
    building_color = lerp_color(MID_BLUE, TEAL, 0.4)
    window_color = YELLOW_GLOW

    buildings = []
    x = 10
    while x < w - 20:
        bw = random.randint(35, 70)
        bh = random.randint(60, 200)
        has_roof = random.random() > 0.4
        buildings.append((x, bw, bh, has_roof))
        x += bw + random.randint(3, 12)

    for bx, bw, bh, has_roof in buildings:
        col = lerp_color(building_color, LIGHT_TEAL, random.random() * 0.3)
        draw.rectangle([bx, base_y - bh, bx + bw, base_y], fill=col)
        if has_roof:
            draw.polygon([
                (bx - 2, base_y - bh),
                (bx + bw // 2, base_y - bh - 18),
                (bx + bw + 2, base_y - bh),
            ], fill=col)
        # Lit windows
        for wy in range(base_y - bh + 12, base_y - 8, 22):
            for wx in range(bx + 6, bx + bw - 6, 14):
                if wx + 6 < bx + bw - 3 and random.random() > 0.3:
                    draw.rectangle([wx, wy, wx + 6, wy + 10], fill=window_color)

    # Clifton Suspension Bridge — bright and visible
    bridge_col = LIGHT_BLUE
    tower_col = SKY_BLUE
    # Towers
    draw.rectangle([750, base_y - 250, 775, base_y - 60], fill=tower_col)
    draw.rectangle([1145, base_y - 250, 1170, base_y - 60], fill=tower_col)
    # Tower tops
    draw.polygon([(745, base_y - 250), (762, base_y - 275), (780, base_y - 250)], fill=tower_col)
    draw.polygon([(1140, base_y - 250), (1157, base_y - 275), (1175, base_y - 250)], fill=tower_col)
    # Deck
    draw.rectangle([775, base_y - 80, 1145, base_y - 68], fill=bridge_col)
    # Main cables
    for x in range(750, 1170, 2):
        t = (x - 750) / 420
        sag = int(55 * math.sin(math.pi * t))
        draw.rectangle([x, base_y - 250 + sag, x + 2, base_y - 248 + sag], fill=bridge_col)
    # Suspender cables
    for offset in range(30, 390, 25):
        cx = 775 + offset
        t = offset / 420
        sag = int(55 * math.sin(math.pi * t))
        draw.line([(cx, base_y - 250 + sag), (cx, base_y - 72)], fill=bridge_col, width=1)

    # Large map pins — bold red
    pin_positions = [(280, 150), (580, 200), (960, 120), (1340, 170), (1680, 140)]
    for px, py in pin_positions:
        pin_r = 20
        draw.ellipse([px - pin_r, py - pin_r, px + pin_r, py + pin_r], fill=RED)
        draw.polygon([(px - 12, py + 12), (px, py + 45), (px + 12, py + 12)], fill=RED)
        draw.ellipse([px - 7, py - 7, px + 7, py + 7], fill=WHITE)

    # Compass circles
    cx, cy = 960, 280
    for cr in [180, 140, 100]:
        draw.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], outline=WARM_ORANGE, width=2)
    # Compass cross
    draw.line([(cx, cy - 90), (cx, cy + 90)], fill=WARM_ORANGE, width=2)
    draw.line([(cx - 90, cy), (cx + 90, cy)], fill=WARM_ORANGE, width=2)
    # N marker
    draw.ellipse([cx - 8, cy - 95, cx + 8, cy - 79], fill=RED)

    img.save(filepath, 'WEBP', quality=82)
    print(f"  Created: {filepath} ({os.path.getsize(filepath)} bytes)")


def generate_location_card(filepath, direction, base_colors, buildings_config):
    """Generate a location card image with unique colour scheme."""
    w, h = 600, 400
    img = Image.new('RGB', (w, h))
    draw_gradient_fast(img, base_colors[0], base_colors[1], angle=140)
    draw = ImageDraw.Draw(img)

    accent = base_colors[2]
    highlight = base_colors[3]

    # Grid
    for x in range(0, w, 40):
        draw.line([(x, 0), (x, h)], fill=lerp_color(accent, highlight, 0.3), width=1)
    for y in range(0, h, 40):
        draw.line([(0, y), (w, y)], fill=lerp_color(accent, highlight, 0.3), width=1)

    # Building skyline
    base_y = h - 10
    for bx, bw, bh, has_roof in buildings_config:
        col = accent
        draw.rectangle([bx, base_y - bh, bx + bw, base_y], fill=col)
        if has_roof:
            draw.polygon([
                (bx - 2, base_y - bh),
                (bx + bw // 2, base_y - bh - 14),
                (bx + bw + 2, base_y - bh),
            ], fill=col)
        # Windows
        for wy in range(base_y - bh + 12, base_y - 8, 20):
            for wx in range(bx + 6, bx + bw - 6, 14):
                if wx + 6 < bx + bw - 3:
                    draw.rectangle([wx, wy, wx + 6, wy + 10], fill=YELLOW_GLOW)

    # Compass indicator — large and visible
    cx, cy = 490, 90
    r = 50
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=WARM_ORANGE, width=3)
    draw.ellipse([cx - r + 10, cy - r + 10, cx + r - 10, cy + r - 10], outline=highlight, width=2)
    # Direction arrow
    angles = {'N': -90, 'S': 90, 'E': 0, 'W': 180, 'C': 0}
    angle = math.radians(angles.get(direction, 0))
    arrow_len = r - 14
    if direction == 'C':
        # Centre — bullseye
        draw.ellipse([cx - 20, cy - 20, cx + 20, cy + 20], fill=RED)
        draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=WHITE)
    else:
        tip_x = cx + int(arrow_len * math.cos(angle))
        tip_y = cy + int(arrow_len * math.sin(angle))
        draw.line([(cx, cy), (tip_x, tip_y)], fill=WARM_ORANGE, width=4)
        draw.ellipse([tip_x - 7, tip_y - 7, tip_x + 7, tip_y + 7], fill=RED)
    draw.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=WARM_ORANGE)
    # Cardinal marks
    for label, a in [('N', -90), ('S', 90), ('E', 0), ('W', 180)]:
        ar = math.radians(a)
        mx = cx + int((r + 14) * math.cos(ar))
        my = cy + int((r + 14) * math.sin(ar))
        col = RED if label == direction else highlight
        draw.ellipse([mx - 4, my - 4, mx + 4, my + 4], fill=col)

    # Map pin
    px, py = 130, 170
    draw.ellipse([px - 16, py - 16, px + 16, py + 16], fill=RED)
    draw.polygon([(px - 10, py + 10), (px, py + 38), (px + 10, py + 10)], fill=RED)
    draw.ellipse([px - 6, py - 6, px + 6, py + 6], fill=WHITE)

    # Decorative circles
    draw.ellipse([60 - 70, 70 - 70, 60 + 70, 70 + 70], outline=highlight, width=2)
    draw.ellipse([350 - 50, 250 - 50, 350 + 50, 250 + 50], outline=highlight, width=2)

    # Diagonal texture
    for i in range(-h, w + h, 50):
        draw.line([(i, 0), (i + h, h)], fill=lerp_color(accent, highlight, 0.4), width=1)

    img.save(filepath, 'WEBP', quality=82)
    print(f"  Created: {filepath} ({os.path.getsize(filepath)} bytes)")


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    random.seed(42)

    print("Generating hero images...")
    generate_hero_home(os.path.join(OUTPUT_DIR, 'hero-emergency-plumber-bristol.webp'))
    generate_hero_locations(os.path.join(OUTPUT_DIR, 'hero-locations-bristol.webp'))

    print("Generating location card images...")

    # Each card has unique colour scheme: (gradient_start, gradient_end, accent, highlight)
    # North Bristol — cool teal
    generate_location_card(
        os.path.join(OUTPUT_DIR, 'location-north-bristol.webp'),
        direction='N',
        base_colors=((15, 60, 90), (30, 100, 140), (50, 140, 170), (120, 200, 225)),
        buildings_config=[
            (20, 55, 100, True), (90, 50, 80, True), (155, 60, 120, False),
            (230, 45, 70, True), (290, 55, 95, True), (360, 65, 110, False),
            (440, 50, 85, True), (505, 55, 100, True),
        ]
    )

    # South Bristol — warm blue-purple
    generate_location_card(
        os.path.join(OUTPUT_DIR, 'location-south-bristol.webp'),
        direction='S',
        base_colors=((25, 50, 85), (45, 75, 115), (65, 95, 140), (140, 170, 210)),
        buildings_config=[
            (15, 35, 110, True), (60, 35, 115, True), (105, 35, 108, True),
            (150, 35, 112, True), (195, 35, 118, True), (240, 35, 105, True),
            (285, 35, 110, True), (330, 35, 115, True), (375, 35, 108, True),
            (420, 35, 112, True), (465, 35, 118, True), (510, 35, 105, True),
            (555, 35, 110, True),
        ]
    )

    # East Bristol — green-teal
    generate_location_card(
        os.path.join(OUTPUT_DIR, 'location-east-bristol.webp'),
        direction='E',
        base_colors=((10, 55, 70), (25, 90, 110), (45, 130, 145), (110, 195, 200)),
        buildings_config=[
            (10, 60, 90, True), (85, 40, 130, False), (140, 55, 80, True),
            (210, 70, 110, False), (295, 45, 95, True), (355, 55, 140, False),
            (425, 50, 75, True), (490, 65, 105, True), (555, 40, 85, False),
        ]
    )

    # West Bristol — elegant blue-grey
    generate_location_card(
        os.path.join(OUTPUT_DIR, 'location-west-bristol.webp'),
        direction='W',
        base_colors=((18, 48, 75), (35, 80, 110), (55, 115, 145), (130, 180, 210)),
        buildings_config=[
            (20, 80, 130, True), (115, 75, 125, True), (205, 85, 135, True),
            (305, 70, 120, True), (390, 80, 130, True), (485, 75, 125, True),
        ]
    )

    # Central Bristol — vibrant blue
    generate_location_card(
        os.path.join(OUTPUT_DIR, 'location-central-bristol.webp'),
        direction='C',
        base_colors=((12, 45, 80), (30, 80, 120), (50, 120, 155), (120, 190, 220)),
        buildings_config=[
            (10, 50, 160, False), (75, 65, 100, True), (155, 45, 180, False),
            (215, 70, 90, True), (300, 55, 150, False), (370, 60, 120, True),
            (445, 80, 170, False), (540, 50, 95, True),
        ]
    )

    print("\nAll images generated successfully!")
    for f in sorted(os.listdir(OUTPUT_DIR)):
        if f.endswith('.webp'):
            fpath = os.path.join(OUTPUT_DIR, f)
            print(f"  {f}: {os.path.getsize(fpath):,} bytes")


if __name__ == '__main__':
    main()
