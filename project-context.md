**Tech Stack:** Next.js (App Router), React, Tailwind CSS, Recharts, Shadcn UI.
**Domain:** FMCG Market Intelligence & R&D Analytics.

**Background:**
The portal currently visualizes the findings of the "LOGIQ Research Report: Deconstructing Market Dominance in the Cream & Onion FMCG Category." The study evaluated four snack prototypes across 176 distinct evaluations to determine true consumer loyalty (Stickiness Score) versus baseline taste. 

**Current State & Pain Points:**
1. **Information Overload:** `app/dashboard/page.tsx` currently renders all charts (`StickinessChart`, `RetailRoutingChart`, `FlavorMatrixChart`, `TextureChart`, `OilPenaltyChart`) simultaneously in a rigid grid, causing cognitive overload.
2. **Inaccurate Visualizations:** The charts currently do not accurately reflect the report's intended visual formats (e.g., `StickinessChart` is a Bar Chart instead of a Loyalty vs. Quality Scatter Plot).
3. **Lack of Contextual Depth:** The dashboard provides high-level graphs but lacks the deep-dive qualitative analysis present in the report.
4. **Redundant UI:** There are duplicate or unnecessary buttons/navigation items across the portal that distract from the core data story.

**Product Vision & Directives:**
* **Declutter & Organize:** Transition the dashboard from a single long-scrolling page to a Tabbed Interface (using Shadcn `Tabs`). Group insights logically: e.g., *Executive Summary*, *Sensory Profiling (Flavor & Texture)*, and *Market Mechanics (Stickiness & Retail)*.
* **Progressive Disclosure:** Implement interactive drill-downs. Graphs should be presented cleanly; clicking on a graph's designated action area should open a side panel or modal (using Shadcn `Sheet` or `Dialog`) containing the detailed R&D insights and specific sample breakdowns from the LOGIQ report.
* **Chart Fidelity:** Rebuild the Recharts components to strictly match the report:
  * *Loyalty vs. Quality:* Scatter Plot.
  * *Texture & Flavor:* 100% Stacked Bar Charts.
  * *Oiliness/Heaviness:* Diverging Bar Chart (Negative/Positive axis).
  * *Channel Intercept:* 100% Stacked Bar Chart.
* **Highlight Key Narratives:** Visually emphasize the winning prototype (Sample 3) as the "Cult Classic" and highlight the failure (Sample 4) due to manufacturing defects.