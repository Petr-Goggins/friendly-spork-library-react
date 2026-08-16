import type { IReader } from '../types/readers.types';

export const mockReaders: IReader[] = [
  {
    id: 'r1',
    fullName: 'Иван Петров',
    email: 'ivan@example.com',
    phone: '+7 (123) 456-78-90',
    registrationDate: new Date('2023-01-15'),
    activeBooks: [
      {
        bookId: '3',
        title: 'Преступление и наказание',
        author: 'Фёдор Достоевский',
        issuedDate: new Date('2023-03-01'),
      },
    ],
    booksHistory: [
      {
        bookId: '1',
        title: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
        issuedDate: new Date('2023-02-01'),
        returnedDate: new Date('2023-02-15'),
      },
      {
        bookId: '3',
        title: 'Преступление и наказание',
        author: 'Фёдор Достоевский',
        issuedDate: new Date('2023-03-01'),
        // returnedDate нет – значит ещё на руках
      },
    ],
  },
  {
    id: 'r2',
    fullName: 'Мария Смирнова',
    email: 'maria@example.com',
    phone: '+7 (987) 654-32-10',
    registrationDate: new Date('2023-03-20'),
    activeBooks: [
      {
        bookId: '5',
        title: '1984',
        author: 'Джордж Оруэлл',
        issuedDate: new Date('2023-05-01'),
      },
    ],
    booksHistory: [
      {
        bookId: '2',
        title: 'Война и мир',
        author: 'Лев Толстой',
        issuedDate: new Date('2023-04-01'),
        returnedDate: new Date('2023-04-20'),
      },
      {
        bookId: '5',
        title: '1984',
        author: 'Джордж Оруэлл',
        issuedDate: new Date('2023-05-01'),
      },
    ],
  },
  {
    id: 'r3',
    fullName: 'Алексей Иванов',
    email: 'alexey@example.com',
    phone: '+7 (456) 789-01-23',
    registrationDate: new Date('2023-06-10'),
    activeBooks: [],
    booksHistory: [
      {
        bookId: '4',
        title: 'Евгений Онегин',
        author: 'Александр Пушкин',
        issuedDate: new Date('2023-07-01'),
        returnedDate: new Date('2023-07-15'),
      },
      {
        bookId: '6',
        title: 'Маленький принц',
        author: 'Антуан де Сент-Экзюпери',
        issuedDate: new Date('2023-08-01'),
        returnedDate: new Date('2023-08-10'),
      },
    ],
  },
];