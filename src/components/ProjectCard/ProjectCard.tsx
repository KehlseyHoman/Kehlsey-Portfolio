import { useState } from 'react';
import type { Project } from '../../data/projects';
import Lightbox from '../Lightbox/Lightbox';
import './ProjectCard.css';

export default function ProjectCard({ project, expanded = false }: { project: Project; expanded?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const images = project.images ?? [];
  const visibleImages = expanded ? images : images.slice(0, 1);

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

      {visibleImages.length > 0 && (
        <div className={`project-gallery${visibleImages.length === 1 ? ' project-gallery-single' : ''}`}>
          {visibleImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className="project-gallery-item"
              onClick={() => setOpenIndex(i)}
              aria-label={`View larger screenshot: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              {expanded && <span className="project-gallery-caption">{img.label}</span>}
              <span className="project-image-expand" aria-hidden="true">⤢</span>
            </button>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <Lightbox
          images={visibleImages.map((img) => ({ src: img.src, alt: img.alt }))}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </article>
  );
}
