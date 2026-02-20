# How to Add a New Owl Species Page

This guide documents a repeatable workflow for adding a new owl species page to this project, including:

- factual research
- source curation
- image/audio/map acquisition
- map post-processing
- page implementation with reusable components
- validation and quality checks

The goal is to keep every species page consistent in structure, visual style, and factual reliability.

---

## 1) Understand the existing page architecture first

Before adding a new species, inspect one of the already completed species pages and reuse the same structure.

Recommended references in this repository:

- [src/app/druhy/vyr-velky/page.tsx](src/app/druhy/vyr-velky/page.tsx)
- [src/app/druhy/vyrecek-maly/page.tsx](src/app/druhy/vyrecek-maly/page.tsx)
- [src/components/species-profile-sections.tsx](src/components/species-profile-sections.tsx)

Key principle: keep page-specific data in the species `page.tsx`, but reuse shared UI sections from `species-profile-sections.tsx`.

---

## 2) Prepare species folders and files

Create these paths for a new species (example slug: `new-owl`):

- `src/app/druhy/new-owl/page.tsx`
- `src/assets/new-owl/`
- `src/assets/new-owl/timeline.json`
- `public/druhy/new-owl/audio/`

Typical asset files in `src/assets/new-owl/`:

- `*_main.jpg` (hero)
- additional gallery images
- `map.webp` (final map used in page)
- optionally `map-source-full.*` (high-res original map source, if you keep source locally)

---

## 3) Research facts from reliable public sources

### Required factual categories

Collect at minimum:

- scientific name and English name
- body length, wingspan, weight
- habitat and distribution
- breeding period and clutch size
- diet and behavior
- conservation status (global + Czech context if available)
- voice characteristics

### Recommended source mix

Use multiple independent sources and cross-check numbers:

1. Species pages (CS + EN Wikipedia) for broad overview
2. eBird species profile for practical field context
3. National or conservation sources for Czech status (e.g., ČSO/AOPK where available)
4. Optional: BirdLife/IUCN summary

### Quality rule

Do not rely on a single source for numeric claims. If values differ, prefer ranges and avoid false precision.

---

## 4) Build a source list early

Add source URLs during research, not at the end.

In each species page, include a `sources` array and render it through `SourcesList`.

Include at least:

- species identification/reference source (CS)
- species reference source (EN)
- eBird species page
- map source page (Wikimedia/Wikipedia)
- any specific conservation source for local context

---

## 5) Download and curate images

### Preferred source

Use Wikimedia Commons files with clear metadata and licensing.

### Selection guidelines

Choose images that cover:

- perched portrait (recognition)
- flight or movement
- behavior (pair, feeding, juvenile)

### Technical checks

After download, verify files are real images (not HTML placeholders from failed redirects). Validate format and dimensions before importing.

---

## 6) Obtain audio samples (eBird/Macaulay)

### Practical workflow used in this project

1. Resolve candidate Macaulay asset IDs for the species.
2. Download MP3 files from Cornell CDN using those IDs.
3. Save files into:
    - `public/druhy/<slug>/audio/zvuk1.mp3`
    - `public/druhy/<slug>/audio/zvuk2.mp3`
4. Reference them in page `audioSamples` and in JSON-LD `AudioObject` entries.

### Important notes

- Keep source attribution in the page (`sourceName`, `sourceUrl`).
- Prefer short, clear, representative calls.
- Verify local playback via the `<audio>` player.

---

## 7) Acquire map in full resolution

Always start from the highest available source map, then create the project-ready map.

**Hard rule for this project:** use a map from Wikipedia/Wikimedia (preferably Wikimedia Commons), not from random third-party sites.

### Recommended process

1. Find map file metadata (Wikimedia API or file page).
2. If source is SVG, export/render a large PNG thumbnail (e.g., 4K width or highest practical size).
3. Keep this as the source file (optional), then produce final `map.webp` used by the page.

---

## 8) Map post-processing to match project style

This project uses a consistent map aesthetic.

For species where requested, apply this transformation pipeline:

1. **Invert map base colors** (land/ocean/background)
2. **Recolor occurrence areas** to match project green used by the eagle-owl page
3. Export optimized `WEBP` for frontend use

Order is mandatory: **invert first, recolor green second**.

Reference green used for occurrence consistency:

- dominant eagle-owl map green: `rgb(30, 207, 100)` / `#1ECF64`

### Validation checklist for map output

- final map resolution is higher than original low-res fallback
- final rendered map uses the processed file (prefer `map.webp`), not the raw source PNG/SVG
- map background is visually dark/inverted (if it looks light/white, processing is incomplete)
- occurrence areas are clearly legible
- legend text exactly matches the final coloring logic
- no color mismatch between legend and map

### Hard fail gate (do not skip)

Before finishing any species page, open the map section and compare it with an already processed page (e.g. `sycek-obecny`):

- if the new map background is not dark/inverted, stop and reprocess the map
- if occurrence color does not match project green `#1ECF64`, stop and reprocess the map

---

## 9) Create `timeline.json`

Each species should include a 12-month timeline with this shape:

- `monthShort`
- `monthFull`
- `nesting` (boolean)
- `voice` (boolean)
- `chicks` (boolean)
- `watch` (`"low" | "medium" | "high"` in project usage)

Populate it from species phenology (breeding/voice/activity timing).

---

## 10) Implement species page (`page.tsx`)

Follow the same composition pattern:

1. `metadata` (title/description/OG/Twitter)
2. imports for assets + timeline
3. page-local data blocks:
    - `quickFacts`
    - `heroGalleryImages`
    - `mapGalleryImages`
    - `highlights`
    - `contentSections`
    - `audioIntro` + `audioSamples`
    - `triviaItems`
    - `comparisonRows`
    - `sources`
4. JSON-LD objects:
    - `Taxon`
    - `AudioObject[]`
5. render reusable sections in this order:
    - hero header
    - gallery + highlights
    - content + sticky quick facts
    - map section (+ legend)
    - comparison table
    - timeline
    - observation CTA
    - sources

Use strong emphasis (`font-semibold`, occasional `text-primary/90`) for key terms, but keep readability high.

---

## 11) JSON-LD requirements

Include both:

1. `Taxon`
    - common name
    - scientific name (`alternateName`)
    - page URL
    - `sameAs` links

2. `AudioObject[]`
    - one entry per audio sample
    - public `contentUrl` path matching deployed URL

Keep JSON-LD factual and concise.

---

## 12) Final QA and verification

### Mandatory checks

- TypeScript check passes (`pnpm ts:check`)
- No editor/runtime errors in the new `page.tsx`
- Image imports resolve correctly
- Audio files load and play
- Map opens in lightbox and legend is accurate
- All external source links are valid

### Content QA

- no unsupported factual claims
- no contradictory numbers across sections
- Czech copy is consistent with other species pages
- section structure is aligned with existing species pages

---

## 13) Common pitfalls and how to avoid them

1. **Downloaded HTML instead of image/audio**
    - Always validate file MIME/type after download.

2. **Low-resolution map used directly**
    - Always fetch high-res source first, then process to final web map.

3. **Legend mismatch after recoloring**
    - Update legend immediately after map transformation.

4. **Overfitting facts from one source**
    - Cross-check with at least one additional source before final text.

5. **Inconsistent visual style across species**
    - Reuse existing section components and established class patterns.

---

## 14) Suggested repeatable checklist (copy/paste)

- [ ] Create species folders (`src/assets`, `src/app/druhy`, `public/audio`)
- [ ] Research facts from at least 2–3 sources
- [ ] Prepare `sources` list early
- [ ] Download and verify gallery images
- [ ] Download and verify 2 audio samples
- [ ] Obtain full-res map source
- [ ] Obtain full-res map source from Wikipedia/Wikimedia
- [ ] Process map in strict order (invert first, then recolor green, then export webp)
- [ ] Verify that the page references processed `map.webp` (not source PNG/SVG)
- [ ] Visual check: map background is dark/inverted like existing processed pages
- [ ] Create `timeline.json`
- [ ] Implement `page.tsx` data and layout
- [ ] Add metadata + JSON-LD
- [ ] Validate TypeScript and manual UI checks
- [ ] Confirm map legend and audio attribution

---

## 15) Reusability guideline for future owl pages

When adding another species, duplicate only the **data shape**, not the raw text:

- Keep component layout unchanged.
- Replace species-specific facts, images, audio, and timeline.
- Keep map style and legend conventions consistent unless the map semantics require a different legend.

This approach keeps maintenance simple and provides a consistent reader experience across all species pages.

---

## 16) Practical implementation snippets (copy/paste)

Below are minimal, reusable examples for the exact technical steps.

### A) Wikimedia API: get map file metadata

Use this to verify the source file, native size, and direct URL.

```bash
python3 - <<'PY'
import requests

headers = {"User-Agent": "Mozilla/5.0"}
params = {
      "action": "query",
      "format": "json",
      "prop": "imageinfo",
      "titles": "File:AtheneNoctuaIUCN.svg",  # replace per species
      "iiprop": "url|size|mime",
      "iiurlwidth": "4096",
}

r = requests.get("https://commons.wikimedia.org/w/api.php", params=params, headers=headers, timeout=30)
r.raise_for_status()
page = next(iter(r.json()["query"]["pages"].values()))
ii = page["imageinfo"][0]

print("title:", page["title"])
print("mime:", ii.get("mime"))
print("native size:", ii.get("width"), "x", ii.get("height"))
print("source url:", ii.get("url"))
print("thumb url:", ii.get("thumburl"))
PY
```

### B) Download full-resolution map from Wikimedia

If the source is SVG, fetch a large rendered PNG (e.g., 4096px width), then convert to final WEBP after processing.

```bash
curl -fLs \
   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/AtheneNoctuaIUCN.svg/4096px-AtheneNoctuaIUCN.svg.png' \
   -o 'src/assets/<slug>/map-source-full.png'
```

### C) Map transformation script (required order)

This script applies the required order: **invert first**, then **recolor occurrence to the eagle-owl green**.

```bash
python3 - <<'PY'
from pathlib import Path
from PIL import Image

src = Path('src/assets/<slug>/map-source-full.png')
out = Path('src/assets/<slug>/map.webp')
target_green = (30, 207, 100)  # #1ECF64, aligned with eagle-owl map

img = Image.open(src).convert('RGB')
px = img.load()
w, h = img.size

for y in range(h):
      for x in range(w):
            r, g, b = px[x, y]

            # occurrence mask from common source maps:
            # - green resident range
            # - yellow/olive introduced range
            occurrence = ((g > 90 and r < 170 and b < 150) or (r > 200 and g > 200 and b < 140))

            # 1) invert base colors, 2) recolor occurrence green
            if occurrence:
                  px[x, y] = target_green
            else:
                  px[x, y] = (255 - r, 255 - g, 255 - b)

img.save(out, format='WEBP', quality=92, method=6)
print('saved:', out, 'size:', img.size)
PY
```

### D) Validate downloaded files are real media

Avoid silent failures (HTML downloaded instead of media).

```bash
file src/assets/<slug>/*
file public/druhy/<slug>/audio/*
```

### E) eBird/Macaulay audio workflow

The practical pattern used in this project:

1. Find candidate Macaulay asset IDs for the species.
2. Verify each ID returns audio content.
3. Download selected assets into `public/druhy/<slug>/audio/`.

#### E1) Verify candidate asset IDs

```bash
for id in 651213824 651171621; do
   echo "-- $id"
   curl -sI "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/$id" | grep -i 'content-type\|content-length'
done
```

Expected content type: `audio/mpeg3`.

#### E2) Download selected files

```bash
mkdir -p public/druhy/<slug>/audio

curl -fLs 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/<ID1>' -o 'public/druhy/<slug>/audio/zvuk1.mp3'
curl -fLs 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/<ID2>' -o 'public/druhy/<slug>/audio/zvuk2.mp3'
```

#### E3) Keep attribution in page data

Use eBird media catalog URL in `sourceUrl`:

```text
https://media.ebird.org/catalog?taxonCode=<speciesCode>&mediaType=audio
```

### F) Fast QA command set

```bash
pnpm ts:check
```

Optional quick checks:

```bash
ls -lh src/assets/<slug>
ls -lh public/druhy/<slug>/audio
```
