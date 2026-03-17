import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

// Данные для примера (потом заменим на API)
const userData = {
  name: 'Иван Иванович',
  department: 'Отдел комплектования',
  tasksCount: 3,
  notificationsCount: 1,
  nextSalary: '31.03.2026',
  vacationDaysLeft: 28,
};

// Санитарные дни (последний четверг каждого месяца 2026)
const sanitaryDays = [
  '2026-01-29',
  '2026-02-26',
  '2026-03-26',
  '2026-04-30',
  '2026-05-28',
  '2026-06-25',
  '2026-07-30',
  '2026-08-27',
  '2026-09-24',
  '2026-10-29',
  '2026-11-26',
  '2026-12-31',
];

const Dashboard = () => {
  const [currentDate] = useState(new Date(2026, 2, 4)); // Март 2026

  return (
    <div className="dashboard">
      {/* Приветствие */}
      <div className="dashboard-greeting">
        <h1>Добрый день, {userData.name}!</h1>
        <p>
          У вас {userData.tasksCount} новые задачи и {userData.notificationsCount} уведомление от отдела кадров.
        </p>
      </div>

      {/* Сетка виджетов */}
      <div className="dashboard-grid">
        
        {/* Мои задачи */}
        <div className="widget widget-tasks">
          <div className="widget-header">
            <h3>Мои задачи</h3>
            
          </div>
          <div className="tasks-list">
            <div className="task-item urgent">
              <div className="task-title">Согласовать заявку на закупку</div>
              <div className="task-date">До 15.04.2026</div>
            </div>
            <div className="task-item">
              <div className="task-title">Обновить карточку книги</div>
              <div className="task-status">В работе</div>
            </div>
            <div className="task-item">
              <div className="task-title">Утвердить решение о командировании...</div>
              <div className="task-date">До 10.04.2026</div>
            </div>
          </div>
         <Link to="/tasks" className="widget-link">Все задачи →</Link>
        </div>

        {/* Отпуска и отсутствие */}
        <div className="widget widget-vacation">
          <h3>Отпуска и отсутствие</h3>
          <div className="vacation-info">
            <div className="vacation-block">
              <div className="vacation-type">Плановый отпуск</div>
              <div className="vacation-dates">10.06.2026 — 24.06.2026</div>
            </div>
            <div className="vacation-balance">
              Осталось дней: <strong>{userData.vacationDaysLeft}</strong>
            </div>
          </div>

            <h3>💰 Зарплата</h3>
          <div className="salary-info">
            <div className="salary-item">
              <span className="salary-label">Следующая выплата:</span>
              <span className="salary-value">{userData.nextSalary}</span>
            </div>

            {/*<div className="salary-item">
              <span className="salary-label">Последний аванс:</span>
              <span className="salary-value">25 000 ₽</span>
            </div>*/}

          </div>

          <button className="btn btn-secondary">Расчётный листок</button>
          
        </div>

        

        

        {/* Быстрые действия */}
        <div className="widget widget-quick-actions">
          <h3>Быстрые действия</h3>
          <div className="quick-actions-grid">
            <QuickAction icon="📄" text="Заказать справку" />
            <QuickAction icon="🎫" text="Заказать пропуск" />
            <QuickAction icon="💻" text="Заявка в IT" />
            <QuickAction icon="🏖️" text="Заявление на отпуск" />
            <QuickAction icon="📚" text="Взять отгул" />
            <QuickAction icon="📖" text="Меню столовой" />
            <QuickAction icon="📞" text="Справочник" />
            <QuickAction icon="🎓" text="Обучение" />
          </div>
        </div>

        {/* Календарь с санитарными днями */}
        <div className="widget widget-calendar">
          <h3>Календарь</h3>
          <CalendarWidget currentDate={currentDate} sanitaryDays={sanitaryDays} />
        </div>

        {/* Новости */}
        <div className="widget widget-news">
          <h3>📢 Новости РГБ</h3>
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">03.03.2026</div>
              <div className="news-title">Изменения в графике работы с 8 марта</div>
            </div>
            <div className="news-item">
              <div className="news-date">28.02.2026</div>
              <div className="news-title">Новая система бронирования читальных залов</div>
            </div>
            <div className="news-item">
              <div className="news-date">25.02.2026</div>
              <div className="news-title">Обучение работе с новыми базами данных</div>
            </div>
          </div>
          <a href="/news" className="widget-link">Все новости →</a>
        </div>

      </div>
    </div>
  );
};

// Компонент календаря
const CalendarWidget = ({ currentDate, sanitaryDays }) => {
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  const isSanitaryDay = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return sanitaryDays.includes(dateStr);
  };

  const isWeekend = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-header">Пн</div>
        <div className="calendar-day-header">Вт</div>
        <div className="calendar-day-header">Ср</div>
        <div className="calendar-day-header">Чт</div>
        <div className="calendar-day-header">Пт</div>
        <div className="calendar-day-header">Сб</div>
        <div className="calendar-day-header">Вс</div>
        
        {Array.from({ length: (firstDayOfMonth + 6) % 7 }, (_, i) => (
          <div key={`empty-${i}`} className="calendar-day calendar-day-empty"></div>
        ))}
        
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const sanitary = isSanitaryDay(day);
          const weekend = isWeekend(day);
          const today = day === 4 && currentDate.getMonth() === 2; // 4 марта для примера
          
          return (
            <div 
              key={day} 
              className={`calendar-day 
                ${today ? 'today' : ''} 
                ${weekend ? 'weekend' : ''} 
                ${sanitary ? 'sanitary' : ''}`}
              title={sanitary ? 'Санитарный день в РГБ — библиотека закрыта для посетителей' : ''}
            >
              {day}
              {sanitary && <span className="sanitary-mark">🧹</span>}
            </div>
          );
        })}
      </div>
      <div className="calendar-legend">
        <span className="legend-item"><span className="legend-sanitary">🧹</span> Санитарный день</span>
        <span className="legend-item"><span className="legend-weekend"></span> Выходной</span>
      </div>
    </div>
  );
};

// Компонент быстрого действия
const QuickAction = ({ icon, text }) => (
  <button className="quick-action">
    <span className="quick-action-icon">{icon}</span>
    <span className="quick-action-text">{text}</span>
  </button>
);

export default Dashboard;