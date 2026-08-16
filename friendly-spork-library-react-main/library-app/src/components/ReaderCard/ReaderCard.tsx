import type { IReader } from '../../../types/readersTypes';

interface ReaderCardProps {
  reader: IReader;
  onClick?: (id: string) => void;
}

const ReaderCard = ({ reader, onClick }: ReaderCardProps) => {
  return (
    <div className="reader-card" onClick={() => onClick && onClick(reader.id)}>
      <div className="reader-card__avatar">👤</div>
      <h3 className="reader-card__name">{reader.fullName}</h3>
      <p className="reader-card__email">{reader.email}</p>
      <p className="reader-card__phone">{reader.phone}</p>
      <p className="reader-card__books">Книг на руках: {reader.activeBooks.length}</p>
    </div>
  );
};

export default ReaderCard;