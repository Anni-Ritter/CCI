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
      <div className='events-container'>
        <h2>Ближайшие мероприятия</h2>
        <div className='events-container-right'>
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="70" rx="10" fill="#F3F2F9"/>
            <path d="M53.125 19.8125H17.875" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M45.2917 29.6035H17.875" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M53.125 39.3965H17.875" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M45.2917 49.1875H17.875" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div style={{width: '20px'}}/>
          <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.75 8.33398H4.25V45.834H46.75V8.33398Z" stroke="#040D67" stroke-width="2" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.75 20.834V35.4173H38.25V20.834H29.75Z" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0625 4.16602V12.4993" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32.9375 4.16602V12.4993" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.75 20.834H21.25V35.4173H12.75" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.25 28.125H14.875" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <div className='liContainer'>
              <span>{event.date}</span>
              <div className='titleEvent'>
                <span>{event.title}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='spaceBetweenContainer'>
        <div className="container-21">
          Смотреть все мероприятия
        </div>
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.4375 39.375L36.5625 39.375C38.1158 39.375 39.375 38.1158 39.375 36.5625L39.375 8.4375C39.375 6.8842 38.1158 5.625 36.5625 5.625L8.4375 5.625C6.8842 5.625 5.625 6.8842 5.625 8.4375L5.625 36.5625C5.625 38.1158 6.88419 39.375 8.4375 39.375Z" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.8125 13.125L27.1875 22.5L17.8125 31.875" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default UpcomingEvents;
