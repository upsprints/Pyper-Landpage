# Pyper Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready single-page Next.js landing page for Pyper with SEO metadata, structured data, WhatsApp CTAs, and responsive conversion-focused UI.

**Architecture:** Keep the page mostly as Server Components. Put reusable marketing content, metadata, schema builders, and WhatsApp URL logic in `src/lib/site.ts` so critical business/SEO details can be tested independently from the layout. Use `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` for App Router conventions.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Vitest.

---

### Task 1: Lock critical SEO and CTA data

**Files:**
- Modify: `package.json`
- Create: `src/lib/site.test.ts`
- Create: `src/lib/site.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import {
  buildWhatsAppUrl,
  faqItems,
  hero,
  jsonLdGraph,
  siteConfig,
  siteMetadata,
} from "./site";

describe("Pyper landing content", () => {
  it("builds the WhatsApp CTA with the approved phone number and message", () => {
    const url = buildWhatsAppUrl();
    expect(url).toContain("https://wa.me/558581086339");
    expect(decodeURIComponent(url)).toContain("Olá, quero agendar uma demonstração da Pyper.");
  });

  it("keeps the SEO offer and canonical metadata aligned", () => {
    expect(hero.title).toBe("CRM com IA e WhatsApp para automatizar seu atendimento");
    expect(siteMetadata.title).toBe("Pyper | CRM com IA, WhatsApp e Automação Comercial");
    expect(siteMetadata.description).toContain("CRM, agentes de IA, WhatsApp");
    expect(siteConfig.url).toBe("https://pyper.com.br");
  });

  it("exposes FAQ and structured data for search engines", () => {
    expect(faqItems).toHaveLength(4);
    expect(jsonLdGraph["@graph"].map((item) => item["@type"])).toEqual([
      "Organization",
      "SoftwareApplication",
      "FAQPage",
    ]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/site.test.ts`

Expected: FAIL because `src/lib/site.ts` does not exist yet.

- [ ] **Step 3: Implement `src/lib/site.ts`**

Create content constants, metadata values, `buildWhatsAppUrl`, FAQ items, and JSON-LD graph.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/lib/site.test.ts`

Expected: PASS.

### Task 2: Build the page and app metadata

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`

- [ ] **Step 1: Use tested data in layout/page**

Import `siteMetadata`, `jsonLdGraph`, `buildWhatsAppUrl`, and content arrays from `src/lib/site.ts`.

- [ ] **Step 2: Implement responsive sections**

Build hero, pain, solution, dashboard mock, automation/process, FAQ, final CTA, footer, and floating WhatsApp button.

- [ ] **Step 3: Implement Next metadata routes**

Add `robots.ts` and `sitemap.ts` using `siteConfig.url`.

- [ ] **Step 4: Verify**

Run: `npm test`, `npm run lint`, and `npm run build`.

Expected: all commands exit 0.
