import { Link, Outlet } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
