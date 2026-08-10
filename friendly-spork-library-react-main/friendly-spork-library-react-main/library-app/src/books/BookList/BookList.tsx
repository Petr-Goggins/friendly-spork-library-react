import type { IBook } from '../../types/book.types';
import BookCard from '../bookCard/BookCard';

interface BookListProps {
  books: IBook[];
  onBookClick?: (id: string) => void;
}

const BookList = ({ books, onBookClick }: BookListProps) => {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <h3>Книги не найдены</h3>
        <p>Попробуйте изменить параметры поиска</p>
      </div>
    );
  }

  return (
    <div className="card-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={onBookClick} />
      ))}
    </div>
  );
};

export default BookList;