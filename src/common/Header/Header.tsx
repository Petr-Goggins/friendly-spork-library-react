import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <span>Библиотека</span>
          </div>
          <nav className="nav">
            <NavLink
              to="/books"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Книги
            </NavLink>
            <NavLink
              to="/readers"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Читатели
            </NavLink>
            <NavLink
              to="/add-book"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              + Книга
            </NavLink>
            <NavLink
              to="/add-reader"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              + Читатель
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;