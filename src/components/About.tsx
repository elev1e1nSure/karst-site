import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About: React.FC = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="about" ref={revealRef}>
      <div className="wrap">
        <p className="section-label reveal reveal-about">Что это</p>
        <p className="reveal reveal-about delay-1">
          Karst принимает VLESS-ссылки и URL ваших подписок. После добавления — сервер появится в списке.
        </p>
        <p className="reveal reveal-about delay-2">В приложении есть список серверов, пинг до них и настройки роутинга.</p>
      </div>
    </section>
  );
};
