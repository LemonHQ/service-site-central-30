# Add Clutch Verified Badge

Show the Clutch "Top Product Design Company Leicester 2026" badge in two places, using the official Clutch iframe embed.

## 1. Reusable badge component
New `src/components/ui/ClutchBadge.tsx` wrapping the Clutch iframe:
- src: `https://clutch.co/share/badges/2418837/7658?utm_source=clutch_top_company_badge&utm_medium=image_embed`
- 360x360 default, `loading="lazy"`, descriptive `title` for accessibility/SEO
- Accepts a `size` and `className` prop so it can be scaled down where needed

## 2. Homepage — below the stats
In `src/components/homepage/CompanyOverview.tsx`, place the badge in the right-hand column under the stats card (the highlighted area in the screenshot), centered, with spacing above so it clears the offset purple background block.

## 3. Footer — prominent placement
In `src/components/layout/Footer.tsx`, add the badge to the third column of the bottom footer grid (right of the newsletter block, the empty area in the second screenshot), centered, at a slightly reduced size on mobile.

## Technical note
The Content-Security-Policy meta tag in `index.html` currently blocks Clutch. `frame-src` needs `https://clutch.co` (and `https://widget.clutch.co`) added, otherwise the iframe will not render on the published site or on lemonhq.co.uk.
