import React from 'react';

const UpcomingEvents: React.FC = () => {
  const events = [
    { date: '13.06.2024', title: 'Брифинг по текущей ситуации' },
    { date: '18.06.2024', title: 'Совместное заседание комитета по здравоохранению' },
    { date: '20.06.2024', title: 'Внутренний туризм в России' },
    { date: '22.06.2024', title: 'Брифинг по текущей ситуации' }
  ];

  return (
    <section className="upcoming-events">
      <h2>Ближайшие мероприятия</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <span>{event.date}</span>
            <span>{event.title}</span>
          </li>
        ))}
      </ul>
      <a href="#">Смотреть все мероприятия</a>
    </section>
  );
};

export default UpcomingEvents;
