import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import BooksPage from './pages/BooksPage/BooksPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import ReaderProfilePage from './pages/ReaderProfilePage/ReaderProfilePage';
import NotFound from './pages/NotFound/NotFound';
function App() {
return (
<BrowserRouter>
9. Итоговый пример App.tsx
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<BooksPage />} />
<Route path="books" element={<BooksPage />} />
<Route path="readers" element={<ReadersPage />} />
<Route path="reader/:id" element={<ReaderProfilePage />} />
<Route path="*" element={<NotFound />} />
</Route>
</Routes>
</BrowserRouter>
);
}
export default App;