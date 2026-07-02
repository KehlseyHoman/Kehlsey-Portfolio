import { timeline } from '../../data/timeline';
import './Timeline.css';

export default function Timeline() {
  return (
    <div className="timeline">
      <p className="eyebrow">My path</p>
      <h2>Experience</h2>

      <ol className="timeline-list">
        {timeline.map((item) => (
          <li key={item.key} className={`timeline-item accent-${item.accent}`}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-content-head">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-date">{item.date}</p>
              </div>
              <p className="timeline-org">
                {item.org}
                {item.location ? ` · ${item.location}` : ''}
              </p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
