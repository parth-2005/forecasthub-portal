# MASTER ARCHITECTURE DOCUMENT: FMCG Data Intelligence Portal

## 1. PROJECT VISION & BUSINESS MODEL
We are building a premium B2B Data Intelligence SaaS for FMCG executives (target price: ₹15-lakh/year). We do not do traditional market research. We use a decentralized network of University Campus Ambassadors (Nodes) to conduct double-blind sensory tests on products. We strip away "Brand Equity Bias" to measure pure physical traits (texture, oil, flavor) and calculate a mathematical driver of consumer loyalty called the **"Stickiness Score."**

This portal (`forecasthub-portal`) is the client-facing dashboard. The demo is currently hardcoded with our pilot study: **"Deconstructing Cream & Onion Snacks (n=44 Nodes, 176 Evaluations)"**.

## 2. TECH STACK & STRICT RULES
- **Framework:** Next.js (App Router), React, TypeScript.
- **Styling:** Tailwind CSS. Use enterprise spacing (`gap-8`, `p-8`).
- **UI Library:** `shadcn/ui` (Cards, Tables, Buttons, Progress, Toaster, Sidebar).
- **Charts:** `recharts`. **CRITICAL RULE:** EVERY chart must be wrapped in `<div className="h-[320px] w-full">` to prevent layout collapse.
- **Interactivity:** THIS IS NOT A DEAD MOCKUP. Every button, card, or element that looks clickable MUST either route to a page via `<Link>` or trigger a `toast()` notification simulating backend activity (e.g., "Exporting PDF...", "Category Locked"). Add `hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer` to clickable cards.
- **Color Theme:** "Sample 3" is our market winner. Always highlight Sample 3 in charts using a vibrant primary color (e.g., `#0ea5e9` or emerald). Competitors (Samples 1, 2, 4) should use muted slates/grays.

## 3. GLOBAL MOCK DATA (The LOCIQ Cream & Onion Study)
Use this exact data across the platform to ensure a cohesive story:
- **Global Metrics:** 44 Active Nodes, 176 Distinct Evaluations, 12,450 Passive Signals.
- **Stickiness Scores:** Sample 1 (60.12), Sample 2 (59.88), Sample 3 (76.56 - Dominant Winner), Sample 4 (42.19 - Critical Failure).
- **Texture Matrix (Sample 3):** High-acid/tangy (85 vs avg 40), Rapid dissolve rate (90 vs avg 45).
- **Manufacturing Audit (Sample 4):** Severe fryer calibration error resulting in a -1.33 oil retention penalty.

## 4. PAGE-BY-PAGE ARCHITECTURE (The "Golden Path")

### A. The Sidebar Navigation (`components/Sidebar.tsx`)
Must contain active routing links to:
1. Executive Dashboard (`/dashboard`)
2. Sensory Deconstruction (`/sensory-deconstruction`)
3. Market Risk Alerts (`/market-risk`)
4. Live Operations (`/my-surveys`)
5. Market Categories (`/market-categories`)

### B. Executive Dashboard (`app/dashboard/page.tsx`)
- **Top:** A grid of 4 `PlatformMetricCard` components showing the Global Metrics (44 Nodes, etc.).
- **Middle-Left:** `StickynessChart.tsx` (Bar Chart showing the 4 scores, Sample 3 highlighted).
- **Middle-Right:** `RetailRoutingChart.tsx` (100% Stacked Bar showing where consumers buy. S3 has 58% "Walk-to-shop" loyalty).
- **Bottom:** `IntelligenceReportCard.tsx` (A feed of 3 plain-text actionable insights based on the data. e.g., "Leverage Sample 3's loyalty for premium margin negotiation").

### C. Sensory Deconstruction (`app/sensory-deconstruction/page.tsx`)
- **Goal:** Prove *why* Sample 3 wins.
- **Layout:** 2-column grid.
- **Left:** `SensoryRadarChart.tsx` comparing Sample 3's physical traits (Acidic, Dissolve Rate, Crunch) against the Category Average.
- **Right:** A heavy text `Card` explaining: "Sample 3 dominates due to a polarizing, high-acid textural matrix."

### D. Market Risk Alerts (`app/market-risk/page.tsx`)
- **Goal:** Show how we save clients millions.
- **Top:** `CriticalAlert.tsx` (Red destructive alert: "PULL SAMPLE 4. Severe fryer error detected.").
- **Bottom Grid:** - Left: `OilPenaltyChart.tsx` (Diverging bar chart showing S4 at -1.33).
  - Right: A text `Card` containing the "Manufacturing Audit Report".

### E. Live Operations (`app/my-surveys/page.tsx`)
- **Goal:** Prove we manage a live ground network.
- **Top Right:** Primary Button "Deploy New Campus Survey" (triggers Toast: "Pinging available nodes...").
- **Center:** `ActiveDeploymentsTable.tsx` (shadcn Table).
  - Row 1: ID LOC-892, Salty Snacks, Gen-Z, 44 Univ, Complete, 100% Progress Bar.
  - Row 2: ID LOC-904, Energy Drinks, Tier-2 Tech, 12 Univ, Active, 65% Progress Bar.

### F. Market Categories (`app/market-categories/page.tsx`)
- **Goal:** Macro-view of industries.
- **Layout:** Grid of metric cards for "Salty Snacks", "Energy Drinks", "Confectionery".
- **Interactivity:** Clicking "Salty Snacks" routes to `/dashboard`. Clicking others triggers Toast: "Segment Locked. Contact Sales."

## 5. EXECUTION DIRECTIVE
Read all existing files in the `app/` and `components/` directories. Wipe out any messy, conflicting UI. Rebuild and wire this entire portal to match this exact specification. Ensure flawless Next.js routing, strict chart heights, and enterprise-grade whitespace.