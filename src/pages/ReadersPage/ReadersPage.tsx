import { Link } from 'react-router-dom';
import ReaderList from '../../components/ReaderList/ReaderList';
import type { IReader } from '../../types/readers.types';

interface ReadersPageProps {
  readers: IReader[];
}

const ReadersPage = ({ readers }: ReadersPageProps) => {
  return (
    <>
      <h1 className="page-title">Читатели библиотеки</h1>
      <div className="page-toolbar">
        <Link to="/add-reader" className="btn btn-primary">Добавить читателя</Link>
      </div>
      <ReaderList readers={readers} />
    </>
  );
};

export default ReadersPage;