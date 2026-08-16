import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AddBookPageProps {
  onAddBook: (book: any) => void; // функция для добавления книги
}

const AddBookPage = ({ onAddBook }: AddBookPageProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      year: Number(year),
      genre,
      isAvailable,
      description,
    };
    onAddBook(newBook);
    navigate('/books');
  };

  return (
    <div className="add-book-page">
      <h1>Добавить книгу</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Название</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Автор</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Год</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Жанр</label>
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Описание</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={isAvailable} onChange={() => setIsAvailable(!isAvailable)} />
            Доступна
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/books')}>Отмена</button>
      </form>
    </div>
  );
};

export default AddBookPage;