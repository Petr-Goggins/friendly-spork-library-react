import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReaderProfile from '../../components/ReaderProfile/ReaderProfile';
import BookSearchIssue from '../../components/BookSearchIssue/BookSearchIssue';
import ActiveBooksList from '../../components/ActiveBooksList.tsx/ActiveBooksList';
import { mockReaders } from '../../mocks/readers';
import { mockBooks } from '../../mocks/books';
import type { IReader, IActiveBook } from '../../types/readers.types';
import type { IBook } from '../../types/book.types';

const ReaderProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [reader, setReader] = useState<IReader | null>(null);

  useEffect(() => {
    const found = mockReaders.find(r => r.id === id);
    if (found) {
      setReader(JSON.parse(JSON.stringify(found)));
    } else {
      setReader(null);
    }
  }, [id]);
  const getAvailableBooks = (): IBook[] => {
    if (!reader) return [];
    const activeBookIds = reader.activeBooks.map(b => b.bookId);
    return mockBooks.filter(book => 
      book.isAvailable && !activeBookIds.includes(book.id)
    );
  };

  const handleIssue = (bookId: string) => {
    if (!reader) return;
    const book = mockBooks.find(b => b.id === bookId);
    if (!book) return;

    const newActiveBook: IActiveBook = {
      bookId: book.id,
      title: book.title,
      author: book.author,
      issuedDate: new Date(),
    };

    const updatedReader = {
      ...reader,
      activeBooks: [...reader.activeBooks, newActiveBook],
      booksHistory: [
        ...reader.booksHistory,
        {
          bookId: book.id,
          title: book.title,
          author: book.author,
          issuedDate: new Date(),
          // returnedDate нет
        },
      ],
    };
    setReader(updatedReader);
  };

  const handleReturn = (bookId: string) => {
    if (!reader) return;
    const activeBook = reader.activeBooks.find(b => b.bookId === bookId);
    if (!activeBook) return;

    const newActiveBooks = reader.activeBooks.filter(b => b.bookId !== bookId);

    const newHistory = reader.booksHistory.map(item => {
      if (item.bookId === bookId && !item.returnedDate) {
        return { ...item, returnedDate: new Date() };
      }
      return item;
    });

    setReader({
      ...reader,
      activeBooks: newActiveBooks,
      booksHistory: newHistory,
    });
  };

  if (!reader) {
    return (
      <div className="not-found">
        <h1>Читатель не найден</h1>
        <p>Пользователь с ID {id} не существует</p>
      </div>
    );
  }

  return (
    <div className="reader-profile-page">
      <ReaderProfile reader={reader} />

      <div className="reader-actions">
        <BookSearchIssue
          availableBooks={getAvailableBooks()}
          onIssue={handleIssue}
        />

        <ActiveBooksList
          activeBooks={reader.activeBooks}
          onReturn={handleReturn}
        />
      </div>
    </div>
  );
};

export default ReaderProfilePage;