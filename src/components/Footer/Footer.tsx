import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>Built by Kehlsey Homan · React + Vite</p>
        <div className="footer-links">
          <a href="https://github.com/KehlseyHoman" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kehlsey-homan-55068b159/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:kehlseyh@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
