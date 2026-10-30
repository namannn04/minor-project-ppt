# Presora · Project Progress Presentation

A 20-slide Reveal.js presentation for the Presora minor project at Maharaja Surajmal Institute of Technology. The visual theme uses Jet Black (`#111111`), Hot Pink (`#ff409a`), and Chartreuse (`#c6ff00`).

## Run locally

Requires Node.js 22.12+ (or a current supported Node version).

```bash
npm install
npm run dev
```

Open the Local URL printed by Vite, normally http://127.0.0.1:4173.

## Present

- **Left / Right / Space:** move between slides.
- **O / Esc:** overview and jump to a slide.
- **S:** presenter notes, next-slide preview, and timer. Allow the popup if your browser asks.
- The **Notes** button shows the current slide's notes directly in the page, including browsers that restrict popups.
- **F:** fullscreen. The **Present** button also toggles fullscreen.
- **B:** pause on a black screen.
- Click a product screenshot to inspect it at full size. Press **Esc** to close.
- The **?** button lists controls.

## Export to PDF

Use the **PDF** button, or open `/?print-pdf`. In Chrome or Chromium, print with **Landscape**, **Margins: None**, and **Background graphics** enabled. Save as PDF. This is a web presentation; it does not create an editable `.pptx` file.

## Build a portable website

```bash
npm run check
npm run build
npm run preview
```

The `dist/` directory contains the built site, including Reveal.js, fonts, and screenshots. Serve this directory over HTTP. The relative base path supports deployment under a subdirectory. Fonts and presentation assets need no external CDN connection after building. External bibliography links still require internet access.

## Content and evidence

Content follows the Presora progress report: [Google Doc](https://docs.google.com/document/d/1hTocN6zc5ZpvC-Jx8LtOv3yBN6RNi6mfdJFjdNbj5GU/edit).

- Six product screenshots come from the report's actual application walkthrough and module demonstrations.
- The rule-engine screenshot uses a synthetic allergy scenario with actual engine output.
- The AI screenshot uses a synthetic example generated through the existing guidance service with an available model override. It does not establish clinical accuracy or restore the unavailable configured model in the normal application.
- The 102 frontend and 77 backend test counts are the recorded results from 28 October 2026, not a new test run or a clinical benchmark.
- Speaker notes contain evidence context and current implementation limitations.
- Bibliography entries retain the source report's references in condensed form.

No application credentials, API keys, or health records beyond the already supplied development screenshots are included.

## Edit

- `slides.js`: slide copy, layout markup, screenshots, and speaker notes.
- `theme.css`: palette, typography, responsive layout, and print styles.
- `main.js`: Reveal.js configuration and presentation tools.
- `assets/`: local screenshot evidence.

Reveal.js documentation: https://revealjs.com/
