---
description: Fix UI issues from web-ui-review results
---

Fix the following Web Interface Guidelines issues in the codebase: $ARGUMENTS

For each issue listed:
1. Read the file and line mentioned
2. Apply the fix directly
3. Keep changes minimal—only fix what's reported

Rules for fixes:
- Missing `aria-label` → add descriptive label
- Missing `aria-hidden="true"` → add to decorative icons/elements
- `transition: all` → list specific properties (`transition: opacity 200ms, transform 200ms`)
- Missing `prefers-reduced-motion` → wrap animations in `@media (prefers-reduced-motion: no-preference)` or add `motion-safe:` in Tailwind
- Missing image `width`/`height` → add explicit dimensions
- Missing `loading="lazy"` → add to below-fold images
- Missing `priority` or `fetchpriority="high"` → add to above-fold images
- Hardcoded dates → use `Intl.DateTimeFormat`
- Missing `focus-visible` rings → add `focus-visible:ring-2 focus-visible:ring-offset-2` or equivalent
- No `<main>` landmark → wrap main content in `<main>`
- No skip link → add `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>`
- Missing `touch-action: manipulation` → add to interactive touch elements
- Missing `overscroll-behavior: contain` → add to modals/drawers/carousels

After all fixes, list what was changed in `file:line` format. No preamble.
