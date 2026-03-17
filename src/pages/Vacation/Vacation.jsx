import React, { useState } from 'react';
import './Vacation.css';

const Vacation = () => {
  // Данные сотрудника
  const employeeData = {
    hireDate: '10.03.2015',
    workExperience: '10 лет 11 месяцев',
  };

  // Баланс отпусков по типам
  const vacationBalance = {
    main: {
      total: 28, // Всего положено в год
      used: 14,  // Использовано
      planned: 14, // Запланировано
      remaining: 0, // Остаток
    },
    seniority: {
      total: 2, // За стаж (10+ лет)
      used: 0,
      planned: 2,
      remaining: 0,
    },
    study: {
      total: 30, // Учебный (в днях за год)
      used: 0,
      planned: 0,
      remaining: 30,
    },
    unpaid: {
      total: 14, // За свой счет (максимум в год)
      used: 3,
      planned: 0,
      remaining: 11,
    },
  };

  // Запланированные отпуска
  const plannedVacations = [
    { 
      id: 1, 
      type: 'main', 
      typeName: 'Основной отпуск', 
      startDate: '10.06.2026', 
      endDate: '24.06.2026', 
      days: 14, 
      status: 'approved' 
    },
    { 
      id: 2, 
      type: 'seniority', 
      typeName: 'Дополнительный (за стаж)', 
      startDate: '15.09.2026', 
      endDate: '16.09.2026', 
      days: 2, 
      status: 'planned' 
    },
  ];

  // Использованные отпуска (в этом году)
  const usedVacations = [
    { 
      id: 1, 
      type: 'main', 
      typeName: 'Основной отпуск', 
      startDate: '15.01.2026', 
      endDate: '29.01.2026', 
      days: 14, 
      status: 'completed' 
    },
  ];

  // Стаж и дополнительные дни
  const seniorityBenefits = {
    years: 10,
    additionalDays: 2,
    nextMilestone: 15,
    nextAdditionalDays: 3,
    description: 'За стаж работы более 10 лет положено 2 дополнительных дня',
  };

  // Отпуска за свой счет
  const unpaidLeaves = [
    { 
      id: 1, 
      startDate: '20.02.2026', 
      endDate: '21.02.2026', 
      days: 2, 
      reason: 'По семейным обстоятельствам', 
      status: 'approved' 
    },
    { 
      id: 2, 
      startDate: '15.01.2026', 
      endDate: '15.01.2026', 
      days: 1, 
      reason: 'Свадьба', 
      status: 'approved' 
    },
  ];

  // Отгулы и переработки
  const timeOff = {
    overtime: 16,
    compensatoryDays: 2,
  };

  const [activeTab, setActiveTab] = useState('balance');
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="vacation">
      <h1 className="page-title">📅 Отпуска и отсутствия</h1>

      {/* Сводка по всем типам отпусков */}
      <div className="vacation-summary">
        <div className="summary-card main">
          <div className="summary-icon">🏖️</div>
          <div className="summary-info">
            <div className="summary-label">Основной отпуск</div>
            <div className="summary-value">{vacationBalance.main.total} дней</div>
            <div className="balance-bar">
              <div className="balance-segment used" style={{ width: `${(vacationBalance.main.used / vacationBalance.main.total) * 100}%` }}></div>
              <div className="balance-segment planned" style={{ width: `${(vacationBalance.main.planned / vacationBalance.main.total) * 100}%` }}></div>
              <div className="balance-segment remaining" style={{ width: `${(vacationBalance.main.remaining / vacationBalance.main.total) * 100}%` }}></div>
            </div>
            <div className="balance-legend">
              <span className="legend-item used">Использовано: {vacationBalance.main.used}</span>
              <span className="legend-item planned">Запланировано: {vacationBalance.main.planned}</span>
              <span className="legend-item remaining">Остаток: {vacationBalance.main.remaining}</span>
            </div>
          </div>
        </div>

        <div className="summary-card seniority">
          <div className="summary-icon">🎖️</div>
          <div className="summary-info">
            <div className="summary-label">За стаж ({employeeData.workExperience})</div>
            <div className="summary-value">{vacationBalance.seniority.total} дня</div>
            <div className="balance-bar">
              <div className="balance-segment used" style={{ width: `${(vacationBalance.seniority.used / vacationBalance.seniority.total) * 100}%` }}></div>
              <div className="balance-segment planned" style={{ width: `${(vacationBalance.seniority.planned / vacationBalance.seniority.total) * 100}%` }}></div>
              <div className="balance-segment remaining" style={{ width: `${(vacationBalance.seniority.remaining / vacationBalance.seniority.total) * 100}%` }}></div>
            </div>
            <div className="balance-legend">
              <span className="legend-item used">Использовано: {vacationBalance.seniority.used}</span>
              <span className="legend-item planned">Запланировано: {vacationBalance.seniority.planned}</span>
              <span className="legend-item remaining">Остаток: {vacationBalance.seniority.remaining}</span>
            </div>
          </div>
        </div>

        <div className="summary-card study">
          <div className="summary-icon">🎓</div>
          <div className="summary-info">
            <div className="summary-label">Учебный отпуск</div>
            <div className="summary-value">{vacationBalance.study.remaining} из {vacationBalance.study.total} дней</div>
            <div className="balance-bar">
              <div className="balance-segment used" style={{ width: `${(vacationBalance.study.used / vacationBalance.study.total) * 100}%` }}></div>
              <div className="balance-segment remaining" style={{ width: `${(vacationBalance.study.remaining / vacationBalance.study.total) * 100}%` }}></div>
            </div>
            <div className="balance-legend">
              <span className="legend-item used">Использовано: {vacationBalance.study.used}</span>
              <span className="legend-item remaining">Остаток: {vacationBalance.study.remaining}</span>
            </div>
          </div>
        </div>

        <div className="summary-card unpaid">
          <div className="summary-icon">📝</div>
          <div className="summary-info">
            <div className="summary-label">За свой счет</div>
            <div className="summary-value">{vacationBalance.unpaid.remaining} из {vacationBalance.unpaid.total} дней</div>
            <div className="balance-bar">
              <div className="balance-segment used" style={{ width: `${(vacationBalance.unpaid.used / vacationBalance.unpaid.total) * 100}%` }}></div>
              <div className="balance-segment remaining" style={{ width: `${(vacationBalance.unpaid.remaining / vacationBalance.unpaid.total) * 100}%` }}></div>
            </div>
            <div className="balance-legend">
              <span className="legend-item used">Использовано: {vacationBalance.unpaid.used}</span>
              <span className="legend-item remaining">Остаток: {vacationBalance.unpaid.remaining}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Стаж */}
      <div className="seniority-section">
        <div className="seniority-card">
          <h3>🎖️ Дополнительный отпуск за стаж</h3>
          <div className="seniority-info">
            <div className="seniority-progress">
              <div className="seniority-label">
                Ваш стаж: {seniorityBenefits.years} лет
              </div>
              <div className="seniority-bar">
                <div className="seniority-fill" style={{ width: '66%' }}></div>
              </div>
              <div className="seniority-milestones">
                <div className="milestone achieved">
                  <span>5 лет</span>
                  <span>+1 день</span>
                </div>
                <div className="milestone achieved">
                  <span>10 лет</span>
                  <span>+2 дня</span>
                </div>
                <div className="milestone current">
                  <span>15 лет</span>
                  <span>+3 дня</span>
                </div>
              </div>
            </div>
            <div className="seniority-description">
              {seniorityBenefits.description}
            </div>
          </div>
        </div>
      </div>

      {/* Табы */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'planned' ? 'active' : ''}`}
          onClick={() => setActiveTab('planned')}
        >
          Запланировано ({plannedVacations.length})
        </button>
        <button 
          className={`tab ${activeTab === 'used' ? 'active' : ''}`}
          onClick={() => setActiveTab('used')}
        >
          Использовано ({usedVacations.length})
        </button>
        <button 
          className={`tab ${activeTab === 'unpaid' ? 'active' : ''}`}
          onClick={() => setActiveTab('unpaid')}
        >
          За свой счет ({unpaidLeaves.length})
        </button>
        <button 
          className={`tab ${activeTab === 'overtime' ? 'active' : ''}`}
          onClick={() => setActiveTab('overtime')}
        >
          Дополнительные дни отдыха ({timeOff.compensatoryDays} дн)
        </button>
      </div>

      {/* Контент */}
      <div className="tab-content">
        
        {/* Запланированные отпуска */}
        {activeTab === 'planned' && (
          <div className="planned-tab">
            <div className="table-header">
              <h3>Запланированные отпуска на 2026 год</h3>
              <button className="btn-primary" onClick={() => setShowForm(true)}>➕ Добавить отпуск</button>
            </div>
            
            {plannedVacations.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📅</div>
                <div className="empty-text">Нет запланированных отпусков</div>
              </div>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Тип отпуска</th>
                    <th>Начало</th>
                    <th>Окончание</th>
                    <th>Дней</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {plannedVacations.map((vacation) => (
                    <tr key={vacation.id}>
                      <td>
                        <div className="vacation-type">
                          {vacation.type === 'seniority' && '🎖️'}
                          {vacation.type === 'study' && '🎓'}
                          {vacation.typeName}
                        </div>
                      </td>
                      <td>{vacation.startDate}</td>
                      <td>{vacation.endDate}</td>
                      <td className="font-bold">{vacation.days} дн.</td>
                      <td><StatusBadge status={vacation.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Использованные отпуска */}
        {activeTab === 'used' && (
          <div className="used-tab">
            <div className="table-header">
              <h3>Использованные отпуска в 2026 году</h3>
            </div>
            
            {usedVacations.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">✅</div>
                <div className="empty-text">Отпусков пока не было</div>
              </div>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Тип отпуска</th>
                    <th>Начало</th>
                    <th>Окончание</th>
                    <th>Дней</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {usedVacations.map((vacation) => (
                    <tr key={vacation.id}>
                      <td>
                        <div className="vacation-type">
                          {vacation.type === 'seniority' && '🎖️'}
                          {vacation.type === 'study' && '🎓'}
                          {vacation.typeName}
                        </div>
                      </td>
                      <td>{vacation.startDate}</td>
                      <td>{vacation.endDate}</td>
                      <td className="font-bold">{vacation.days} дн.</td>
                      <td><StatusBadge status={vacation.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* История по годам */}
            <div className="history-section">
              <h3>История отпусков по годам</h3>
              <div className="year-block">
                <div className="year-header">
                  <span>2025 год</span>
                  <span className="year-total">28 дней использовано</span>
                </div>
                <div className="periods-list">
                  <div className="period-item">
                    <span className="period-type">🏖️ Основной</span>
                    <span className="period-dates">15.06.2025 — 29.06.2025</span>
                    <span className="period-days">14 дней</span>
                  </div>
                  <div className="period-item">
                    <span className="period-type">🏖️ Основной</span>
                    <span className="period-dates">10.09.2025 — 24.09.2025</span>
                    <span className="period-days">14 дней</span>
                  </div>
                </div>
              </div>
              <div className="year-block">
                <div className="year-header">
                  <span>2024 год</span>
                  <span className="year-total">28 дней использовано</span>
                </div>
                <div className="periods-list">
                  <div className="period-item">
                    <span className="period-type">🏖️ Основной</span>
                    <span className="period-dates">01.07.2024 — 15.07.2024</span>
                    <span className="period-days">14 дней</span>
                  </div>
                  <div className="period-item">
                    <span className="period-type">🏖️ Основной</span>
                    <span className="period-dates">15.10.2024 — 29.10.2024</span>
                    <span className="period-days">14 дней</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* За свой счет */}
        {activeTab === 'unpaid' && (
          <div className="unpaid-tab">
            <div className="info-block">
              <div className="info-icon">ℹ️</div>
              <div className="info-text">
                <strong>Отпуск за свой счет</strong> предоставляется по семейным и другим 
                уважительным причинам на срок до 14 календарных дней в году.
              </div>
            </div>
            
            <div className="table-header">
              <h3>История отпусков за свой счет</h3>
              <button className="btn-primary" onClick={() => setShowForm(true)}>➕ Подать заявление</button>
            </div>
            
            {unpaidLeaves.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📝</div>
                <div className="empty-text">Отпусков за свой счет не было</div>
              </div>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Начало</th>
                    <th>Окончание</th>
                    <th>Дней</th>
                    <th>Причина</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {unpaidLeaves.map((leave) => (
                    <tr key={leave.id}>
                      <td>{leave.startDate}</td>
                      <td>{leave.endDate}</td>
                      <td>{leave.days} дн.</td>
                      <td>{leave.reason}</td>
                      <td><StatusBadge status={leave.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Отгулы */}
        {activeTab === 'overtime' && (
          <div className="overtime-tab">
            <div className="overtime-summary">
             
              <div className="overtime-card">
                <div className="overtime-value">{timeOff.compensatoryDays} дн</div>
                <div className="overtime-label">Дней отгулов доступно</div>
              </div>
            </div>

            <div className="table-header">
              <h3>История привлечения к работе в выходные дни</h3>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Часов</th>
                  <th>Причина</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>28.02.2026</td>
                  <td className="font-bold">8 ч</td>
                  <td>Работа в выходной день (Командировка)</td>
                  <td><StatusBadge status="approved" /></td>
                </tr>
                <tr>
                  <td>15.02.2026</td>
                  <td className="font-bold">3 ч</td>
                  <td>Работа в выходной день (Мероприятие в Доме Пашкова) </td>
                  <td><StatusBadge status="approved" /></td>
                </tr>
                <tr>
                  <td>01.02.2026</td>
                  <td className="font-bold">8 ч</td>
                  <td>Работа в праздничный день (Дежурство)</td>
                  <td><StatusBadge status="pending" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* Модальное окно формы */}
      {showForm && (
        <VacationForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

// Компонент формы заявления
const VacationForm = ({ onClose }) => {
  const [vacationType, setVacationType] = useState('main');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Заявление на отпуск</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <div className="form-group">
            <label>Тип отпуска</label>
            <select 
              value={vacationType} 
              onChange={(e) => setVacationType(e.target.value)}
              className="form-select"
            >
              <option value="main">Основной отпуск (28 дней)</option>
              <option value="seniority">Дополнительный за стаж (2 дня)</option>
              <option value="study">Учебный отпуск (до 30 дней)</option>
              <option value="unpaid">За свой счет (до 14 дней)</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Дата начала</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-group">
              <label>Дата окончания</label>
              <input type="date" className="form-input" />
            </div>
          </div>

          <div className="form-group">
            <label>Количество дней</label>
            <input type="number" className="form-input" placeholder="14" />
          </div>

          {vacationType === 'unpaid' && (
            <div className="form-group">
              <label>Причина</label>
              <textarea 
                className="form-textarea" 
                placeholder="По семейным обстоятельствам..."
                rows="3"
              ></textarea>
            </div>
          )}

          {vacationType === 'study' && (
            <div className="form-group">
              <label>Приложение</label>
              <input type="file" className="form-input" />
              <div className="form-hint">Вызов-справка из учебного заведения</div>
            </div>
          )}

          <div className="form-group">
            <label>Комментарий</label>
            <textarea 
              className="form-textarea" 
              placeholder="Дополнительная информация..."
              rows="2"
            ></textarea>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Отмена</button>
          <button className="btn-primary">Подать заявление</button>
        </div>
      </div>
    </div>
  );
};

// Компонент статуса
const StatusBadge = ({ status }) => {
  const statuses = {
    approved: { text: 'Утверждено', color: '#10b981', bg: '#d1fae5' },
    planned: { text: 'Запланировано', color: '#3b82f6', bg: '#dbeafe' },
    pending: { text: 'На согласовании', color: '#f59e0b', bg: '#fef3c7' },
    completed: { text: 'Завершено', color: '#10b981', bg: '#d1fae5' },
    rejected: { text: 'Отклонено', color: '#ef4444', bg: '#fee2e2' },
  };

  const statusInfo = statuses[status] || statuses.pending;

  return (
    <span 
      className="status-badge"
      style={{ backgroundColor: statusInfo.bg, color: statusInfo.color }}
    >
      {statusInfo.text}
    </span>
  );
};

export default Vacation;