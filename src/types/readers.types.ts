export interface IBookHistory {
  bookId: string;
  title: string;
  author: string;
  issuedDate: Date;
  returnedDate?: Date; // если есть – книга возвращена
}

export interface IActiveBook {
  bookId: string;
  title: string;
  author: string;
  issuedDate: Date;
}

export interface IReader {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  registrationDate: Date;
  activeBooks: IActiveBook[];   // книги на руках
  booksHistory: IBookHistory[]; // полная история
}