import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  autoImplementation,
  automationFlows,
  buildWhatsAppUrl,
  faqItems,
  hero,
  heroDashboard,
  jsonLdGraph,
  productShowcases,
  siteConfig,
  siteMetadata,
  workspaceTemplates,
} from "./site";

describe("Pyper landing content", () => {
  it("builds the WhatsApp CTA with the approved phone number and message", () => {
    const url = buildWhatsAppUrl();

    expect(url).toContain("https://wa.me/558581086339");
    expect(decodeURIComponent(url)).toContain(
      "Olá, quero agendar uma demonstração da Pyper.",
    );
  });

  it("keeps the SEO offer and canonical metadata aligned", () => {
    expect(hero.title).toBe(
      "CRM com IA e WhatsApp para automatizar vendas.",
    );
    expect(siteMetadata.title).toBe(
      "Pyper | CRM com IA, WhatsApp e Automação Comercial",
    );
    expect(siteMetadata.description).toContain("CRM, agentes de IA, WhatsApp");
    expect(siteConfig.url).toBe("https://pyper.com.br");
    expect(siteConfig.logo.src).toBe("/logo-pyper-wordmark.png");
    expect(siteConfig.logo.schemaSrc).toBe("/logo-pyper-official.png");
    expect(heroDashboard.src).toBe("/hero-dashboard-pyper.svg");
    expect(heroDashboard.width).toBeGreaterThanOrEqual(1800);
  });

  it("keeps the hero dashboard SVG with explicit intrinsic dimensions", () => {
    const svg = readFileSync(
      join(process.cwd(), "public", "hero-dashboard-pyper.svg"),
      "utf8",
    );

    expect(svg.split("\n")[0]).toContain('width="1800"');
    expect(svg.split("\n")[0]).toContain('height="1040"');
  });

  it("exposes FAQ and structured data for search engines", () => {
    expect(faqItems).toHaveLength(4);
    expect(jsonLdGraph["@graph"].map((item) => item["@type"])).toEqual([
      "Organization",
      "SoftwareApplication",
      "FAQPage",
    ]);
  });

  it("defines the auto implementation section from the approved mockup", () => {
    expect(autoImplementation.kicker).toBe("NOVA FEATURE");
    expect(autoImplementation.title).toBe("Auto Implantação");
    expect(autoImplementation.description).toContain(
      "Implementação instantânea com MCP",
    );
    expect(autoImplementation.workspaceTitle).toBe(
      "Como você vai usar o pyper?",
    );
    expect(autoImplementation.image.src).toBe(
      "/auto-implantacao-workspace-pyper.png",
    );
    expect(workspaceTemplates.map((template) => template.title)).toEqual([
      "Vendas",
      "Tarefas",
      "Logística",
    ]);
  });

  it("keeps the Stitch-inspired product sections available to the page", () => {
    expect(productShowcases.map((item) => item.title)).toEqual([
      "WhatsApp Oficial Integrado",
      "Funil de Vendas Inteligente",
    ]);
    expect(automationFlows.map((flow) => flow.title)).toEqual([
      "Configuração de Agente de IA",
      "Automação de Processos de Venda",
    ]);
  });
});
