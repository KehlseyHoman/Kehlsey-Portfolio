import './ImpactStrip.css';

interface Stat {
  key: string;
  value: string;
  label: string;
  accent: 'pink' | 'lavender' | 'teal';
}

const STATS: Stat[] = [
  { key: 'apps', value: '6', label: 'Production apps at GM', accent: 'pink' },
  { key: 'features', value: '350+', label: 'Features shipped', accent: 'lavender' },
  { key: 'deploys', value: '50+', label: 'Deploys, zero downtime', accent: 'teal' },
  { key: 'years', value: '7+', label: 'Years frontend experience', accent: 'pink' },
];

export default function ImpactStrip() {
  return (
    <div className="impact-strip">
      {STATS.map((stat) => (
        <div key={stat.key} className={`impact-stat accent-${stat.accent}`}>
          <p className="impact-value">{stat.value}</p>
          <p className="impact-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
