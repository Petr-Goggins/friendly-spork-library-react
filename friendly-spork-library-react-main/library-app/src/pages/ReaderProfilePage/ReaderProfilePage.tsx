import ReaderProfile from '../../components/readers/ReaderProfile/ReaderProfile';
import type { IReader } from '../../types/readersTypes';
import './ReaderProfilePage.css';

interface ReaderProfilePageProps {
  reader: IReader;
}

const ReaderProfilePage = ({ reader }: ReaderProfilePageProps) => {
  return <ReaderProfile reader={reader} />;
};

export default ReaderProfilePage;