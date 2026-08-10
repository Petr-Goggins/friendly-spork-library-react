import type { IBook } from '../../types/bookTypes';

interface BookCardProps {
  book: IBook;
  onClick?: (id: string) => void;
}

const BookCard = ({ book, onClick }: BookCardProps) => {
  const { id, title, author, year, genre, isAvailable, description } = book;
  const statusClass = isAvailable ? 'badge-available' : 'badge-unavailable';
  const statusText = isAvailable ? 'Доступна' : 'Выдана';

  const handleClick = () => {
    if (onClick) onClick(id);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <div className="book-card__header">
        <h3 className="book-card__title">{title}</h3>
        <span className={`badge ${statusClass}`}>{statusText}</span>
      </div>
      <p className="book-card__author">{author}</p>
      <p className="book-card__meta">{genre}, {year}</p>
      {description && <p className="book-card__description">{description}</p>}
    </div>
  );
};

export default BookCard;