import { Link, Outlet } from 'react-router-dom';
import './styles/index.scss';
import clsx from 'clsx';
import { useTheme } from '@/shared/hooks';
import { Navbar } from '@/widgets/Navbar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
