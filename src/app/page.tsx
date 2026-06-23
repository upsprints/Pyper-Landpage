import Image from "next/image";
import type { ReactNode } from "react";
import { KanbanWorkspaceClient } from "../components/KanbanWorkspaceClient";
import {
  AlarmClock,
  ArrowRight,
  BellRing,
  Bot,
  CheckSquare,
  CheckCheck,
  Clock3,
  CreditCard,
  FileText,
  GripVertical,
  Home as HomeIcon,
  LayoutGrid,
  MessageCircle,
  Paperclip,
  Plus,
  Search,
  Send,
  Smile,
  Split,
  ShoppingCart,
  Truck,
  User,
  UserPlus,
  Filter,
  BookOpen,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  autoImplementation,
  automationFlows,
  buildWhatsAppUrl,
  capabilities,
  faqItems,
  hero,
  heroDashboard,
  jsonLdGraph,
  metrics,
  painPoints,
  pipelineStages,
  productShowcases,
  siteConfig,
  workspaceTemplates,
} from "@/lib/site";

const iconMap = {
  bell: BellRing,
  bot: Bot,
  clock: Clock3,
  kanban: LayoutGrid,
  message: MessageCircle,
  scatter: Split,
  workflow: Workflow,
} satisfies Record<string, LucideIcon>;

const contacts = [
  {
    name: "Mariana Silva | TechStore",
    preview: "pode sim",
    time: "17:50",
    badge: null,
    active: true,
    initials: "MS",
    agent: "RAUL RENNER",
  },
  {
    name: "Logística Express",
    preview: "Você: combinado!!",
    time: "17:24",
    badge: null,
    active: false,
    initials: "LE",
    agent: "RAUL RENNER",
  },
  {
    name: "11988887777",
    preview: "Bom dia, gostaria de ver as...",
    time: "16:49",
    badge: "1",
    active: false,
    initials: "11",
    agent: "RAUL RENNER",
  },
] as const;

const messages = [
  {
    body: "Boa Tarde tudo bem Mariana ? me Chamo João sou da equipe comercial",
    time: "14:09",
    direction: "sent",
  },
  {
    body: "quero um momento pra conversar contigo sobre as novas funcionalidades que temos no sistema e as que estão por vir",
    time: "14:09",
    direction: "sent",
  },
  {
    body: "oi João! bora! vou salvar esse teu contato que eu ainda nao tenho...",
    time: "14:10",
    direction: "received",
  },
  {
    body: "essa semana da bom sim",
    time: "14:10",
    direction: "received",
  },
  {
    body: "Esse aqui é contato Oficial da nossa equipe",
    time: "14:11",
    direction: "sent",
  },
  {
    body: "show qual o melhor dia",
    time: "14:11",
    direction: "sent",
  },
  {
    body: "la pra quinta",
    time: "16:52",
    direction: "received",
  },
  {
    body: "de manha da bom",
    time: "16:52",
    direction: "received",
  },
  {
    body: "umas 10h ou 11h",
    time: "16:52",
    direction: "received",
  },
  {
    body: "posso marcar esse email mariana@techstore.com.br no google agenda ? para as 10 horas",
    time: "17:22",
    direction: "sent",
  },
  {
    body: "pode sim",
    time: "17:50",
    direction: "received",
  },
] as const;

const kanbanCards = [
  {
    stage: "Prospectar",
    id: "UPSC-69",
    name: "Gráfica Rapidex",
    tag: "Indicação",
    meta: "33d",
    tone: "blue",
    featured: false,
  },
  {
    stage: "Prospectar",
    id: "UPSC-10",
    name: "CHATBOT MAKER",
    tag: "R$ 10.070,00",
    meta: "33d",
    tone: "green",
    featured: false,
  },
  {
    stage: "Qualificação",
    id: "UPSC-124",
    name: "Eduardo | RevSpot",
    tag: "Agendar Demo",
    meta: "13h",
    tone: "purple",
    featured: true,
  },
  {
    stage: "Proposta",
    id: "UPSC-80",
    name: "LukTex",
    tag: "QR_CODE",
    meta: "102d",
    tone: "cyan",
    featured: false,
  },
  {
    stage: "Fechamento",
    id: "UPSC-46",
    name: "Grandene",
    tag: "Fechado",
    meta: "Win",
    tone: "green",
    featured: false,
  },
] as const;

export default function Home() {
  const whatsappUrl = buildWhatsAppUrl();
  const jsonLd = JSON.stringify(jsonLdGraph).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <header className="site-nav" aria-label="Navegação principal">
        <div className="site-shell nav-row">
          <a className="brand-link" href="#inicio" aria-label="Pyper">
            <Image
              className="brand-wordmark"
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              priority
            />
          </a>

          <nav className="desktop-nav" aria-label="Seções da página">
            <a href="#solucoes">Soluções</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#auto-implantacao">Auto Implantação</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a className="login-link" href={whatsappUrl}>
              Login
            </a>
            <a className="button button-primary" href={whatsappUrl}>
              Começar Agora
            </a>
          </div>
        </div>
      </header>

      <nav className="mobile-dock" aria-label="Navegação mobile">
        <a href="#inicio" aria-label="Início">
          <HomeIcon size={20} aria-hidden="true" />
          Início
        </a>
        <a href="#solucoes" aria-label="Recursos">
          <Workflow size={20} aria-hidden="true" />
          Recursos
        </a>
        <a href="#faq" aria-label="Perguntas frequentes">
          <CreditCard size={20} aria-hidden="true" />
          FAQ
        </a>
        <a href={whatsappUrl} aria-label="WhatsApp">
          <MessageCircle size={20} aria-hidden="true" />
          WhatsApp
        </a>
      </nav>

      <main className="page-main">
        <section className="hero" id="inicio">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                {hero.eyebrow}
              </p>
              <h1 className="hero-title">{hero.title}</h1>
              <p className="hero-subtitle">{hero.subtitle}</p>

              <div className="cta-row">
                <a className="button button-primary" href={whatsappUrl}>
                  {hero.primaryCta}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="#solucoes">
                  <LayoutGrid size={18} aria-hidden="true" />
                  {hero.secondaryCta}
                </a>
              </div>

              <div className="hero-metrics" aria-label="Resumo de benefícios">
                {metrics.map((metric) => (
                  <div className="metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <figure className="hero-product" aria-label="Interface da Pyper">
              <div className="hero-product-frame">
                <Image
                  className="hero-dashboard-image"
                  src={heroDashboard.src}
                  alt={heroDashboard.alt}
                  width={heroDashboard.width}
                  height={heroDashboard.height}
                  priority
                  quality={100}
                  unoptimized
                  sizes="(max-width: 980px) 100vw, 68vw"
                />
              </div>
              <figcaption className="hero-floating-card">
                <span>AI Agent</span>
                <strong>Lead qualificado automaticamente</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section section-muted">
          <div className="site-shell">
            <div className="section-heading">
              <p className="section-kicker">Atendimento lento custa vendas</p>
              <h2 className="section-title">
                Sua empresa ainda vende pelo WhatsApp,
                <br />
                <span>mas gerencia tudo no improviso?</span>
              </h2>
              <p className="section-copy">
                O WhatsApp é rápido, mas sem um sistema por trás vira caos.
                Veja o que acontece quando sua equipe não tem a ferramenta
                certa.
              </p>
            </div>

            <div className="card-grid">
              {painPoints.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <article className="info-card glass-panel" key={item.title}>
                    <span className="icon-box">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section auto-implementation" id="auto-implantacao">
          <div className="site-shell auto-implementation-layout">
            <div className="auto-implementation-copy">
              <p className="feature-pill">{autoImplementation.kicker}</p>
              <h2>{autoImplementation.title}</h2>
              <p>{autoImplementation.description}</p>
            </div>

            <WorkspaceBuilderMockup />
          </div>
        </section>

        <section className="section solution-section" id="solucoes">
          <div className="site-shell">
            <div className="section-heading">
              <p className="section-kicker">A solução Pyper</p>
              <h2 className="section-title">
                Uma plataforma para transformar
                <br />
                conversas em processos claros.
              </h2>
            </div>

            <div className="product-stack">
              <ProductPanel
                title={productShowcases[0].title}
                text={productShowcases[0].text}
                icon={MessageCircle}
                tone="green"
              >
                <WhatsAppWorkspace />
              </ProductPanel>

              <ProductPanel
                title={productShowcases[1].title}
                text={productShowcases[1].text}
                icon={LayoutGrid}
                tone="blue"
              >
                <KanbanWorkspaceClient pipelineStages={pipelineStages} kanbanCards={kanbanCards} />
              </ProductPanel>

              <div className="automation-section-wrapper" style={{ marginTop: "48px" }}>
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <h3 style={{ fontSize: "24px", fontWeight: "760", color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                    Crie sua própria automação e seu Agente de forma simplificada
                  </h3>
                </div>
                <div className="automation-grid">
                  {automationFlows.map((flow) => (
                    <AutomationFlowCard key={flow.title} flow={flow} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Mensagem de valor">
          <div className="glass-panel trust-pill">
            <span className="icon-box small">
              <Workflow size={16} aria-hidden="true" />
            </span>
            <strong>Menos retrabalho.</strong>
            <span>Conversas que movem negócios.</span>
          </div>
        </section>

        <section className="section section-muted" id="funcionalidades">
          <div className="site-shell">
            <div className="card-grid four">
              {capabilities.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <article className="benefit-card" key={item.title}>
                    <Icon size={24} aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="site-shell narrow-shell">
            <div className="section-heading">
              <p className="section-kicker">Perguntas frequentes</p>
              <h2 className="section-title">O que saber antes da demo.</h2>
            </div>

            <div className="faq-list">
              {faqItems.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>
                    {item.question}
                    <ArrowRight size={18} aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="site-shell">
            <div className="final-card">
              <Image
                className="final-logo"
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
              />
              <h2>
                Pronto para organizar seu WhatsApp,
                <br />
                seu CRM e seus processos em um só lugar?
              </h2>
              <p>
                Fale pelo WhatsApp e agende uma conversa para entender como a
                Pyper pode entrar na sua operação comercial.
              </p>
              <div className="cta-row centered">
                <a className="button button-primary" href={whatsappUrl}>
                  Criar minha conta grátis
                </a>
                <a className="button button-secondary" href={whatsappUrl}>
                  Falar com consultor
                  <Send size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="site-shell footer-row">
          <div className="footer-brand">
            <Image
              className="brand-wordmark muted"
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
            />
            <p>
              © 2026 {siteConfig.name}. Inteligência Artificial para seu CRM.
            </p>
          </div>
          <nav className="footer-links" aria-label="Links finais">
            <a href="#solucoes">Soluções</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#faq">FAQ</a>
            <a href={whatsappUrl}>WhatsApp</a>
          </nav>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        aria-label="Fale com a Pyper no WhatsApp"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </>
  );
}

const workspaceIconMap = {
  cart: ShoppingCart,
  logistics: Truck,
  tasks: CheckSquare,
} satisfies Record<string, LucideIcon>;

const workspaceStatIconMap = {
  automation: Zap,
  pipeline: LayoutGrid,
  widgets: CreditCard,
} satisfies Record<string, LucideIcon>;

function WorkspaceBuilderMockup() {
  return (
    <div className="workspace-builder" aria-label={autoImplementation.image.alt}>
      <div className="workspace-decoration paper-plane" aria-hidden="true" />
      <div className="workspace-decoration cloud" aria-hidden="true" />

      <Image
        className="workspace-builder-logo"
        src={siteConfig.logo.src}
        alt=""
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
      />

      <div className="workspace-builder-header">
        <p className="workspace-builder-pill">
          <CheckSquare size={16} aria-hidden="true" />
          {autoImplementation.workspaceKicker}
        </p>
        <h3>
          Como você vai usar o <span>pyper</span>?
        </h3>
        <p>
          Escolha um modelo e seu workspace já vem com{" "}
          <strong>pipeline</strong>, <strong>dashboard</strong> e{" "}
          <strong>automações</strong> prontos — sem partir de uma tela em
          branco.
        </p>
      </div>

      <div className="workspace-template-grid">
        {workspaceTemplates.map((template) => {
          const TemplateIcon = workspaceIconMap[template.icon];

          return (
            <article className="workspace-template-card" key={template.title}>
              <header>
                <span className={`workspace-template-icon ${template.tone}`}>
                  <TemplateIcon size={28} aria-hidden="true" />
                </span>
                <span className="workspace-template-arrow">
                  <ArrowRight size={20} aria-hidden="true" />
                </span>
              </header>

              <h4>{template.title}</h4>
              <p>{template.description}</p>

              <div className="workspace-template-tags">
                {template.tags.map((tag) => (
                  <span className={`workspace-chip ${tag.tone}`} key={tag.label}>
                    <i aria-hidden="true" />
                    {tag.label}
                  </span>
                ))}
              </div>

              <footer>
                {template.stats.map((stat) => {
                  const StatIcon = workspaceStatIconMap[stat.icon];

                  return (
                    <span key={`${template.title}-${stat.label}`}>
                      <StatIcon size={17} aria-hidden="true" />
                      <strong>{stat.value}</strong>
                      {stat.label}
                    </span>
                  );
                })}
              </footer>
            </article>
          );
        })}
      </div>

      <article className="workspace-blank-card">
        <span className="workspace-blank-icon">
          <Plus size={32} aria-hidden="true" />
        </span>
        <div>
          <h4>{autoImplementation.blankWorkspace.title}</h4>
          <p>{autoImplementation.blankWorkspace.description}</p>
        </div>
        <a href="#solucoes">
          {autoImplementation.blankWorkspace.action}
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </article>
    </div>
  );
}

function ProductPanel({
  children,
  icon: Icon,
  text,
  title,
  tone,
}: {
  children: ReactNode;
  icon: LucideIcon;
  text: string;
  title: string;
  tone: "green" | "blue";
}) {
  return (
    <article className="product-panel">
      <header className="panel-header">
        <span className={`panel-icon ${tone}`}>
          <Icon size={22} aria-hidden="true" />
        </span>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </header>
      {children}
    </article>
  );
}

function WhatsAppWorkspace() {
  return (
    <div className="whatsapp-workspace">
      <aside className="chat-sidebar" aria-label="Lista de conversas">
        <div className="chat-search">
          <Search size={15} aria-hidden="true" />
          <span>Buscar conversas...</span>
        </div>
        <div className="chat-filters">
          <span>Todos <b>12</b></span>
          <span>Meus <b>4</b></span>
          <span>Aguardando <Filter size={12} style={{marginLeft: 4, display: 'inline-block', verticalAlign: 'middle'}}/></span>
        </div>

        <div className="contact-list">
          {contacts.map((contact) => (
            <article
              className={`contact-card ${contact.active ? "active" : ""}`}
              key={contact.name}
            >
              <span className="avatar">{contact.initials}</span>
              <div>
                <div className="contact-head">
                  <strong>{contact.name}</strong>
                  <small>{contact.time}</small>
                </div>
                <p>{contact.preview}</p>
                <div className="contact-agent" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9px', fontWeight: 'bold', color: 'var(--brand-green)', marginTop: '4px' }}>
                  <User size={10} /> PYPER AI
                </div>
              </div>
              {contact.badge ? <b className="message-badge">{contact.badge}</b> : null}
            </article>
          ))}
        </div>
      </aside>

      <section className="chat-main" aria-label="Prévia de conversa">
        <header className="chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="avatar online" style={{ background: '#e0e7ff', color: '#3730a3' }}>MS</span>
            <div>
              <strong>Mariana Silva | TechStore</strong>
              <p style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--whatsapp)' }}>● Online</span> · 558588006464
                <span style={{ color: '#047857', background: '#d1fae5', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', marginLeft: '6px', display: 'inline-flex', alignItems: 'center' }}>
                  <Bot size={10} style={{ marginRight: '4px' }}/>🤖 PYPER AI
                </span>
              </p>
            </div>
          </div>
          <div className="chat-actions">
            <button type="button" className="btn-icon-only">
              <BookOpen size={14} aria-hidden="true" />
            </button>
            <button type="button">
              Assumir
            </button>
            <button type="button">
              Transferir
            </button>
            <button type="button" className="btn-danger">
              Encerrar
            </button>
          </div>
        </header>

        <div className="message-canvas">
          <span className="history-note">
            Não há mais histórico, verifique no aparelho
          </span>
          {messages.map((message) => (
            <article
              className={`message-bubble ${message.direction}`}
              key={`${message.time}-${message.body}`}
            >
              <p>{message.body}</p>
              <time>{message.time}</time>
              {message.direction === "sent" ? (
                <CheckCheck size={13} aria-hidden="true" />
              ) : null}
            </article>
          ))}
          <div style={{ textAlign: 'center', margin: '8px 0' }}>
            <span style={{ background: '#d1fae5', color: '#047857', fontSize: '11px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '12px', border: '1px solid #a7f3d0' }}>
               ✨ Atendimento Automático Ativo
            </span>
          </div>
        </div>

        <footer className="chat-input">
          <Smile size={20} aria-hidden="true" />
          <Paperclip size={20} aria-hidden="true" />
          <span>Digite sua mensagem...</span>
          <button type="button" aria-label="Enviar mensagem">
            <Send size={16} aria-hidden="true" />
          </button>
        </footer>
      </section>
      
      <aside className="chat-details">
        <div className="chat-details-header">
           <span className="avatar">MS</span>
           <strong>Mariana Silva | TechStore</strong>
        </div>
        <div className="chat-details-body">
           <div className="chat-details-label">E-MAIL</div>
           <div className="chat-details-value">mariana@techstore.com.br</div>
           
           <div className="chat-details-label">CELULAR</div>
           <div className="chat-details-value">558588006464</div>
           
           <div className="chat-details-row">
             <span className="chat-details-label">TAREFAS RECENTES</span>
             <span className="chat-details-link">Ver todas &gt;</span>
           </div>
           <div className="chat-details-box">
             Nenhuma tarefa vinculada
           </div>
           
           <div className="chat-details-row">
             <span className="chat-details-label">ANOTAÇÕES</span>
           </div>
           <div className="chat-details-row" style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '12px' }}>
             <span>📄 Notas Importantes</span>
             <span className="chat-details-action-text">+ Nova</span>
           </div>
           <div className="chat-details-box large">
             Nenhuma nota adicionada
           </div>
        </div>
      </aside>
    </div>
  );
}



function AutomationFlowCard({
  flow,
}: {
  flow: (typeof automationFlows)[number];
}) {
  const HeadingIcon = iconMap[flow.icon];

  return (
    <article className="flow-card">
      <header>
        <div>
          <HeadingIcon size={20} aria-hidden="true" />
          <h3>{flow.title}</h3>
        </div>
        <span>
          <i aria-hidden="true" />
          {flow.status}
        </span>
      </header>

      <div className="flow-canvas">
        {flow.steps.map((step, index) => {
          const StepIcon = iconMap[step.icon];

          return (
            <div className="flow-segment" key={step.title}>
              <article className={`flow-step tone-${step.tone}`}>
                <div className="flow-step-head">
                  <span>
                    <StepIcon size={15} aria-hidden="true" />
                  </span>
                  <strong>{step.type}</strong>
                </div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </article>
              {index < flow.steps.length - 1 ? (
                <span className="flow-line" aria-hidden="true" />
              ) : null}
            </div>
          );
        })}
      </div>
    </article>
  );
}
