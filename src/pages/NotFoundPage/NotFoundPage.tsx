import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, запрошенная страница не существует.</p>
      <Link to="/books" className="btn btn-primary">Вернуться к книгам</Link>
    </div>
  );
};

export default NotFoundPage;