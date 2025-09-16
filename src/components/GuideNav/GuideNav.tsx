import React from 'react';
import './GuideNav.css';

export default function GuideNav({ guides, currentGuide, onSelect }) {
  return (
    <nav>
      <h2 className="sidebar-title">Boss Guides</h2>
      <ul className="guide-list">
        {guides.map((guide) => (
          <li key={guide.boss}>
            <button
              className={`guide-link${guide.boss === currentGuide.boss ? ' active' : ''}`}
              onClick={() => onSelect(guide)}
            >
              {guide.boss}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
