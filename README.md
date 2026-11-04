# Presora · Project Progress Presentation

A 13-slide Reveal.js presentation for the Presora minor project at Maharaja Surajmal Institute of Technology. The visual theme combines Jet Black (`#111111`), Hot Pink (`#ff409a`), and Chartreuse (`#c6ff00`) with clinical paper surfaces and Presora’s original shield logo. Layouts include a product-led cover, consultation and architecture diagrams, application screenshot strips, and a concise evaluation table.

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
- **Sources:** open the project bibliography without adding an extra slide.
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
- The latest supplied evaluation reports 182 automated tests passed: 102 frontend and 80 backend. These are reported results, not a new test run.
- Slide 12 combines automated suites, fixture scenarios, clinical-evaluation limitations and the mean/P95 latency table.
- A dedicated technology slide explains the roles of Next.js/React, FastAPI, PostgreSQL, Keycloak, Groq and DDInter/rules.
- The 13-slide order follows the user-supplied final presentation content guide: title; problem; existing approaches/research gap; objectives; architecture; medicine identification/DDI; rules; hybrid AI; doctor application; patient application; stack; evaluation; innovation/future/conclusion.
- Research-gap context retains links to Drugs.com, DrugBank and DDInter without claiming experimentally proven superiority.
- Six original product captures are placed ten times where the content guide requests module and application evidence. The Sources button opens the original references, competitor references and clinical-rule provenance. Team enrollment details remain in cover-slide notes.
- Presenter notes retain the guide’s presentation priorities, demonstration sequence and cautions.
- Intended behavior is labelled where current source differs: full structured results are not yet passed into guidance, and explicit incomplete-state propagation remains pending. ABDM/ABHA is future scope only.
- All 75 rule-category decisions matched fixture expectations. This does not establish clinical accuracy. Ten integrated scenarios were generated but not executed end to end.
- The latency table shows single-run mean and P95 function timings from an in-memory fixture, excluding database, network and API overhead.
- The comparison describes architectural differences, not an executed head-to-head clinical benchmark.
- Slides 6 and 7 show database provenance: DDInter → local CSV import → PostgreSQL for interactions; five clinical-rule tables with per-record source_reference for patient-specific checks. Listed clinical reference families come from the repository seed and are not presented as independently audited rules.
- Speaker notes contain evidence context and current implementation limitations.
- Bibliography entries retain the source report's references in condensed form.

No application credentials, API keys, or health records beyond the already supplied development screenshots are included.

## Edit

- `slides.js`: slide copy, layout markup, screenshots, and speaker notes.
- `theme.css`: palette, typography, responsive layout, and print styles.
- `main.js`: Reveal.js configuration and presentation tools.
- `assets/`: local screenshot evidence and the original Presora logo.
- Add `?transition=none` to disable both slide transitions and entrance motion. Reduced-motion preferences are also respected.

Reveal.js documentation: https://revealjs.com/
