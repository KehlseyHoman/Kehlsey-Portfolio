import { useRef, useState } from 'react';
import { personalPhotos } from '../../data/personalPhotos';
import './PersonalGlimpse.css';

export default function PersonalGlimpse() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(index);
  };

  return (
    <div className="personal-glimpse">
      <div className="personal-slideshow">
        <div className="personal-track" ref={trackRef} onScroll={handleScroll}>
          {personalPhotos.map((photo) => (
            <div className="personal-slide" key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{ objectPosition: photo.objectPosition ?? 'center' }}
              />
            </div>
          ))}
        </div>

        <div className="personal-dots">
          {personalPhotos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              className={`personal-dot ${i === active ? 'personal-dot-active' : ''}`}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="personal-text">
        <p className="eyebrow">Outside the code</p>
        <h2>Off the clock</h2>
        <p>
          Outside of work I'm usually deep in a video game, a fantasy novel, or
          whatever my husband and I are currently playing together (Halo is a
          longtime favorite of ours). At home, I'm tending a small indoor
          jungle of houseplants and hanging out with our two dogs, Millie and
          Milo. We travel when we get the chance, most recently exploring
          Puerto Rico, and when hockey season rolls around, I'm cheering on
          the Red Wings.
        </p>
      </div>
    </div>
  );
}
