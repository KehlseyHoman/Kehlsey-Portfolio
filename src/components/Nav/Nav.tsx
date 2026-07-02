import { NavLink } from 'react-router-dom';
import { RESUME_URL, RESUME_UPDATED } from '../../data/site';
import './Nav.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-brand" aria-label="Kehlsey Homan, home">
          <span className="nav-brand-mark" aria-hidden="true">◆</span>
          Kehlsey Homan
        </NavLink>

        <div className="nav-right">
          <nav aria-label="Primary">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link-active' : '')}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
            aria-label={`View resume, last updated ${RESUME_UPDATED}`}
          >
            <span className="nav-resume-label">Resume</span>
            <span className="nav-resume-updated">Updated {RESUME_UPDATED}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
