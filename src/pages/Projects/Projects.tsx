import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

export default function Projects() {
  const apps = projects.filter((p) => p.kind === 'app');
  const clientSites = projects.filter((p) => p.kind === 'client');

  return (
    <section className="container projects-page">
      <p className="eyebrow">Selected work</p>
      <h1>Projects</h1>
      <p className="projects-intro">
        A few things I've designed, built, and shipped end to end: personal
        products built solo, and production sites built for real clients.
      </p>

      <h2 className="projects-section-title">Apps &amp; products</h2>
      <div className="project-grid-expanded">
        {apps.map((p) => (
          <ProjectCard key={p.slug} project={p} expanded />
        ))}
      </div>

      <h2 className="projects-section-title">Client websites</h2>
      <p className="projects-section-sub">
        Sites I designed, built, and deployed for small business clients as a freelancer.
      </p>
      <div className="project-grid-expanded project-grid-client">
        {clientSites.map((p) => (
          <ProjectCard key={p.slug} project={p} expanded />
        ))}
      </div>
    </section>
  );
}
