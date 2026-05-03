# 🗳️ How India Votes — Interactive Election Explainer

A cinematic, scroll-driven web app that walks users through the Indian election process — step by step, scene by scene. Built for **PromptWars**.

🔗 **Live Demo:** https://indiaelects-961286120855.asia-south1.run.app/

---

## What it does

Instead of reading a wall of text, users experience the election process like a story. Each of the 7 steps is a full-screen illustrated scene. You don't click a "next" button — you interact with the illustration itself to move forward.

- Click the circled date on the calendar → gazette notice appears
- Click the nomination form → it fills and gets stamped
- Click the polling booth → zoom inside
- Click the EVM → see your vote get registered in real time
- All the way through to the oath of office

---

## The 7 steps

| # | Step | Interaction |
|---|------|-------------|
| 1 | Election Announcement | Click the circled date on the calendar |
| 2 | Nominations | Click the form stack to file a nomination |
| 3 | Campaign Period | Click the poster to broadcast |
| 4 | Voting Day | Click booth → enter → click EVM → vote registered |
| 5 | Vote Counting | Click the tally board to count |
| 6 | Results Declared | Click the winning bar for the certificate |
| 7 | Oath of Office | Click the raised hand to swear in |

---

## Design

- **Palette:** Warm off-white `#FAF3E8`, dark brown `#7B4019`, burnt orange `#E8622A`
- **Style:** Flat 2D SVG illustrations, no gradients, no shadows
- **Feel:** Ghost shapes layered behind each graphic for depth, floating animation on every scene, animated cursor pointing at the clickable element
- **Typography:** Georgia serif for headings, system-ui for body

---

## Tech stack

- Vanilla HTML + CSS + JS — zero dependencies, zero frameworks
- Inline SVG scenes managed via a `SCENES` data array
- `IntersectionObserver` for scroll-triggered animations
- CSS `transform` only for float and zoom transitions (no layout reflow)
- Google Analytics 4 for step view and interaction tracking
- Deployed on **Google Cloud Run** via Docker + Cloud Build

---

## Running locally

**With Python (simplest):**
```bash
python start.py
```
Then open `http://localhost:8080`

**With Docker:**
```bash
docker build -t election-app .
docker run -p 8080:8080 election-app
```

---

## Deployment

Deployed via Google Cloud Build. The repo root contains:
- `Dockerfile` — wraps the Python server in a container
- `cloudbuild.yaml` — builds, pushes to GCR, deploys to Cloud Run
- `start.py` — Python stdlib HTTP server, no dependencies

To deploy your own instance:
```bash
gcloud builds submit --config cloudbuild.yaml
```

---

## Accessibility & code quality

- Every SVG has a `<title>` and `role="img"` for screen readers
- All clickable hotspots have `role="button"` and keyboard support
- `prefers-reduced-motion` respected — float animations disabled for users who need it
- WCAG AA contrast ratio on all text
- `data-testid` attributes on all interactive elements
- GA4 custom events: `step_viewed`, `hotspot_clicked`, `journey_completed`

---

## Built by

Ninad — PromptWars submission
