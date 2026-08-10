import ReaderList from '../../components/readers/ReaderList/ReaderList';
import { mockReaders } from '../../mocks/readers';
import './ReadersPage.css';

interface ReadersPageProps {
  onReaderClick?: (id: string) => void;
}

const ReadersPage = ({ onReaderClick }: ReadersPageProps) => {
  return (
    <>
      <h1 className="page-title">Читатели библиотеки</h1>
      <ReaderList readers={mockReaders} onReaderClick={onReaderClick} />
    </>
  );
};

export default ReadersPage;