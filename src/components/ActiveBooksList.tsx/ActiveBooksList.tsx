import type { IActiveBook } from '../../types/readers.types';

interface ActiveBooksListProps {
  activeBooks: IActiveBook[];
  onReturn: (bookId: string) => void;
}

const ActiveBooksList = ({ activeBooks, onReturn }: ActiveBooksListProps) => {
  if (activeBooks.length === 0) {
    return <p>Нет активных книг</p>;
  }

  const handleReturn = (bookId: string) => {
    if (window.confirm('Вы действительно хотите вернуть эту книгу?')) {
      onReturn(bookId);
    }
  };

  return (
    <div className="active-books-section">
      <h3>Активные книги</h3>
      <ul className="active-books-list">
        {activeBooks.map(book => (
          <li key={book.bookId} className="active-book-item">
            <span>{book.title} – {book.author}</span>
            <span>Выдана: {book.issuedDate.toLocaleDateString()}</span>
            <button
              className="btn btn-secondary btn-small"
              onClick={() => handleReturn(book.bookId)}
            >
              Вернуть
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveBooksList;