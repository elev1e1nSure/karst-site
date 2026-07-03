import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 14);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'is-scrolled' : ''}>
      <div className="wrap">
        <div className="header-downloads">
          <a
            className="btn-header btn-header-android"
            href="https://github.com/elev1e1nSure/karst-vpn/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M8.05 6.1 6.8 4.15a.7.7 0 0 1 .22-.97.68.68 0 0 1 .95.22l1.3 2.02a7.55 7.55 0 0 1 5.46 0l1.3-2.02a.68.68 0 0 1 .95-.22.7.7 0 0 1 .22.97L15.95 6.1A6.8 6.8 0 0 1 19 11.55H5A6.8 6.8 0 0 1 8.05 6.1ZM9.1 9.15a.85.85 0 1 0 0-1.7.85.85 0 0 0 0 1.7ZM5 12.75h14v5.1A2.15 2.15 0 0 1 16.85 20H7.15A2.15 2.15 0 0 1 5 17.85v-5.1Z" />
              </svg>
            </span>
            <span><span className="btn-label-prefix">Скачать на </span>Android</span>
          </a>
          <a
            className="btn-header btn-header-windows"
            href="https://github.com/elev1e1nSure/karst-vpn-desktop/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M3 5.1 10.7 4v7.3H3V5.1Zm8.7-1.25L21 2.5v8.8h-9.3V3.85ZM3 12.7h7.7V20L3 18.9v-6.2Zm8.7 0H21v8.8l-9.3-1.35V12.7Z" />
              </svg>
            </span>
            <span><span className="btn-label-prefix">Скачать на </span>Windows</span>
          </a>
        </div>
        <a
          className="repo-link"
          href="https://github.com/elev1e1nSure/karst-vpn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </span>
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};
