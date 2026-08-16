import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './common/Layout/Layout';
import BooksPage from './pages/BooksPage/BooksPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import ReaderProfilePage from './pages/ReaderProfilePage/ReaderProfilePage';
import BookDetailPage from './pages/BookDetailPage/BookDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { mockBooks } from './mocks/books';
import { mockReaders } from './mocks/readers';
import type { IBook } from './types/book.types';
import type { IReader } from './types/readers.types';


function App() {
  const [books, setBooks] = useState<IBook[]>(mockBooks);
  const [readers, setReaders] = useState<IReader[]>(mockReaders);

  const handleAddBook = (newBook: IBook) => {
    setBooks([...books, newBook]);
  };

  const handleAddReader = (newReader: IReader) => {
    setReaders([...readers, newReader]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BooksPage books={books} onAddBook={handleAddBook} />} />
        <Route path="books" element={<BooksPage books={books} onAddBook={handleAddBook} />} />
        <Route path="books/:id" element={<BookDetailPage books={books} />} />
        <Route path="readers" element={<ReadersPage readers={readers} onAddReader={handleAddReader} />} />
        <Route path="reader/:id" element={<ReaderProfilePage readers={readers} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;