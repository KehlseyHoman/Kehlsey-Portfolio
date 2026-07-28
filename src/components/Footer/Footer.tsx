import { GithubIcon, LinkedinIcon, EmailIcon } from '../Icons/Icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>Built by Kehlsey Homan · React + Vite</p>
        <div className="footer-links">
          <a href="https://github.com/KehlseyHoman" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kehlsey-homan-55068b159/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:kehlseyh@gmail.com" aria-label="Email">
            <EmailIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
