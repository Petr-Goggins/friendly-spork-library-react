import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockBooks } from '../mocks/books';
import type { IBook } from '../types/book.types';

interface BooksState {
  items: IBook[];
}

const initialState: BooksState = {
  items: mockBooks,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.items.push(action.payload);
    },
    setBookAvailability: (state, action: PayloadAction<{ id: string; isAvailable: boolean }>) => {
      const book = state.items.find(b => b.id === action.payload.id);
      if (book) {
        book.isAvailable = action.payload.isAvailable;
      }
    },
  },
});

export const { addBook, setBookAvailability } = booksSlice.actions;

export const selectAllBooks = (state: { books: BooksState }) => state.books.items;
export const selectBooksCount = (state: { books: BooksState }) => state.books.items.length;
export const selectAvailableBooks = (state: { books: BooksState }) =>
  state.books.items.filter(book => book.isAvailable);

export default booksSlice.reducer;