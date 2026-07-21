import '../Highlights/Highlights.css';

interface Highlight {
  key: string;
  title: string;
  description: string;
  accent: 'pink' | 'lavender' | 'teal';
}

const API_HIGHLIGHTS: Highlight[] = [
  {
    key: 'rest-architecture',
    title: 'REST API architecture',
    description:
      'Architected a layered backend for Offerwatch across controllers, services, repositories, DTOs, and JPA entities, mirroring the production patterns used throughout my career.',
    accent: 'lavender',
  },
  {
    key: 'auth-security',
    title: 'Auth & data security',
    description:
      'Implemented JWT authentication and Google Sign-In, with row-level data security enforced at the API layer via Spring Security.',
    accent: 'teal',
  },
  {
    key: 'db-migrations',
    title: 'Database migrations',
    description:
      'Coordinated enterprise-level PostgreSQL migrations across partner teams on a SOX-regulated application, ensuring zero unplanned downtime.',
    accent: 'pink',
  },
  {
    key: 'fullstack-ownership',
    title: 'Full-stack ownership',
    description:
      'Comfortable owning a feature end to end: Java/Spring Boot backend and PostgreSQL schema design through the React or Angular frontend that consumes it.',
    accent: 'lavender',
  },
];

export default function ApiHighlights() {
  return (
    <div className="highlights">
      <h2>Backend &amp; API highlights</h2>
      <div className="highlights-grid">
        {API_HIGHLIGHTS.map((h) => (
          <div key={h.key} className={`highlight-card accent-${h.accent}`}>
            <h3>{h.title}</h3>
            <p>{h.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
