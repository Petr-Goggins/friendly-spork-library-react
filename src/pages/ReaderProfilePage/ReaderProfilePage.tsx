import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReaderProfile from '../../components/ReaderProfile/ReaderProfile';
import BookSearchIssue from '../../components/BookSearchIssue/BookSearchIssue';
import ActiveBooksList from '../../components/ActiveBooksList.tsx/ActiveBooksList';
import { selectReaderById, issueBookToReader, returnBookFromReader } from '../../store/readers-slice';
import { selectAvailableBooks, setBookAvailability } from '../../store/books-slice';
import type { IActiveBook } from '../../types/readers.types';
import type { AppDispatch, RootState } from '../../store/books-slice';
import './ReaderProfilePage.css';

const ReaderProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const reader = useSelector((state: RootState) => selectReaderById(state, id!));
  const availableBooks = useSelector(selectAvailableBooks);

  if (!reader) {
    return (
      <div className="not-found">
        <h1>Читатель не найден</h1>
        <p>Пользователь с ID {id} не существует</p>
      </div>
    );
  }

  // Фильтруем доступные книги, исключая те, что уже на руках у этого читателя
  const readerActiveBookIds = reader.activeBooks.map(b => b.bookId);
  const booksForIssue = availableBooks.filter(book => !readerActiveBookIds.includes(book.id));

  const handleIssue = (bookId: string) => {
    const book = availableBooks.find(b => b.id === bookId);
    if (!book) return;
    const newActiveBook: IActiveBook = {
      bookId: book.id,
      title: book.title,
      author: book.author,
      issuedDate: new Date(),
    };
    // Выдаём книгу читателю
    dispatch(issueBookToReader({ readerId: reader.id, book: newActiveBook }));
    // Делаем книгу недоступной
    dispatch(setBookAvailability({ id: bookId, isAvailable: false }));
  };

  const handleReturn = (bookId: string) => {
    if (window.confirm('Вы действительно хотите вернуть эту книгу?')) {
      dispatch(returnBookFromReader({ readerId: reader.id, bookId }));
      // Делаем книгу снова доступной
      dispatch(setBookAvailability({ id: bookId, isAvailable: true }));
    }
  };

  return (
    <div className="reader-profile-page">
      <ReaderProfile reader={reader} />
      <div className="reader-actions">
        <BookSearchIssue
          availableBooks={booksForIssue}
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