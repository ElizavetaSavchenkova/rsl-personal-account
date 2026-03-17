import React, { useState } from 'react';
import './News.css';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все новости' },
    { id: 'culture', name: 'Культура' },
    { id: 'social', name: 'Социальная сфера' },
    { id: 'economy', name: 'Экономика' },
    { id: 'library', name: 'Библиотека' },
    { id: 'events', name: 'События' },
  ];

  const news = [
    {
      id: 1,
      category: 'culture',
      categoryName: 'Культура',
      time: '12:00',
      title: 'Необычные экскурсии в городских парках можно найти в сервисе «Мосбилет»',
      excerpt: 'РГБ запускает серию пешеходных экскурсий по историческим местам Москвы с посещением редких книжных коллекций',
      image: '🏛️',
      featured: true,
      date: '04.03.2026'
    },
    {
      id: 2,
      category: 'social',
      categoryName: 'Социальная сфера',
      time: '12:02',
      title: 'Сергей Собянин утвердил единовременные выплаты ветеранам ко Дню Победы',
      excerpt: 'Сотрудники библиотеки — ветераны Великой Отечественной войны получат материальную помощь',
      image: '🌸',
      featured: true,
      date: '04.03.2026'
    },
    {
      id: 3,
      category: 'economy',
      categoryName: 'Экономика и предпринимательство',
      time: '10:05',
      title: 'Столичные предприятия нарастили выпуск лекарств для сердца и сосудов',
      excerpt: 'Библиотека пополнила фонд новыми медицинскими изданиями по кардиологии',
      image: '💊',
      featured: false,
      date: '04.03.2026'
    },
    {
      id: 4,
      category: 'social',
      categoryName: 'Благотворительность',
      time: '07:01',
      title: 'Более 400 тонн гуманитарной помощи передали московские профсоюзы в зону СВО',
      excerpt: 'Сотрудники РГБ также приняли участие в сборе книг для библиотек новых регионов',
      image: '📦',
      featured: false,
      date: '04.03.2026'
    },
    {
      id: 5,
      category: 'library',
      categoryName: 'Библиотека',
      time: 'Вчера, 18:30',
      title: 'Открыт доступ к новой электронной коллекции редких книг XVIII века',
      excerpt: 'Оцифровано более 500 изданий из фонда редких книг РГБ',
      image: '📚',
      featured: false,
      date: '03.03.2026'
    },
    {
      id: 6,
      category: 'events',
      categoryName: 'События',
      time: 'Вчера, 15:20',
      title: 'В РГБ пройдет международная конференция «Библиотеки будущего»',
      excerpt: '15-16 марта 2026 года. Регистрация открыта до 10 марта',
      image: '🎤',
      featured: false,
      date: '03.03.2026'
    },
  ];

  const sideBlocks = [
    {
      id: 1,
      title: 'Поддержка Москвы',
      text: 'Узнайте, как столица помогает СВО и новым регионам',
      color: 'blue',
      icon: '⭐'
    },
    {
      id: 2,
      title: 'Москва хороша с любого ракурса',
      text: 'Смотрите и скачивайте лучшие фото и видео города',
      color: 'red',
      image: '🏛️'
    },
    {
      id: 3,
      title: 'Заберите животное из приюта',
      text: 'Найти верного друга поможет «Моспитомец»',
      color: 'beige',
      image: '🐶'
    },
  ];

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(n => n.category === selectedCategory);

  const featuredNews = filteredNews.filter(n => n.featured);
  const regularNews = filteredNews.filter(n => !n.featured);

  return (
    <div className="news-page">
      <h1 className="page-title">📰 Новости РГБ</h1>

      {/* Категории */}
      <div className="categories-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-tab ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="news-layout">
        {/* Основной контент */}
        <div className="news-main">
          {/* Главные новости */}
          {featuredNews.length > 0 && (
            <div className="featured-news">
              {featuredNews.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`featured-card ${index === 0 ? 'main-featured' : 'secondary-featured'}`}
                >
                  <div className="featured-image">
                    <span className="image-placeholder">{item.image}</span>
                  </div>
                  <div className="featured-content">
                    <div className="news-meta">
                      <span className="news-time">{item.time}</span>
                      <span className="news-category">{item.categoryName}</span>
                    </div>
                    <h2 className="featured-title">{item.title}</h2>
                    {index === 0 && (
                      <p className="featured-excerpt">{item.excerpt}</p>
                    )}
                    <div className="news-date">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Остальные новости */}
          <div className="regular-news-grid">
            {regularNews.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-card-image">
                  <span className="image-placeholder">{item.image}</span>
                </div>
                <div className="news-card-content">
                  <div className="news-meta">
                    <span className="news-time">{item.time}</span>
                    <span className="news-category">{item.categoryName}</span>
                  </div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-excerpt">{item.excerpt}</p>
                  <div className="news-date">{item.date}</div>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📰</div>
              <div className="empty-text">Новости не найдены</div>
            </div>
          )}
        </div>

        {/* Боковая панель */}
        <aside className="news-sidebar">
          {sideBlocks.map((block) => (
            <div key={block.id} className={`side-block ${block.color}`}>
              <h3 className="side-block-title">{block.title}</h3>
              <p className="side-block-text">{block.text}</p>
              {block.icon && <span className="side-block-icon">{block.icon}</span>}
              {block.image && <span className="side-block-image">{block.image}</span>}
            </div>
          ))}

          {/* Профсоюз РГБ */}
          <div className="union-block">
            <h3 className="union-title">📢 Профсоюз РГБ</h3>
            <ul className="union-list">
              <li className="union-item">
                <span className="union-date">04.03</span>
                <span className="union-text">Собрание профкома</span>
              </li>
              <li className="union-item">
                <span className="union-date">01.03</span>
                <span className="union-text">Выплата материальной помощи</span>
              </li>
              <li className="union-item">
                <span className="union-date">28.02</span>
                <span className="union-text">Поздравление с 23 февраля</span>
              </li>
            </ul>
            <button className="btn-union">Все новости профсоюза</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default News;