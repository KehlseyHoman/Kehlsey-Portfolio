import type { Project } from '../../data/projects';
import './ProjectCard.css';

export default function ProjectCard({ project, expanded = false }: { project: Project; expanded?: boolean }) {
  return (
    <article className={`project-card accent-${project.accent}${expanded ? ' project-card-expanded' : ''}`}>
      <div className="project-card-head">
        <h3>{project.name}</h3>
        <span className="project-stat-label">{project.statLabel}</span>
      </div>

      {project.status && <span className="project-status-badge">{project.status}</span>}

      <div className="project-stat-bar" role="img" aria-label={`${project.statLabel} depth indicator`}>
        <div className="project-stat-fill" style={{ width: `${project.statValue}%` }} />
      </div>

      <p className="project-tagline">{project.tagline}</p>

      {expanded && <p className="project-description">{project.description}</p>}
      {expanded && <p className="project-role">{project.role}</p>}

      <ul className="project-stack">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <div className="project-links">
          {project.links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
