import { useState } from 'react';
import BookList from '../../books/BookList/BookList';
import BookSearch from '../../books/BookSearch/BookSearch';
import AddBookModal from '../../components/AddReaderModal/AddReaderModal';
import type { IBook } from '../../types/book.types';

interface BooksPageProps {
  books: IBook[];
  onAddBook: (book: IBook) => void;
}

const BooksPage = ({ books, onAddBook }: BooksPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Каталог книг</h1>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          + Добавить книгу
        </button>
      </div>
      <p className="page-subtitle">Всего книг: <strong>{books.length}</strong></p>
      <div className="page-toolbar">
        <BookSearch onSearch={setSearchQuery} />
        {searchQuery && <span className="search-result-count">Найдено: {filteredBooks.length}</span>}
      </div>
      <BookList books={filteredBooks} />
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={onAddBook}
      />
    </>
  );
};

export default BooksPage;