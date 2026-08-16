import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

const Layout = ({ children, onNavigate }: LayoutProps) => {
  return (
    <div className="page-wrapper">
      <Header onNavigate={onNavigate} />
      <main className="main-content">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;