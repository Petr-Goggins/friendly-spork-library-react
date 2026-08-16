import { useParams } from 'react-router-dom';
import ReaderProfile from '../../components/ReaderProfile/ReaderProfile';
import type { IReader } from '../../types/readers.types';

interface ReaderProfilePageProps {
  readers: IReader[];
}

const ReaderProfilePage = ({ readers }: ReaderProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const reader = readers.find(r => r.id === id);
  if (!reader) {
    return (
      <div className="not-found">
        <h1>Читатель не найден</h1>
        <p>Пользователь с ID {id} не существует</p>
      </div>
    );
  }
  return <ReaderProfile reader={reader} />;
};

export default ReaderProfilePage;