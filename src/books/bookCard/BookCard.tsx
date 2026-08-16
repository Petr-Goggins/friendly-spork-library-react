import { Link } from 'react-router-dom';
import type { IBook } from '../../types/book.types';

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const { id, title, author, year, genre, isAvailable, description } = book;
  const statusClass = isAvailable ? 'badge-available' : 'badge-unavailable';
  const statusText = isAvailable ? 'Доступна' : 'Выдана';

  return (
    <Link to={`/books/${id}`} className="book-card-link">
      <div className="book-card">
        <div className="book-card__header">
          <h3 className="book-card__title">{title}</h3>
          <span className={`badge ${statusClass}`}>{statusText}</span>
        </div>
        <p className="book-card__author">{author}</p>
        <p className="book-card__meta">{genre}, {year}</p>
        {description && <p className="book-card__description">{description}</p>}
      </div>
    </Link>
  );
};

export default BookCard;