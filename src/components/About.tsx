import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About: React.FC = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="about" ref={revealRef}>
      <div className="wrap">
        <p className="section-label reveal reveal-about">Что это</p>
        <p className="reveal reveal-about delay-1">
          Karst принимает VLESS-ссылки и URL подписок. После добавления ссылка отображается в списке
          серверов.
        </p>
        <p className="reveal reveal-about delay-2">В приложении есть список серверов, состояние соединения и настройки маршрутизации. В десктопной версии также доступен журнал событий с фильтром по уровню.</p>
      </div>
    </section>
  );
};
