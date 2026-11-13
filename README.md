# PureEden Foundation — Official Website

[![Live Site](https://img.shields.io/badge/Live_Preview-GitHub_Pages-1c8a4e?style=flat-square)](https://teepreneur.github.io/purededenfoundation/)
[![Case Study PDF](https://img.shields.io/badge/Redesign_Case_Study-PDF-2f4a6d?style=flat-square)](./PureEden-Foundation-Redesign-Case-Study.pdf)

Official website for **PureEden Foundation (PEF)**, a Ghanaian community-based non-profit organisation committed to enhancing the wellbeing of rural communities through sustainable development initiatives and humanitarian programs across education, menstrual health, and social welfare.

---

## Overview

This repository contains the redesigned, zero-dependency static web application for **PureEden Foundation** (`pureedenfoundation.com`). It replaces the legacy WordPress/Elementor site with a fast, accessible, editorial-grade single-page architecture built for mobile and rural connectivity.

- **Live Preview (GitHub Pages):** [https://teepreneur.github.io/purededenfoundation/](https://teepreneur.github.io/purededenfoundation/)
- **Redesign Case Study (PDF):** [PureEden-Foundation-Redesign-Case-Study.pdf](./PureEden-Foundation-Redesign-Case-Study.pdf)

---

## Key Features

- **Editorial Design System:** Built on a warm cream canvas (`#faf8f3`) with PureEden Forest Green (`#1c8a4e`) and Deep Navy (`#16283f`), pairing **Newsreader** serif display typography with **Public Sans** body copy.
- **Zero-Dependency Client-Side Router:** Supports three seamless views with `history.pushState` deep-linking and zero page reloads:
  - **Home View (`/`)** — Hero with 4-slide auto-advancing field carousel, Impact Stats bar, About Us & Mission/Vision cards, 5-pillar *What We Do* section, Featured News & Updates grid, Upcoming/Past Events calendar, Team profiles, horizontally scrollable Field Gallery with lightbox modal, Social feed, and Newsletter signup.
  - **Article Reader (`/?story=<id>`)** — Full editorial stories with one-click social sharing (Facebook, X, LinkedIn, WhatsApp, Copy Link), multi-photo event galleries, lightbox integration, and a *More Stories* footer.
  - **Campaign View (`/?event=<id>`)** — Event and fundraising detail pages with direct Paystack donation and volunteer links.
- **Featured Field Stories & Galleries:**
  - **June 2026 (`?story=mhd-2026`):** *2026 Menstrual Hygiene Day Commemoration & Sanitary Pad Donation* (in partnership with the Ablekuma West Municipal Education Directorate SHEP & Ghana Health Service — 13 photos).
  - **May 2025 (`?story=darkuman`):** *Menstrual Hygiene Day Commemoration at Darkuman 1 JHS* (*"Breaking the Silence: Empowering Young Minds Through Menstrual Health Education"* — 10 photos).
  - **October 2024 (`?story=akropong`):** *PureEden Foundation Brings Hope to Akropong School for the Blind* (Eastern Region food & toiletries donation — 6 photos).
  - **October 2024 (`?story=ntraban`):** *Sanitary Pads Donated to Ntraban Methodist Basic School & Yaara Roman Catholic Basic School* (Bono East Region — 5 photos).

---

## Project Structure

```text
.
├── index.html                                  # Semantic HTML shell (Home, Article, Campaign views + Lightbox)
├── PureEden-Foundation-Redesign-Case-Study.pdf # 4-page Before/After redesign case study
└── assets/
    ├── css/
    │   └── styles.css                          # Design tokens, responsive grid layouts & animations
    ├── js/
    │   └── main.js                             # Story/event data, view router, carousel & lightbox logic
    ├── logo/                                   # Color, white, stacked & monochrome brand logos + favicon
    └── img/
        ├── hero/                               # 4 hero carousel photographs
        ├── news/                               # Story hero banners (2026 MHD, Darkuman JHS, Akropong, Ntraban)
        ├── gallery/                            # Field photography albums (mhd2026-*, darkuman-*, akropong-*, mh-*)
        └── team/                               # Leadership team portraits
```

---

## Local Development

Because the site uses zero build dependencies, you can preview it with any static HTTP server:

```bash
# Python 3
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Updating Content

All articles, events, team members, and social links are managed in a single structured data block at the top of [`assets/js/main.js`](./assets/js/main.js):

- **`NEWS`:** Add a new story object at index `0` of the `NEWS` array to automatically feature it in the main preview card on the home page and generate its `?story=<id>` reader route and field gallery album.
- **`EVENTS`:** Add events with `type: 'upcoming'` or `type: 'past'`. When no `upcoming` events exist, the calendar automatically displays a clean empty-state prompt with a quick switch to past events.
- **`TEAM` & `SOCIAL`:** Update leadership profiles or social feed cards directly in their respective arrays.

---

## Contact

- **Email:** [info@pureedenfoundation.com](mailto:info@pureedenfoundation.com)
- **Phone:** (+233) 5561 41051 · (+233) 2442 52687
- **Social:** [Instagram](https://www.instagram.com/pureeden_foundation_) · [TikTok](https://www.tiktok.com/@pureeden.foundati) · [YouTube](https://www.youtube.com/@pureedenfoundation) · [LinkedIn](https://www.linkedin.com/company/pureeden-foundation)
