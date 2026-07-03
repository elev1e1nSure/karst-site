import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Features: React.FC = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="features" ref={revealRef}>
      <div className="wrap">
        <p className="section-label reveal reveal-about">Что к чему</p>
        <div className="features-list">
          <div className="feature-row">
            <h4>Импорт</h4>
            <p>Импортируй конфиг вида vless:// или подписку в меню серверов.</p>
          </div>

          <div className="feature-row">
            <h4>Меню подписки</h4>
            <p>Можно глянуть — сколько трафика ушло, сколько осталось, когда кончится подписка.</p>
          </div>

          <div className="feature-row">
            <h4>Автообновление</h4>
            <p>Подписки обновляются по расписанию, заданному сервисом или тобой, либо каждые N часов, если задать в настройках.</p>
          </div>

          <div className="feature-row">
            <h4>Роутинг</h4>
            <p>Пусть VPN-трафик идёт в обход локальной сети и русских сервисов.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
