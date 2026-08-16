import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddReaderPage.css';

interface AddReaderPageProps {
  onAddReader: (reader: any) => void;
}

const AddReaderPage = ({ onAddReader }: AddReaderPageProps) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReader = {
      id: 'r' + Date.now(),
      fullName,
      email,
      phone,
      registrationDate: new Date(),
      booksHistory: [],
      activeBooks: [],
    };
    onAddReader(newReader);
    navigate('/readers');
  };

  return (
    <div className="add-reader-page">
      <h1>Добавить читателя</h1>
      <form onSubmit={handleSubmit} className="add-reader-form">
        <div className="form-group">
          <label>ФИО</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Телефон</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/readers')}>Отмена</button>
      </form>
    </div>
  );
};

export default AddReaderPage;