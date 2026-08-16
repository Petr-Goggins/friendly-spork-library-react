import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './common/Layout/Layout';
import BooksPage from './pages/BooksPage/BooksPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import ReaderProfilePage from './pages/ReaderProfilePage/ReaderProfilePage';
import BookDetailPage from './pages/BookDetailPage/BookDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AddBookPage from './pages/AddBookPage/AddBookPage';
import AddReaderPage from './pages/AddReaderPage/AddReaderPage';
import { mockBooks } from './mocks/books';
import { mockReaders } from './mocks/readers';

function App() {
  const [books, setBooks] = useState(mockBooks);
  const [readers, setReaders] = useState(mockReaders);

  const handleAddBook = (newBook: any) => {
    setBooks([...books, newBook]);
  };

  const handleAddReader = (newReader: any) => {
    setReaders([...readers, newReader]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BooksPage books={books} />} />
        <Route path="books" element={<BooksPage books={books} />} />
        <Route path="books/:id" element={<BookDetailPage books={books} />} />
        <Route path="add-book" element={<AddBookPage onAddBook={handleAddBook} />} />
        <Route path="readers" element={<ReadersPage readers={readers} />} />
        <Route path="reader/:id" element={<ReaderProfilePage readers={readers} />} />
        <Route path="add-reader" element={<AddReaderPage onAddReader={handleAddReader} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;