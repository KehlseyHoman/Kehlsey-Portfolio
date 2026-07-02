import './Highlights.css';

interface Highlight {
  key: string;
  title: string;
  description: string;
  accent: 'pink' | 'lavender' | 'teal';
}

const HIGHLIGHTS: Highlight[] = [
  {
    key: 'dashboards',
    title: 'Permission-aware dashboards',
    description:
      'Built a real-time dealer dashboard with a custom MUI data table (VIN, date range, and status filtering) for thousands of users across the US and Puerto Rico.',
    accent: 'pink',
  },
  {
    key: 'dataviz',
    title: 'Executive data visualization',
    description:
      'Shipped Chart.js dashboards driven by Databricks data for senior GM leadership on a financial planning application.',
    accent: 'lavender',
  },
  {
    key: 'legacy',
    title: 'Legacy modernization',
    description:
      'Led a 2-year rebuild of a 2018 Angular codebase into a modern incentive management platform, on a team of 5.',
    accent: 'teal',
  },
  {
    key: 'testing',
    title: 'Automated testing',
    description:
      'Built and maintained a Playwright suite that caught regressions before they reached production on a SOX-regulated app.',
    accent: 'pink',
  },
  {
    key: 'ai',
    title: 'AI-powered features',
    description:
      "Integrated Glean's Web SDK to ship LLM-powered knowledge retrieval inside an executive-facing application.",
    accent: 'lavender',
  },
  {
    key: 'deploys',
    title: 'Zero-downtime deployments',
    description:
      'Owned 50+ SOX-compliant production deployments via Azure DevOps with zero unplanned downtime.',
    accent: 'teal',
  },
];

export default function Highlights() {
  return (
    <div className="highlights">
      <h2>Frontend highlights</h2>
      <div className="highlights-grid">
        {HIGHLIGHTS.map((h) => (
          <div key={h.key} className={`highlight-card accent-${h.accent}`}>
            <h3>{h.title}</h3>
            <p>{h.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
