import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404</p>
      <h1>This page wandered off.</h1>
      <p className="not-found-sub">
        Whatever you were looking for isn't here -the link might be broken,
        or the page may have moved.
      </p>
      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary">Back to home</Link>
        <Link to="/projects" className="btn btn-secondary">See projects</Link>
      </div>
    </section>
  );
}
