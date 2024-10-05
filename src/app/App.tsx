import { Link, Outlet } from 'react-router-dom';
import './styles/index.scss';
import clsx from 'clsx';
import { useTheme } from '@/shared/hooks';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <main className="content-page">
        <Sidebar />
        <div className="page-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
