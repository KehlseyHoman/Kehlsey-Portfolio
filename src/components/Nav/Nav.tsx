import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RESUME_URL, RESUME_UPDATED } from '../../data/site';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Nav.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape, and lock body scroll while it's open
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-brand" onClick={closeMenu} aria-label="Kehlsey Homan, home">
          <span className="nav-brand-mark" aria-hidden="true">◆</span>
          Kehlsey Homan
        </NavLink>

        <div className="nav-right">
          <nav aria-label="Primary" className="nav-links-desktop">
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

          <ThemeToggle />

          <button
            type="button"
            className={`nav-hamburger${menuOpen ? ' nav-hamburger-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        className={`nav-mobile-menu${menuOpen ? ' nav-mobile-menu-open' : ''}`}
      >
        <ul className="nav-mobile-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) => 'nav-mobile-link' + (isActive ? ' nav-mobile-link-active' : '')}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="nav-mobile-resume"
          onClick={closeMenu}
        >
          Resume <span className="nav-mobile-resume-updated">· Updated {RESUME_UPDATED}</span>
        </a>

        <div className="nav-mobile-theme">
          <span className="nav-mobile-theme-label">Appearance</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
