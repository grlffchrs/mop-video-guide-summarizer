import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import './GuideModule.css';

export default function GuideModule({ guide }) {
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current = null;
  }, [guide.videoId]);

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const handleTimestampClick = (seconds) => {
    if (playerRef.current && typeof seconds === 'number') {
      playerRef.current.seekTo(seconds, true);
      playerRef.current.playVideo();
    }
  };

  return (
    <section className="guide-section">
      <h1 className="guide-title">{guide.boss}</h1>
      <div className="video-embed">
        <YouTube
          videoId={guide.videoId}
          opts={{
            width: '100%',
            height: '420',
            playerVars: { rel: 0 }
          }}
          onReady={onPlayerReady}
        />
      </div>
      {guide.guide.map((section, sIdx) => (
        <div className="guide-phase" key={sIdx}>
          <h2 className="phase-title">{section.phase}</h2>
          <ul className="phase-points">
            {section.points.map((point, idx) => (
              <li className="phase-point" key={idx}>
                <div className="point-header">
                  <strong>{point.title}</strong>
                  {point.seconds !== null && (
                    <button
                      className="timestamp"
                      onClick={() => handleTimestampClick(point.seconds)}
                      title={`Jump to ${point.timestamp}`}
                    >
                      {point.timestamp}
                    </button>
                  )}
                </div>
                <div className="point-desc">
                  {point.desc.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
