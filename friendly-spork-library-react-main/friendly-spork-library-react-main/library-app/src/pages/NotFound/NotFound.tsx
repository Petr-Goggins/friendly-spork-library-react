import { Link } from 'react-router-dom';
const NotFound = () => {
return (
<div className="not-found">
<h1>404</h1>
<h2>Страница не найдена</h2>
<p>Извините, запрошенная страница не существует.</p>
<Link to="/" className="btn btn-primary">
Вернуться на главную
</Link>
</div>
);
};
export default NotFound;
