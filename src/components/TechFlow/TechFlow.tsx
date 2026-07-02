import { useState } from 'react';
import './TechFlow.css';

interface TechItem {
  key: string;
  name: string;
  short: string;
  full: string;
  accent: 'pink' | 'lavender' | 'teal';
}

const TECH_ITEMS: TechItem[] = [
  {
    key: 'react',
    name: 'React',
    short: 'Dealer-facing dashboards for thousands of users.',
    full: 'Led homepage feature development on a React application used by thousands of dealership users across the US and Puerto Rico for lease, purchase, and fleet pricing workflows -building a permission-aware dashboard with real-time bundle status tracking and a customized MUI data table supporting filtering by VIN, date range, and status.',
    accent: 'pink',
  },
  {
    key: 'angular',
    name: 'Angular',
    short: '7+ years, v14–21, led a 2-year legacy rebuild.',
    full: '7+ years of experience across Angular v14 through v21. Led all frontend development on a full rebuild of a legacy incentive management platform serving ~50 internal users across the US and Canada, modernizing a 2018 codebase over a 2-year initiative on a team of 5.',
    accent: 'lavender',
  },
  {
    key: 'typescript',
    name: 'TypeScript',
    short: 'My default language, top to bottom.',
    full: "TypeScript is my default across nearly everything I build: enterprise applications at GM, personal SaaS projects like Offerwatch, and freelance client work. At this point I reach for it even on small scripts.",
    accent: 'teal',
  },
  {
    key: 'springboot',
    name: 'Spring Boot',
    short: 'REST APIs & auth for my own SaaS build.',
    full: 'Backend for Offerwatch, my personal SaaS job tracker: JWT authentication, Google Sign-In, and REST API design, with row-level security enforced via Spring Security on top of PostgreSQL.',
    accent: 'pink',
  },
  {
    key: 'java',
    name: 'Java',
    short: 'Full-stack fluency, not just frontend.',
    full: 'Backend fluency in Java and Spring Boot supports full-stack collaboration and independent delivery across the complete request-response cycle. I can own a feature end to end, not just the UI layer.',
    accent: 'lavender',
  },
  {
    key: 'sql',
    name: 'SQL & PostgreSQL',
    short: 'Schema design, RLS, and reporting tools.',
    full: 'Designed the full PostgreSQL schema and row-level security policies for Offerwatch on Supabase. Earlier, built SQL-backed reporting interfaces and automated data workflows for manufacturing operations teams at Gentex.',
    accent: 'teal',
  },
  {
    key: 'dataviz',
    name: 'Data Visualization',
    short: 'Executive dashboards driven by Databricks.',
    full: 'Led frontend development on an executive financial planning application, delivering complex Chart.js dashboards driven by Databricks data to all senior GM leadership.',
    accent: 'pink',
  },
  {
    key: 'cicd',
    name: 'CI/CD & DevOps',
    short: '50+ SOX-compliant deploys, zero downtime.',
    full: 'Served as Innovation Owner on a flagship application, overseeing 50+ SOX-compliant production deployments via Azure DevOps with zero unplanned downtime. Maintained CI/CD pipelines in GitHub Actions and Azure DevOps.',
    accent: 'lavender',
  },
  {
    key: 'testing',
    name: 'Automated Testing',
    short: 'Regressions caught before they ship.',
    full: 'Built and maintained an automated Playwright test suite that caught regressions before they reached production, as part of the CI/CD pipeline on a SOX-regulated enterprise application.',
    accent: 'teal',
  },
  {
    key: 'ai',
    name: 'AI-Assisted Tooling',
    short: 'Shipped LLM features, not just used AI tools.',
    full: "Integrated Glean's Web SDK to ship LLM-powered knowledge retrieval inside an executive-facing application, letting users query internal documentation and Databricks financial data without leaving the app. Also use GitHub Copilot's agent workflows day to day.",
    accent: 'pink',
  },
];

export default function TechFlow() {
  const [selectedKey, setSelectedKey] = useState<string>(TECH_ITEMS[0].key);
  const selected = TECH_ITEMS.find((t) => t.key === selectedKey)!;

  return (
    <div className="tech-flow">
      <p className="eyebrow">Interactive</p>
      <h2>Explore the stack</h2>

      <div className="tech-flow-layout">
        <div className="tech-pills-col">
          {TECH_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`tech-pill accent-${item.accent}${
                selectedKey === item.key ? ' tech-pill-selected' : ''
              }`}
              onClick={() => setSelectedKey(item.key)}
              aria-pressed={selectedKey === item.key}
            >
              {item.name}
              <span className="tech-pill-note" role="tooltip">
                {item.short}
              </span>
            </button>
          ))}
        </div>

        <div className={`tech-detail-panel accent-${selected.accent}`} aria-live="polite">
          <p className="tech-detail-eyebrow">{selected.name}</p>
          <p className="tech-detail-text">{selected.full}</p>
        </div>
      </div>
    </div>
  );
}
