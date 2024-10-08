import { useTheme } from '@/shared/hooks';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import './styles/index.scss';

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
