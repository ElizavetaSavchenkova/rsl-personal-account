import React, { useState } from 'react';
import './SocialServices.css';

const SocialServices = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'Все услуги', icon: '📋' },
    { id: 'financial', name: 'Материальная помощь', icon: '₽' },
    { id: 'health', name: 'Здоровье', icon: '🏥' },
    { id: 'culture', name: 'Культура и отдых', icon: '🎭' },
    { id: 'children', name: 'Детский отдых', icon: '👶' },
    { id: 'holidays', name: 'Праздники', icon: '🎁' },
  ];

  const socialServices = [
    {
      id: 1,
      category: 'financial',
      title: 'Материальная помощь',
      description: 'Единовременная выплата в трудной жизненной ситуации',
      icon: '₽',
      color: 'blue',
      available: true,

    },
    {
      id: 2,
      category: 'culture',
      title: 'Билеты в театр',
      description: 'Льготные билеты в театры Москвы для сотрудников',
      icon: '🎭',
      color: 'purple',
      available: true,
    },
    {
      id: 3,
      category: 'children',
      title: 'Лагерь для детей',
      description: 'Путёвки в детские лагеря на летний период',
      icon: '🏕️',
      color: 'green',
      available: true,
      period: 'Июнь-Август 2026'
    },
    {
      id: 4,
      category: 'holidays',
      title: 'Подарок к Новому году',
      description: 'Новогодние подарки для детей сотрудников РГБ',
      icon: '🎄',
      color: 'red',
      available: false,
      nextAvailable: 'Декабрь 2026'
    },
    {
      id: 5,
      category: 'culture',
      title: 'Экскурсии по Москве',
      description: 'Бесплатные экскурсии для сотрудников',
      icon: '🏛️',
      color: 'orange',
      available: true,
    },
      {
      id: 6,
      category: 'health',
      title: 'Здоровье',
      description: 'Заявка в лечебный центр',
      icon: '🏥',
      color: 'green',
      available: true,
    },

  ];

  const filteredServices = activeTab === 'all'
    ? socialServices
    : socialServices.filter(s => s.category === activeTab);

  return (
    <div className="social-page">
      <h1 className="page-title">🤝 Социальные услуги</h1>
      

      {/* Категории */}
      <div className="social-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`social-tab ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            <span className="tab-icon">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Сетка услуг */}
      <div className="services-grid">
        {filteredServices.map((service) => (
          <div key={service.id} className={`service-card ${service.color} ${!service.available ? 'disabled' : ''}`}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            {service.amount && (
              <div className="service-amount">{service.amount}</div>
            )}
            {service.partners && (
              <div className="service-partners">{service.partners}</div>
            )}
            {service.period && (
              <div className="service-period">{service.period}</div>
            )}
            {service.schedule && (
              <div className="service-schedule">{service.schedule}</div>
            )}
            {!service.available && service.nextAvailable && (
              <div className="service-unavailable">
                Доступно: {service.nextAvailable}
              </div>
            )}
            
            <button 
              className={`service-btn ${service.available ? 'available' : 'disabled'}`}
              disabled={!service.available}
            >
              {service.available ? 'Оформить' : 'Недоступно'}
            </button>
          </div>
        ))}
      </div>

      {/* Дополнительная информация */}
      <div className="social-info-block">
        <h2>📞 Контакты социального отдела</h2>
        <div className="contacts-grid">
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <div className="contact-info">
              <div className="contact-label">Телефон</div>
              <div className="contact-value">доб. 1234</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <div className="contact-label">Email</div>
              <div className="contact-value">social@rsl.ru</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">🕐</div>
            <div className="contact-info">
              <div className="contact-label">Приёмные часы</div>
              <div className="contact-value">Пн-Пт 10:00-17:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialServices;