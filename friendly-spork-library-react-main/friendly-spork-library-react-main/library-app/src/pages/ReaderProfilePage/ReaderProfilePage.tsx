import { useParams } from 'react-router-dom';
import Layout from '../../components/common/Layout/Layout';
import ReaderProfile from '../../components/ReaderProfile/ReaderProfile';
import { mockReaders } from '../../mocks/readers';
import './ReaderProfilePage.css';
const ReaderProfilePage = () => {
const { id } = useParams();
const reader = mockReaders.find(r => r.id === id);
if (!reader) {
return (
<Layout>
<div className="not-found">
<h1>Читатель не найден</h1>
<p>Пользователь с ID {id} не существует</p>
</div>
</Layout>
);
}
return (
<Layout>
<ReaderProfile reader={reader} />
</Layout>
);
};
export default ReaderProfilePage;
