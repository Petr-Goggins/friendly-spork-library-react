import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from '../../books/BookList/BookList';
import BookSearch from '../../books/BookSearch/BookSearch';
import AddBookModal from '../../components/AddReaderModal';
import { selectAllBooks, selectBooksCount, addBook } from '../../store/books-slice';
import type { AppDispatch } from '../../store/books-slice';

const BooksPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector(selectAllBooks);
  const totalCount = useSelector(selectBooksCount);

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddBook = (newBook: any) => {
    dispatch(addBook(newBook));
  };

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Каталог книг</h1>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          + Добавить книгу
        </button>
      </div>
      <p className="page-subtitle">Всего книг: <strong>{totalCount}</strong></p>
      <div className="page-toolbar">
        <BookSearch onSearch={setSearchQuery} />
        {searchQuery && <span className="search-result-count">Найдено: {filteredBooks.length}</span>}
      </div>
      <BookList books={filteredBooks} />
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={handleAddBook}
      />
    </>
  );
};

export default BooksPage;