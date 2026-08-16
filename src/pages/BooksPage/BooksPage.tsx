import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../../books/BookList/BookList';
import BookSearch from '../../books/BookSearch/BookSearch';
import type { IBook } from '../../types/book.types';

interface BooksPageProps {
  books: IBook[];
}

const BooksPage = ({ books }: BooksPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <h1 className="page-title">Каталог книг</h1>
      <p className="page-subtitle">Всего книг: <strong>{books.length}</strong></p>
      <div className="page-toolbar">
        <BookSearch onSearch={setSearchQuery} />
        {searchQuery && <span className="search-result-count">Найдено: {filteredBooks.length}</span>}
        <Link to="/add-book" className="btn btn-primary">Добавить книгу</Link>
      </div>
      <BookList books={filteredBooks} />
    </>
  );
};

export default BooksPage;