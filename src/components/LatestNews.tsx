import React from 'react';

const LatestNews: React.FC = () => {
  const news = [
    { date: '24.03.2024', title: 'Франко-российской торгово-промышленная палата выражает' },
    { date: '10.03.2024', title: 'Последние изменения в миграционном законодательстве' },
    { date: '12.02.2024', title: 'Chateau La Grace Dieu des Prieurs среди победителей конкурса' },
    { date: '17.11.2024', title: 'Павел Шинский: винная дипломатия способна' }
  ];

  return (
    <section className="upcoming-events">
    <div className='events-container'>
      <h2>Последние новости</h2>
    </div>
    <ul>
      {news.map((item, index) => (
        <li key={index}>
        <div className='liContainer'>
          <span>{item.date}</span>
          <div className='titleEvent'>
            <span>{item.title}</span>
          </div>
        </div>
      </li>
      ))}
    </ul>
    <div className='spaceBetweenContainer'>
      <div className="container-21">
        Смотреть все новости
      </div>
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.4375 39.375L36.5625 39.375C38.1158 39.375 39.375 38.1158 39.375 36.5625L39.375 8.4375C39.375 6.8842 38.1158 5.625 36.5625 5.625L8.4375 5.625C6.8842 5.625 5.625 6.8842 5.625 8.4375L5.625 36.5625C5.625 38.1158 6.88419 39.375 8.4375 39.375Z" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.8125 13.125L27.1875 22.5L17.8125 31.875" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </section>
  );
};

export default LatestNews;
