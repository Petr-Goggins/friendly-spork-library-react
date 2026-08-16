import { useState } from 'react';
import type { IBook } from '../../types/book.types';

interface BookSearchIssueProps {
  availableBooks: IBook[];      // все доступные книги (не на руках)
  onIssue: (bookId: string) => void;
}

const BookSearchIssue = ({ availableBooks, onIssue }: BookSearchIssueProps) => {
  const [query, setQuery] = useState('');

  const filtered = availableBooks.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="book-issue-section">
      <h3>Выдача книг</h3>
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="book-search-input"
      />
      {query && (
        <div className="search-results">
          <p>Найдено: {filtered.length}</p>
          {filtered.map(book => (
            <div key={book.id} className="search-result-item">
              <span>{book.title} – {book.author}</span>
              <button
                className="btn btn-primary btn-small"
                onClick={() => onIssue(book.id)}
              >
                Выдать
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearchIssue;