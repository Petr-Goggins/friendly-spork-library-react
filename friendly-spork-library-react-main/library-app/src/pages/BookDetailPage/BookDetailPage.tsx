import BookDetail from '../../books/BookDetail/BookDetail';
import type { IBook } from '../../types/bookTypes';
import './BookDetailPage.css';

interface BookDetailPageProps {
  book: IBook;
}

const BookDetailPage = ({ book }: BookDetailPageProps) => {
  return <BookDetail book={book} />;
};

export default BookDetailPage;