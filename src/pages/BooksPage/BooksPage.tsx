import { useState } from 'react';
import BookList from '../../books/BookList/BookList';
import BookSearch from '../../books/BookSearch/BookSearch';
import { mockBooks } from '../../mocks/books';

interface BooksPageProps {
  onBookClick?: (id: string) => void;
}

const BooksPage = ({ onBookClick }: BooksPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="page-title">Каталог книг</h1>
      <p className="page-subtitle">Всего книг: <strong>{mockBooks.length}</strong></p>
      <div className="page-toolbar">
        <BookSearch onSearch={setSearchQuery} />
        {searchQuery && <span className="search-result-count">Найдено: {filteredBooks.length}</span>}
      </div>
      <BookList books={filteredBooks} onBookClick={onBookClick} />
    </>
  );
};

export default BooksPage;