import { useState } from 'react';
import ReaderList from '../../components/ReaderList/ReaderList';
import AddReaderModal from '../../components/AddReaderModal/AddReaderModal';
import type { IReader } from '../../types/readers.types';

interface ReadersPageProps {
  readers: IReader[];
  onAddReader: (reader: IReader) => void;
}

const ReadersPage = ({ readers, onAddReader }: ReadersPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Читатели библиотеки</h1>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          + Зарегистрировать читателя
        </button>
      </div>
      <ReaderList readers={readers} />
      <AddReaderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddReader={onAddReader}
      />
    </>
  );
};

export default ReadersPage;