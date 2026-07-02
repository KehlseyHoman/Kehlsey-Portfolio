import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import TechFlow from '../../components/TechFlow/TechFlow';
import ImpactStrip from '../../components/ImpactStrip/ImpactStrip';
import './Home.css';

export default function Home() {
  const featured = projects.filter((p) => p.kind === 'app');

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Full-stack software engineer</p>
          <h1 className="hero-title">
            Frontend-focused, <span className="hero-highlight">full-stack capable</span>.
          </h1>
          <p className="hero-sub">
            React, Angular, TypeScript, and Spring Boot. 7+ years building production
            applications at enterprise scale. Based in the Detroit area, currently
            looking for my next role.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">See my work</Link>
            <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
          </div>

          <ImpactStrip />
        </div>
      </section>

      <section className="container featured">
        <div className="section-head">
          <h2>Recent builds</h2>
          <Link to="/projects" className="see-all">All projects →</Link>
        </div>
        <div className="project-grid">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <p className="featured-note">
          I've also designed and deployed production websites for small business
          clients. <Link to="/projects">See client work →</Link>
        </p>

        <TechFlow />
      </section>
    </>
  );
}
