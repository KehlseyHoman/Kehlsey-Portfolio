import profileImg from '../../assets/kehlsey-profile.jpg';
import Timeline from '../../components/Timeline/Timeline';
import Highlights from '../../components/Highlights/Highlights';
import ApiHighlights from '../../components/ApiHighlights/ApiHighlights';
import PersonalGlimpse from '../../components/PersonalGlimpse/PersonalGlimpse';
import './About.css';

export default function About() {
  return (
    <section className="container about-page">
      <div className="about-header">
        <img
          src={profileImg}
          alt="Portrait of Kehlsey Homan"
          className="about-photo"
        />
        <div>
          <p className="eyebrow">About</p>
          <h1>Hi, I'm Kehlsey.</h1>
        </div>
      </div>

      <div className="about-body">
        <p>
          I'm a full-stack software engineer based in the Detroit area, with over
          7 years of experience building and leading Angular and React applications
          at enterprise scale. Frontend is where I'm strongest, though I'm just as
          comfortable designing a schema or wiring up an API. My core stack is
          React, Angular, TypeScript, JavaScript, Spring Boot, Java, and SQL.
        </p>
        <p>
          I spent 5.5 years at General Motors, most recently as a frontend lead,
          owning architecture on three of six production applications and
          contributing features across the rest, everything from a dealer-facing
          pricing platform used by thousands of users to executive financial
          dashboards. A few of the specifics are below, but the short version is I
          like owning a feature from architecture through production.
        </p>
        <p>
          Before GM I worked at Gentex, and before that a data analytics
          internship at Dematic first got me writing production SQL and building
          dashboards for real stakeholders. I've been freelancing since 2018,
          building and deploying production sites for small business clients, and
          I hold a B.S. in Computer Science from Grand Valley State University.
        </p>
      </div>

      <div className="about-stack">
        <h2>Core stack</h2>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Spring Boot</li>
          <li>Java</li>
          <li>SQL</li>
        </ul>
      </div>

      <Highlights />

      <ApiHighlights />

      <Timeline />

      <PersonalGlimpse />
    </section>
  );
}
