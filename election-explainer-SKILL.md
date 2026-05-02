---
name: election-explainer-app
description: Build the PromptWars election process explainer — a cinematic, scroll-driven single-page app where flat 2D SVG illustrations sit centered on screen with a floating animation, and clicking elements inside the graphic zooms you into the next scene (e.g. click booth exterior → zoom inside booth → click EVM → see vote registered). Use this skill whenever building or iterating on the election explainer app, its scenes, transitions, or interactions.
---

# Election Explainer App — Build Skill

A cinematic, interactive single-page web app that teaches users how an Indian election works. The experience feels like walking through a story — each step is a full-screen scene with a centered floating illustration. You interact with the graphic itself to move forward. No buttons. No nav. The art IS the UI.

---

## Core experience

- Full viewport height sections, one per election step
- Centered SVG illustration floats gently (CSS keyframe, subtle up-down)
- A short label above and one-line description below the graphic
- Click/tap a highlighted element IN the graphic → smooth zoom + crossfade to next scene or sub-scene
- After the deepest sub-scene interaction, auto-scroll to the next step section
- Scroll is otherwise passive — users can scroll manually too, scenes animate in on scroll

---

## Palette — use ONLY these hex values

| Role | Hex | Usage |
|---|---|---|
| Background | `#FAF3E8` | Page bg, off-white parchment |
| Dark brown | `#7B4019` | Primary text, outlines, structural elements |
| Burnt orange | `#E8622A` | CTA highlights, active elements, click targets |
| Medium orange | `#F0A868` | Secondary fills, hover states |
| Light peach | `#FAEBD7` | Graphic fill surfaces, light areas |
| Pale yellow | `#FFF5C8` | Lightest accent, glow hints |
| Muted brown | `#C49A6C` | Shadows, depth layers in illustrations |
| Text muted | `#A06030` | Subtext, labels |

No other colors. No gradients. No drop shadows. No blur. Flat fills only.

---

## Typography

- Headings: `Georgia, serif` — warm, editorial
- Body / labels: `system-ui, sans-serif` — clean, readable
- Step label (above graphic): 11px, letter-spacing 2px, uppercase, color `#A06030`
- Step title: 22px, Georgia, color `#7B4019`
- Description: 14px, system-ui, color `#A06030`, max-width 420px, centered
- "Tap to interact" hint: 11px, `#E8622A`, italic

---

## Floating graphic — exact spec

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}

.scene-graphic {
  animation: float 4s ease-in-out infinite;
  display: block;
  margin: 0 auto;
  width: 420px;       /* desktop */
  max-width: 90vw;    /* mobile */
}
```

- SVG viewBox always `0 0 420 340`
- No outer card, no border, no shadow — graphic floats freely on the bg
- Clickable elements inside SVG have a subtle orange dashed outline that pulses:

```css
@keyframes pulse-ring {
  0%, 100% { stroke-dashoffset: 0; opacity: 0.8; }
  50%       { stroke-dashoffset: 12; opacity: 0.4; }
}
.clickable-hint {
  stroke: #E8622A;
  stroke-width: 1.5;
  stroke-dasharray: 5 4;
  fill: none;
  animation: pulse-ring 2s ease-in-out infinite;
}
```

---

## Scene transition — zoom + crossfade

When user clicks a hotspot inside the graphic:

```js
function zoomInto(element, nextScene) {
  const rect = element.getBoundingClientRect();
  const svgRect = element.closest('svg').getBoundingClientRect();
  const originX = ((rect.left + rect.width/2 - svgRect.left) / svgRect.width * 100).toFixed(1);
  const originY = ((rect.top + rect.height/2 - svgRect.top) / svgRect.height * 100).toFixed(1);

  const graphic = element.closest('.scene-graphic');
  graphic.style.transformOrigin = `${originX}% ${originY}%`;
  graphic.style.transition = 'transform 0.5s ease-in, opacity 0.3s ease-in 0.2s';
  graphic.style.transform = 'scale(2.8)';
  graphic.style.opacity = '0';

  setTimeout(() => {
    showScene(nextScene);           // swap SVG content
    graphic.style.transition = 'none';
    graphic.style.transform = 'scale(0.7)';
    graphic.style.opacity = '0';
    requestAnimationFrame(() => {
      graphic.style.transition = 'transform 0.45s ease-out, opacity 0.35s ease-out';
      graphic.style.transform = 'scale(1)';
      graphic.style.opacity = '1';
    });
  }, 520);
}
```

After the deepest layer interaction, call:
```js
setTimeout(() => scrollToStep(currentStep + 1), 800);
```

---

## The 7 steps + scenes

### Step 1 — Election announcement
**Scene:** A large calendar on a wall, one date circled in orange, a megaphone leaning against the wall.
**Clickable:** The circled date glows → zoom to an official gazette notice (simple document graphic showing "ELECTION DATE DECLARED").
**Back-end reveal:** The notice shows EC logo + date + "Model Code of Conduct: ACTIVE".
**Then:** Auto-scroll to Step 2.

---

### Step 2 — Nominations
**Scene:** A simple government office desk. Stacks of paper forms, a stamp, two chairs. A hand hovering over a form.
**Clickable:** The form stack → zoom in to a single nomination form filling itself out (name, party symbol, deposit amount).
**Back-end reveal:** Form gets stamped "ACCEPTED" in orange. A candidate name appears on a list.
**Then:** Auto-scroll to Step 3.

---

### Step 3 — Campaign period
**Scene:** A street corner. One poster on a wall, a small crowd of 4–5 flat silhouettes, a flag.
**Clickable:** The poster → zoom to the poster filling with candidate details + party symbol.
**Back-end reveal:** A speech bubble appears from the crowd: "We heard you."
**Then:** Auto-scroll to Step 4.

---

### Step 4 — Voting day ← THE HERO SCENE (3 layers)

**Layer 1 — Exterior:**
Polling station building. Queue of 3 silhouettes outside. One booth visible with curtain. Guard at door.
- Clickable: The booth (pulsing orange outline) → zoom inside

**Layer 2 — Inside the booth:**
Interior view. Curtained walls. EVM machine on a small table (ballot unit + control unit). Single bulb above. Voter's hand visible.
- EVM has pulsing orange outline
- Clickable: The EVM → zoom to machine interaction

**Layer 3 — The vote:**
Split screen.
- Left: EVM ballot unit close-up, buttons labeled with party symbols (use simple geometric shapes, no real party logos). One button glows orange as it's pressed.
- Right: A vertical voter roll list. One name gets a tick mark animated in. A small VVPAT paper slip prints out from the bottom of the left panel.
- No further clickable — after 2s, auto-scroll to Step 5.

---

### Step 5 — Vote counting
**Scene:** A large room (seen from above, isometric-lite flat). Tables with officials seated, stacks of papers/EVMs, tally marks on a board.
**Clickable:** The tally board → zoom to a live tally counter, numbers incrementing for 3 candidates (simple colored bars growing).
**Back-end reveal:** One bar clearly longer than others. "Counting complete" stamp appears.
**Then:** Auto-scroll to Step 6.

---

### Step 6 — Results declared
**Scene:** A TV screen (flat rectangle) showing a bar chart with 3 candidates. One bar much taller, name highlighted.
**Clickable:** The tallest bar → zoom to a results certificate document.
**Back-end reveal:** Certificate reads "ELECTED" with the winner name placeholder + date + EC seal.
**Then:** Auto-scroll to Step 7.

---

### Step 7 — Oath of office
**Scene:** A simple ceremony room. A figure standing at a podium, right hand raised, a book on the podium.
**Clickable:** The raised hand → hand glows, text animates in above: "I do solemnly swear..."
**Back-end reveal:** A small badge icon appears: "REPRESENTATIVE — ELECTED". Confetti (small orange + brown squares falling, CSS only).
**End state:** A final message appears below: "Democracy complete. Your vote built this." with a small fingerprint icon in orange.

---

## Scroll-in animation for each step

When a step section enters the viewport (IntersectionObserver, threshold 0.3):

```css
.step-section {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.step-section.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

Stagger: label fades in first (0ms delay), then title (100ms), then graphic (220ms), then description (340ms).

---

## Page layout per step

```
[full viewport height section]

  [step label]          ← 11px uppercase, #A06030, centered
  [step title]          ← 22px Georgia, #7B4019, centered
                           margin-bottom: 28px

  [SVG graphic]         ← 420px wide, floating, centered
                           margin: 0 auto

  [description line]    ← 14px, #A06030, max-width 420px, centered
                           margin-top: 24px
  [tap hint]            ← "Tap the [element] to continue", 11px italic #E8622A

[next section]
```

Vertical centering: use `display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 40px 20px;`

---

## SVG illustration rules

- viewBox: `0 0 420 340` always
- All shapes: flat fill, no stroke shadows, stroke-width max 1.5px, color `#7B4019` for outlines
- Figures/people: simple flat silhouettes, no faces, no detail — just recognizable shapes
- Buildings: flat front-facing, 2–3 color fills from the palette
- No text inside SVGs except labels that are absolutely necessary (max 2 words, Georgia, 12px)
- Every clickable element must have `cursor: pointer` and a `<rect class="clickable-hint">` drawn around it (the pulsing dashed orange ring)
- Keep element count low — aim for 15–25 shapes per scene, not 60

---

## Tech stack recommendation

- Vanilla HTML + CSS + JS (no framework needed, keeps it fast)
- One HTML file, one CSS file, one JS file
- SVGs inline in JS as template literals, swapped via `innerHTML`
- IntersectionObserver for scroll-in
- No libraries required

---

## What NOT to do

- No blue, green, purple, red, or grey anywhere
- No card containers around the graphic
- No next/previous buttons
- No progress bar
- No modal popups
- No text inside the graphic unless essential
- No complex illustrations — if a shape needs more than 25 SVG elements, simplify it
- No real political party logos, names, or symbols
- No sound
