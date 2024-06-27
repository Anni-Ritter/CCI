import React from 'react';

const LatestNews: React.FC = () => {
  const news = [
    { date: '24.03.2024', title: 'Франко-российской торгово-промышленная палата выражает' },
    { date: '10.03.2024', title: 'Последние изменения в миграционном законодательстве' },
    { date: '12.02.2024', title: 'Chateau La Grace Dieu des Prieurs среди победителей конкурса' },
    { date: '17.11.2024', title: 'Павел Шинский: винная дипломатия способна' }
  ];

  return (
    <section className="latest-news">
      <h2>Последние новости</h2>
      <ul>
        {news.map((newsItem, index) => (
          <li key={index}>
            <span>{newsItem.date}</span>
            <span>{newsItem.title}</span>
          </li>
        ))}
      </ul>
      <a href="#">Смотреть все новости</a>
    </section>
  );
};

export default LatestNews;
