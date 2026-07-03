import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Platforms: React.FC = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="platforms" ref={revealRef}>
      <div className="wrap">
        <p className="section-label reveal reveal-about">Платформы</p>
        <div className="platforms-grid">
          <div className="platform-card">
            <h3>Android</h3>
            <p className="sub">Версия для мобилок</p>
            <ul>
              <li>Серверы и подписки</li>
              <li>Настройка роутинга</li>
              <li>Автообновление подписок</li>
            </ul>
            <a
              className="btn btn-primary"
              href="https://github.com/elev1e1nSure/karst-vpn/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M8.05 6.1 6.8 4.15a.7.7 0 0 1 .22-.97.68.68 0 0 1 .95.22l1.3 2.02a7.55 7.55 0 0 1 5.46 0l1.3-2.02a.68.68 0 0 1 .95-.22.7.7 0 0 1 .22.97L15.95 6.1A6.8 6.8 0 0 1 19 11.55H5A6.8 6.8 0 0 1 8.05 6.1ZM9.1 9.15a.85.85 0 1 0 0-1.7.85.85 0 0 0 0 1.7Zm5.8 0a.85.85 0 1 0 0-1.7.85.85 0 0 0 0 1.7ZM5 12.75h14v5.1A2.15 2.15 0 0 1 16.85 20H7.15A2.15 2.15 0 0 1 5 17.85v-5.1Z" />
                </svg>
              </span>
              <span>Скачать .apk</span>
            </a>
          </div>

          <div className="platform-card">
            <h3>Windows</h3>
            <p className="sub">Версия для ПК</p>
            <ul>
              <li>Всё тоже самое, что в Android</li>
              <li>Tauri под капотом (крутой фреймворк)</li>
              <li>gvisor для поднятия VPN туннеля</li>
            </ul>
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
              <span>Скачать .exe</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
