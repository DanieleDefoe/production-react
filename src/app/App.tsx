import { Link, Outlet } from 'react-router-dom';
import './styles/index.scss';
import clsx from 'clsx';
import { useTheme } from '@/shared/config';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>Hello</h1>
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
