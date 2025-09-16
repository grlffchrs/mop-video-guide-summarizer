import React from 'react';
import './DesktopLayout.css';

export default function DesktopLayout({ sidebar, children }) {
  return (
    <div className="desktop-layout">
      <aside className="sidebar">{sidebar}</aside>
      <main className="main-content">{children}</main>
    </div>
  );
}
