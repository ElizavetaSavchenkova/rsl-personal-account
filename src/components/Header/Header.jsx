import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* Логотип */}
        <div className="header-logo">
          <img src={logo} alt="РГБ Логотип" className="logo-image" />
          <div className="logo-text">
            <h1 className="logo-title">РГБ.Сотрудник</h1>
            <p className="logo-subtitle">Личный кабинет</p>
          </div>
        </div>
      </div>

      {/* Поиск */}
      <div className="header-search">
        <input 
          type="text" 
          placeholder="Поиск услуг, документов, коллег..." 
          className="search-input"
        />
      </div>

      {/* Правая часть */}
      <div className="header-right">
        {/* Уведомления */}
        <button className="notifications-btn">
          <svg 
            className="notification-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="notification-badge">3</span>
        </button>

        {/* Профиль */}
        <div className="header-profile">
          <div className="profile-info">
            <span className="profile-name">Иванов И.И.</span>
            <span className="profile-department">Отдел комплектования</span>
          </div>
          <div className="profile-avatar">
            <span>ИИ</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;