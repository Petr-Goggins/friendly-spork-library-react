import type { IReader } from '../../../types/readersTypes';

interface ReaderProfileProps {
  reader: IReader;
}

const ReaderProfile = ({ reader }: ReaderProfileProps) => {
  const { fullName, email, phone, registrationDate, activeBooks, booksHistory } = reader;

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <div className="profile-avatar">👤</div>
        <div className="profile-info">
          <h1>{fullName}</h1>
          <p>Email: {email}</p>
          <p>Телефон: {phone}</p>
          <p>Зарегистрирован: {registrationDate.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-label">Книг на руках</span>
          <span className="stat-value">{activeBooks.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Всего выдано</span>
          <span className="stat-value">{booksHistory.length}</span>
        </div>
      </div>
      <div className="profile-history">
        <h3>История книг</h3>
        <ul>
          {booksHistory.map((item, index) => (
            <li key={index}>
              Книга ID: {item.bookId} — взята {item.takenAt.toLocaleDateString()}
              {item.returnedAt ? `, возвращена ${item.returnedAt.toLocaleDateString()}` : ' (не возвращена)'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReaderProfile;