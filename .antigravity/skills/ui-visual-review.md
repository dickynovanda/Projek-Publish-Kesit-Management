---
description: Review UI visual design — layout, color harmony, gradient quality, and dark theme consistency
argument-hint: <file-or-pattern>
---

# UI Visual Design Review

Review these files for visual design compliance: $ARGUMENTS

Read files, check against rules below. Output concise but comprehensive. High signal-to-noise.

## Color Palette

Primary palette for this project:

| Role | Hex | Usage |
|---|---|---|
| Background | `#0A0A0A` | Page/section background |
| Surface | `#141414` | Cards, panels, elevated containers |
| Surface Alt | `#1A1A1A` | Secondary cards, hover backgrounds |
| Border | `#2A2A2A` | Dividers, card borders, separators |
| Muted Text | `#6B6B6B` | Captions, placeholders, disabled text |
| Secondary Text | `#9E9E9E` | Subtitles, secondary labels |
| Primary Text | `#E0E0E0` | Body text, descriptions |
| Heading Text | `#F5F5F5` | Headings, bold labels |
| Accent | `#00E676` | CTAs, active states, highlights, links |
| Accent Hover | `#00C853` | Hover state for accent elements |
| Accent Muted | `rgba(0,230,118,0.15)` | Accent backgrounds, badges, subtle highlights |
| Accent Glow | `rgba(0,230,118,0.25)` | Box shadows, glows, focus rings |
| Danger | `#FF5252` | Errors, destructive actions |
| Warning | `#FFB74D` | Warnings, caution states |

## Rules

### Color Usage

- Background must use dark tones (`#0A0A0A`–`#1A1A1A`), never pure `#000000`
- Cards/panels use `#141414` or `#1A1A1A` to create depth against `#0A0A0A` background
- Accent green (`#00E676`) reserved for: CTAs, active indicators, important links, highlights
- Accent must not be used for large background fills — only small elements, text, borders, badges
- Grey scale hierarchy must be consistent: darker = less important, lighter = more important
- Text on dark background minimum contrast ratio 4.5:1 (WCAG AA)
- `#6B6B6B` on `#0A0A0A` fails contrast — use only for decorative/non-essential text, never for readable content
- `#9E9E9E` minimum for secondary readable text
- `#E0E0E0` or `#F5F5F5` for primary readable text
- No random greys — stick to the palette steps above
- Borders use `#2A2A2A` or `#333333`, never lighter than `#404040`
- Hover states darken or lighten by one palette step, not arbitrary values
- No color-only state indication — pair with icon, text, or shape change

### Gradients

- Gradients must flow between adjacent palette tones (no jumps: `#0A0A0A` to `#F5F5F5`)
- Green gradients: `#00E676` to `#00C853` (darker end) or `#00E676` to `rgba(0,230,118,0)` (fade out)
- Background gradients: `#0A0A0A` to `#141414` or `#141414` to `#1A1A1A`
- No gradient with more than 3 color stops unless intentional decorative element
- `bg-gradient-to-*` direction must follow visual flow (top-down for hero, left-right for cards)
- Gradient text (`bg-clip-text text-transparent`) only on headings or hero elements, not body text
- Green-to-transparent gradients for subtle glow/overlay effects
- No gradient between clashing hues (green to red, green to blue without intermediate)

### Layout

- Consistent spacing scale: use Tailwind spacing (`4`, `6`, `8`, `12`, `16`, `20`, `24`) — no arbitrary values like `px-[13px]`
- Section padding: minimum `py-16` on desktop, `py-10` on mobile
- Card padding: minimum `p-4`, prefer `p-6` for content cards
- Grid gaps match padding level — `gap-4` with `p-4`, `gap-6` with `p-6`
- Max content width constrained: `max-w-7xl` or `max-w-6xl` with `mx-auto`
- Cards in grid: equal height via `h-full` or flex stretch
- No orphan cards — last row should not have single card in wide grid (consider `grid-cols` adjustment)
- Responsive breakpoints: mobile-first, `sm:`, `md:`, `lg:`, `xl:` — no skipping
- Vertical rhythm: consistent margin between sections
- Content alignment: left-align body text, center-align hero/CTA sections
- No horizontal scroll on any viewport width

### Component Styling

- Buttons: `rounded-lg` or `rounded-xl`, consistent across all buttons
- Cards: consistent `rounded-xl` or `rounded-2xl` with `border border-[#2A2A2A]`
- Card hover: subtle lift (`hover:-translate-y-1`) or border color change (`hover:border-[#00E676]`), not both stacked
- Inputs: dark background (`#141414`), lighter border (`#2A2A2A`), accent border on focus
- Tags/badges: `bg-[rgba(0,230,118,0.15)] text-[#00E676]` with `rounded-full` and `px-3 py-1`
- Dividers: `border-[#2A2A2A]` or `bg-[#2A2A2A]`, `h-px`, full width
- Icons: same color as adjacent text, accent color only for active/important states
- Avatar/image containers: consistent `rounded-full` or `rounded-xl`, with border or ring

### Visual Hierarchy

- One accent color focal point per section — not everything green
- Headings larger and lighter (`#F5F5F5`, `text-2xl`+), body smaller and dimmer (`#E0E0E0`, `text-base`)
- Primary CTA uses solid accent (`bg-[#00E676] text-black`), secondary CTA uses outline (`border-[#00E676] text-[#00E676]`)
- Visual weight flows: heading > subheading > body > caption
- No two adjacent elements with same visual weight competing for attention
- Whitespace creates hierarchy — more space around important elements
- Active/selected states clearly distinct from rest (accent color + background tint)

### Anti-patterns (flag these)

- Pure black `#000000` as background (use `#0A0A0A`)
- White text `#FFFFFF` on dark background (use `#F5F5F5` or `#E0E0E0` — softer)
- Accent green as large background fill
- Random hex values not in the palette
- Inconsistent border-radius across same-level components
- Mixed spacing scales (Tailwind + arbitrary `px` values)
- Gradient with harsh color jumps
- Text color too close to background (low contrast)
- Multiple competing accent colors in one section
- Inconsistent card styles within same grid/section
- `opacity` used to create grey shades instead of proper grey hex
- Shadow with default blue/purple tint — use `shadow-[0_4px_20px_rgba(0,0,0,0.5)]` or accent glow

## Output Format

Group by file. Use `file:line` format. Terse findings.

```text
## src/Hero.tsx

src/Hero.tsx:12 - using #000000, use #0A0A0A
src/Hero.tsx:24 - text #6B6B6B on #0A0A0A fails contrast, use #9E9E9E+
src/Hero.tsx:38 - gradient jumps #0A0A0A to #00E676, add intermediate step
src/Hero.tsx:45 - arbitrary px-[13px], use p-4

## src/Card.tsx

pass
```

State issue + fix. No preamble.
