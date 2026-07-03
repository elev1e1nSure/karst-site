import React, { useState, useEffect, useRef } from 'react';
import screenshot from '../assets/screenshot.png';

export const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = rect.height || 800;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / heroHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = 1 - scrollProgress;
  const translateY = scrollProgress * 140; // Parallax distance
  const scale = 1 - scrollProgress * 0.06; // Soft shrink
  const blurValue = scrollProgress * 6; // Defocus blur

  const heroStyle: React.CSSProperties = {
    opacity,
    transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
    filter: `blur(${blurValue}px)`,
    transition: 'transform 0.05s ease-out, opacity 0.05s ease-out, filter 0.05s ease-out',
    willChange: 'transform, opacity, filter',
  };

  return (
    <div className="hero" ref={heroRef}>
      <div className="wrap hero-inner" style={heroStyle}>
        <div className="hero-text">
          <p className="eyebrow hero-load-anim">Windows · Android</p>
          <h1 className="hero-load-anim hero-load-delay-1">Karst VPN</h1>
          <p className="hero-load-anim hero-load-delay-2">
            Karst — удобный VPN-клиент для windows и android на базе sing-box с поддержкой VLESS. Добавляй свои подписки, конфиги, смотри пинг и настраивай роутинг.
          </p>
          <div className="cta-row hero-load-anim hero-load-delay-3">
            <a
              className="btn btn-primary"
              href="https://github.com/elev1e1nSure/karst-vpn/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M8.05 6.1 6.8 4.15a.7.7 0 0 1 .22-.97.68.68 0 0 1 .95.22l1.3 2.02a7.55 7.55 0 0 1 5.46 0l1.3-2.02a.68.68 0 0 1 .95-.22.7.7 0 0 1 .22.97L15.95 6.1A6.8 6.8 0 0 1 19 11.55H5A6.8 6.8 0 0 1 8.05 6.1ZM9.1 9.15a.85.85 0 1 0 0-1.7.85.85 0 0 0 0 1.7ZM5 12.75h14v5.1A2.15 2.15 0 0 1 16.85 20H7.15A2.15 2.15 0 0 1 5 17.85v-5.1Z" />
                </svg>
              </span>
              <span>Android</span>
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/elev1e1nSure/karst-vpn-desktop/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M3 5.1 10.7 4v7.3H3V5.1Zm8.7-1.25L21 2.5v8.8h-9.3V3.85ZM3 12.7h7.7V20L3 18.9v-6.2Zm8.7 0H21v8.8l-9.3-1.35V12.7Z" />
                </svg>
              </span>
              <span>Windows</span>
            </a>
          </div>
        </div>
        <div className="hero-shot hero-load-anim hero-load-delay-4">
          <div className="shot-frame">
            <img src={screenshot} alt="Karst App Screenshot" />
          </div>
        </div>
      </div>
    </div>
  );

};
