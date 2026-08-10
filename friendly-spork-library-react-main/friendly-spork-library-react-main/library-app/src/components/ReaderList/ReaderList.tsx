import type { IReader } from '../../types/readers.types';
import ReaderCard from '../ReaderCard/ReaderCard';

interface ReaderListProps {
  readers: IReader[];
  onReaderClick?: (id: string) => void;
}

const ReaderList = ({ readers,  }: ReaderListProps) => {
  if (readers.length === 0) {
    return (
      <div className="empty-state">
        <h3>Читатели не найдены</h3>
      </div>
    ); 
  }

  return (
    <div className="reader-list">
      {readers.map((reader) => (
        <ReaderCard key={reader.id} reader={reader}/>
      ))}
    </div>
  );
};

export default ReaderList;