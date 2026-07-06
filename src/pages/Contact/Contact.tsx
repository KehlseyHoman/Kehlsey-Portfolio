import { ExternalLinkIcon } from '../../components/Icons/Icons';
import './Contact.css';

export default function Contact() {
  return (
    <section className="container contact-page">
      <p className="eyebrow">Get in touch</p>
      <h1>Let's talk.</h1>
      <p className="contact-sub">
        Open to full-stack and frontend roles. The fastest way to reach me is email,
        but the form below works too, it goes straight to my inbox.
      </p>

      <div className="contact-grid">
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Required hidden input for Netlify form detection at build time */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden-field">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} required />

          <button type="submit" className="btn btn-primary">Send message</button>
        </form>

        <aside className="contact-direct">
          <h2>Direct links</h2>
          <ul>
            <li><a href="mailto:kehlseyh@gmail.com">kehlseyh@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/kehlsey-homan-55068b159/" target="_blank" rel="noreferrer">LinkedIn <ExternalLinkIcon /></a></li>
            <li><a href="https://github.com/KehlseyHoman" target="_blank" rel="noreferrer">GitHub <ExternalLinkIcon /></a></li>
          </ul>
          <p className="contact-location">Detroit, MI</p>
        </aside>
      </div>
    </section>
  );
}
